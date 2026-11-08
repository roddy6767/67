import { WebSocketServer } from 'ws';

const port = Number(process.env.PORT || 8081);
const host = process.env.HOST || '0.0.0.0';
const server = new WebSocketServer({ host, port, maxPayload: 1024 });
let nextClientId = 1;

function isControlMessage(value) {
  const axes = ['pitch', 'roll', 'up', 'down', 'left', 'right'];
  return value
    && value.type === 'control'
    && axes.every((axis) => Number.isFinite(value[axis]) && value[axis] >= -1 && value[axis] <= 1)
    && typeof value.boost === 'boolean'
    && Number.isFinite(value.timestamp);
}

server.on('listening', () => {
  console.log(`WebSocket controller receiver listening on ws://${host}:${port}`);
  console.log('Use only on a trusted local network; this example has no authentication or TLS.');
});

server.on('connection', (socket) => {
  const clientId = nextClientId++;
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

    if (!isControlMessage(message)) {
      console.error(`Client ${clientId} sent an invalid control message`);
      socket.close(1008, 'Invalid control message');
      return;
    }

    console.log(JSON.stringify({
      clientId,
      pitch: message.pitch,
      roll: message.roll,
      up: message.up,
      down: message.down,
      left: message.left,
      right: message.right,
      boost: message.boost,
      timestamp: message.timestamp
    }));
  });

  socket.on('close', () => {
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
