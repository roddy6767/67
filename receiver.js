import { createServer } from 'node:http';
import { WebSocketServer } from 'ws';

const port = Number(process.env.PORT || 8081);
const host = process.env.HOST || '0.0.0.0';
const httpServer = createServer((request, response) => {
  if (request.url === '/health') {
    response.writeHead(200, { 'content-type': 'text/plain' });
    response.end('ok');
    return;
  }
  response.writeHead(426, { 'content-type': 'text/plain' });
  response.end('WebSocket endpoint');
});
const server = new WebSocketServer({ server: httpServer, maxPayload: 1024 });
let nextClientId = 1;
const clients = new Set();
const roomPattern = /^[a-zA-Z0-9-]{4,64}$/;

function isControlMessage(value) {
  const axes = ['pitch', 'roll', 'up', 'down', 'left', 'right'];
  return value
    && value.type === 'control'
    && axes.every((axis) => Number.isFinite(value[axis]) && value[axis] >= -1 && value[axis] <= 1)
    && typeof value.boost === 'boolean'
    && Number.isFinite(value.timestamp);
}

function send(socket, value) {
  if (socket.readyState === 1) socket.send(JSON.stringify(value));
}

function notifyPeers(client, connected) {
  if (!client.role || !client.room) return;
  for (const peer of clients) {
    if (peer === client || peer.room !== client.room || peer.role === client.role || !peer.role) continue;
    send(peer.socket, { type: 'peer', role: client.role, connected });
  }
}

httpServer.listen(port, host, () => {
  console.log(`WebSocket controller receiver listening on ${host}:${port}`);
  console.log('Use a TLS-enabled host (wss://) for public deployments.');
});

server.on('connection', (socket) => {
  const clientId = nextClientId++;
  const client = { socket, role: null, room: null };
  clients.add(client);
  console.log(`Client ${clientId} connected`);

  socket.on('message', (rawMessage) => {
    let message;
    try {
      message = JSON.parse(rawMessage.toString());
    } catch {
      console.error(`Client ${clientId} sent invalid JSON`);
      socket.close(1003, 'Expected JSON');
      return;
    }

    if (!client.role) {
      if (message?.type !== 'join'
        || !['game', 'controller'].includes(message.role)
        || typeof message.room !== 'string'
        || !roomPattern.test(message.room)) {
        socket.close(1008, 'Join a valid room first');
        return;
      }
      client.role = message.role;
      client.room = message.room;
      send(socket, { type: 'joined', role: client.role });
      notifyPeers(client, true);
      for (const peer of clients) {
        if (peer !== client && peer.room === client.room && peer.role && peer.role !== client.role) {
          send(socket, { type: 'peer', role: peer.role, connected: true });
        }
      }
      console.log(`Client ${clientId} joined room ${client.room} as ${client.role}`);
      return;
    }

    if (client.role !== 'controller' || !isControlMessage(message)) {
      console.error(`Client ${clientId} sent an invalid control message`);
      socket.close(1008, 'Invalid control message');
      return;
    }

    const control = {
      type: 'control',
      pitch: message.pitch,
      roll: message.roll,
      up: message.up,
      down: message.down,
      left: message.left,
      right: message.right,
      boost: message.boost,
      timestamp: message.timestamp
    };
    for (const peer of clients) {
      if (peer.role === 'game' && peer.room === client.room) send(peer.socket, control);
    }
  });

  socket.on('close', () => {
    notifyPeers(client, false);
    clients.delete(client);
    console.log(`Client ${clientId} disconnected.`);
  });
  socket.on('error', (error) => {
    console.error(`Client ${clientId} WebSocket error: ${error.message}`);
  });
});

server.on('error', (error) => {
  console.error(`WebSocket receiver failed: ${error.message}`);
  process.exitCode = 1;
});
