import"./modulepreload-polyfill-B5Qt9EMX.js";const Ad="186",sg=0,qf=1,rg=2,bc=1,og=2,La=3,br=0,Si=1,hn=2,Qs=0,Fa=1,Ga=2,Yf=3,Kf=4,ag=5,Fo=100,lg=101,cg=102,ug=103,hg=104,dg=200,fg=201,pg=202,mg=203,Im=204,Nm=205,gg=206,_g=207,xg=208,vg=209,yg=210,Mg=211,Sg=212,bg=213,Eg=214,Ch=0,Ph=1,Lh=2,Va=3,Ih=4,Nh=5,Dh=6,Uh=7,Dm=0,Tg=1,wg=2,Ss=0,Um=1,Fm=2,Om=3,Rd=4,Bm=5,km=6,zm=7,Zf="attached",Ag="detached",Hm=300,Zr=301,Wo=302,Oa=303,Du=304,Zc=306,Er=1e3,ys=1001,Uc=1002,Jn=1003,Gm=1004,Ia=1005,Gn=1006,Ec=1007,Zs=1008,Ii=1009,Vm=1010,Wm=1011,Wa=1012,Cd=1013,Es=1014,Gi=1015,Ts=1016,Pd=1017,Ld=1018,Xa=1020,Xm=35902,qm=35899,Ym=1021,Km=1022,Vi=1023,er=1026,qr=1027,Id=1028,Nd=1029,$r=1030,Dd=1031,Ud=1033,Tc=33776,wc=33777,Ac=33778,Rc=33779,Fh=35840,Oh=35841,Bh=35842,kh=35843,zh=36196,Hh=37492,Gh=37496,Vh=37488,Wh=37489,Fc=37490,Xh=37491,qh=37808,Yh=37809,Kh=37810,Zh=37811,$h=37812,Jh=37813,Qh=37814,jh=37815,ed=37816,td=37817,nd=37818,id=37819,sd=37820,rd=37821,od=36492,ad=36494,ld=36495,cd=36283,ud=36284,Oc=36285,hd=36286,qa=2300,Ya=2301,Uu=2302,$f=2303,Jf=2400,Qf=2401,jf=2402,Rg=2500,Cg=0,Zm=1,dd=2,Pg=3200,fd=0,Lg=1,Mr="",Ln="srgb",bi="srgb-linear",Bc="linear",yn="srgb",Fu=7680,Ig=519,Ng=512,Dg=513,Ug=514,Fd=515,Fg=516,Og=517,Od=518,Bg=519,$m=35044,kg=35048,ep="300 es",Ms=2e3,Ka=2001;function zg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Hg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Za(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Gg(){const s=Za("canvas");return s.style.display="block",s}const tp={};function kc(...s){const e="THREE."+s.shift();console.log(e,...s)}function Jm(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function dt(...s){s=Jm(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function wt(...s){s=Jm(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function zo(...s){const e=s.join(" ");e in tp||(tp[e]=!0,dt(...s))}function Vg(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Wg={[Ch]:Ph,[Lh]:Dh,[Ih]:Uh,[Va]:Nh,[Ph]:Ch,[Dh]:Lh,[Uh]:Ih,[Nh]:Va};class Qr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const ai=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let np=1234567;const Ba=Math.PI/180,Xo=180/Math.PI;function Wi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ai[s&255]+ai[s>>8&255]+ai[s>>16&255]+ai[s>>24&255]+"-"+ai[e&255]+ai[e>>8&255]+"-"+ai[e>>16&15|64]+ai[e>>24&255]+"-"+ai[t&63|128]+ai[t>>8&255]+"-"+ai[t>>16&255]+ai[t>>24&255]+ai[n&255]+ai[n>>8&255]+ai[n>>16&255]+ai[n>>24&255]).toLowerCase()}function qt(s,e,t){return Math.max(e,Math.min(t,s))}function Bd(s,e){return(s%e+e)%e}function Xg(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function qg(s,e,t){return s!==e?(t-s)/(e-s):0}function ka(s,e,t){return(1-t)*s+t*e}function Yg(s,e,t,n){return ka(s,e,1-Math.exp(-t*n))}function Kg(s,e=1){return e-Math.abs(Bd(s,e*2)-e)}function Zg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function $g(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Jg(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Qg(s,e){return s+Math.random()*(e-s)}function jg(s){return s*(.5-Math.random())}function e_(s){s!==void 0&&(np=s);let e=np+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function t_(s){return s*Ba}function n_(s){return s*Xo}function i_(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function s_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function r_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function o_(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),d=r((e-n)/2),h=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*d,l*h,a*c);break;case"YZY":s.set(l*h,a*u,l*d,a*c);break;case"ZXZ":s.set(l*d,l*h,a*u,a*c);break;case"XZX":s.set(a*u,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*u,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*u,a*c);break;default:dt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function as(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Mn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ee={DEG2RAD:Ba,RAD2DEG:Xo,generateUUID:Wi,clamp:qt,euclideanModulo:Bd,mapLinear:Xg,inverseLerp:qg,lerp:ka,damp:Yg,pingpong:Kg,smoothstep:Zg,smootherstep:$g,randInt:Jg,randFloat:Qg,randFloatSpread:jg,seededRandom:e_,degToRad:t_,radToDeg:n_,isPowerOfTwo:i_,ceilPowerOfTwo:s_,floorPowerOfTwo:r_,setQuaternionFromProperEuler:o_,normalize:Mn,denormalize:as},Qd=class Qd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qt(this.x,e.x,t.x),this.y=qt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qt(this.x,e,t),this.y=qt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qd.prototype.isVector2=!0;let Ce=Qd;class Hn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],h=r[o+0],f=r[o+1],g=r[o+2],y=r[o+3];if(d!==y||l!==h||c!==f||u!==g){let m=l*h+c*f+u*g+d*y;m<0&&(h=-h,f=-f,g=-g,y=-y,m=-m);let p=1-a;if(m<.9995){const w=Math.acos(m),A=Math.sin(w);p=Math.sin(p*w)/A,a=Math.sin(a*w)/A,l=l*p+h*a,c=c*p+f*a,u=u*p+g*a,d=d*p+y*a}else{l=l*p+h*a,c=c*p+f*a,u=u*p+g*a,d=d*p+y*a;const w=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=w,c*=w,u*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=r[o],h=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-a*f,e[t+2]=c*g+u*f+a*h-l*d,e[t+3]=u*g-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),d=a(r/2),h=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:dt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const jd=class jd{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ip.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ip.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-r*d,this.z=i+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qt(this.x,e.x,t.x),this.y=qt(this.y,e.y,t.y),this.z=qt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qt(this.x,e,t),this.y=qt(this.y,e,t),this.z=qt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ou.copy(this).projectOnVector(e),this.sub(Ou)}reflect(e){return this.sub(Ou.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};jd.prototype.isVector3=!0;let S=jd;const Ou=new S,ip=new Hn,ef=class ef{constructor(e,t,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],y=i[0],m=i[3],p=i[6],w=i[1],A=i[4],v=i[7],T=i[2],E=i[5],P=i[8];return r[0]=o*y+a*w+l*T,r[3]=o*m+a*A+l*E,r[6]=o*p+a*v+l*P,r[1]=c*y+u*w+d*T,r[4]=c*m+u*A+d*E,r[7]=c*p+u*v+d*P,r[2]=h*y+f*w+g*T,r[5]=h*m+f*A+g*E,r[8]=h*p+f*v+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,f=c*r-o*l,g=t*d+n*h+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=d*y,e[1]=(i*c-u*n)*y,e[2]=(a*n-i*o)*y,e[3]=h*y,e[4]=(u*t-i*l)*y,e[5]=(i*r-a*t)*y,e[6]=f*y,e[7]=(n*l-c*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return zo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bu.makeScale(e,t)),this}rotate(e){return zo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bu.makeRotation(-e)),this}translate(e,t){return zo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ef.prototype.isMatrix3=!0;let Ht=ef;const Bu=new Ht,sp=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rp=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function a_(){const s={enabled:!0,workingColorSpace:bi,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===yn&&(i.r=js(i.r),i.g=js(i.g),i.b=js(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===yn&&(i.r=Ho(i.r),i.g=Ho(i.g),i.b=Ho(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Mr?Bc:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return zo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return zo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[bi]:{primaries:e,whitePoint:n,transfer:Bc,toXYZ:sp,fromXYZ:rp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ln},outputColorSpaceConfig:{drawingBufferColorSpace:Ln}},[Ln]:{primaries:e,whitePoint:n,transfer:yn,toXYZ:sp,fromXYZ:rp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ln}}}),s}const jt=a_();function js(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ho(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let vo;class l_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{vo===void 0&&(vo=Za("canvas")),vo.width=e.width,vo.height=e.height;const i=vo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=vo}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Za("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=js(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(js(t[n]/255)*255):t[n]=js(t[n]);return{data:t,width:e.width,height:e.height}}else return dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let c_=0;class kd{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=Wi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ku(i[o].image)):r.push(ku(i[o]))}else r=ku(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ku(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?l_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(dt("Texture: Unable to serialize Texture."),{})}let u_=0;const zu=new S;class Qn extends Qr{constructor(e=Qn.DEFAULT_IMAGE,t=Qn.DEFAULT_MAPPING,n=ys,i=ys,r=Gn,o=Zs,a=Vi,l=Ii,c=Qn.DEFAULT_ANISOTROPY,u=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=Wi(),this.name="",this.source=new kd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(zu).x}get height(){return this.source.getSize(zu).y}get depth(){return this.source.getSize(zu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){dt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){dt(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Er:e.x=e.x-Math.floor(e.x);break;case ys:e.x=e.x<0?0:1;break;case Uc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Er:e.y=e.y-Math.floor(e.y);break;case ys:e.y=e.y<0?0:1;break;case Uc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qn.DEFAULT_IMAGE=null;Qn.DEFAULT_MAPPING=Hm;Qn.DEFAULT_ANISOTROPY=1;const tf=class tf{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,v=(f+1)/2,T=(p+1)/2,E=(u+h)/4,P=(d+y)/4,x=(g+m)/4;return A>v&&A>T?A<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(A),i=E/n,r=P/n):v>T?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=E/i,r=x/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=P/r,i=x/r),this.set(n,i,r,t),this}let w=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-y)/w,this.z=(h-u)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qt(this.x,e.x,t.x),this.y=qt(this.y,e.y,t.y),this.z=qt(this.z,e.z,t.z),this.w=qt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qt(this.x,e,t),this.y=qt(this.y,e,t),this.z=qt(this.z,e,t),this.w=qt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};tf.prototype.isVector4=!0;let wn=tf;class h_ extends Qr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new wn(0,0,e,t),this.scissorTest=!1,this.viewport=new wn(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},r=new Qn(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new kd(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cs extends h_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Qm extends Qn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class d_ extends Qn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Kc=class Kc{constructor(e,t,n,i,r,o,a,l,c,u,d,h,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,d,h,f,g,y,m)}set(e,t,n,i,r,o,a,l,c,u,d,h,f,g,y,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kc().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/yo.setFromMatrixColumn(e,0).length(),r=1/yo.setFromMatrixColumn(e,1).length(),o=1/yo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=o*u,f=o*d,g=a*u,y=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-y*c,t[9]=-a*l,t[2]=y-h*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,g=c*u,y=c*d;t[0]=h+y*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=y+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,g=c*u,y=c*d;t[0]=h-y*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=y-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,f=o*d,g=a*u,y=a*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+y,t[1]=l*d,t[5]=y*c+h,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,f=o*c,g=a*l,y=a*c;t[0]=l*u,t[4]=y-h*d,t[8]=g*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-y*d}else if(e.order==="XZY"){const h=o*l,f=o*c,g=a*l,y=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+y,t[5]=o*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*u,t[10]=y*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(f_,e,p_)}lookAt(e,t,n){const i=this.elements;return Pi.subVectors(e,t),Pi.lengthSq()===0&&(Pi.z=1),Pi.normalize(),fr.crossVectors(n,Pi),fr.lengthSq()===0&&(Math.abs(n.z)===1?Pi.x+=1e-4:Pi.z+=1e-4,Pi.normalize(),fr.crossVectors(n,Pi)),fr.normalize(),Yl.crossVectors(Pi,fr),i[0]=fr.x,i[4]=Yl.x,i[8]=Pi.x,i[1]=fr.y,i[5]=Yl.y,i[9]=Pi.y,i[2]=fr.z,i[6]=Yl.z,i[10]=Pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],w=n[3],A=n[7],v=n[11],T=n[15],E=i[0],P=i[4],x=i[8],R=i[12],L=i[1],U=i[5],V=i[9],W=i[13],F=i[2],X=i[6],q=i[10],te=i[14],_e=i[3],ne=i[7],ue=i[11],de=i[15];return r[0]=o*E+a*L+l*F+c*_e,r[4]=o*P+a*U+l*X+c*ne,r[8]=o*x+a*V+l*q+c*ue,r[12]=o*R+a*W+l*te+c*de,r[1]=u*E+d*L+h*F+f*_e,r[5]=u*P+d*U+h*X+f*ne,r[9]=u*x+d*V+h*q+f*ue,r[13]=u*R+d*W+h*te+f*de,r[2]=g*E+y*L+m*F+p*_e,r[6]=g*P+y*U+m*X+p*ne,r[10]=g*x+y*V+m*q+p*ue,r[14]=g*R+y*W+m*te+p*de,r[3]=w*E+A*L+v*F+T*_e,r[7]=w*P+A*U+v*X+T*ne,r[11]=w*x+A*V+v*q+T*ue,r[15]=w*R+A*W+v*te+T*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15],w=l*f-c*h,A=a*f-c*d,v=a*h-l*d,T=o*f-c*u,E=o*h-l*u,P=o*d-a*u;return t*(y*w-m*A+p*v)-n*(g*w-m*T+p*E)+i*(g*A-y*T+p*P)-r*(g*v-y*E+m*P)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(r*u-a*l)+i*(r*c-o*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],w=t*a-n*o,A=t*l-i*o,v=t*c-r*o,T=n*l-i*a,E=n*c-r*a,P=i*c-r*l,x=u*y-d*g,R=u*m-h*g,L=u*p-f*g,U=d*m-h*y,V=d*p-f*y,W=h*p-f*m,F=w*W-A*V+v*U+T*L-E*R+P*x;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/F;return e[0]=(a*W-l*V+c*U)*X,e[1]=(i*V-n*W-r*U)*X,e[2]=(y*P-m*E+p*T)*X,e[3]=(h*E-d*P-f*T)*X,e[4]=(l*L-o*W-c*R)*X,e[5]=(t*W-i*L+r*R)*X,e[6]=(m*v-g*P-p*A)*X,e[7]=(u*P-h*v+f*A)*X,e[8]=(o*V-a*L+c*x)*X,e[9]=(n*L-t*V-r*x)*X,e[10]=(g*E-y*v+p*w)*X,e[11]=(d*v-u*E-f*w)*X,e[12]=(a*R-o*U-l*x)*X,e[13]=(t*U-n*R+i*x)*X,e[14]=(y*A-g*T-m*w)*X,e[15]=(u*T-d*A+h*w)*X,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,h=r*c,f=r*u,g=r*d,y=o*u,m=o*d,p=a*d,w=l*c,A=l*u,v=l*d,T=n.x,E=n.y,P=n.z;return i[0]=(1-(y+p))*T,i[1]=(f+v)*T,i[2]=(g-A)*T,i[3]=0,i[4]=(f-v)*E,i[5]=(1-(h+p))*E,i[6]=(m+w)*E,i[7]=0,i[8]=(g+A)*P,i[9]=(m-w)*P,i[10]=(1-(h+y))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=yo.set(i[0],i[1],i[2]).length();const a=yo.set(i[4],i[5],i[6]).length(),l=yo.set(i[8],i[9],i[10]).length();r<0&&(o=-o),ji.copy(this);const c=1/o,u=1/a,d=1/l;return ji.elements[0]*=c,ji.elements[1]*=c,ji.elements[2]*=c,ji.elements[4]*=u,ji.elements[5]*=u,ji.elements[6]*=u,ji.elements[8]*=d,ji.elements[9]*=d,ji.elements[10]*=d,t.setFromRotationMatrix(ji),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,o,a=Ms,l=!1){const c=this.elements,u=2*r/(t-e),d=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let g,y;if(l)g=r/(o-r),y=o*r/(o-r);else if(a===Ms)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Ka)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Ms,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-i),h=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,y;if(l)g=1/(o-r),y=o/(o-r);else if(a===Ms)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===Ka)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Kc.prototype.isMatrix4=!0;let Gt=Kc;const yo=new S,ji=new Gt,f_=new S(0,0,0),p_=new S(1,1,1),fr=new S,Yl=new S,Pi=new S,op=new Gt,ap=new Hn;class tr{constructor(e=0,t=0,n=0,i=tr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return op.makeRotationFromQuaternion(e),this.setFromRotationMatrix(op,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ap.setFromEuler(this),this.setFromQuaternion(ap,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tr.DEFAULT_ORDER="XYZ";class zd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let m_=0;const lp=new S,Mo=new Hn,zs=new Gt,Kl=new S,va=new S,g_=new S,__=new Hn,cp=new S(1,0,0),up=new S(0,1,0),hp=new S(0,0,1),dp={type:"added"},x_={type:"removed"},So={type:"childadded",child:null},Hu={type:"childremoved",child:null};class An extends Qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new S,t=new tr,n=new Hn,i=new S(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Gt},normalMatrix:{value:new Ht}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mo.setFromAxisAngle(e,t),this.quaternion.multiply(Mo),this}rotateOnWorldAxis(e,t){return Mo.setFromAxisAngle(e,t),this.quaternion.premultiply(Mo),this}rotateX(e){return this.rotateOnAxis(cp,e)}rotateY(e){return this.rotateOnAxis(up,e)}rotateZ(e){return this.rotateOnAxis(hp,e)}translateOnAxis(e,t){return lp.copy(e).applyQuaternion(this.quaternion),this.position.add(lp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cp,e)}translateY(e){return this.translateOnAxis(up,e)}translateZ(e){return this.translateOnAxis(hp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Kl.copy(e):Kl.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zs.lookAt(va,Kl,this.up):zs.lookAt(Kl,va,this.up),this.quaternion.setFromRotationMatrix(zs),i&&(zs.extractRotation(i.matrixWorld),Mo.setFromRotationMatrix(zs),this.quaternion.premultiply(Mo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dp),So.child=e,this.dispatchEvent(So),So.child=null):wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(x_),Hu.child=e,this.dispatchEvent(Hu),Hu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zs.multiply(e.parent.matrixWorld)),e.applyMatrix4(zs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dp),So.child=e,this.dispatchEvent(So),So.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,e,g_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,__,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}An.DEFAULT_UP=new S(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Et extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const v_={type:"move"};class Gu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(v_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Et;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const jm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},Zl={h:0,s:0,l:0};function Vu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,jt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=jt.workingColorSpace){return this.r=e,this.g=t,this.b=n,jt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=jt.workingColorSpace){if(e=Bd(e,1),t=qt(t,0,1),n=qt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Vu(o,r,e+1/3),this.g=Vu(o,r,e),this.b=Vu(o,r,e-1/3)}return jt.colorSpaceToWorking(this,i),this}setStyle(e,t=Ln){function n(r){r!==void 0&&parseFloat(r)<1&&dt("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:dt("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);dt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ln){const n=jm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):dt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}copyLinearToSRGB(e){return this.r=Ho(e.r),this.g=Ho(e.g),this.b=Ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ln){return jt.workingToColorSpace(li.copy(this),e),Math.round(qt(li.r*255,0,255))*65536+Math.round(qt(li.g*255,0,255))*256+Math.round(qt(li.b*255,0,255))}getHexString(e=Ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=jt.workingColorSpace){jt.workingToColorSpace(li.copy(this),t);const n=li.r,i=li.g,r=li.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=jt.workingColorSpace){return jt.workingToColorSpace(li.copy(this),t),e.r=li.r,e.g=li.g,e.b=li.b,e}getStyle(e=Ln){jt.workingToColorSpace(li.copy(this),e);const t=li.r,n=li.g,i=li.b;return e!==Ln?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+t,pr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pr),e.getHSL(Zl);const n=ka(pr.h,Zl.h,t),i=ka(pr.s,Zl.s,t),r=ka(pr.l,Zl.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const li=new Te;Te.NAMES=jm;class Hd{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Te(e),this.near=t,this.far=n}clone(){return new Hd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class y_ extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tr,this.environmentIntensity=1,this.environmentRotation=new tr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const es=new S,Hs=new S,Wu=new S,Gs=new S,bo=new S,Eo=new S,fp=new S,Xu=new S,qu=new S,Yu=new S,Ku=new wn,Zu=new wn,$u=new wn;class ls{constructor(e=new S,t=new S,n=new S){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),es.subVectors(e,t),i.cross(es);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){es.subVectors(i,t),Hs.subVectors(n,t),Wu.subVectors(e,t);const o=es.dot(es),a=es.dot(Hs),l=es.dot(Wu),c=Hs.dot(Hs),u=Hs.dot(Wu),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Gs)===null?!1:Gs.x>=0&&Gs.y>=0&&Gs.x+Gs.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Gs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gs.x),l.addScaledVector(o,Gs.y),l.addScaledVector(a,Gs.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Ku.setScalar(0),Zu.setScalar(0),$u.setScalar(0),Ku.fromBufferAttribute(e,t),Zu.fromBufferAttribute(e,n),$u.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Ku,r.x),o.addScaledVector(Zu,r.y),o.addScaledVector($u,r.z),o}static isFrontFacing(e,t,n,i){return es.subVectors(n,t),Hs.subVectors(e,t),es.cross(Hs).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return es.subVectors(this.c,this.b),Hs.subVectors(this.a,this.b),es.cross(Hs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ls.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ls.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return ls.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return ls.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ls.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;bo.subVectors(i,n),Eo.subVectors(r,n),Xu.subVectors(e,n);const l=bo.dot(Xu),c=Eo.dot(Xu);if(l<=0&&c<=0)return t.copy(n);qu.subVectors(e,i);const u=bo.dot(qu),d=Eo.dot(qu);if(u>=0&&d<=u)return t.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(bo,o);Yu.subVectors(e,r);const f=bo.dot(Yu),g=Eo.dot(Yu);if(g>=0&&f<=g)return t.copy(r);const y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Eo,a);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return fp.subVectors(r,i),a=(d-u)/(d-u+(f-g)),t.copy(i).addScaledVector(fp,a);const p=1/(m+y+h);return o=y*p,a=h*p,t.copy(n).addScaledVector(bo,o).addScaledVector(Eo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class qn{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ts.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ts.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ts.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ts):ts.fromBufferAttribute(r,o),ts.applyMatrix4(e.matrixWorld),this.expandByPoint(ts);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$l.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$l.copy(n.boundingBox)),$l.applyMatrix4(e.matrixWorld),this.union($l)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ts),ts.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ya),Jl.subVectors(this.max,ya),To.subVectors(e.a,ya),wo.subVectors(e.b,ya),Ao.subVectors(e.c,ya),mr.subVectors(wo,To),gr.subVectors(Ao,wo),kr.subVectors(To,Ao);let t=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-kr.z,kr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,kr.z,0,-kr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-kr.y,kr.x,0];return!Ju(t,To,wo,Ao,Jl)||(t=[1,0,0,0,1,0,0,0,1],!Ju(t,To,wo,Ao,Jl))?!1:(Ql.crossVectors(mr,gr),t=[Ql.x,Ql.y,Ql.z],Ju(t,To,wo,Ao,Jl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ts).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ts).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Vs=[new S,new S,new S,new S,new S,new S,new S,new S],ts=new S,$l=new qn,To=new S,wo=new S,Ao=new S,mr=new S,gr=new S,kr=new S,ya=new S,Jl=new S,Ql=new S,zr=new S;function Ju(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){zr.fromArray(s,r);const a=i.x*Math.abs(zr.x)+i.y*Math.abs(zr.y)+i.z*Math.abs(zr.z),l=e.dot(zr),c=t.dot(zr),u=n.dot(zr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Xn=new S,jl=new Ce;let M_=0;class Pn extends Qr{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:M_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$m,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)jl.fromBufferAttribute(this,t),jl.applyMatrix3(e),this.setXY(t,jl.x,jl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyMatrix3(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyMatrix4(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyNormalMatrix(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.transformDirection(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=as(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=as(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=as(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=as(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=as(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),n=Mn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),n=Mn(n,this.array),i=Mn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),n=Mn(n,this.array),i=Mn(i,this.array),r=Mn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class e0 extends Pn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class t0 extends Pn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class on extends Pn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const S_=new qn,Ma=new S,Qu=new S;class ws{constructor(e=new S,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):S_.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ma.subVectors(e,this.center);const t=Ma.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ma,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ma.copy(e.center).add(Qu)),this.expandByPoint(Ma.copy(e.center).sub(Qu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let b_=0;const Oi=new Gt,ju=new An,Ro=new S,Li=new qn,Sa=new qn,si=new S;class un extends Qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zg(e)?t0:e0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ht().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Oi.makeRotationFromQuaternion(e),this.applyMatrix4(Oi),this}rotateX(e){return Oi.makeRotationX(e),this.applyMatrix4(Oi),this}rotateY(e){return Oi.makeRotationY(e),this.applyMatrix4(Oi),this}rotateZ(e){return Oi.makeRotationZ(e),this.applyMatrix4(Oi),this}translate(e,t,n){return Oi.makeTranslation(e,t,n),this.applyMatrix4(Oi),this}scale(e,t,n){return Oi.makeScale(e,t,n),this.applyMatrix4(Oi),this}lookAt(e){return ju.lookAt(e),ju.updateMatrix(),this.applyMatrix4(ju.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ro).negate(),this.translate(Ro.x,Ro.y,Ro.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new on(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Li.setFromBufferAttribute(r),this.morphTargetsRelative?(si.addVectors(this.boundingBox.min,Li.min),this.boundingBox.expandByPoint(si),si.addVectors(this.boundingBox.max,Li.max),this.boundingBox.expandByPoint(si)):(this.boundingBox.expandByPoint(Li.min),this.boundingBox.expandByPoint(Li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ws);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(e){const n=this.boundingSphere.center;if(Li.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Sa.setFromBufferAttribute(a),this.morphTargetsRelative?(si.addVectors(Li.min,Sa.min),Li.expandByPoint(si),si.addVectors(Li.max,Sa.max),Li.expandByPoint(si)):(Li.expandByPoint(Sa.min),Li.expandByPoint(Sa.max))}Li.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)si.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(si));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)si.fromBufferAttribute(a,c),l&&(Ro.fromBufferAttribute(e,c),si.add(Ro)),i=Math.max(i,n.distanceToSquared(si))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Pn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new S,l[x]=new S;const c=new S,u=new S,d=new S,h=new Ce,f=new Ce,g=new Ce,y=new S,m=new S;function p(x,R,L){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,R),d.fromBufferAttribute(n,L),h.fromBufferAttribute(r,x),f.fromBufferAttribute(r,R),g.fromBufferAttribute(r,L),u.sub(c),d.sub(c),f.sub(h),g.sub(h);const U=1/(f.x*g.y-g.x*f.y);isFinite(U)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(U),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(U),a[x].add(y),a[R].add(y),a[L].add(y),l[x].add(m),l[R].add(m),l[L].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let x=0,R=w.length;x<R;++x){const L=w[x],U=L.start,V=L.count;for(let W=U,F=U+V;W<F;W+=3)p(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const A=new S,v=new S,T=new S,E=new S;function P(x){T.fromBufferAttribute(i,x),E.copy(T);const R=a[x];A.copy(R),A.sub(T.multiplyScalar(T.dot(R))).normalize(),v.crossVectors(E,R);const U=v.dot(l[x])<0?-1:1;o.setXYZW(x,A.x,A.y,A.z,U)}for(let x=0,R=w.length;x<R;++x){const L=w[x],U=L.start,V=L.count;for(let W=U,F=U+V;W<F;W+=3)P(e.getX(W+0)),P(e.getX(W+1)),P(e.getX(W+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Pn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new S,r=new S,o=new S,a=new S,l=new S,c=new S,u=new S,d=new S;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)si.fromBufferAttribute(e,t),si.normalize(),e.setXYZ(t,si.x,si.y,si.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new Pn(h,u,d)}if(this.index===null)return dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new un,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class n0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$m,this.updateRanges=[],this.version=0,this.uuid=Wi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const fi=new S;class $c{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)fi.fromBufferAttribute(this,t),fi.applyMatrix4(e),this.setXYZ(t,fi.x,fi.y,fi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fi.fromBufferAttribute(this,t),fi.applyNormalMatrix(e),this.setXYZ(t,fi.x,fi.y,fi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fi.fromBufferAttribute(this,t),fi.transformDirection(e),this.setXYZ(t,fi.x,fi.y,fi.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=as(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mn(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Mn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=as(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=as(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=as(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=as(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mn(t,this.array),n=Mn(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mn(t,this.array),n=Mn(n,this.array),i=Mn(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mn(t,this.array),n=Mn(n,this.array),i=Mn(i,this.array),r=Mn(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){kc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Pn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new $c(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){kc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const eh=new S,E_=new S,T_=new Ht;class Hi{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=eh.subVectors(n,t).cross(E_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(eh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||T_.getNormalMatrix(e),i=this.coplanarPoint(eh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let w_=0;class bs extends Qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=Wi(),this.name="",this.type="Material",this.blending=Fa,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Im,this.blendDst=Nm,this.blendEquation=Fo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Va,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ig,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fu,this.stencilZFail=Fu,this.stencilZPass=Fu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){dt(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){dt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Te().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Hi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ce().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ce().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ws=new S,th=new S,ec=new S,tc=new S;class ol{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ws)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ws.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ws.copy(this.origin).addScaledVector(this.direction,t),Ws.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){th.copy(e).add(t).multiplyScalar(.5),ec.copy(t).sub(e).normalize(),tc.copy(this.origin).sub(th);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ec),a=tc.dot(this.direction),l=-tc.dot(ec),c=tc.lengthSq(),u=Math.abs(1-o*o);let d,h,f,g;if(u>0)if(d=o*l-a,h=o*a-l,g=r*u,d>=0)if(h>=-g)if(h<=g){const y=1/u;d*=y,h*=y,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(th).addScaledVector(ec,h),f}intersectSphere(e,t){if(e.radius<0)return null;Ws.subVectors(e.center,this.origin);const n=Ws.dot(this.direction),i=Ws.dot(Ws)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ws)!==null}intersectTriangle(e,t,n,i,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,d=e.x-o.x,h=e.y-o.y,f=e.z-o.z,g=t.x-o.x,y=t.y-o.y,m=t.z-o.z,p=n.x-o.x,w=n.y-o.y,A=n.z-o.z,v=Math.abs(l),T=Math.abs(c),E=Math.abs(u);let P,x,R,L,U,V,W,F,X,q,te,_e;if(v>=T&&v>=E?(R=l,V=d,X=g,_e=p,l>=0?(P=c,x=u,L=h,U=f,W=y,F=m,q=w,te=A):(P=u,x=c,L=f,U=h,W=m,F=y,q=A,te=w)):T>=E?(R=c,V=h,X=y,_e=w,c>=0?(P=u,x=l,L=f,U=d,W=m,F=g,q=A,te=p):(P=l,x=u,L=d,U=f,W=g,F=m,q=p,te=A)):(R=u,V=f,X=m,_e=A,u>=0?(P=l,x=c,L=d,U=h,W=g,F=y,q=p,te=w):(P=c,x=l,L=h,U=d,W=y,F=g,q=w,te=p)),R===0)return null;const ne=P/R,ue=x/R,de=1/R,Qe=L-ne*V,Xe=U-ue*V,sn=W-ne*X,At=F-ue*X,Dt=q-ne*_e,ie=te-ue*_e,ae=Dt*At-ie*sn,Re=Qe*ie-Xe*Dt,xt=sn*Xe-At*Qe;if(i){if(ae<0||Re<0||xt<0)return null}else if((ae<0||Re<0||xt<0)&&(ae>0||Re>0||xt>0))return null;const qe=ae+Re+xt;if(qe===0)return null;const Mt=de*(ae*V+Re*X+xt*_e);return(qe>0?Mt<0:Mt>0)?null:this.at(Mt/qe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tn extends bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tr,this.combine=Dm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pp=new Gt,Hr=new ol,nc=new ws,mp=new S,ic=new S,sc=new S,rc=new S,nh=new S,oc=new S,gp=new S,ac=new S;class at extends An{constructor(e=new un,t=new Tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){oc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(nh.fromBufferAttribute(d,e),o?oc.addScaledVector(nh,u):oc.addScaledVector(nh.sub(t),u))}t.add(oc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),nc.copy(n.boundingSphere),nc.applyMatrix4(r),Hr.copy(e.ray).recast(e.near),!(nc.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(nc,mp)===null||Hr.origin.distanceToSquared(mp)>(e.far-e.near)**2))&&(pp.copy(r).invert(),Hr.copy(e.ray).applyMatrix4(pp),!(n.boundingBox!==null&&Hr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hr)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){const m=h[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),A=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=w,T=A;v<T;v+=3){const E=a.getX(v),P=a.getX(v+1),x=a.getX(v+2);i=lc(this,p,e,n,c,u,d,E,P,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){const w=a.getX(m),A=a.getX(m+1),v=a.getX(m+2);i=lc(this,o,e,n,c,u,d,w,A,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){const m=h[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=w,T=A;v<T;v+=3){const E=v,P=v+1,x=v+2;i=lc(this,p,e,n,c,u,d,E,P,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){const w=m,A=m+1,v=m+2;i=lc(this,o,e,n,c,u,d,w,A,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function A_(s,e,t,n,i,r,o,a){let l;if(e.side===Si?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===br,a),l===null)return null;ac.copy(a),ac.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ac);return c<t.near||c>t.far?null:{distance:c,point:ac.clone(),object:s}}function lc(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,ic),s.getVertexPosition(l,sc),s.getVertexPosition(c,rc);const u=A_(s,e,t,n,ic,sc,rc,gp);if(u){const d=new S;ls.getBarycoord(gp,ic,sc,rc,d),i&&(u.uv=ls.getInterpolatedAttribute(i,a,l,c,d,new Ce)),r&&(u.uv1=ls.getInterpolatedAttribute(r,a,l,c,d,new Ce)),o&&(u.normal=ls.getInterpolatedAttribute(o,a,l,c,d,new S),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new S,materialIndex:0};ls.getNormal(ic,sc,rc,h.normal),u.face=h,u.barycoord=d}return u}const ba=new wn,_p=new wn,xp=new wn,R_=new wn,vp=new Gt,cc=new S,ih=new ws,yp=new Gt,sh=new ol;class C_ extends at{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Zf,this.bindMatrix=new Gt,this.bindMatrixInverse=new Gt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new qn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,cc),this.boundingBox.expandByPoint(cc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ws),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,cc),this.boundingSphere.expandByPoint(cc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ih.copy(this.boundingSphere),ih.applyMatrix4(i),e.ray.intersectsSphere(ih)!==!1&&(yp.copy(i).invert(),sh.copy(e.ray).applyMatrix4(yp),!(this.boundingBox!==null&&sh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,sh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new wn,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Zf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ag?this.bindMatrixInverse.copy(this.bindMatrix).invert():dt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;_p.fromBufferAttribute(i.attributes.skinIndex,e),xp.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(ba.copy(t),t.set(0,0,0,0)):(ba.set(...t,1),t.set(0,0,0)),ba.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const o=xp.getComponent(r);if(o!==0){const a=_p.getComponent(r);vp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(R_.copy(ba).applyMatrix4(vp),o)}}return t.isVector4&&(t.w=ba.w),t.applyMatrix4(this.bindMatrixInverse)}}class i0 extends An{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Gd extends Qn{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Jn,u=Jn,d,h){super(null,o,a,l,c,u,i,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mp=new Gt,P_=new Gt;class Vd{constructor(e=[],t=[]){this.uuid=Wi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){dt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Gt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Gt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:P_;Mp.multiplyMatrices(a,t[r]),Mp.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Vd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Gd(t,e,e,Vi,Gi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(dt("Skeleton: No bone found with UUID:",r),o=new i0),this.bones.push(o),this.boneInverses.push(new Gt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class zc extends Pn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Co=new Gt,Sp=new Gt,uc=[],bp=new qn,L_=new Gt,Ea=new at,Ta=new ws;class Go extends at{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,L_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Co),bp.copy(e.boundingBox).applyMatrix4(Co),this.boundingBox.union(bp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ws),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Co),Ta.copy(e.boundingSphere).applyMatrix4(Co),this.boundingSphere.union(Ta)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ea.geometry=this.geometry,Ea.material=this.material,Ea.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ta.copy(this.boundingSphere),Ta.applyMatrix4(n),e.ray.intersectsSphere(Ta)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Co),Sp.multiplyMatrices(n,Co),Ea.matrixWorld=Sp,Ea.raycast(e,uc);for(let o=0,a=uc.length;o<a;o++){const l=uc[o];l.instanceId=r,l.object=this,t.push(l)}uc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new zc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Gd(new Float32Array(i*this.count),i,this.count,Id,Gi));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Gr=new ws,I_=new Ce(.5,.5),hc=new S;class Wd{constructor(e=new Hi,t=new Hi,n=new Hi,i=new Hi,r=new Hi,o=new Hi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ms,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],w=r[12],A=r[13],v=r[14],T=r[15];if(i[0].setComponents(c-o,f-u,p-g,T-w).normalize(),i[1].setComponents(c+o,f+u,p+g,T+w).normalize(),i[2].setComponents(c+a,f+d,p+y,T+A).normalize(),i[3].setComponents(c-a,f-d,p-y,T-A).normalize(),n)i[4].setComponents(l,h,m,v).normalize(),i[5].setComponents(c-l,f-h,p-m,T-v).normalize();else if(i[4].setComponents(c-l,f-h,p-m,T-v).normalize(),t===Ms)i[5].setComponents(c+l,f+h,p+m,T+v).normalize();else if(t===Ka)i[5].setComponents(l,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){Gr.center.set(0,0,0);const t=I_.distanceTo(e.center);return Gr.radius=.7071067811865476+t,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(hc.x=i.normal.x>0?e.max.x:e.min.x,hc.y=i.normal.y>0?e.max.y:e.min.y,hc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(hc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class al extends bs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Hc=new S,Gc=new S,Ep=new Gt,wa=new ol,dc=new ws,rh=new S,Tp=new S;class Yr extends An{constructor(e=new un,t=new al){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Hc.fromBufferAttribute(t,i-1),Gc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Hc.distanceTo(Gc);e.setAttribute("lineDistance",new on(n,1))}else dt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dc.copy(n.boundingSphere),dc.applyMatrix4(i),dc.radius+=r,e.ray.intersectsSphere(dc)===!1)return;Ep.copy(i).invert(),wa.copy(e.ray).applyMatrix4(Ep);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let y=f,m=g-1;y<m;y+=c){const p=u.getX(y),w=u.getX(y+1),A=fc(this,e,wa,l,p,w,y);A&&t.push(A)}if(this.isLineLoop){const y=u.getX(g-1),m=u.getX(f),p=fc(this,e,wa,l,y,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=f,m=g-1;y<m;y+=c){const p=fc(this,e,wa,l,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){const y=fc(this,e,wa,l,g-1,f,g-1);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function fc(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(Hc.fromBufferAttribute(a,i),Gc.fromBufferAttribute(a,r),t.distanceSqToSegment(Hc,Gc,rh,Tp)>n)return;rh.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(rh);if(!(c<e.near||c>e.far))return{distance:c,point:Tp.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const wp=new S,Ap=new S;class N_ extends Yr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)wp.fromBufferAttribute(t,i),Ap.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+wp.distanceTo(Ap);e.setAttribute("lineDistance",new on(n,1))}else dt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class D_ extends Yr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class s0 extends bs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Rp=new Gt,pd=new ol,pc=new ws,mc=new S;class U_ extends An{constructor(e=new un,t=new s0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pc.copy(n.boundingSphere),pc.applyMatrix4(i),pc.radius+=r,e.ray.intersectsSphere(pc)===!1)return;Rp.copy(i).invert(),pd.copy(e.ray).applyMatrix4(Rp);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=h,y=f;g<y;g++){const m=c.getX(g);mc.fromBufferAttribute(d,m),Cp(mc,m,l,i,e,t,this)}}else{const h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=h,y=f;g<y;g++)mc.fromBufferAttribute(d,g),Cp(mc,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Cp(s,e,t,n,i,r,o){const a=pd.distanceSqToPoint(s);if(a<t){const l=new S;pd.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class r0 extends Qn{constructor(e=[],t=Zr,n,i,r,o,a,l,c,u){super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class oh extends Qn{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $a extends Qn{constructor(e,t,n=Es,i,r,o,a=Jn,l=Jn,c,u=er,d=1){if(u!==er&&u!==qr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class F_ extends $a{constructor(e,t=Es,n=Zr,i,r,o=Jn,a=Jn,l,c=er){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class o0 extends Qn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class mi extends un{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new on(c,3)),this.setAttribute("normal",new on(u,3)),this.setAttribute("uv",new on(d,2));function g(y,m,p,w,A,v,T,E,P,x,R){const L=v/P,U=T/x,V=v/2,W=T/2,F=E/2,X=P+1,q=x+1;let te=0,_e=0;const ne=new S;for(let ue=0;ue<q;ue++){const de=ue*U-W;for(let Qe=0;Qe<X;Qe++){const Xe=Qe*L-V;ne[y]=Xe*w,ne[m]=de*A,ne[p]=F,c.push(ne.x,ne.y,ne.z),ne[y]=0,ne[m]=0,ne[p]=E>0?1:-1,u.push(ne.x,ne.y,ne.z),d.push(Qe/P),d.push(1-ue/x),te+=1}}for(let ue=0;ue<x;ue++)for(let de=0;de<P;de++){const Qe=h+de+X*ue,Xe=h+de+X*(ue+1),sn=h+(de+1)+X*(ue+1),At=h+(de+1)+X*ue;l.push(Qe,Xe,At),l.push(Xe,sn,At),_e+=6}a.addGroup(f,_e,R),f+=_e,h+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class rs extends un{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],d=[],h=[],f=[];let g=0;const y=[],m=n/2;let p=0;w(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new on(d,3)),this.setAttribute("normal",new on(h,3)),this.setAttribute("uv",new on(f,2));function w(){const v=new S,T=new S;let E=0;const P=(t-e)/n;for(let x=0;x<=r;x++){const R=[],L=x/r,U=L*(t-e)+e;for(let V=0;V<=i;V++){const W=V/i,F=W*l+a,X=Math.sin(F),q=Math.cos(F);T.x=U*X,T.y=-L*n+m,T.z=U*q,d.push(T.x,T.y,T.z),v.set(X,P,q).normalize(),h.push(v.x,v.y,v.z),f.push(W,1-L),R.push(g++)}y.push(R)}for(let x=0;x<i;x++)for(let R=0;R<r;R++){const L=y[R][x],U=y[R+1][x],V=y[R+1][x+1],W=y[R][x+1];(e>0||R!==0)&&(u.push(L,U,W),E+=3),(t>0||R!==r-1)&&(u.push(U,V,W),E+=3)}c.addGroup(p,E,0),p+=E}function A(v){const T=g,E=new Ce,P=new S;let x=0;const R=v===!0?e:t,L=v===!0?1:-1;for(let V=1;V<=i;V++)d.push(0,m*L,0),h.push(0,L,0),f.push(.5,.5),g++;const U=g;for(let V=0;V<=i;V++){const F=V/i*l+a,X=Math.cos(F),q=Math.sin(F);P.x=R*q,P.y=m*L,P.z=R*X,d.push(P.x,P.y,P.z),h.push(0,L,0),E.x=X*.5+.5,E.y=q*.5*L+.5,f.push(E.x,E.y),g++}for(let V=0;V<i;V++){const W=T+V,F=U+V;v===!0?u.push(F,F+1,W):u.push(F+1,F,W),x+=3}c.addGroup(p,x,v===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ys extends rs{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Ys(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class As{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){dt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const u=n[i],h=n[i+1]-u,f=(o-u)/h;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new Ce:new S);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new S,i=[],r=[],o=[],a=new S,l=new Gt;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new S)}r[0]=new S,o[0]=new S;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),d=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(qt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(qt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Xd extends As{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ce){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class O_ extends Xd{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function qd(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,f*=u,i(o,a,h,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Pp=new S,Lp=new S,ah=new qd,lh=new qd,ch=new qd;class ss extends As{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new S){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(Lp.subVectors(i[0],i[1]).add(i[0]),c=Lp);const d=i[a%r],h=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Pp.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Pp),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),ah.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,y,m),lh.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,y,m),ch.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,y,m)}else this.curveType==="catmullrom"&&(ah.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),lh.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),ch.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(ah.calc(l),lh.calc(l),ch.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new S().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ip(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function B_(s,e){const t=1-s;return t*t*e}function k_(s,e){return 2*(1-s)*s*e}function z_(s,e){return s*s*e}function za(s,e,t,n){return B_(s,e)+k_(s,t)+z_(s,n)}function H_(s,e){const t=1-s;return t*t*t*e}function G_(s,e){const t=1-s;return 3*t*t*s*e}function V_(s,e){return 3*(1-s)*s*s*e}function W_(s,e){return s*s*s*e}function Ha(s,e,t,n,i){return H_(s,e)+G_(s,t)+V_(s,n)+W_(s,i)}class a0 extends As{constructor(e=new Ce,t=new Ce,n=new Ce,i=new Ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Ce){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ha(e,i.x,r.x,o.x,a.x),Ha(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class X_ extends As{constructor(e=new S,t=new S,n=new S,i=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new S){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ha(e,i.x,r.x,o.x,a.x),Ha(e,i.y,r.y,o.y,a.y),Ha(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class l0 extends As{constructor(e=new Ce,t=new Ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ce){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class q_ extends As{constructor(e=new S,t=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new S){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new S){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class c0 extends As{constructor(e=new Ce,t=new Ce,n=new Ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ce){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(za(e,i.x,r.x,o.x),za(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class u0 extends As{constructor(e=new S,t=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new S){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(za(e,i.x,r.x,o.x),za(e,i.y,r.y,o.y),za(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class h0 extends As{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ce){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(Ip(a,l.x,c.x,u.x,d.x),Ip(a,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Ce().fromArray(i))}return this}}var Vc=Object.freeze({__proto__:null,ArcCurve:O_,CatmullRomCurve3:ss,CubicBezierCurve:a0,CubicBezierCurve3:X_,EllipseCurve:Xd,LineCurve:l0,LineCurve3:q_,QuadraticBezierCurve:c0,QuadraticBezierCurve3:u0,SplineCurve:h0});class Y_ extends As{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Vc[i.type]().fromJSON(i))}return this}}class Np extends Y_{constructor(e){super(),this.type="Path",this.currentPoint=new Ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new l0(this.currentPoint.clone(),new Ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new c0(this.currentPoint.clone(),new Ce(e,t),new Ce(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new a0(this.currentPoint.clone(),new Ce(e,t),new Ce(n,i),new Ce(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new h0(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const c=new Xd(e,t,n,i,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Yd extends Np{constructor(e){super(e),this.uuid=Wi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Np().fromJSON(i))}return this}}function K_(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=d0(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=j_(s,e,r,t)),s.length>80*t){a=s[0],l=s[1];let u=a,d=l;for(let h=t;h<i;h+=t){const f=s[h],g=s[h+1];f<a&&(a=f),g<l&&(l=g),f>u&&(u=f),g>d&&(d=g)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return Ja(r,o,t,a,l,c,0),o}function d0(s,e,t,n,i){let r;if(i===ux(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=Dp(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Dp(o/n|0,s[o],s[o+1],r);return r&&qo(r,r.next)&&(ja(r),r=r.next),r}function Jr(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(qo(t,t.next)||Dn(t.prev,t,t.next)===0)){if(ja(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ja(s,e,t,n,i,r,o){if(!s)return;!o&&r&&sx(s,n,i,r);let a=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?$_(s,n,i,r):Z_(s)){e.push(l.i,s.i,c.i),ja(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=J_(Jr(s),e),Ja(s,e,t,n,i,r,2)):o===2&&Q_(s,e,t,n,i,r):Ja(Jr(s),e,t,n,i,r,1);break}}}function Z_(s){const e=s.prev,t=s,n=s.next;if(Dn(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(i,r,o),d=Math.min(a,l,c),h=Math.max(i,r,o),f=Math.max(a,l,c);let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&Na(i,a,r,l,o,c,g.x,g.y)&&Dn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function $_(s,e,t,n){const i=s.prev,r=s,o=s.next;if(Dn(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,u=i.y,d=r.y,h=o.y,f=Math.min(a,l,c),g=Math.min(u,d,h),y=Math.max(a,l,c),m=Math.max(u,d,h),p=md(f,g,e,t,n),w=md(y,m,e,t,n);let A=s.prevZ,v=s.nextZ;for(;A&&A.z>=p&&v&&v.z<=w;){if(A.x>=f&&A.x<=y&&A.y>=g&&A.y<=m&&A!==i&&A!==o&&Na(a,u,l,d,c,h,A.x,A.y)&&Dn(A.prev,A,A.next)>=0||(A=A.prevZ,v.x>=f&&v.x<=y&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&Na(a,u,l,d,c,h,v.x,v.y)&&Dn(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;A&&A.z>=p;){if(A.x>=f&&A.x<=y&&A.y>=g&&A.y<=m&&A!==i&&A!==o&&Na(a,u,l,d,c,h,A.x,A.y)&&Dn(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;v&&v.z<=w;){if(v.x>=f&&v.x<=y&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&Na(a,u,l,d,c,h,v.x,v.y)&&Dn(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function J_(s,e){let t=s;do{const n=t.prev,i=t.next.next;!qo(n,i)&&p0(n,t,t.next,i)&&Qa(n,i)&&Qa(i,n)&&(e.push(n.i,t.i,i.i),ja(t),ja(t.next),t=s=i),t=t.next}while(t!==s);return Jr(t)}function Q_(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ax(o,a)){let l=m0(o,a);o=Jr(o,o.next),l=Jr(l,l.next),Ja(o,e,t,n,i,r,0),Ja(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function j_(s,e,t,n){const i=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=d0(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(ox(c))}i.sort(ex);for(let r=0;r<i.length;r++)t=tx(i[r],t);return t}function ex(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function tx(s,e){const t=nx(s,e);if(!t)return e;const n=m0(t,s);return Jr(n,n.next),Jr(t,t.next)}function nx(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,o;if(qo(s,t))return t;do{if(qo(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&f0(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){const d=Math.abs(i-t.y)/(n-t.x);Qa(t,s)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&ix(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function ix(s,e){return Dn(s.prev,s,e.prev)<0&&Dn(e.next,s,s.next)<0}function sx(s,e,t,n){let i=s;do i.z===0&&(i.z=md(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,rx(i)}function rx(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function md(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function ox(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function f0(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function Na(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&f0(s,e,t,n,i,r,o,a)}function ax(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!lx(s,e)&&(Qa(s,e)&&Qa(e,s)&&cx(s,e)&&(Dn(s.prev,s,e.prev)||Dn(s,e.prev,e))||qo(s,e)&&Dn(s.prev,s,s.next)>0&&Dn(e.prev,e,e.next)>0)}function Dn(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function qo(s,e){return s.x===e.x&&s.y===e.y}function p0(s,e,t,n){const i=_c(Dn(s,e,t)),r=_c(Dn(s,e,n)),o=_c(Dn(t,n,s)),a=_c(Dn(t,n,e));return!!(i!==r&&o!==a||i===0&&gc(s,t,e)||r===0&&gc(s,n,e)||o===0&&gc(t,s,n)||a===0&&gc(t,e,n))}function gc(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function _c(s){return s>0?1:s<0?-1:0}function lx(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&p0(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Qa(s,e){return Dn(s.prev,s,s.next)<0?Dn(s,e,s.next)>=0&&Dn(s,s.prev,e)>=0:Dn(s,e,s.prev)<0||Dn(s,s.next,e)<0}function cx(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function m0(s,e){const t=gd(s.i,s.x,s.y),n=gd(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Dp(s,e,t,n){const i=gd(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ja(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function gd(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ux(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class hx{static triangulate(e,t,n=2){return K_(e,t,n)}}class Oo{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Oo.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Up(e),Fp(n,e);let o=e.length;t.forEach(Up);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Fp(n,t[l]);const a=hx.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Up(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Fp(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Jc extends un{constructor(e=new Yd([new Ce(.5,.5),new Ce(-.5,.5),new Ce(-.5,-.5),new Ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new on(i,3)),this.setAttribute("uv",new on(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:dx;let A,v=!1,T,E,P,x;if(p){A=p.getSpacedPoints(u),v=!0,h=!1;const ce=p.isCatmullRomCurve3?p.closed:!1;T=p.computeFrenetFrames(u,ce),E=new S,P=new S,x=new S}h||(m=0,f=0,g=0,y=0);const R=a.extractPoints(c);let L=R.shape;const U=R.holes;if(!Oo.isClockWise(L)){L=L.reverse();for(let ce=0,xe=U.length;ce<xe;ce++){const Se=U[ce];Oo.isClockWise(Se)&&(U[ce]=Se.reverse())}}function W(ce){const Se=10000000000000001e-36;let be=ce[0];for(let Pe=1;Pe<=ce.length;Pe++){const lt=Pe%ce.length,tt=ce[lt],ft=tt.x-be.x,St=tt.y-be.y,N=ft*ft+St*St,$t=Math.max(Math.abs(tt.x),Math.abs(tt.y),Math.abs(be.x),Math.abs(be.y)),Bt=Se*$t*$t;if(N<=Bt){ce.splice(lt,1),Pe--;continue}be=tt}}W(L),U.forEach(W);const F=U.length,X=L;for(let ce=0;ce<F;ce++){const xe=U[ce];L=L.concat(xe)}function q(ce,xe,Se){return xe||wt("ExtrudeGeometry: vec does not exist"),ce.clone().addScaledVector(xe,Se)}const te=L.length;function _e(ce,xe,Se){let be,Pe,lt;const tt=ce.x-xe.x,ft=ce.y-xe.y,St=Se.x-ce.x,N=Se.y-ce.y,$t=tt*tt+ft*ft,Bt=tt*N-ft*St;if(Math.abs(Bt)>Number.EPSILON){const C=Math.sqrt($t),_=Math.sqrt(St*St+N*N),H=xe.x-ft/C,Y=xe.y+tt/C,re=Se.x-N/_,I=Se.y+St/_,Z=((re-H)*N-(I-Y)*St)/(tt*N-ft*St);be=H+tt*Z-ce.x,Pe=Y+ft*Z-ce.y;const k=be*be+Pe*Pe;if(k<=2)return new Ce(be,Pe);lt=Math.sqrt(k/2)}else{let C=!1;tt>Number.EPSILON?St>Number.EPSILON&&(C=!0):tt<-Number.EPSILON?St<-Number.EPSILON&&(C=!0):Math.sign(ft)===Math.sign(N)&&(C=!0),C?(be=-ft,Pe=tt,lt=Math.sqrt($t)):(be=tt,Pe=ft,lt=Math.sqrt($t/2))}return new Ce(be/lt,Pe/lt)}const ne=[];for(let ce=0,xe=X.length,Se=xe-1,be=ce+1;ce<xe;ce++,Se++,be++)Se===xe&&(Se=0),be===xe&&(be=0),ne[ce]=_e(X[ce],X[Se],X[be]);const ue=[];let de,Qe=ne.concat();for(let ce=0,xe=F;ce<xe;ce++){const Se=U[ce];de=[];for(let be=0,Pe=Se.length,lt=Pe-1,tt=be+1;be<Pe;be++,lt++,tt++)lt===Pe&&(lt=0),tt===Pe&&(tt=0),de[be]=_e(Se[be],Se[lt],Se[tt]);ue.push(de),Qe=Qe.concat(de)}let Xe;if(m===0)Xe=Oo.triangulateShape(X,U);else{const ce=[],xe=[];for(let Se=0;Se<m;Se++){const be=Se/m,Pe=f*Math.cos(be*Math.PI/2),lt=g*Math.sin(be*Math.PI/2)+y;for(let tt=0,ft=X.length;tt<ft;tt++){const St=q(X[tt],ne[tt],lt);Re(St.x,St.y,-Pe),be===0&&ce.push(St)}for(let tt=0,ft=F;tt<ft;tt++){const St=U[tt];de=ue[tt];const N=[];for(let $t=0,Bt=St.length;$t<Bt;$t++){const C=q(St[$t],de[$t],lt);Re(C.x,C.y,-Pe),be===0&&N.push(C)}be===0&&xe.push(N)}}Xe=Oo.triangulateShape(ce,xe)}const sn=Xe.length,At=g+y;for(let ce=0;ce<te;ce++){const xe=h?q(L[ce],Qe[ce],At):L[ce];v?(P.copy(T.normals[0]).multiplyScalar(xe.x),E.copy(T.binormals[0]).multiplyScalar(xe.y),x.copy(A[0]).add(P).add(E),Re(x.x,x.y,x.z)):Re(xe.x,xe.y,0)}for(let ce=1;ce<=u;ce++)for(let xe=0;xe<te;xe++){const Se=h?q(L[xe],Qe[xe],At):L[xe];v?(P.copy(T.normals[ce]).multiplyScalar(Se.x),E.copy(T.binormals[ce]).multiplyScalar(Se.y),x.copy(A[ce]).add(P).add(E),Re(x.x,x.y,x.z)):Re(Se.x,Se.y,d/u*ce)}for(let ce=m-1;ce>=0;ce--){const xe=ce/m,Se=f*Math.cos(xe*Math.PI/2),be=g*Math.sin(xe*Math.PI/2)+y;for(let Pe=0,lt=X.length;Pe<lt;Pe++){const tt=q(X[Pe],ne[Pe],be);Re(tt.x,tt.y,d+Se)}for(let Pe=0,lt=U.length;Pe<lt;Pe++){const tt=U[Pe];de=ue[Pe];for(let ft=0,St=tt.length;ft<St;ft++){const N=q(tt[ft],de[ft],be);v?Re(N.x,N.y+A[u-1].y,A[u-1].x+Se):Re(N.x,N.y,d+Se)}}}Dt(),ie();function Dt(){const ce=i.length/3;if(h){let xe=0,Se=te*xe;for(let be=0;be<sn;be++){const Pe=Xe[be];xt(Pe[2]+Se,Pe[1]+Se,Pe[0]+Se)}xe=u+m*2,Se=te*xe;for(let be=0;be<sn;be++){const Pe=Xe[be];xt(Pe[0]+Se,Pe[1]+Se,Pe[2]+Se)}}else{for(let xe=0;xe<sn;xe++){const Se=Xe[xe];xt(Se[2],Se[1],Se[0])}for(let xe=0;xe<sn;xe++){const Se=Xe[xe];xt(Se[0]+te*u,Se[1]+te*u,Se[2]+te*u)}}n.addGroup(ce,i.length/3-ce,0)}function ie(){const ce=i.length/3;let xe=0;ae(X,xe),xe+=X.length;for(let Se=0,be=U.length;Se<be;Se++){const Pe=U[Se];ae(Pe,xe),xe+=Pe.length}n.addGroup(ce,i.length/3-ce,1)}function ae(ce,xe){let Se=ce.length;for(;--Se>=0;){const be=Se;let Pe=Se-1;Pe<0&&(Pe=ce.length-1);for(let lt=0,tt=u+m*2;lt<tt;lt++){const ft=te*lt,St=te*(lt+1),N=xe+be+ft,$t=xe+Pe+ft,Bt=xe+Pe+St,C=xe+be+St;qe(N,$t,Bt,C)}}}function Re(ce,xe,Se){l.push(ce),l.push(xe),l.push(Se)}function xt(ce,xe,Se){Mt(ce),Mt(xe),Mt(Se);const be=i.length/3,Pe=w.generateTopUV(n,i,be-3,be-2,be-1);an(Pe[0]),an(Pe[1]),an(Pe[2])}function qe(ce,xe,Se,be){Mt(ce),Mt(xe),Mt(be),Mt(xe),Mt(Se),Mt(be);const Pe=i.length/3,lt=w.generateSideWallUV(n,i,Pe-6,Pe-3,Pe-2,Pe-1);an(lt[0]),an(lt[1]),an(lt[3]),an(lt[1]),an(lt[2]),an(lt[3])}function Mt(ce){i.push(l[ce*3+0]),i.push(l[ce*3+1]),i.push(l[ce*3+2])}function an(ce){r.push(ce.x),r.push(ce.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return fx(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Vc[i.type]().fromJSON(i)),new Jc(n,e.options)}}const dx={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new Ce(r,o),new Ce(a,l),new Ce(c,u)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],d=e[n*3+2],h=e[i*3],f=e[i*3+1],g=e[i*3+2],y=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Ce(o,1-l),new Ce(c,1-d),new Ce(h,1-g),new Ce(y,1-p)]:[new Ce(a,1-l),new Ce(u,1-d),new Ce(f,1-g),new Ce(m,1-p)]}};function fx(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Kd extends un{constructor(e=[new Ce(0,-.5),new Ce(.5,0),new Ce(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=qt(i,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/t,d=new S,h=new Ce,f=new S,g=new S,y=new S;let m=0,p=0;for(let w=0;w<=e.length-1;w++)switch(w){case 0:m=e[w+1].x-e[w].x,p=e[w+1].y-e[w].y,f.x=p*1,f.y=-m,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:m=e[w+1].x-e[w].x,p=e[w+1].y-e[w].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(g)}for(let w=0;w<=t;w++){const A=n+w*u*i,v=Math.sin(A),T=Math.cos(A);for(let E=0;E<=e.length-1;E++){d.x=e[E].x*v,d.y=e[E].y,d.z=e[E].x*T,o.push(d.x,d.y,d.z),h.x=w/t,h.y=E/(e.length-1),a.push(h.x,h.y);const P=l[3*E+0]*v,x=l[3*E+1],R=l[3*E+0]*T;c.push(P,x,R)}}for(let w=0;w<t;w++)for(let A=0;A<e.length-1;A++){const v=A+w*e.length,T=v,E=v+e.length,P=v+e.length+1,x=v+1;r.push(T,E,x),r.push(P,x,E)}this.setIndex(r),this.setAttribute("position",new on(o,3)),this.setAttribute("uv",new on(a,2)),this.setAttribute("normal",new on(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kd(e.points,e.segments,e.phiStart,e.phiLength)}}class ll extends un{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,d=e/a,h=t/l,f=[],g=[],y=[],m=[];for(let p=0;p<u;p++){const w=p*h-o;for(let A=0;A<c;A++){const v=A*d-r;g.push(v,-w,0),y.push(0,0,1),m.push(A/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<a;w++){const A=w+c*p,v=w+c*(p+1),T=w+1+c*(p+1),E=w+1+c*p;f.push(A,v,E),f.push(v,T,E)}this.setIndex(f),this.setAttribute("position",new on(g,3)),this.setAttribute("normal",new on(y,3)),this.setAttribute("uv",new on(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xr extends un{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new S,h=new S,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){const w=[],A=p/n,v=o+A*a,T=e*Math.cos(v),E=Math.sqrt(e*e-T*T);let P=0;p===0&&o===0?P=.5/t:p===n&&l===Math.PI&&(P=-.5/t);for(let x=0;x<=t;x++){const R=x/t,L=i+R*r;d.x=-E*Math.cos(L),d.y=T,d.z=E*Math.sin(L),g.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),m.push(R+P,1-A),w.push(c++)}u.push(w)}for(let p=0;p<n;p++)for(let w=0;w<t;w++){const A=u[p][w+1],v=u[p][w],T=u[p+1][w],E=u[p+1][w+1];(p!==0||o>0)&&f.push(A,v,E),(p!==n-1||l<Math.PI)&&f.push(v,T,E)}this.setIndex(f),this.setAttribute("position",new on(g,3)),this.setAttribute("normal",new on(y,3)),this.setAttribute("uv",new on(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class el extends un{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],u=[],d=[],h=new S,f=new S,g=new S;for(let y=0;y<=n;y++){const m=o+y/n*a;for(let p=0;p<=i;p++){const w=p/i*r;f.x=(e+t*Math.cos(m))*Math.cos(w),f.y=(e+t*Math.cos(m))*Math.sin(w),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),h.x=e*Math.cos(w),h.y=e*Math.sin(w),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(p/i),d.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=i;m++){const p=(i+1)*y+m-1,w=(i+1)*(y-1)+m-1,A=(i+1)*(y-1)+m,v=(i+1)*y+m;l.push(p,w,v),l.push(w,A,v)}this.setIndex(l),this.setAttribute("position",new on(c,3)),this.setAttribute("normal",new on(u,3)),this.setAttribute("uv",new on(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class os extends un{constructor(e=new u0(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new S,l=new S,c=new Ce;let u=new S;const d=[],h=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new on(d,3)),this.setAttribute("normal",new on(h,3)),this.setAttribute("uv",new on(f,2));function y(){for(let A=0;A<t;A++)m(A);m(r===!1?t:0),w(),p()}function m(A){u=e.getPointAt(A/t,u);const v=o.normals[A],T=o.binormals[A];for(let E=0;E<=i;E++){const P=E/i*Math.PI*2,x=Math.sin(P),R=-Math.cos(P);l.x=R*v.x+x*T.x,l.y=R*v.y+x*T.y,l.z=R*v.z+x*T.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let A=1;A<=t;A++)for(let v=1;v<=i;v++){const T=(i+1)*(A-1)+(v-1),E=(i+1)*A+(v-1),P=(i+1)*A+v,x=(i+1)*(A-1)+v;g.push(T,E,x),g.push(E,P,x)}}function w(){for(let A=0;A<=t;A++)for(let v=0;v<=i;v++)c.x=A/t,c.y=v/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new os(new Vc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Yo(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];if(Op(i))i.isRenderTargetTexture?(dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Op(i[0])){const r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function pi(s){const e={};for(let t=0;t<s.length;t++){const n=Yo(s[t]);for(const i in n)e[i]=n[i]}return e}function Op(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function px(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function g0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:jt.workingColorSpace}const mx={clone:Yo,merge:pi};var gx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_x=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gx,this.fragmentShader=_x,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yo(e.uniforms),this.uniformsGroups=px(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Te().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ce().fromArray(i.value);break;case"v3":this.uniforms[n].value=new S().fromArray(i.value);break;case"v4":this.uniforms[n].value=new wn().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ht().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Gt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class xx extends Xi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class zi extends bs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fd,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class us extends zi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class vx extends bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yx extends bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Bp extends al{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function yr(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Cc(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function Mx(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function kp(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Sx(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Zo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class bx extends Zo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jf,endingEnd:Jf}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Qf:r=e,a=2*t-n;break;case jf:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Qf:o=e,l=2*n-t;break;case jf:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),y=g*g,m=y*g,p=-h*m+2*h*y-h*g,w=(1+h)*m+(-1.5-2*h)*y+(-.5+h)*g+1,A=(-1-f)*m+(1.5+f)*y+.5*g,v=f*m-f*y;for(let T=0;T!==a;++T)r[T]=p*o[u+T]+w*o[c+T]+A*o[l+T]+v*o[d+T];return r}}class Ex extends Zo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),d=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*u;return r}}class Tx extends Zo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class wx extends Zo{interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,d=this.outTangents;if(!u||!d){const g=(n-t)/(i-t),y=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*y+o[l+m]*g;return r}const h=a*2,f=e-1;for(let g=0;g!==a;++g){const y=o[c+g],m=o[l+g],p=f*h+g*2,w=d[p],A=d[p+1],v=e*h+g*2,T=u[v],E=u[v+1],P=Rx(n,t,w,T,i);r[g]=_0(P,y,A,E,m)}return r}}function _0(s,e,t,n,i){const r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function Ax(s,e,t,n,i){const r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function Rx(s,e,t,n,i){let r=(s-e)/(i-e);for(let o=0;o<8;o++){const a=_0(r,e,t,n,i)-s;if(Math.abs(a)<1e-10)break;const l=Ax(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}class hs{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=yr(t,this.TimeBufferType),this.values=yr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:yr(e.times,Array),values:yr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Cc(e.settings)&&(n.settings={inTangents:yr(e.settings.inTangents,Array),outTangents:yr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Tx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ex(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new wx(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case qa:t=this.InterpolantFactoryMethodDiscrete;break;case Ya:t=this.InterpolantFactoryMethodLinear;break;case Uu:t=this.InterpolantFactoryMethodSmooth;break;case $f:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return dt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qa;case this.InterpolantFactoryMethodLinear:return Ya;case this.InterpolantFactoryMethodSmooth:return Uu;case this.InterpolantFactoryMethodBezier:return $f}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Cc(this.settings)&&(zp(this.settings.inTangents,e),zp(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(wt("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(wt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){wt("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){wt("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Hg(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){wt("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Uu,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const d=a*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){const y=t[d+g];if(y!==t[h+g]||y!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*n,h=o*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Cc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function zp(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}hs.prototype.ValueTypeName="";hs.prototype.TimeBufferType=Float32Array;hs.prototype.ValueBufferType=Float32Array;hs.prototype.DefaultInterpolation=Ya;class $o extends hs{constructor(e,t,n){super(e,t,n)}}$o.prototype.ValueTypeName="bool";$o.prototype.ValueBufferType=Array;$o.prototype.DefaultInterpolation=qa;$o.prototype.InterpolantFactoryMethodLinear=void 0;$o.prototype.InterpolantFactoryMethodSmooth=void 0;class x0 extends hs{constructor(e,t,n,i){super(e,t,n,i)}}x0.prototype.ValueTypeName="color";class tl extends hs{constructor(e,t,n,i){super(e,t,n,i)}}tl.prototype.ValueTypeName="number";class Cx extends Zo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Hn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class nl extends hs{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Cx(this.times,this.values,this.getValueSize(),e)}}nl.prototype.ValueTypeName="quaternion";nl.prototype.InterpolantFactoryMethodSmooth=void 0;class Jo extends hs{constructor(e,t,n){super(e,t,n)}}Jo.prototype.ValueTypeName="string";Jo.prototype.ValueBufferType=Array;Jo.prototype.DefaultInterpolation=qa;Jo.prototype.InterpolantFactoryMethodLinear=void 0;Jo.prototype.InterpolantFactoryMethodSmooth=void 0;class Wc extends hs{constructor(e,t,n,i){super(e,t,n,i)}}Wc.prototype.ValueTypeName="vector";class Px{constructor(e="",t=-1,n=[],i=Rg){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Wi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Ix(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(hs.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=Mx(l);l=kp(l,1,u),c=kp(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new tl(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const d=u[1];let h=i[d];h||(i[d]=h=[]),h.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Lx(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return tl;case"vector":case"vector2":case"vector3":case"vector4":return Wc;case"color":return x0;case"quaternion":return nl;case"bool":case"boolean":return $o;case"string":return Jo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Ix(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Lx(s.type);if(s.times===void 0){const n=[],i=[];Sx(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),Cc(s.settings)&&(t.settings={inTangents:yr(s.settings.inTangents,Float32Array),outTangents:yr(s.settings.outTangents,Float32Array)}),t}const $s={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Hp(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Hp(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Hp(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Nx{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Dx=new Nx;class jr{constructor(e){this.manager=e!==void 0?e:Dx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}jr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xs={};class Ux extends Error{constructor(e,t){super(e),this.response=t}}class Xc extends jr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=$s.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Xs[e]!==void 0){Xs[e].push({onLoad:t,onProgress:n,onError:i});return}Xs[e]=[],Xs[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&dt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Xs[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=h?parseInt(h):0,g=f!==0;let y=0;const m=new ReadableStream({start(p){w();function w(){d.read().then(({done:A,value:v})=>{if(A)p.close();else{y+=v.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:f});for(let E=0,P=u.length;E<P;E++){const x=u[E];x.onProgress&&x.onProgress(T)}p.enqueue(v),w()}},A=>{p.error(A)})}}});return new Response(m)}else throw new Ux(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{$s.add(`file:${e}`,c);const u=Xs[e];delete Xs[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Xs[e];if(u===void 0)throw this.manager.itemError(e),c;delete Xs[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Po=new WeakMap;class Fx extends jr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=$s.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=Po.get(o);d===void 0&&(d=[],Po.set(o,d)),d.push({onLoad:t,onError:i})}return o}const a=Za("img");function l(){u(),t&&t(this);const d=Po.get(this)||[];for(let h=0;h<d.length;h++){const f=d[h];f.onLoad&&f.onLoad(this)}Po.delete(this),r.manager.itemEnd(e)}function c(d){u(),i&&i(d),$s.remove(`image:${e}`);const h=Po.get(this)||[];for(let f=0;f<h.length;f++){const g=h[f];g.onError&&g.onError(d)}Po.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),$s.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class Ox extends jr{constructor(e){super(e)}load(e,t,n,i){const r=new Qn,o=new Fx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class cl extends An{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Bx extends cl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const uh=new Gt,Gp=new S,Vp=new S;class Zd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.mapType=Ii,this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wd,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new wn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Gp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gp),Vp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){uh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(uh,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===Ka||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(uh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const xc=new S,vc=new Hn,ms=new S;class v0 extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=Ms,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xc,vc,ms),ms.x===1&&ms.y===1&&ms.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xc,vc,ms.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(xc,vc,ms),ms.x===1&&ms.y===1&&ms.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xc,vc,ms.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const _r=new S,Wp=new Ce,Xp=new Ce;class gi extends v0{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xo*2*Math.atan(Math.tan(Ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,t){return this.getViewBounds(e,Wp,Xp),t.subVectors(Xp,Wp)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ba*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class kx extends Zd{constructor(){super(new gi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Xo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class zx extends cl{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new kx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Hx extends Zd{constructor(){super(new gi(90,1,.5,500)),this.isPointLightShadow=!0}}class Gx extends cl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Hx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Qc extends v0{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Vx extends Zd{constructor(){super(new Qc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pc extends cl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new Vx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Wx extends cl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Sr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const hh=new WeakMap;class Xx extends jr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&dt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&dt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=$s.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{hh.has(o)===!0?(i&&i(hh.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return $s.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),hh.set(l,c),$s.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});$s.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Lo=-90,Io=1;class qx extends An{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new gi(Lo,Io,e,t);i.layers=this.layers,this.add(i);const r=new gi(Lo,Io,e,t);r.layers=this.layers,this.add(r);const o=new gi(Lo,Io,e,t);o.layers=this.layers,this.add(o);const a=new gi(Lo,Io,e,t);a.layers=this.layers,this.add(a);const l=new gi(Lo,Io,e,t);l.layers=this.layers,this.add(l);const c=new gi(Lo,Io,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ms)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ka)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Yx extends gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const $d="\\[\\]\\.:\\/",Kx=new RegExp("["+$d+"]","g"),Jd="[^"+$d+"]",Zx="[^"+$d.replace("\\.","")+"]",$x=/((?:WC+[\/:])*)/.source.replace("WC",Jd),Jx=/(WCOD+)?/.source.replace("WCOD",Zx),Qx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jd),jx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jd),ev=new RegExp("^"+$x+Jx+Qx+jx+"$"),tv=["material","materials","bones","map"];class nv{constructor(e,t,n){const i=n||Sn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Sn{constructor(e,t,n){this.path=t,this.parsedPath=n||Sn.parseTrackName(t),this.node=Sn.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Sn.Composite(e,t,n):new Sn(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Kx,"")}static parseTrackName(e){const t=ev.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);tv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Sn.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){dt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){wt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){wt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){wt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){wt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){wt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;wt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Sn.Composite=nv;Sn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Sn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Sn.prototype.GetterByBindingType=[Sn.prototype._getValue_direct,Sn.prototype._getValue_array,Sn.prototype._getValue_arrayElement,Sn.prototype._getValue_toArray];Sn.prototype.SetterByBindingTypeAndVersioning=[[Sn.prototype._setValue_direct,Sn.prototype._setValue_direct_setNeedsUpdate,Sn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Sn.prototype._setValue_array,Sn.prototype._setValue_array_setNeedsUpdate,Sn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Sn.prototype._setValue_arrayElement,Sn.prototype._setValue_arrayElement_setNeedsUpdate,Sn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Sn.prototype._setValue_fromArray,Sn.prototype._setValue_fromArray_setNeedsUpdate,Sn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const qp=new Gt;class iv{constructor(e,t,n=0,i=1/0){this.ray=new ol(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new zd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):wt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return qp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qp),this}intersectObject(e,t=!0,n=[]){return _d(e,this,n,t),n.sort(Yp),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)_d(e[i],this,n,t);return n.sort(Yp),n}}function Yp(s,e){return s.distance-e.distance}function _d(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)_d(r[o],e,t,!0)}}class sv{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=qt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(qt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const nf=class nf{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};nf.prototype.isMatrix2=!0;let Kp=nf;const Zp=new S;let yc,dh;class fh extends An{constructor(e=new S(0,0,1),t=new S(0,0,0),n=1,i=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",yc===void 0&&(yc=new un,yc.setAttribute("position",new on([0,0,0,0,1,0],3)),dh=new Ys(.5,1,5,1),dh.translate(0,-.5,0)),this.position.copy(t),this.line=new Yr(yc,new al({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new at(dh,new Tn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Zp.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Zp,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}function $p(s,e,t,n){const i=rv(n);switch(t){case Ym:return s*e;case Id:return s*e/i.components*i.byteLength;case Nd:return s*e/i.components*i.byteLength;case $r:return s*e*2/i.components*i.byteLength;case Dd:return s*e*2/i.components*i.byteLength;case Km:return s*e*3/i.components*i.byteLength;case Vi:return s*e*4/i.components*i.byteLength;case Ud:return s*e*4/i.components*i.byteLength;case Tc:case wc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ac:case Rc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Oh:case kh:return Math.max(s,16)*Math.max(e,8)/4;case Fh:case Bh:return Math.max(s,8)*Math.max(e,8)/2;case zh:case Hh:case Vh:case Wh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Gh:case Fc:case Xh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Yh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Kh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Zh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case $h:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Jh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case jh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ed:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case td:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case nd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case id:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case sd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case rd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case od:case ad:case ld:return Math.ceil(s/4)*Math.ceil(e/4)*16;case cd:case ud:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Oc:case hd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rv(s){switch(s){case Ii:case Vm:return{byteLength:1,components:1};case Wa:case Wm:case Ts:return{byteLength:2,components:1};case Pd:case Ld:return{byteLength:2,components:4};case Es:case Cd:case Gi:return{byteLength:4,components:1};case Xm:case qm:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ad}}));typeof window<"u"&&(window.__THREE__?dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ad);function y0(){let s=null,e=!1,t=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function ov(s){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=s.createBuffer();s.bindBuffer(l,h),s.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++h,d[h]=y)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const y=d[f];s.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var av=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,gv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_v=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Mv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ev=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Av=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Pv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Iv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Nv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ov="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,zv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Hv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$v=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,jv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ey=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ty=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ny=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ry=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,oy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ay=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ly=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cy=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,uy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,py=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,my=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_y=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,My=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,by=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ey=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ty=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ay=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Py=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ly=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Iy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ny=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Uy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Oy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,By=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ky=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Wy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ky=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$y=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,iM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,oM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,_M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,SM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,RM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,CM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,IM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,FM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:av,alphahash_pars_fragment:lv,alphamap_fragment:cv,alphamap_pars_fragment:uv,alphatest_fragment:hv,alphatest_pars_fragment:dv,aomap_fragment:fv,aomap_pars_fragment:pv,batching_pars_vertex:mv,batching_vertex:gv,begin_vertex:_v,beginnormal_vertex:xv,bsdfs:vv,iridescence_fragment:yv,bumpmap_pars_fragment:Mv,clipping_planes_fragment:Sv,clipping_planes_pars_fragment:bv,clipping_planes_pars_vertex:Ev,clipping_planes_vertex:Tv,color_fragment:wv,color_pars_fragment:Av,color_pars_vertex:Rv,color_vertex:Cv,common:Pv,cube_uv_reflection_fragment:Lv,defaultnormal_vertex:Iv,displacementmap_pars_vertex:Nv,displacementmap_vertex:Dv,emissivemap_fragment:Uv,emissivemap_pars_fragment:Fv,colorspace_fragment:Ov,colorspace_pars_fragment:Bv,envmap_fragment:kv,envmap_common_pars_fragment:zv,envmap_pars_fragment:Hv,envmap_pars_vertex:Gv,envmap_physical_pars_fragment:jv,envmap_vertex:Vv,fog_vertex:Wv,fog_pars_vertex:Xv,fog_fragment:qv,fog_pars_fragment:Yv,gradientmap_pars_fragment:Kv,lightmap_pars_fragment:Zv,lights_lambert_fragment:$v,lights_lambert_pars_fragment:Jv,lights_pars_begin:Qv,lights_toon_fragment:ey,lights_toon_pars_fragment:ty,lights_phong_fragment:ny,lights_phong_pars_fragment:iy,lights_physical_fragment:sy,lights_physical_pars_fragment:ry,lights_fragment_begin:oy,lights_fragment_maps:ay,lights_fragment_end:ly,lightprobes_pars_fragment:cy,logdepthbuf_fragment:uy,logdepthbuf_pars_fragment:hy,logdepthbuf_pars_vertex:dy,logdepthbuf_vertex:fy,map_fragment:py,map_pars_fragment:my,map_particle_fragment:gy,map_particle_pars_fragment:_y,metalnessmap_fragment:xy,metalnessmap_pars_fragment:vy,morphinstance_vertex:yy,morphcolor_vertex:My,morphnormal_vertex:Sy,morphtarget_pars_vertex:by,morphtarget_vertex:Ey,normal_fragment_begin:Ty,normal_fragment_maps:wy,normal_pars_fragment:Ay,normal_pars_vertex:Ry,normal_vertex:Cy,normalmap_pars_fragment:Py,clearcoat_normal_fragment_begin:Ly,clearcoat_normal_fragment_maps:Iy,clearcoat_pars_fragment:Ny,iridescence_pars_fragment:Dy,opaque_fragment:Uy,packing:Fy,premultiplied_alpha_fragment:Oy,project_vertex:By,dithering_fragment:ky,dithering_pars_fragment:zy,roughnessmap_fragment:Hy,roughnessmap_pars_fragment:Gy,shadowmap_pars_fragment:Vy,shadowmap_pars_vertex:Wy,shadowmap_vertex:Xy,shadowmask_pars_fragment:qy,skinbase_vertex:Yy,skinning_pars_vertex:Ky,skinning_vertex:Zy,skinnormal_vertex:$y,specularmap_fragment:Jy,specularmap_pars_fragment:Qy,tonemapping_fragment:jy,tonemapping_pars_fragment:eM,transmission_fragment:tM,transmission_pars_fragment:nM,uv_pars_fragment:iM,uv_pars_vertex:sM,uv_vertex:rM,worldpos_vertex:oM,background_vert:aM,background_frag:lM,backgroundCube_vert:cM,backgroundCube_frag:uM,cube_vert:hM,cube_frag:dM,depth_vert:fM,depth_frag:pM,distance_vert:mM,distance_frag:gM,equirect_vert:_M,equirect_frag:xM,linedashed_vert:vM,linedashed_frag:yM,meshbasic_vert:MM,meshbasic_frag:SM,meshlambert_vert:bM,meshlambert_frag:EM,meshmatcap_vert:TM,meshmatcap_frag:wM,meshnormal_vert:AM,meshnormal_frag:RM,meshphong_vert:CM,meshphong_frag:PM,meshphysical_vert:LM,meshphysical_frag:IM,meshtoon_vert:NM,meshtoon_frag:DM,points_vert:UM,points_frag:FM,shadow_vert:OM,shadow_frag:BM,sprite_vert:kM,sprite_frag:zM},We={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new S},probesMax:{value:new S},probesResolution:{value:new S}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},xs={basic:{uniforms:pi([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:pi([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Te(0)},envMapIntensity:{value:1}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:pi([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:pi([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:pi([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new Te(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:pi([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:pi([We.points,We.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:pi([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:pi([We.common,We.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:pi([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:pi([We.sprite,We.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distance:{uniforms:pi([We.common,We.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distance_vert,fragmentShader:Kt.distance_frag},shadow:{uniforms:pi([We.lights,We.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};xs.physical={uniforms:pi([xs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const Mc={r:0,b:0,g:0},HM=new Gt,M0=new Ht;M0.set(-1,0,0,0,1,0,0,0,1);function GM(s,e,t,n,i,r){const o=new Te(0);let a=i===!0?0:1,l,c,u=null,d=0,h=null;function f(w){let A=w.isScene===!0?w.background:null;if(A&&A.isTexture){const v=w.backgroundBlurriness>0;A=e.get(A,v)}return A}function g(w){let A=!1;const v=f(w);v===null?m(o,a):v&&v.isColor&&(m(v,1),A=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(w,A){const v=f(A);v&&(v.isCubeTexture||v.mapping===Zc)?(c===void 0&&(c=new at(new mi(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:Yo(xs.backgroundCube.uniforms),vertexShader:xs.backgroundCube.vertexShader,fragmentShader:xs.backgroundCube.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(HM.makeRotationFromEuler(A.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(M0),c.material.toneMapped=jt.getTransfer(v.colorSpace)!==yn,(u!==v||d!==v.version||h!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,h=s.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new at(new ll(2,2),new Xi({name:"BackgroundMaterial",uniforms:Yo(xs.background.uniforms),vertexShader:xs.background.vertexShader,fragmentShader:xs.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=jt.getTransfer(v.colorSpace)!==yn,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||h!==s.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,h=s.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function m(w,A){w.getRGB(Mc,g0(s)),t.buffers.color.setClear(Mc.r,Mc.g,Mc.b,A,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,A=1){o.set(w),a=A,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(w){a=w,m(o,a)},render:g,addToRenderList:y,dispose:p}}function VM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=h(null);let r=i,o=!1;function a(U,V,W,F,X){let q=!1;const te=d(U,F,W,V);r!==te&&(r=te,c(r.object)),q=f(U,F,W,X),q&&g(U,F,W,X),X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(U,V,W,F),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return s.createVertexArray()}function c(U){return s.bindVertexArray(U)}function u(U){return s.deleteVertexArray(U)}function d(U,V,W,F){const X=F.wireframe===!0;let q=n[V.id];q===void 0&&(q={},n[V.id]=q);const te=U.isInstancedMesh===!0?U.id:0;let _e=q[te];_e===void 0&&(_e={},q[te]=_e);let ne=_e[W.id];ne===void 0&&(ne={},_e[W.id]=ne);let ue=ne[X];return ue===void 0&&(ue=h(l()),ne[X]=ue),ue}function h(U){const V=[],W=[],F=[];for(let X=0;X<t;X++)V[X]=0,W[X]=0,F[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:W,attributeDivisors:F,object:U,attributes:{},index:null}}function f(U,V,W,F){const X=r.attributes,q=V.attributes;let te=0;const _e=W.getAttributes();for(const ne in _e)if(_e[ne].location>=0){const de=X[ne];let Qe=q[ne];if(Qe===void 0&&(ne==="instanceMatrix"&&U.instanceMatrix&&(Qe=U.instanceMatrix),ne==="instanceColor"&&U.instanceColor&&(Qe=U.instanceColor)),de===void 0||de.attribute!==Qe||Qe&&de.data!==Qe.data)return!0;te++}return r.attributesNum!==te||r.index!==F}function g(U,V,W,F){const X={},q=V.attributes;let te=0;const _e=W.getAttributes();for(const ne in _e)if(_e[ne].location>=0){let de=q[ne];de===void 0&&(ne==="instanceMatrix"&&U.instanceMatrix&&(de=U.instanceMatrix),ne==="instanceColor"&&U.instanceColor&&(de=U.instanceColor));const Qe={};Qe.attribute=de,de&&de.data&&(Qe.data=de.data),X[ne]=Qe,te++}r.attributes=X,r.attributesNum=te,r.index=F}function y(){const U=r.newAttributes;for(let V=0,W=U.length;V<W;V++)U[V]=0}function m(U){p(U,0)}function p(U,V){const W=r.newAttributes,F=r.enabledAttributes,X=r.attributeDivisors;W[U]=1,F[U]===0&&(s.enableVertexAttribArray(U),F[U]=1),X[U]!==V&&(s.vertexAttribDivisor(U,V),X[U]=V)}function w(){const U=r.newAttributes,V=r.enabledAttributes;for(let W=0,F=V.length;W<F;W++)V[W]!==U[W]&&(s.disableVertexAttribArray(W),V[W]=0)}function A(U,V,W,F,X,q,te){te===!0?s.vertexAttribIPointer(U,V,W,X,q):s.vertexAttribPointer(U,V,W,F,X,q)}function v(U,V,W,F){y();const X=F.attributes,q=W.getAttributes(),te=V.defaultAttributeValues;for(const _e in q){const ne=q[_e];if(ne.location>=0){let ue=X[_e];if(ue===void 0&&(_e==="instanceMatrix"&&U.instanceMatrix&&(ue=U.instanceMatrix),_e==="instanceColor"&&U.instanceColor&&(ue=U.instanceColor)),ue!==void 0){const de=ue.normalized,Qe=ue.itemSize,Xe=e.get(ue);if(Xe===void 0)continue;const sn=Xe.buffer,At=Xe.type,Dt=Xe.bytesPerElement,ie=At===s.INT||At===s.UNSIGNED_INT||ue.gpuType===Cd;if(ue.isInterleavedBufferAttribute){const ae=ue.data,Re=ae.stride,xt=ue.offset;if(ae.isInstancedInterleavedBuffer){for(let qe=0;qe<ne.locationSize;qe++)p(ne.location+qe,ae.meshPerAttribute);U.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let qe=0;qe<ne.locationSize;qe++)m(ne.location+qe);s.bindBuffer(s.ARRAY_BUFFER,sn);for(let qe=0;qe<ne.locationSize;qe++)A(ne.location+qe,Qe/ne.locationSize,At,de,Re*Dt,(xt+Qe/ne.locationSize*qe)*Dt,ie)}else{if(ue.isInstancedBufferAttribute){for(let ae=0;ae<ne.locationSize;ae++)p(ne.location+ae,ue.meshPerAttribute);U.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ae=0;ae<ne.locationSize;ae++)m(ne.location+ae);s.bindBuffer(s.ARRAY_BUFFER,sn);for(let ae=0;ae<ne.locationSize;ae++)A(ne.location+ae,Qe/ne.locationSize,At,de,Qe*Dt,Qe/ne.locationSize*ae*Dt,ie)}}else if(te!==void 0){const de=te[_e];if(de!==void 0)switch(de.length){case 2:s.vertexAttrib2fv(ne.location,de);break;case 3:s.vertexAttrib3fv(ne.location,de);break;case 4:s.vertexAttrib4fv(ne.location,de);break;default:s.vertexAttrib1fv(ne.location,de)}}}}w()}function T(){R();for(const U in n){const V=n[U];for(const W in V){const F=V[W];for(const X in F){const q=F[X];for(const te in q)u(q[te].object),delete q[te];delete F[X]}}delete n[U]}}function E(U){if(n[U.id]===void 0)return;const V=n[U.id];for(const W in V){const F=V[W];for(const X in F){const q=F[X];for(const te in q)u(q[te].object),delete q[te];delete F[X]}}delete n[U.id]}function P(U){for(const V in n){const W=n[V];for(const F in W){const X=W[F];if(X[U.id]===void 0)continue;const q=X[U.id];for(const te in q)u(q[te].object),delete q[te];delete X[U.id]}}}function x(U){for(const V in n){const W=n[V],F=U.isInstancedMesh===!0?U.id:0,X=W[F];if(X!==void 0){for(const q in X){const te=X[q];for(const _e in te)u(te[_e].object),delete te[_e];delete X[q]}delete W[F],Object.keys(W).length===0&&delete n[V]}}}function R(){L(),o=!0,r!==i&&(r=i,c(r.object))}function L(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:L,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:P,initAttributes:y,enableAttribute:m,disableUnusedAttributes:w}}function WM(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(s.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function XM(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(P){return!(P!==Vi&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const x=P===Ts&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Ii&&P!==Gi&&!x&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(dt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),A=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:A,maxFragmentUniforms:v,maxSamples:T,samples:E}}function qM(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Hi,a=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const w=r?0:n,A=w*4;let v=p.clippingState||null;l.value=v,v=u(g,h,A,f);for(let T=0;T!==A;++T)v[T]=t[T];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,g){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const p=f+y*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,v=f;A!==y;++A,v+=4)o.copy(d[A]).applyMatrix4(w,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}const Bo=4,YM=6,KM=20,ZM=256,Aa=new Qc,Jp=new Te;let ph=null,mh=0,gh=0,_h=!1;const $M=new S,Vr=new S;class xd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=$M}=r;ph=this._renderer.getRenderTarget(),mh=this._renderer.getActiveCubeFace(),gh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=em(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ph,mh,gh),this._renderer.xr.enabled=_h,e.scissorTest=!1,No(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zr||e.mapping===Wo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ph=this._renderer.getRenderTarget(),mh=this._renderer.getActiveCubeFace(),gh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Ts,format:Vi,colorSpace:bi,depthBuffer:!1},i=Qp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qp(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=JM(r)),this._blurMaterial=jM(r,e,t),this._ggxMaterial=QM(r,e,t)}return i}_compileMaterial(e){const t=new at(new un,e);this._renderer.compile(t,Aa)}_sceneToCubeUV(e,t,n,i,r){const l=new gi(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Jp),d.toneMapping=Ss,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new at(new mi,new Tn({name:"PMREM.Background",side:Si,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let p=!1;const w=e.background;w?w.isColor&&(m.color.copy(w),e.background=null,p=!0):(m.color.copy(Jp),p=!0);for(let A=0;A<6;A++){const v=A%3;v===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):v===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));const T=this._cubeSize;No(i,v*T,A>2?T:0,T,T),d.setRenderTarget(i),p&&d.render(y,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=w}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Zr||e.mapping===Wo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=em()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jp());const r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;No(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Aa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,f=d*h,{_lodMax:g}=this,y=this._sizeLods[n],m=3*y*(n>g-Bo?n-g+Bo:0),p=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,No(r,m,p,3*y,2*y),i.setRenderTarget(r),i.render(a,Aa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,No(e,m,p,3*y,2*y),i.setRenderTarget(e),i.render(a,Aa)}_blur(e,t,n,i){const r=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,i,r){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;const c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const u=this._sizeLods[i],d=3*u*(i>this._lodMax-Bo?i-this._lodMax+Bo:0),h=4*(this._cubeSize-u);No(t,d,h,3*u,2*u),o.setRenderTarget(t),o.render(l,Aa)}}function JM(s){const e=[],t=[];let n=s;const i=s-Bo+1+YM;for(let r=0;r<i;r++){const o=Math.pow(2,n);e.push(o);const a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,g=new Float32Array(f*h*d),y=new Float32Array(f*h*d);for(let p=0;p<d;p++){const w=p%3*2/3-1,A=p>2?0:-1,v=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];g.set(v,f*h*p);for(let T=0;T<h;T++){const E=u[T*2]*2-1,P=u[T*2+1]*2-1;p===0?Vr.set(1,P,E):p===1?Vr.set(-E,1,-P):p===2?Vr.set(-E,P,1):p===3?Vr.set(-1,P,-E):p===4?Vr.set(-E,-1,P):Vr.set(E,P,-1),Vr.toArray(y,(p*h+T)*f)}}const m=new un;m.setAttribute("position",new Pn(g,f)),m.setAttribute("outputDirection",new Pn(y,f)),t.push(new at(m,null)),n>Bo&&n--}return{lodMeshes:t,sizeLods:e}}function Qp(s,e,t){const n=new cs(s,e,t);return n.texture.mapping=Zc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function No(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function QM(s,e,t){return new Xi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ZM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Qs,depthTest:!1,depthWrite:!1})}function jM(s,e,t){return new Xi({name:"SphericalGaussianBlur",defines:{SAMPLES:KM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:jc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Qs,depthTest:!1,depthWrite:!1})}function jp(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qs,depthTest:!1,depthWrite:!1})}function em(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qs,depthTest:!1,depthWrite:!1})}function jc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class S0 extends cs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new r0(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new mi(5,5,5),r=new Xi({name:"CubemapFromEquirect",uniforms:Yo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Si,blending:Qs});r.uniforms.tEquirect.value=t;const o=new at(i,r),a=t.minFilter;return t.minFilter===Zs&&(t.minFilter=Gn),new qx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}function eS(s){let e=new WeakMap,t=new WeakMap,n=null;function i(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===Oa||f===Du)if(e.has(h)){const g=e.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const y=new S0(g.height);return y.fromEquirectangularTexture(s,h),e.set(h,y),h.addEventListener("dispose",c),a(y.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const f=h.mapping,g=f===Oa||f===Du,y=f===Zr||f===Wo;if(g||y){let m=t.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new xd(s)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const w=h.image;return g&&w&&w.height>0||y&&w&&l(w)?(n===null&&(n=new xd(s)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,f){return f===Oa?h.mapping=Zr:f===Du&&(h.mapping=Wo),h}function l(h){let f=0;const g=6;for(let y=0;y<g;y++)h[y]!==void 0&&f++;return f===g}function c(h){const f=h.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function tS(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&zo("WebGLRenderer: "+n+" extension not supported."),i}}}function nS(s,e,t,n){const i={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete i[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],s.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,g=d.attributes.position;let y=0;if(g===void 0)return;if(f!==null){const w=f.array;y=f.version;for(let A=0,v=w.length;A<v;A+=3){const T=w[A+0],E=w[A+1],P=w[A+2];h.push(T,E,E,P,P,T)}}else{const w=g.array;y=g.version;for(let A=0,v=w.length/3-1;A<v;A+=3){const T=A+0,E=A+1,P=A+2;h.push(T,E,E,P,P,T)}}const m=new(g.count>=65535?t0:e0)(h,1);m.version=y;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function iS(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){s.drawElements(n,h,r,d*o),t.update(h,n,1)}function c(d,h,f){f!==0&&(s.drawElementsInstanced(n,h,r,d*o,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let y=0;for(let m=0;m<f;m++)y+=h[m];t.update(y,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function sS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:wt("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function rS(s,e,t){const n=new WeakMap,i=new wn;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let R=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",R)};h!==void 0&&h.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let A=0;f===!0&&(A=1),g===!0&&(A=2),y===!0&&(A=3);let v=a.attributes.position.count*A,T=1;v>e.maxTextureSize&&(T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const E=new Float32Array(v*T*4*d),P=new Qm(E,v,T,d);P.type=Gi,P.needsUpdate=!0;const x=A*4;for(let L=0;L<d;L++){const U=m[L],V=p[L],W=w[L],F=v*T*4*L;for(let X=0;X<U.count;X++){const q=X*x;f===!0&&(i.fromBufferAttribute(U,X),E[F+q+0]=i.x,E[F+q+1]=i.y,E[F+q+2]=i.z,E[F+q+3]=0),g===!0&&(i.fromBufferAttribute(V,X),E[F+q+4]=i.x,E[F+q+5]=i.y,E[F+q+6]=i.z,E[F+q+7]=0),y===!0&&(i.fromBufferAttribute(W,X),E[F+q+8]=i.x,E[F+q+9]=i.y,E[F+q+10]=i.z,E[F+q+11]=W.itemSize===4?i.w:1)}}h={count:d,texture:P,size:new Ce(v,T)},n.set(a,h),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function oS(s,e,t,n,i){let r=new WeakMap;function o(c){const u=i.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const aS={[Um]:"LINEAR_TONE_MAPPING",[Fm]:"REINHARD_TONE_MAPPING",[Om]:"CINEON_TONE_MAPPING",[Rd]:"ACES_FILMIC_TONE_MAPPING",[km]:"AGX_TONE_MAPPING",[zm]:"NEUTRAL_TONE_MAPPING",[Bm]:"CUSTOM_TONE_MAPPING"};function lS(s,e,t,n,i,r){const o=new cs(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new un;c.setAttribute("position",new on([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new on([0,2,0,0,2,0],2));const u=new xx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new at(c,u),h=new Qc(-1,1,1,-1,0,1);let f=null,g=null,y=!1,m,p=null,w=[],A=!1;this.setSize=function(v,T){o.setSize(v,T),a!==null&&a.setSize(v,T),l!==null&&l.setSize(v,T);for(let E=0;E<w.length;E++){const P=w[E];P.setSize&&P.setSize(v,T)}},this.setEffects=function(v){w=v,A=w.length>0&&w[0].isRenderPass===!0;const T=o.width,E=o.height;w.length>0&&a===null&&(a=new cs(T,E,{type:Ts,depthBuffer:!1,stencilBuffer:!1}),l=new cs(T,E,{type:Ts,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<w.length;P++){const x=w[P];x.setSize&&x.setSize(T,E)}},this.begin=function(v,T){if(y||v.toneMapping===Ss&&w.length===0)return!1;if(p=T,T!==null){const E=T.width,P=T.height;(o.width!==E||o.height!==P)&&this.setSize(E,P)}return A===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=Ss,!0},this.hasRenderPass=function(){return A},this.end=function(v,T){v.toneMapping=m,y=!0;let E=o,P=a;for(let x=0;x<w.length;x++){const R=w[x];R.enabled!==!1&&(R.render(v,P,E,T),R.needsSwap!==!1&&(E=P,P=P===a?l:a))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,u.defines={},jt.getTransfer(f)===yn&&(u.defines.SRGB_TRANSFER="");const x=aS[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,v.setRenderTarget(p),v.render(d,h),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const b0=new Qn,vd=new $a(1,1),E0=new Qm,T0=new d_,w0=new r0,tm=[],nm=[],im=new Float32Array(16),sm=new Float32Array(9),rm=new Float32Array(4);function Qo(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=tm[i];if(r===void 0&&(r=new Float32Array(i),tm[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function jn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function ei(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function eu(s,e){let t=nm[e];t===void 0&&(t=new Int32Array(e),nm[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function cS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function uS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jn(t,e))return;s.uniform2fv(this.addr,e),ei(t,e)}}function hS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jn(t,e))return;s.uniform3fv(this.addr,e),ei(t,e)}}function dS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jn(t,e))return;s.uniform4fv(this.addr,e),ei(t,e)}}function fS(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(jn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ei(t,e)}else{if(jn(t,n))return;rm.set(n),s.uniformMatrix2fv(this.addr,!1,rm),ei(t,n)}}function pS(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(jn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ei(t,e)}else{if(jn(t,n))return;sm.set(n),s.uniformMatrix3fv(this.addr,!1,sm),ei(t,n)}}function mS(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(jn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ei(t,e)}else{if(jn(t,n))return;im.set(n),s.uniformMatrix4fv(this.addr,!1,im),ei(t,n)}}function gS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function _S(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jn(t,e))return;s.uniform2iv(this.addr,e),ei(t,e)}}function xS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jn(t,e))return;s.uniform3iv(this.addr,e),ei(t,e)}}function vS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jn(t,e))return;s.uniform4iv(this.addr,e),ei(t,e)}}function yS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function MS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jn(t,e))return;s.uniform2uiv(this.addr,e),ei(t,e)}}function SS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jn(t,e))return;s.uniform3uiv(this.addr,e),ei(t,e)}}function bS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jn(t,e))return;s.uniform4uiv(this.addr,e),ei(t,e)}}function ES(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(vd.compareFunction=t.isReversedDepthBuffer()?Od:Fd,r=vd):r=b0,t.setTexture2D(e||r,i)}function TS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||T0,i)}function wS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||w0,i)}function AS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||E0,i)}function RS(s){switch(s){case 5126:return cS;case 35664:return uS;case 35665:return hS;case 35666:return dS;case 35674:return fS;case 35675:return pS;case 35676:return mS;case 5124:case 35670:return gS;case 35667:case 35671:return _S;case 35668:case 35672:return xS;case 35669:case 35673:return vS;case 5125:return yS;case 36294:return MS;case 36295:return SS;case 36296:return bS;case 35678:case 36198:case 36298:case 36306:case 35682:return ES;case 35679:case 36299:case 36307:return TS;case 35680:case 36300:case 36308:case 36293:return wS;case 36289:case 36303:case 36311:case 36292:return AS}}function CS(s,e){s.uniform1fv(this.addr,e)}function PS(s,e){const t=Qo(e,this.size,2);s.uniform2fv(this.addr,t)}function LS(s,e){const t=Qo(e,this.size,3);s.uniform3fv(this.addr,t)}function IS(s,e){const t=Qo(e,this.size,4);s.uniform4fv(this.addr,t)}function NS(s,e){const t=Qo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function DS(s,e){const t=Qo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function US(s,e){const t=Qo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function FS(s,e){s.uniform1iv(this.addr,e)}function OS(s,e){s.uniform2iv(this.addr,e)}function BS(s,e){s.uniform3iv(this.addr,e)}function kS(s,e){s.uniform4iv(this.addr,e)}function zS(s,e){s.uniform1uiv(this.addr,e)}function HS(s,e){s.uniform2uiv(this.addr,e)}function GS(s,e){s.uniform3uiv(this.addr,e)}function VS(s,e){s.uniform4uiv(this.addr,e)}function WS(s,e,t){const n=this.cache,i=e.length,r=eu(t,i);jn(n,r)||(s.uniform1iv(this.addr,r),ei(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=vd:o=b0;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function XS(s,e,t){const n=this.cache,i=e.length,r=eu(t,i);jn(n,r)||(s.uniform1iv(this.addr,r),ei(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||T0,r[o])}function qS(s,e,t){const n=this.cache,i=e.length,r=eu(t,i);jn(n,r)||(s.uniform1iv(this.addr,r),ei(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||w0,r[o])}function YS(s,e,t){const n=this.cache,i=e.length,r=eu(t,i);jn(n,r)||(s.uniform1iv(this.addr,r),ei(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||E0,r[o])}function KS(s){switch(s){case 5126:return CS;case 35664:return PS;case 35665:return LS;case 35666:return IS;case 35674:return NS;case 35675:return DS;case 35676:return US;case 5124:case 35670:return FS;case 35667:case 35671:return OS;case 35668:case 35672:return BS;case 35669:case 35673:return kS;case 5125:return zS;case 36294:return HS;case 36295:return GS;case 36296:return VS;case 35678:case 36198:case 36298:case 36306:case 35682:return WS;case 35679:case 36299:case 36307:return XS;case 35680:case 36300:case 36308:case 36293:return qS;case 36289:case 36303:case 36311:case 36292:return YS}}class ZS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=RS(t.type)}}class $S{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=KS(t.type)}}class JS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const xh=/(\w+)(\])?(\[|\.)?/g;function om(s,e){s.seq.push(e),s.map[e.id]=e}function QS(s,e,t){const n=s.name,i=n.length;for(xh.lastIndex=0;;){const r=xh.exec(n),o=xh.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){om(t,c===void 0?new ZS(a,s,e):new $S(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new JS(a),om(t,d)),t=d}}}class Lc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);QS(a,l,this)}const i=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function am(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const jS=37297;let eb=0;function tb(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const lm=new Ht;function nb(s){jt._getMatrix(lm,jt.workingColorSpace,s);const e=`mat3( ${lm.elements.map(t=>t.toFixed(4))} )`;switch(jt.getTransfer(s)){case Bc:return[e,"LinearTransferOETF"];case yn:return[e,"sRGBTransferOETF"];default:return dt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function cm(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+tb(s.getShaderSource(e),a)}else return r}function ib(s,e){const t=nb(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const sb={[Um]:"Linear",[Fm]:"Reinhard",[Om]:"Cineon",[Rd]:"ACESFilmic",[km]:"AgX",[zm]:"Neutral",[Bm]:"Custom"};function rb(s,e){const t=sb[e];return t===void 0?(dt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Sc=new S;function ob(){jt.getLuminanceCoefficients(Sc);const s=Sc.x.toFixed(4),e=Sc.y.toFixed(4),t=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ab(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Da).join(`
`)}function lb(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function cb(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Da(s){return s!==""}function um(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ub=/^[ \t]*#include +<([\w\d./]+)>/gm;function yd(s){return s.replace(ub,db)}const hb=new Map;function db(s,e){let t=Kt[e];if(t===void 0){const n=hb.get(e);if(n!==void 0)t=Kt[n],dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return yd(t)}const fb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dm(s){return s.replace(fb,pb)}function pb(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function fm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const mb={[bc]:"SHADOWMAP_TYPE_PCF",[La]:"SHADOWMAP_TYPE_VSM"};function gb(s){return mb[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _b={[Zr]:"ENVMAP_TYPE_CUBE",[Wo]:"ENVMAP_TYPE_CUBE",[Zc]:"ENVMAP_TYPE_CUBE_UV"};function xb(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":_b[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const vb={[Wo]:"ENVMAP_MODE_REFRACTION"};function yb(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":vb[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Mb={[Dm]:"ENVMAP_BLENDING_MULTIPLY",[Tg]:"ENVMAP_BLENDING_MIX",[wg]:"ENVMAP_BLENDING_ADD"};function Sb(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Mb[s.combine]||"ENVMAP_BLENDING_NONE"}function bb(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Eb(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=gb(t),c=xb(t),u=yb(t),d=Sb(t),h=bb(t),f=ab(t),g=lb(r),y=i.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Da).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Da).join(`
`),p.length>0&&(p+=`
`)):(m=[fm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Da).join(`
`),p=[fm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ss?"#define TONE_MAPPING":"",t.toneMapping!==Ss?Kt.tonemapping_pars_fragment:"",t.toneMapping!==Ss?rb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,ib("linearToOutputTexel",t.outputColorSpace),ob(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Da).join(`
`)),o=yd(o),o=um(o,t),o=hm(o,t),a=yd(a),a=um(a,t),a=hm(a,t),o=dm(o),a=dm(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ep?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ep?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=w+m+o,v=w+p+a,T=am(i,i.VERTEX_SHADER,A),E=am(i,i.FRAGMENT_SHADER,v);i.attachShader(y,T),i.attachShader(y,E),t.index0AttributeName!==void 0?i.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y);function P(U){if(s.debug.checkShaderErrors){const V=i.getProgramInfoLog(y)||"",W=i.getShaderInfoLog(T)||"",F=i.getShaderInfoLog(E)||"",X=V.trim(),q=W.trim(),te=F.trim();let _e=!0,ne=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(_e=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,y,T,E);else{const ue=cm(i,T,"vertex"),de=cm(i,E,"fragment");wt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+X+`
`+ue+`
`+de)}else X!==""?dt("WebGLProgram: Program Info Log:",X):(q===""||te==="")&&(ne=!1);ne&&(U.diagnostics={runnable:_e,programLog:X,vertexShader:{log:q,prefix:m},fragmentShader:{log:te,prefix:p}})}i.deleteShader(T),i.deleteShader(E),x=new Lc(i,y),R=cb(i,y)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let R;this.getAttributes=function(){return R===void 0&&P(this),R};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=i.getProgramParameter(y,jS)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eb++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=E,this}let Tb=0;class wb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ab(e),t.set(e,n)),n}}class Ab{constructor(e){this.id=Tb++,this.code=e,this.usedTimes=0}}function Rb(s){return s===$r||s===Fc||s===Oc}function Cb(s,e,t,n,i,r){const o=new zd,a=new wb,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,R,L,U,V,W){const F=U.fog,X=V.geometry,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?U.environment:null,te=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,_e=e.get(x.envMap||q,te),ne=_e&&_e.mapping===Zc?_e.image.height:null,ue=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&dt("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const de=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Qe=de!==void 0?de.length:0;let Xe=0;X.morphAttributes.position!==void 0&&(Xe=1),X.morphAttributes.normal!==void 0&&(Xe=2),X.morphAttributes.color!==void 0&&(Xe=3);let sn,At,Dt,ie;if(ue){const dn=xs[ue];sn=dn.vertexShader,At=dn.fragmentShader}else{sn=x.vertexShader,At=x.fragmentShader;const dn=a.getVertexShaderStage(x),tn=a.getFragmentShaderStage(x);a.update(x,dn,tn),Dt=dn.id,ie=tn.id}const ae=s.getRenderTarget(),Re=s.state.buffers.depth.getReversed(),xt=V.isInstancedMesh===!0,qe=V.isBatchedMesh===!0,Mt=!!x.map,an=!!x.matcap,ce=!!_e,xe=!!x.aoMap,Se=!!x.lightMap,be=!!x.bumpMap&&x.wireframe===!1,Pe=!!x.normalMap,lt=!!x.displacementMap,tt=!!x.emissiveMap,ft=!!x.metalnessMap,St=!!x.roughnessMap,N=x.anisotropy>0,$t=x.clearcoat>0,Bt=x.dispersion>0,C=x.retroreflectivity>0,_=x.iridescence>0,H=x.sheen>0,Y=x.transmission>0,re=N&&!!x.anisotropyMap,I=$t&&!!x.clearcoatMap,Z=$t&&!!x.clearcoatNormalMap,k=$t&&!!x.clearcoatRoughnessMap,J=_&&!!x.iridescenceMap,Ee=_&&!!x.iridescenceThicknessMap,Ge=H&&!!x.sheenColorMap,Ie=H&&!!x.sheenRoughnessMap,De=!!x.specularMap,ot=!!x.specularColorMap,gt=!!x.specularIntensityMap,Ut=Y&&!!x.transmissionMap,B=Y&&!!x.thicknessMap,Ue=!!x.gradientMap,oe=!!x.alphaMap,Fe=x.alphaTest>0,ze=!!x.alphaHash,ve=!!x.extensions;let ct=Ss;x.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ct=s.toneMapping);const st={shaderID:ue,shaderType:x.type,shaderName:x.name,vertexShader:sn,fragmentShader:At,defines:x.defines,customVertexShaderID:Dt,customFragmentShaderID:ie,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:qe,batchingColor:qe&&V._colorsTexture!==null,instancing:xt,instancingColor:xt&&V.instanceColor!==null,instancingMorph:xt&&V.morphTexture!==null,outputColorSpace:ae===null?s.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:jt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Mt,matcap:an,envMap:ce,envMapMode:ce&&_e.mapping,envMapCubeUVHeight:ne,aoMap:xe,lightMap:Se,bumpMap:be,normalMap:Pe,displacementMap:lt,emissiveMap:tt,normalMapObjectSpace:Pe&&x.normalMapType===Lg,normalMapTangentSpace:Pe&&x.normalMapType===fd,packedNormalMap:Pe&&x.normalMapType===fd&&Rb(x.normalMap.format),metalnessMap:ft,roughnessMap:St,anisotropy:N,anisotropyMap:re,clearcoat:$t,clearcoatMap:I,clearcoatNormalMap:Z,clearcoatRoughnessMap:k,dispersion:Bt,retroreflection:C,iridescence:_,iridescenceMap:J,iridescenceThicknessMap:Ee,sheen:H,sheenColorMap:Ge,sheenRoughnessMap:Ie,specularMap:De,specularColorMap:ot,specularIntensityMap:gt,transmission:Y,transmissionMap:Ut,thicknessMap:B,gradientMap:Ue,opaque:x.transparent===!1&&x.blending===Fa&&x.alphaToCoverage===!1,alphaMap:oe,alphaTest:Fe,alphaHash:ze,combine:x.combine,mapUv:Mt&&g(x.map.channel),aoMapUv:xe&&g(x.aoMap.channel),lightMapUv:Se&&g(x.lightMap.channel),bumpMapUv:be&&g(x.bumpMap.channel),normalMapUv:Pe&&g(x.normalMap.channel),displacementMapUv:lt&&g(x.displacementMap.channel),emissiveMapUv:tt&&g(x.emissiveMap.channel),metalnessMapUv:ft&&g(x.metalnessMap.channel),roughnessMapUv:St&&g(x.roughnessMap.channel),anisotropyMapUv:re&&g(x.anisotropyMap.channel),clearcoatMapUv:I&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:Z&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&g(x.sheenRoughnessMap.channel),specularMapUv:De&&g(x.specularMap.channel),specularColorMapUv:ot&&g(x.specularColorMap.channel),specularIntensityMapUv:gt&&g(x.specularIntensityMap.channel),transmissionMapUv:Ut&&g(x.transmissionMap.channel),thicknessMapUv:B&&g(x.thicknessMap.channel),alphaMapUv:oe&&g(x.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Pe||N),vertexNormals:!!X.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!X.attributes.uv&&(Mt||oe),fog:!!F,useFog:x.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||X.attributes.normal===void 0&&Pe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Re,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Qe,morphTextureStride:Xe,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:ct,decodeVideoTexture:Mt&&x.map.isVideoTexture===!0&&jt.getTransfer(x.map.colorSpace)===yn,decodeVideoTextureEmissive:tt&&x.emissiveMap.isVideoTexture===!0&&jt.getTransfer(x.emissiveMap.colorSpace)===yn,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===hn,flipSided:x.side===Si,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ve&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&x.extensions.multiDraw===!0||qe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return st.vertexUv1s=l.has(1),st.vertexUv2s=l.has(2),st.vertexUv3s=l.has(3),l.clear(),st}function m(x){const R=[];if(x.shaderID?R.push(x.shaderID):(R.push(x.customVertexShaderID),R.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)R.push(L),R.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(p(R,x),w(R,x),R.push(s.outputColorSpace)),R.push(x.customProgramCacheKey),R.join()}function p(x,R){x.push(R.precision),x.push(R.outputColorSpace),x.push(R.envMapMode),x.push(R.envMapCubeUVHeight),x.push(R.mapUv),x.push(R.alphaMapUv),x.push(R.lightMapUv),x.push(R.aoMapUv),x.push(R.bumpMapUv),x.push(R.normalMapUv),x.push(R.displacementMapUv),x.push(R.emissiveMapUv),x.push(R.metalnessMapUv),x.push(R.roughnessMapUv),x.push(R.anisotropyMapUv),x.push(R.clearcoatMapUv),x.push(R.clearcoatNormalMapUv),x.push(R.clearcoatRoughnessMapUv),x.push(R.iridescenceMapUv),x.push(R.iridescenceThicknessMapUv),x.push(R.sheenColorMapUv),x.push(R.sheenRoughnessMapUv),x.push(R.specularMapUv),x.push(R.specularColorMapUv),x.push(R.specularIntensityMapUv),x.push(R.transmissionMapUv),x.push(R.thicknessMapUv),x.push(R.combine),x.push(R.fogExp2),x.push(R.sizeAttenuation),x.push(R.morphTargetsCount),x.push(R.morphAttributeCount),x.push(R.numSunLights),x.push(R.numDirLights),x.push(R.numPointLights),x.push(R.numSpotLights),x.push(R.numSpotLightMaps),x.push(R.numHemiLights),x.push(R.numRectAreaLights),x.push(R.numSunLightShadows),x.push(R.numDirLightShadows),x.push(R.numPointLightShadows),x.push(R.numSpotLightShadows),x.push(R.numSpotLightShadowsWithMaps),x.push(R.numLightProbes),x.push(R.shadowMapType),x.push(R.toneMapping),x.push(R.numClippingPlanes),x.push(R.numClipIntersection),x.push(R.depthPacking)}function w(x,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.retroreflection&&o.enable(24),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),R.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function A(x){const R=f[x.type];let L;if(R){const U=xs[R];L=mx.clone(U.uniforms)}else L=x.uniforms;return L}function v(x,R){let L=u.get(R);return L!==void 0?++L.usedTimes:(L=new Eb(s,R,x,i),c.push(L),u.set(R,L)),L}function T(x){if(--x.usedTimes===0){const R=c.indexOf(x);c[R]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){a.remove(x)}function P(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:A,acquireProgram:v,releaseProgram:T,releaseShaderCache:E,programs:c,dispose:P}}function Pb(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Lb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function pm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function mm(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,g,y,m,p){let w=s[e];return w===void 0?(w={id:h.id,object:h,geometry:f,material:g,materialVariant:o(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:p},s[e]=w):(w.id=h.id,w.object=h,w.geometry=f,w.material=g,w.materialVariant=o(h),w.groupOrder=y,w.renderOrder=h.renderOrder,w.z=m,w.group=p),e++,w}function l(h,f,g,y,m,p,w){w.reversedDepth===!0&&(m=-m);const A=a(h,f,g,y,m,p);g.transmission>0?n.push(A):g.transparent===!0?i.push(A):t.push(A)}function c(h,f,g,y,m,p){const w=a(h,f,g,y,m,p);g.transmission>0?n.unshift(w):g.transparent===!0?i.unshift(w):t.unshift(w)}function u(h,f){t.length>1&&t.sort(h||Lb),n.length>1&&n.sort(f||pm),i.length>1&&i.sort(f||pm)}function d(){for(let h=e,f=s.length;h<f;h++){const g=s[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:u}}function Ib(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new mm,s.set(n,[o])):i>=r.length?(o=new mm,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Nb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new S,color:new Te};break;case"SpotLight":t={position:new S,direction:new S,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new S,halfWidth:new S,halfHeight:new S};break}return s[e.id]=t,t}}}function Db(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Ub=0;function Fb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Ob(s){const e=new Nb,t=Db(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new S);const i=new S,r=new Gt,o=new Gt;function a(c){let u=0,d=0,h=0;for(let V=0;V<9;V++)n.probe[V].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,w=0,A=0,v=0,T=0,E=0,P=0,x=0,R=0,L=0;c.sort(Fb);for(let V=0,W=c.length;V<W;V++){const F=c[V],X=F.color,q=F.intensity,te=F.distance;let _e=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===$r?_e=F.shadow.map.texture:_e=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)u+=X.r*q,d+=X.g*q,h+=X.b*q;else if(F.isLightProbe){for(let ne=0;ne<9;ne++)n.probe[ne].addScaledVector(F.sh.coefficients[ne],q);L++}else if(F.isSunLight){const ne=e.get(F);if(ne.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const ue=F.shadow,de=t.get(F);de.shadowIntensity=ue.intensity,de.shadowBias=ue.bias,de.shadowNormalBias=ue.normalBias,de.shadowRadius=ue.radius,de.shadowMapSize.copy(ue.mapSize).multiply(ue.getFrameExtents()),n.sunShadow[g]=de,n.sunShadowMap[g]=_e;const Qe=ue.getViewportCount();for(let Xe=0;Xe<Qe;Xe++)n.sunShadowMatrix[y+Xe]=ue.getMatrix(Xe),n.sunShadowCascade[y+Xe]=ue._cascadeData[Xe];y+=Qe,g++}n.sun[f]=ne,f++}else if(F.isDirectionalLight){const ne=e.get(F);if(ne.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const ue=F.shadow,de=t.get(F);de.shadowIntensity=ue.intensity,de.shadowBias=ue.bias,de.shadowNormalBias=ue.normalBias,de.shadowRadius=ue.radius,de.shadowMapSize=ue.mapSize,n.directionalShadow[m]=de,n.directionalShadowMap[m]=_e,n.directionalShadowMatrix[m]=F.shadow.matrix,T++}n.directional[m]=ne,m++}else if(F.isSpotLight){const ne=e.get(F);ne.position.setFromMatrixPosition(F.matrixWorld),ne.color.copy(X).multiplyScalar(q),ne.distance=te,ne.coneCos=Math.cos(F.angle),ne.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ne.decay=F.decay,n.spot[w]=ne;const ue=F.shadow;if(F.map&&(n.spotLightMap[x]=F.map,x++,ue.updateMatrices(F),F.castShadow&&R++),n.spotLightMatrix[w]=ue.matrix,F.castShadow){const de=t.get(F);de.shadowIntensity=ue.intensity,de.shadowBias=ue.bias,de.shadowNormalBias=ue.normalBias,de.shadowRadius=ue.radius,de.shadowMapSize=ue.mapSize,n.spotShadow[w]=de,n.spotShadowMap[w]=_e,P++}w++}else if(F.isRectAreaLight){const ne=e.get(F);ne.color.copy(X).multiplyScalar(q),ne.halfWidth.set(F.width*.5,0,0),ne.halfHeight.set(0,F.height*.5,0),n.rectArea[A]=ne,A++}else if(F.isPointLight){const ne=e.get(F);if(ne.color.copy(F.color).multiplyScalar(F.intensity),ne.distance=F.distance,ne.decay=F.decay,F.castShadow){const ue=F.shadow,de=t.get(F);de.shadowIntensity=ue.intensity,de.shadowBias=ue.bias,de.shadowNormalBias=ue.normalBias,de.shadowRadius=ue.radius,de.shadowMapSize=ue.mapSize,de.shadowCameraNear=ue.camera.near,de.shadowCameraFar=ue.camera.far,n.pointShadow[p]=de,n.pointShadowMap[p]=_e,n.pointShadowMatrix[p]=F.shadow.matrix,E++}n.point[p]=ne,p++}else if(F.isHemisphereLight){const ne=e.get(F);ne.skyColor.copy(F.color).multiplyScalar(q),ne.groundColor.copy(F.groundColor).multiplyScalar(q),n.hemi[v]=ne,v++}}A>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=We.LTC_FLOAT_1,n.rectAreaLTC2=We.LTC_FLOAT_2):(n.rectAreaLTC1=We.LTC_HALF_1,n.rectAreaLTC2=We.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const U=n.hash;(U.sunLength!==f||U.directionalLength!==m||U.pointLength!==p||U.spotLength!==w||U.rectAreaLength!==A||U.hemiLength!==v||U.numSunShadows!==g||U.numDirectionalShadows!==T||U.numPointShadows!==E||U.numSpotShadows!==P||U.numSpotMaps!==x||U.numLightProbes!==L)&&(n.sun.length=f,n.directional.length=m,n.spot.length=w,n.rectArea.length=A,n.point.length=p,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+x-R,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=L,U.sunLength=f,U.directionalLength=m,U.pointLength=p,U.spotLength=w,U.rectAreaLength=A,U.hemiLength=v,U.numSunShadows=g,U.numDirectionalShadows=T,U.numPointShadows=E,U.numSpotShadows=P,U.numSpotMaps=x,U.numLightProbes=L,n.version=Ub++)}function l(c,u){let d=0,h=0,f=0,g=0,y=0,m=0;const p=u.matrixWorldInverse;for(let w=0,A=c.length;w<A;w++){const v=c[w];if(v.isSunLight){const T=n.sun[d];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(p),d++}else if(v.isDirectionalLight){const T=n.directional[h];T.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(p),h++}else if(v.isSpotLight){const T=n.spot[g];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(p),g++}else if(v.isRectAreaLight){const T=n.rectArea[y];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),y++}else if(v.isPointLight){const T=n.point[f];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const T=n.hemi[m];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:n}}function gm(s){const e=new Ob(s),t=[],n=[],i=[];function r(h){d.camera=h,t.length=0,n.length=0,i.length=0}function o(h){t.push(h)}function a(h){n.push(h)}function l(h){i.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Bb(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new gm(s),e.set(i,[a])):r>=o.length?(a=new gm(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const kb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Hb=[new S(1,0,0),new S(-1,0,0),new S(0,1,0),new S(0,-1,0),new S(0,0,1),new S(0,0,-1)],Gb=[new S(0,-1,0),new S(0,-1,0),new S(0,0,1),new S(0,0,-1),new S(0,-1,0),new S(0,-1,0)],_m=new Gt,Ra=new S,vh=new S;function Vb(s,e,t){let n=new Wd;const i=new Ce,r=new Ce,o=new wn,a=new vx,l=new yx,c={},u=t.maxTextureSize,d={[br]:Si,[Si]:br,[hn]:hn},h=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:kb,fragmentShader:zb}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new un;g.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new at(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bc;let p=this.type;this.render=function(E,P,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===og&&(dt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=bc);const R=s.getRenderTarget(),L=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),V=s.state;V.setBlending(Qs),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const W=p!==this.type;W&&P.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(X=>X.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,X=E.length;F<X;F++){const q=E[F],te=q.shadow;if(te===void 0){dt("WebGLShadowMap:",q,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;i.copy(te.mapSize);const _e=te.getFrameExtents();i.multiply(_e),r.copy(te.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/_e.x),i.x=r.x*_e.x,te.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/_e.y),i.y=r.y*_e.y,te.mapSize.y=r.y));const ne=s.state.buffers.depth.getReversed();if(te.camera._reversedDepth=ne,te.map===null||W===!0){if(te.map!==null&&(te.map.depthTexture!==null&&(te.map.depthTexture.dispose(),te.map.depthTexture=null),te.map.dispose()),this.type===La){if(q.isPointLight){dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}te.map=new cs(i.x,i.y,{format:$r,type:Ts,minFilter:Gn,magFilter:Gn,generateMipmaps:!1}),te.map.texture.name=q.name+".shadowMap",te.map.depthTexture=new $a(i.x,i.y,Gi),te.map.depthTexture.name=q.name+".shadowMapDepth",te.map.depthTexture.format=er,te.map.depthTexture.compareFunction=null,te.map.depthTexture.minFilter=Jn,te.map.depthTexture.magFilter=Jn}else q.isPointLight?(te.map=new S0(i.x),te.map.depthTexture=new F_(i.x,Es)):(te.map=new cs(i.x,i.y),te.map.depthTexture=new $a(i.x,i.y,Es)),te.map.depthTexture.name=q.name+".shadowMap",te.map.depthTexture.format=er,this.type===bc?(te.map.depthTexture.compareFunction=ne?Od:Fd,te.map.depthTexture.minFilter=Gn,te.map.depthTexture.magFilter=Gn):(te.map.depthTexture.compareFunction=null,te.map.depthTexture.minFilter=Jn,te.map.depthTexture.magFilter=Jn);te.camera.updateProjectionMatrix()}te.map.isWebGLCubeRenderTarget!==!0&&(te.map.width!==i.x||te.map.height!==i.y)&&te.map.setSize(i.x,i.y);const ue=te.map.isWebGLCubeRenderTarget?6:te.getViewportCount();q.isPointLight!==!0&&te.updateMatrices(q,x);for(let de=0;de<ue;de++){const Qe=te.getCamera(de);if(q.isPointLight){const Xe=te.camera,sn=te.matrix,At=q.distance||Xe.far;At!==Xe.far&&(Xe.far=At,Xe.updateProjectionMatrix()),Ra.setFromMatrixPosition(q.matrixWorld),Xe.position.copy(Ra),vh.copy(Xe.position),vh.add(Hb[de]),Xe.up.copy(Gb[de]),Xe.lookAt(vh),Xe.updateMatrixWorld(),sn.makeTranslation(-Ra.x,-Ra.y,-Ra.z),_m.multiplyMatrices(Xe.projectionMatrix,Xe.matrixWorldInverse),te._frustum.setFromProjectionMatrix(_m,Xe.coordinateSystem,Xe.reversedDepth)}if(te.map.isWebGLCubeRenderTarget)s.setRenderTarget(te.map,de),s.clear();else{de===0&&(s.setRenderTarget(te.map),s.clear());const Xe=te.getViewport(de);o.set(r.x*Xe.x,r.y*Xe.y,r.x*Xe.z,r.y*Xe.w),V.viewport(o)}n=te.getFrustum(de),v(P,x,Qe,q,this.type)}te.isPointLightShadow!==!0&&this.type===La&&w(te,x),te.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(R,L,U)};function w(E,P){const x=e.update(y);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new cs(i.x,i.y,{format:$r,type:Ts}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(P,null,x,h,y,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(P,null,x,f,y,null)}function A(E,P,x,R){let L=null;const U=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(U!==void 0)L=U;else if(L=x.isPointLight===!0?l:a,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const V=L.uuid,W=P.uuid;let F=c[V];F===void 0&&(F={},c[V]=F);let X=F[W];X===void 0&&(X=L.clone(),F[W]=X,P.addEventListener("dispose",T)),L=X}if(L.visible=P.visible,L.wireframe=P.wireframe,R===La?L.side=P.shadowSide!==null?P.shadowSide:P.side:L.side=P.shadowSide!==null?P.shadowSide:d[P.side],L.alphaMap=P.alphaMap,L.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,L.map=P.map,L.clipShadows=P.clipShadows,L.clippingPlanes=P.clippingPlanes,L.clipIntersection=P.clipIntersection,L.displacementMap=P.displacementMap,L.displacementScale=P.displacementScale,L.displacementBias=P.displacementBias,L.wireframeLinewidth=P.wireframeLinewidth,L.linewidth=P.linewidth,x.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const V=s.properties.get(L);V.light=x}return L}function v(E,P,x,R,L){if(E.visible===!1)return;if(E.layers.test(P.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===La)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);const W=e.update(E),F=E.material;if(Array.isArray(F)){const X=W.groups;for(let q=0,te=X.length;q<te;q++){const _e=X[q],ne=F[_e.materialIndex];if(ne&&ne.visible){const ue=A(E,ne,R,L);E.onBeforeShadow(s,E,P,x,W,ue,_e),s.renderBufferDirect(x,null,W,ue,E,_e),E.onAfterShadow(s,E,P,x,W,ue,_e)}}}else if(F.visible){const X=A(E,F,R,L);E.onBeforeShadow(s,E,P,x,W,X,null),s.renderBufferDirect(x,null,W,X,E,null),E.onAfterShadow(s,E,P,x,W,X,null)}}const V=E.children;for(let W=0,F=V.length;W<F;W++)v(V[W],P,x,R,L)}function T(E){E.target.removeEventListener("dispose",T);for(const x in c){const R=c[x],L=E.target.uuid;L in R&&(R[L].dispose(),delete R[L])}}}function Wb(s,e){function t(){let B=!1;const Ue=new wn;let oe=null;const Fe=new wn(0,0,0,0);return{setMask:function(ze){oe!==ze&&!B&&(s.colorMask(ze,ze,ze,ze),oe=ze)},setLocked:function(ze){B=ze},setClear:function(ze,ve,ct,st,dn){dn===!0&&(ze*=st,ve*=st,ct*=st),Ue.set(ze,ve,ct,st),Fe.equals(Ue)===!1&&(s.clearColor(ze,ve,ct,st),Fe.copy(Ue))},reset:function(){B=!1,oe=null,Fe.set(-1,0,0,0)}}}function n(){let B=!1,Ue=!1,oe=null,Fe=null,ze=null;return{setReversed:function(ve){if(Ue!==ve){const ct=e.get("EXT_clip_control");ve?ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.ZERO_TO_ONE_EXT):ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.NEGATIVE_ONE_TO_ONE_EXT),Ue=ve;const st=ze;ze=null,this.setClear(st)}},getReversed:function(){return Ue},setTest:function(ve){ve?ae(s.DEPTH_TEST):Re(s.DEPTH_TEST)},setMask:function(ve){oe!==ve&&!B&&(s.depthMask(ve),oe=ve)},setFunc:function(ve){if(Ue&&(ve=Wg[ve]),Fe!==ve){switch(ve){case Ch:s.depthFunc(s.NEVER);break;case Ph:s.depthFunc(s.ALWAYS);break;case Lh:s.depthFunc(s.LESS);break;case Va:s.depthFunc(s.LEQUAL);break;case Ih:s.depthFunc(s.EQUAL);break;case Nh:s.depthFunc(s.GEQUAL);break;case Dh:s.depthFunc(s.GREATER);break;case Uh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Fe=ve}},setLocked:function(ve){B=ve},setClear:function(ve){ze!==ve&&(ze=ve,Ue&&(ve=1-ve),s.clearDepth(ve))},reset:function(){B=!1,oe=null,Fe=null,ze=null,Ue=!1}}}function i(){let B=!1,Ue=null,oe=null,Fe=null,ze=null,ve=null,ct=null,st=null,dn=null;return{setTest:function(tn){B||(tn?ae(s.STENCIL_TEST):Re(s.STENCIL_TEST))},setMask:function(tn){Ue!==tn&&!B&&(s.stencilMask(tn),Ue=tn)},setFunc:function(tn,oi,_i){(oe!==tn||Fe!==oi||ze!==_i)&&(s.stencilFunc(tn,oi,_i),oe=tn,Fe=oi,ze=_i)},setOp:function(tn,oi,_i){(ve!==tn||ct!==oi||st!==_i)&&(s.stencilOp(tn,oi,_i),ve=tn,ct=oi,st=_i)},setLocked:function(tn){B=tn},setClear:function(tn){dn!==tn&&(s.clearStencil(tn),dn=tn)},reset:function(){B=!1,Ue=null,oe=null,Fe=null,ze=null,ve=null,ct=null,st=null,dn=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},d={},h={},f=new WeakMap,g=[],y=null,m=!1,p=null,w=null,A=null,v=null,T=null,E=null,P=null,x=new Te(0,0,0),R=0,L=!1,U=null,V=null,W=null,F=null,X=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,_e=0;const ne=s.getParameter(s.VERSION);ne.indexOf("WebGL")!==-1?(_e=parseFloat(/^WebGL (\d)/.exec(ne)[1]),te=_e>=1):ne.indexOf("OpenGL ES")!==-1&&(_e=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),te=_e>=2);let ue=null,de={};const Qe=s.getParameter(s.SCISSOR_BOX),Xe=s.getParameter(s.VIEWPORT),sn=new wn().fromArray(Qe),At=new wn().fromArray(Xe);function Dt(B,Ue,oe,Fe){const ze=new Uint8Array(4),ve=s.createTexture();s.bindTexture(B,ve),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ct=0;ct<oe;ct++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(Ue,0,s.RGBA,1,1,Fe,0,s.RGBA,s.UNSIGNED_BYTE,ze):s.texImage2D(Ue+ct,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ze);return ve}const ie={};ie[s.TEXTURE_2D]=Dt(s.TEXTURE_2D,s.TEXTURE_2D,1),ie[s.TEXTURE_CUBE_MAP]=Dt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[s.TEXTURE_2D_ARRAY]=Dt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ie[s.TEXTURE_3D]=Dt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(s.DEPTH_TEST),o.setFunc(Va),be(!1),Pe(qf),ae(s.CULL_FACE),xe(Qs);function ae(B){u[B]!==!0&&(s.enable(B),u[B]=!0)}function Re(B){u[B]!==!1&&(s.disable(B),u[B]=!1)}function xt(B,Ue){return h[B]!==Ue?(s.bindFramebuffer(B,Ue),h[B]=Ue,B===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=Ue),B===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=Ue),!0):!1}function qe(B,Ue){let oe=g,Fe=!1;if(B){oe=f.get(Ue),oe===void 0&&(oe=[],f.set(Ue,oe));const ze=B.textures;if(oe.length!==ze.length||oe[0]!==s.COLOR_ATTACHMENT0){for(let ve=0,ct=ze.length;ve<ct;ve++)oe[ve]=s.COLOR_ATTACHMENT0+ve;oe.length=ze.length,Fe=!0}}else oe[0]!==s.BACK&&(oe[0]=s.BACK,Fe=!0);Fe&&s.drawBuffers(oe)}function Mt(B){return y!==B?(s.useProgram(B),y=B,!0):!1}const an={[Fo]:s.FUNC_ADD,[lg]:s.FUNC_SUBTRACT,[cg]:s.FUNC_REVERSE_SUBTRACT};an[ug]=s.MIN,an[hg]=s.MAX;const ce={[dg]:s.ZERO,[fg]:s.ONE,[pg]:s.SRC_COLOR,[Im]:s.SRC_ALPHA,[yg]:s.SRC_ALPHA_SATURATE,[xg]:s.DST_COLOR,[gg]:s.DST_ALPHA,[mg]:s.ONE_MINUS_SRC_COLOR,[Nm]:s.ONE_MINUS_SRC_ALPHA,[vg]:s.ONE_MINUS_DST_COLOR,[_g]:s.ONE_MINUS_DST_ALPHA,[Mg]:s.CONSTANT_COLOR,[Sg]:s.ONE_MINUS_CONSTANT_COLOR,[bg]:s.CONSTANT_ALPHA,[Eg]:s.ONE_MINUS_CONSTANT_ALPHA};function xe(B,Ue,oe,Fe,ze,ve,ct,st,dn,tn){if(B===Qs){m===!0&&(Re(s.BLEND),m=!1);return}if(m===!1&&(ae(s.BLEND),m=!0),B!==ag){if(B!==p||tn!==L){if((w!==Fo||T!==Fo)&&(s.blendEquation(s.FUNC_ADD),w=Fo,T=Fo),tn)switch(B){case Fa:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ga:s.blendFunc(s.ONE,s.ONE);break;case Yf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Kf:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:wt("WebGLState: Invalid blending: ",B);break}else switch(B){case Fa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ga:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Yf:wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kf:wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:wt("WebGLState: Invalid blending: ",B);break}A=null,v=null,E=null,P=null,x.set(0,0,0),R=0,p=B,L=tn}return}ze=ze||Ue,ve=ve||oe,ct=ct||Fe,(Ue!==w||ze!==T)&&(s.blendEquationSeparate(an[Ue],an[ze]),w=Ue,T=ze),(oe!==A||Fe!==v||ve!==E||ct!==P)&&(s.blendFuncSeparate(ce[oe],ce[Fe],ce[ve],ce[ct]),A=oe,v=Fe,E=ve,P=ct),(st.equals(x)===!1||dn!==R)&&(s.blendColor(st.r,st.g,st.b,dn),x.copy(st),R=dn),p=B,L=!1}function Se(B,Ue){B.side===hn?Re(s.CULL_FACE):ae(s.CULL_FACE);let oe=B.side===Si;Ue&&(oe=!oe),be(oe),B.blending===Fa&&B.transparent===!1?xe(Qs):xe(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const Fe=B.stencilWrite;a.setTest(Fe),Fe&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),tt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ae(s.SAMPLE_ALPHA_TO_COVERAGE):Re(s.SAMPLE_ALPHA_TO_COVERAGE)}function be(B){U!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),U=B)}function Pe(B){B!==sg?(ae(s.CULL_FACE),B!==V&&(B===qf?s.cullFace(s.BACK):B===rg?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Re(s.CULL_FACE),V=B}function lt(B){B!==W&&(te&&s.lineWidth(B),W=B)}function tt(B,Ue,oe){B?(ae(s.POLYGON_OFFSET_FILL),(F!==Ue||X!==oe)&&(F=Ue,X=oe,o.getReversed()&&(Ue=-Ue),s.polygonOffset(Ue,oe))):Re(s.POLYGON_OFFSET_FILL)}function ft(B){B?ae(s.SCISSOR_TEST):Re(s.SCISSOR_TEST)}function St(B){B===void 0&&(B=s.TEXTURE0+q-1),ue!==B&&(s.activeTexture(B),ue=B)}function N(B,Ue,oe){oe===void 0&&(ue===null?oe=s.TEXTURE0+q-1:oe=ue);let Fe=de[oe];Fe===void 0&&(Fe={type:void 0,texture:void 0},de[oe]=Fe),(Fe.type!==B||Fe.texture!==Ue)&&(ue!==oe&&(s.activeTexture(oe),ue=oe),s.bindTexture(B,Ue||ie[B]),Fe.type=B,Fe.texture=Ue)}function $t(){const B=de[ue];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Bt(){try{s.compressedTexImage2D(...arguments)}catch(B){wt("WebGLState:",B)}}function C(){try{s.compressedTexImage3D(...arguments)}catch(B){wt("WebGLState:",B)}}function _(){try{s.texSubImage2D(...arguments)}catch(B){wt("WebGLState:",B)}}function H(){try{s.texSubImage3D(...arguments)}catch(B){wt("WebGLState:",B)}}function Y(){try{s.compressedTexSubImage2D(...arguments)}catch(B){wt("WebGLState:",B)}}function re(){try{s.compressedTexSubImage3D(...arguments)}catch(B){wt("WebGLState:",B)}}function I(){try{s.texStorage2D(...arguments)}catch(B){wt("WebGLState:",B)}}function Z(){try{s.texStorage3D(...arguments)}catch(B){wt("WebGLState:",B)}}function k(){try{s.texImage2D(...arguments)}catch(B){wt("WebGLState:",B)}}function J(){try{s.texImage3D(...arguments)}catch(B){wt("WebGLState:",B)}}function Ee(B){return d[B]!==void 0?d[B]:s.getParameter(B)}function Ge(B,Ue){d[B]!==Ue&&(s.pixelStorei(B,Ue),d[B]=Ue)}function Ie(B){sn.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),sn.copy(B))}function De(B){At.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),At.copy(B))}function ot(B,Ue){let oe=c.get(Ue);oe===void 0&&(oe=new WeakMap,c.set(Ue,oe));let Fe=oe.get(B);Fe===void 0&&(Fe=s.getUniformBlockIndex(Ue,B.name),oe.set(B,Fe))}function gt(B,Ue){const Fe=c.get(Ue).get(B);l.get(Ue)!==Fe&&(s.uniformBlockBinding(Ue,Fe,B.__bindingPointIndex),l.set(Ue,Fe))}function Ut(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),u={},d={},ue=null,de={},h={},f=new WeakMap,g=[],y=null,m=!1,p=null,w=null,A=null,v=null,T=null,E=null,P=null,x=new Te(0,0,0),R=0,L=!1,U=null,V=null,W=null,F=null,X=null,sn.set(0,0,s.canvas.width,s.canvas.height),At.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ae,disable:Re,bindFramebuffer:xt,drawBuffers:qe,useProgram:Mt,setBlending:xe,setMaterial:Se,setFlipSided:be,setCullFace:Pe,setLineWidth:lt,setPolygonOffset:tt,setScissorTest:ft,activeTexture:St,bindTexture:N,unbindTexture:$t,compressedTexImage2D:Bt,compressedTexImage3D:C,texImage2D:k,texImage3D:J,pixelStorei:Ge,getParameter:Ee,updateUBOMapping:ot,uniformBlockBinding:gt,texStorage2D:I,texStorage3D:Z,texSubImage2D:_,texSubImage3D:H,compressedTexSubImage2D:Y,compressedTexSubImage3D:re,scissor:Ie,viewport:De,reset:Ut}}function Xb(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,_){return g?new OffscreenCanvas(C,_):Za("canvas")}function m(C,_,H){let Y=1;const re=Bt(C);if((re.width>H||re.height>H)&&(Y=H/Math.max(re.width,re.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const I=Math.floor(Y*re.width),Z=Math.floor(Y*re.height);h===void 0&&(h=y(I,Z));const k=_?y(I,Z):h;return k.width=I,k.height=Z,k.getContext("2d").drawImage(C,0,0,I,Z),dt("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+I+"x"+Z+")."),k}else return"data"in C&&dt("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),C;return C}function p(C){return C.generateMipmaps}function w(C){s.generateMipmap(C)}function A(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(C,_,H,Y,re,I=!1){if(C!==null){if(s[C]!==void 0)return s[C];dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z;Y&&(Z=e.get("EXT_texture_norm16"),Z||dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let k=_;if(_===s.RED&&(H===s.FLOAT&&(k=s.R32F),H===s.HALF_FLOAT&&(k=s.R16F),H===s.UNSIGNED_BYTE&&(k=s.R8),H===s.UNSIGNED_SHORT&&Z&&(k=Z.R16_EXT),H===s.SHORT&&Z&&(k=Z.R16_SNORM_EXT)),_===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(k=s.R8UI),H===s.UNSIGNED_SHORT&&(k=s.R16UI),H===s.UNSIGNED_INT&&(k=s.R32UI),H===s.BYTE&&(k=s.R8I),H===s.SHORT&&(k=s.R16I),H===s.INT&&(k=s.R32I)),_===s.RG&&(H===s.FLOAT&&(k=s.RG32F),H===s.HALF_FLOAT&&(k=s.RG16F),H===s.UNSIGNED_BYTE&&(k=s.RG8),H===s.UNSIGNED_SHORT&&Z&&(k=Z.RG16_EXT),H===s.SHORT&&Z&&(k=Z.RG16_SNORM_EXT)),_===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(k=s.RG8UI),H===s.UNSIGNED_SHORT&&(k=s.RG16UI),H===s.UNSIGNED_INT&&(k=s.RG32UI),H===s.BYTE&&(k=s.RG8I),H===s.SHORT&&(k=s.RG16I),H===s.INT&&(k=s.RG32I)),_===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(k=s.RGB8UI),H===s.UNSIGNED_SHORT&&(k=s.RGB16UI),H===s.UNSIGNED_INT&&(k=s.RGB32UI),H===s.BYTE&&(k=s.RGB8I),H===s.SHORT&&(k=s.RGB16I),H===s.INT&&(k=s.RGB32I)),_===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(k=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(k=s.RGBA16UI),H===s.UNSIGNED_INT&&(k=s.RGBA32UI),H===s.BYTE&&(k=s.RGBA8I),H===s.SHORT&&(k=s.RGBA16I),H===s.INT&&(k=s.RGBA32I)),_===s.RGB&&(H===s.UNSIGNED_SHORT&&Z&&(k=Z.RGB16_EXT),H===s.SHORT&&Z&&(k=Z.RGB16_SNORM_EXT),H===s.UNSIGNED_INT_5_9_9_9_REV&&(k=s.RGB9_E5),H===s.UNSIGNED_INT_10F_11F_11F_REV&&(k=s.R11F_G11F_B10F)),_===s.RGBA){const J=I?Bc:jt.getTransfer(re);H===s.FLOAT&&(k=s.RGBA32F),H===s.HALF_FLOAT&&(k=s.RGBA16F),H===s.UNSIGNED_BYTE&&(k=J===yn?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT&&Z&&(k=Z.RGBA16_EXT),H===s.SHORT&&Z&&(k=Z.RGBA16_SNORM_EXT),H===s.UNSIGNED_SHORT_4_4_4_4&&(k=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(k=s.RGB5_A1)}return(k===s.R16F||k===s.R32F||k===s.RG16F||k===s.RG32F||k===s.RGBA16F||k===s.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function T(C,_){let H;return C?_===null||_===Es||_===Xa?H=s.DEPTH24_STENCIL8:_===Gi?H=s.DEPTH32F_STENCIL8:_===Wa&&(H=s.DEPTH24_STENCIL8,dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Es||_===Xa?H=s.DEPTH_COMPONENT24:_===Gi?H=s.DEPTH_COMPONENT32F:_===Wa&&(H=s.DEPTH_COMPONENT16),H}function E(C,_){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Jn&&C.minFilter!==Gn?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function P(C){const _=C.target;_.removeEventListener("dispose",P),R(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&d.delete(_)}function x(C){const _=C.target;_.removeEventListener("dispose",x),U(_)}function R(C){const _=n.get(C);if(_.__webglInit===void 0)return;const H=C.source,Y=f.get(H);if(Y){const re=Y[_.__cacheKey];re.usedTimes--,re.usedTimes===0&&L(C),Object.keys(Y).length===0&&f.delete(H)}n.remove(C)}function L(C){const _=n.get(C);s.deleteTexture(_.__webglTexture);const H=C.source,Y=f.get(H);delete Y[_.__cacheKey],o.memory.textures--}function U(C){const _=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let re=0;re<_.__webglFramebuffer[Y].length;re++)s.deleteFramebuffer(_.__webglFramebuffer[Y][re]);else s.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)s.deleteFramebuffer(_.__webglFramebuffer[Y]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const H=C.textures;for(let Y=0,re=H.length;Y<re;Y++){const I=n.get(H[Y]);I.__webglTexture&&(s.deleteTexture(I.__webglTexture),o.memory.textures--),n.remove(H[Y])}n.remove(C)}let V=0;function W(){V=0}function F(){return V}function X(C){V=C}function q(){const C=V;return C>=i.maxTextures&&dt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),V+=1,C}function te(C){const _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function _e(C,_){const H=n.get(C);if(C.isVideoTexture&&N(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){const Y=C.image;if(Y===null)dt("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)dt("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(H,C,_);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+_)}function ne(C,_){const H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){Re(H,C,_);return}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+_)}function ue(C,_){const H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){Re(H,C,_);return}t.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+_)}function de(C,_){const H=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&H.__version!==C.version){xt(H,C,_);return}t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+_)}const Qe={[Er]:s.REPEAT,[ys]:s.CLAMP_TO_EDGE,[Uc]:s.MIRRORED_REPEAT},Xe={[Jn]:s.NEAREST,[Gm]:s.NEAREST_MIPMAP_NEAREST,[Ia]:s.NEAREST_MIPMAP_LINEAR,[Gn]:s.LINEAR,[Ec]:s.LINEAR_MIPMAP_NEAREST,[Zs]:s.LINEAR_MIPMAP_LINEAR},sn={[Ng]:s.NEVER,[Bg]:s.ALWAYS,[Dg]:s.LESS,[Fd]:s.LEQUAL,[Ug]:s.EQUAL,[Od]:s.GEQUAL,[Fg]:s.GREATER,[Og]:s.NOTEQUAL};function At(C,_){if(_.type===Gi&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Gn||_.magFilter===Ec||_.magFilter===Ia||_.magFilter===Zs||_.minFilter===Gn||_.minFilter===Ec||_.minFilter===Ia||_.minFilter===Zs)&&dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,Qe[_.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,Qe[_.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,Qe[_.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,Xe[_.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,Xe[_.minFilter]),_.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,sn[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Jn||_.minFilter!==Ia&&_.minFilter!==Zs||_.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Dt(C,_){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",P));const Y=_.source;let re=f.get(Y);re===void 0&&(re={},f.set(Y,re));const I=te(_);if(I!==C.__cacheKey){re[I]===void 0&&(re[I]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,H=!0),re[I].usedTimes++;const Z=re[C.__cacheKey];Z!==void 0&&(re[C.__cacheKey].usedTimes--,Z.usedTimes===0&&L(_)),C.__cacheKey=I,C.__webglTexture=re[I].texture}return H}function ie(C,_,H){return Math.floor(Math.floor(C/H)/_)}function ae(C,_,H,Y){const I=C.updateRanges;if(I.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,_.width,_.height,H,Y,_.data);else{I.sort((Ge,Ie)=>Ge.start-Ie.start);let Z=0;for(let Ge=1;Ge<I.length;Ge++){const Ie=I[Z],De=I[Ge],ot=Ie.start+Ie.count,gt=ie(De.start,_.width,4),Ut=ie(Ie.start,_.width,4);De.start<=ot+1&&gt===Ut&&ie(De.start+De.count-1,_.width,4)===gt?Ie.count=Math.max(Ie.count,De.start+De.count-Ie.start):(++Z,I[Z]=De)}I.length=Z+1;const k=t.getParameter(s.UNPACK_ROW_LENGTH),J=t.getParameter(s.UNPACK_SKIP_PIXELS),Ee=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,_.width);for(let Ge=0,Ie=I.length;Ge<Ie;Ge++){const De=I[Ge],ot=Math.floor(De.start/4),gt=Math.ceil(De.count/4),Ut=ot%_.width,B=Math.floor(ot/_.width),Ue=gt,oe=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Ut),t.pixelStorei(s.UNPACK_SKIP_ROWS,B),t.texSubImage2D(s.TEXTURE_2D,0,Ut,B,Ue,oe,H,Y,_.data)}C.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,k),t.pixelStorei(s.UNPACK_SKIP_PIXELS,J),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ee)}}function Re(C,_,H){let Y=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=s.TEXTURE_3D);const re=Dt(C,_),I=_.source;t.bindTexture(Y,C.__webglTexture,s.TEXTURE0+H);const Z=n.get(I);if(I.version!==Z.__version||re===!0){if(t.activeTexture(s.TEXTURE0+H),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const oe=jt.getPrimaries(jt.workingColorSpace),Fe=_.colorSpace===Mr?null:jt.getPrimaries(_.colorSpace),ze=_.colorSpace===Mr||oe===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}t.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment);let J=m(_.image,!1,i.maxTextureSize);J=$t(_,J);const Ee=r.convert(_.format,_.colorSpace),Ge=r.convert(_.type);let Ie=v(_.internalFormat,Ee,Ge,_.normalized,_.colorSpace,_.isVideoTexture);At(Y,_);let De;const ot=_.mipmaps,gt=_.isVideoTexture!==!0,Ut=Z.__version===void 0||re===!0,B=I.dataReady,Ue=E(_,J);if(_.isDepthTexture)Ie=T(_.format===qr,_.type),Ut&&(gt?t.texStorage2D(s.TEXTURE_2D,1,Ie,J.width,J.height):t.texImage2D(s.TEXTURE_2D,0,Ie,J.width,J.height,0,Ee,Ge,null));else if(_.isDataTexture)if(ot.length>0){gt&&Ut&&t.texStorage2D(s.TEXTURE_2D,Ue,Ie,ot[0].width,ot[0].height);for(let oe=0,Fe=ot.length;oe<Fe;oe++)De=ot[oe],gt?B&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,De.width,De.height,Ee,Ge,De.data):t.texImage2D(s.TEXTURE_2D,oe,Ie,De.width,De.height,0,Ee,Ge,De.data);_.generateMipmaps=!1}else gt?(Ut&&t.texStorage2D(s.TEXTURE_2D,Ue,Ie,J.width,J.height),B&&ae(_,J,Ee,Ge)):t.texImage2D(s.TEXTURE_2D,0,Ie,J.width,J.height,0,Ee,Ge,J.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){gt&&Ut&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,Ie,ot[0].width,ot[0].height,J.depth);for(let oe=0,Fe=ot.length;oe<Fe;oe++)if(De=ot[oe],_.format!==Vi)if(Ee!==null)if(gt){if(B)if(_.layerUpdates.size>0){const ze=$p(De.width,De.height,_.format,_.type);for(const ve of _.layerUpdates){const ct=De.data.subarray(ve*ze/De.data.BYTES_PER_ELEMENT,(ve+1)*ze/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,ve,De.width,De.height,1,Ee,ct)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,De.width,De.height,J.depth,Ee,De.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,oe,Ie,De.width,De.height,J.depth,0,De.data,0,0);else dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else gt?B&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,De.width,De.height,J.depth,Ee,Ge,De.data):t.texImage3D(s.TEXTURE_2D_ARRAY,oe,Ie,De.width,De.height,J.depth,0,Ee,Ge,De.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{gt&&Ut&&t.texStorage2D(s.TEXTURE_2D,Ue,Ie,ot[0].width,ot[0].height);for(let oe=0,Fe=ot.length;oe<Fe;oe++)De=ot[oe],_.format!==Vi?Ee!==null?gt?B&&t.compressedTexSubImage2D(s.TEXTURE_2D,oe,0,0,De.width,De.height,Ee,De.data):t.compressedTexImage2D(s.TEXTURE_2D,oe,Ie,De.width,De.height,0,De.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?B&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,De.width,De.height,Ee,Ge,De.data):t.texImage2D(s.TEXTURE_2D,oe,Ie,De.width,De.height,0,Ee,Ge,De.data)}else if(_.isDataArrayTexture)if(gt){if(Ut&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,Ie,J.width,J.height,J.depth),B)if(_.layerUpdates.size>0){const oe=$p(J.width,J.height,_.format,_.type);for(const Fe of _.layerUpdates){const ze=J.data.subarray(Fe*oe/J.data.BYTES_PER_ELEMENT,(Fe+1)*oe/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Fe,J.width,J.height,1,Ee,Ge,ze)}_.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Ee,Ge,J.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ie,J.width,J.height,J.depth,0,Ee,Ge,J.data);else if(_.isData3DTexture)gt?(Ut&&t.texStorage3D(s.TEXTURE_3D,Ue,Ie,J.width,J.height,J.depth),B&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Ee,Ge,J.data)):t.texImage3D(s.TEXTURE_3D,0,Ie,J.width,J.height,J.depth,0,Ee,Ge,J.data);else if(_.isFramebufferTexture){if(Ut)if(gt)t.texStorage2D(s.TEXTURE_2D,Ue,Ie,J.width,J.height);else{let oe=J.width,Fe=J.height;for(let ze=0;ze<Ue;ze++)t.texImage2D(s.TEXTURE_2D,ze,Ie,oe,Fe,0,Ee,Ge,null),oe>>=1,Fe>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in s){const oe=s.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),J.parentNode!==oe){oe.appendChild(J),d.add(_),oe.onpaint=Fe=>{const ze=Fe.changedElements;for(const ve of d)ze.includes(ve.image)&&(ve.needsUpdate=!0)},oe.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,J);else{const ze=s.RGBA,ve=s.RGBA,ct=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ze,ve,ct,J)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ot.length>0){if(gt&&Ut){const oe=Bt(ot[0]);t.texStorage2D(s.TEXTURE_2D,Ue,Ie,oe.width,oe.height)}for(let oe=0,Fe=ot.length;oe<Fe;oe++)De=ot[oe],gt?B&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,Ee,Ge,De):t.texImage2D(s.TEXTURE_2D,oe,Ie,Ee,Ge,De);_.generateMipmaps=!1}else if(gt){if(Ut){const oe=Bt(J);t.texStorage2D(s.TEXTURE_2D,Ue,Ie,oe.width,oe.height)}B&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee,Ge,J)}else t.texImage2D(s.TEXTURE_2D,0,Ie,Ee,Ge,J);p(_)&&w(Y),Z.__version=I.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function xt(C,_,H){if(_.image.length!==6)return;const Y=Dt(C,_),re=_.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+H);const I=n.get(re);if(re.version!==I.__version||Y===!0){t.activeTexture(s.TEXTURE0+H);const Z=jt.getPrimaries(jt.workingColorSpace),k=_.colorSpace===Mr?null:jt.getPrimaries(_.colorSpace),J=_.colorSpace===Mr||Z===k?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const Ee=_.isCompressedTexture||_.image[0].isCompressedTexture,Ge=_.image[0]&&_.image[0].isDataTexture,Ie=[];for(let ve=0;ve<6;ve++)!Ee&&!Ge?Ie[ve]=m(_.image[ve],!0,i.maxCubemapSize):Ie[ve]=Ge?_.image[ve].image:_.image[ve],Ie[ve]=$t(_,Ie[ve]);const De=Ie[0],ot=r.convert(_.format,_.colorSpace),gt=r.convert(_.type),Ut=v(_.internalFormat,ot,gt,_.normalized,_.colorSpace),B=_.isVideoTexture!==!0,Ue=I.__version===void 0||Y===!0,oe=re.dataReady;let Fe=E(_,De);At(s.TEXTURE_CUBE_MAP,_);let ze;if(Ee){B&&Ue&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,Ut,De.width,De.height);for(let ve=0;ve<6;ve++){ze=Ie[ve].mipmaps;for(let ct=0;ct<ze.length;ct++){const st=ze[ct];_.format!==Vi?ot!==null?B?oe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ct,0,0,st.width,st.height,ot,st.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ct,Ut,st.width,st.height,0,st.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ct,0,0,st.width,st.height,ot,gt,st.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ct,Ut,st.width,st.height,0,ot,gt,st.data)}}}else{if(ze=_.mipmaps,B&&Ue){ze.length>0&&Fe++;const ve=Bt(Ie[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,Ut,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Ge){B?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ie[ve].width,Ie[ve].height,ot,gt,Ie[ve].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Ut,Ie[ve].width,Ie[ve].height,0,ot,gt,Ie[ve].data);for(let ct=0;ct<ze.length;ct++){const dn=ze[ct].image[ve].image;B?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ct+1,0,0,dn.width,dn.height,ot,gt,dn.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ct+1,Ut,dn.width,dn.height,0,ot,gt,dn.data)}}else{B?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,ot,gt,Ie[ve]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Ut,ot,gt,Ie[ve]);for(let ct=0;ct<ze.length;ct++){const st=ze[ct];B?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ct+1,0,0,ot,gt,st.image[ve]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ct+1,Ut,ot,gt,st.image[ve])}}}p(_)&&w(s.TEXTURE_CUBE_MAP),I.__version=re.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function qe(C,_,H,Y,re,I){const Z=r.convert(H.format,H.colorSpace),k=r.convert(H.type),J=v(H.internalFormat,Z,k,H.normalized,H.colorSpace),Ee=n.get(_),Ge=n.get(H);if(Ge.__renderTarget=_,!Ee.__hasExternalTextures){const Ie=Math.max(1,_.width>>I),De=Math.max(1,_.height>>I);re===s.TEXTURE_3D||re===s.TEXTURE_2D_ARRAY?t.texImage3D(re,I,J,Ie,De,_.depth,0,Z,k,null):t.texImage2D(re,I,J,Ie,De,0,Z,k,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),St(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,re,Ge.__webglTexture,0,ft(_)):(re===s.TEXTURE_2D||re>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,re,Ge.__webglTexture,I),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Mt(C,_,H){if(s.bindRenderbuffer(s.RENDERBUFFER,C),_.depthBuffer){const Y=_.depthTexture,re=Y&&Y.isDepthTexture?Y.type:null,I=T(_.stencilBuffer,re),Z=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;St(_)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft(_),I,_.width,_.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft(_),I,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,I,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,C)}else{const Y=_.textures;for(let re=0;re<Y.length;re++){const I=Y[re],Z=r.convert(I.format,I.colorSpace),k=r.convert(I.type),J=v(I.internalFormat,Z,k,I.normalized,I.colorSpace);St(_)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft(_),J,_.width,_.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft(_),J,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,J,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function an(C,_,H){const Y=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const re=n.get(_.depthTexture);if(re.__renderTarget=_,(!re.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y){if(re.__webglInit===void 0&&(re.__webglInit=!0,_.depthTexture.addEventListener("dispose",P)),re.__webglTexture===void 0){re.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),At(s.TEXTURE_CUBE_MAP,_.depthTexture);const Ee=r.convert(_.depthTexture.format),Ge=r.convert(_.depthTexture.type);let Ie;_.depthTexture.format===er?Ie=s.DEPTH_COMPONENT24:_.depthTexture.format===qr&&(Ie=s.DEPTH24_STENCIL8);for(let De=0;De<6;De++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Ie,_.width,_.height,0,Ee,Ge,null)}}else _e(_.depthTexture,0);const I=re.__webglTexture,Z=ft(_),k=Y?s.TEXTURE_CUBE_MAP_POSITIVE_X+H:s.TEXTURE_2D,J=_.depthTexture.format===qr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(_.depthTexture.format===er)St(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,k,I,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,J,k,I,0);else if(_.depthTexture.format===qr)St(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,k,I,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,J,k,I,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ce(C){const _=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){const Y=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){const re=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",re)};Y.addEventListener("dispose",re),_.__depthDisposeCallback=re}_.__boundDepthTexture=Y}if(C.depthTexture&&!_.__autoAllocateDepthBuffer)if(H)for(let Y=0;Y<6;Y++)an(_.__webglFramebuffer[Y],C,Y);else{const Y=C.texture.mipmaps;Y&&Y.length>0?an(_.__webglFramebuffer[0],C,0):an(_.__webglFramebuffer,C,0)}else if(H){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=s.createRenderbuffer(),Mt(_.__webglDepthbuffer[Y],C,!1);else{const re=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,I=_.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,I),s.framebufferRenderbuffer(s.FRAMEBUFFER,re,s.RENDERBUFFER,I)}}else{const Y=C.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),Mt(_.__webglDepthbuffer,C,!1);else{const re=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,I=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,I),s.framebufferRenderbuffer(s.FRAMEBUFFER,re,s.RENDERBUFFER,I)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(C,_,H){const Y=n.get(C);_!==void 0&&qe(Y.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&ce(C)}function Se(C){const _=C.texture,H=n.get(C),Y=n.get(_);C.addEventListener("dispose",x);const re=C.textures,I=C.isWebGLCubeRenderTarget===!0,Z=re.length>1;if(Z||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=_.version,o.memory.textures++),I){H.__webglFramebuffer=[];for(let k=0;k<6;k++)if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer[k]=[];for(let J=0;J<_.mipmaps.length;J++)H.__webglFramebuffer[k][J]=s.createFramebuffer()}else H.__webglFramebuffer[k]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer=[];for(let k=0;k<_.mipmaps.length;k++)H.__webglFramebuffer[k]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(Z)for(let k=0,J=re.length;k<J;k++){const Ee=n.get(re[k]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&St(C)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let k=0;k<re.length;k++){const J=re[k];H.__webglColorRenderbuffer[k]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[k]);const Ee=r.convert(J.format,J.colorSpace),Ge=r.convert(J.type),Ie=v(J.internalFormat,Ee,Ge,J.normalized,J.colorSpace,C.isXRRenderTarget===!0),De=ft(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,De,Ie,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+k,s.RENDERBUFFER,H.__webglColorRenderbuffer[k])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),Mt(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(I){t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),At(s.TEXTURE_CUBE_MAP,_);for(let k=0;k<6;k++)if(_.mipmaps&&_.mipmaps.length>0)for(let J=0;J<_.mipmaps.length;J++)qe(H.__webglFramebuffer[k][J],C,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+k,J);else qe(H.__webglFramebuffer[k],C,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+k,0);p(_)&&w(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Z){for(let k=0,J=re.length;k<J;k++){const Ee=re[k],Ge=n.get(Ee);let Ie=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Ie=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ie,Ge.__webglTexture),At(Ie,Ee),qe(H.__webglFramebuffer,C,Ee,s.COLOR_ATTACHMENT0+k,Ie,0),p(Ee)&&w(Ie)}t.unbindTexture()}else{let k=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(k=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(k,Y.__webglTexture),At(k,_),_.mipmaps&&_.mipmaps.length>0)for(let J=0;J<_.mipmaps.length;J++)qe(H.__webglFramebuffer[J],C,_,s.COLOR_ATTACHMENT0,k,J);else qe(H.__webglFramebuffer,C,_,s.COLOR_ATTACHMENT0,k,0);p(_)&&w(k),t.unbindTexture()}C.depthBuffer&&ce(C)}function be(C){const _=C.textures;for(let H=0,Y=_.length;H<Y;H++){const re=_[H];if(p(re)){const I=A(C),Z=n.get(re).__webglTexture;t.bindTexture(I,Z),w(I),t.unbindTexture()}}}const Pe=[],lt=[];function tt(C){if(C.samples>0){if(St(C)===!1){const _=C.textures,H=C.width,Y=C.height;let re=s.COLOR_BUFFER_BIT;const I=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=n.get(C),k=_.length>1;if(k)for(let Ee=0;Ee<_.length;Ee++)t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Z.__webglMultisampledFramebuffer);const J=C.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Z.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Z.__webglFramebuffer);for(let Ee=0;Ee<_.length;Ee++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(re|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(re|=s.STENCIL_BUFFER_BIT)),k){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Z.__webglColorRenderbuffer[Ee]);const Ge=n.get(_[Ee]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ge,0)}s.blitFramebuffer(0,0,H,Y,0,0,H,Y,re,s.NEAREST),l===!0&&(Pe.length=0,lt.length=0,Pe.push(s.COLOR_ATTACHMENT0+Ee),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(Pe.push(I),lt.push(I),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,lt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Pe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),k)for(let Ee=0;Ee<_.length;Ee++){t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,Z.__webglColorRenderbuffer[Ee]);const Ge=n.get(_[Ee]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,Ge,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Z.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const _=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function ft(C){return Math.min(i.maxSamples,C.samples)}function St(C){const _=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function N(C){const _=o.render.frame;u.get(C)!==_&&(u.set(C,_),C.update())}function $t(C,_){const H=C.colorSpace,Y=C.format,re=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==bi&&H!==Mr&&(jt.getTransfer(H)===yn?(Y!==Vi||re!==Ii)&&dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):wt("WebGLTextures: Unsupported texture color space:",H)),_}function Bt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=W,this.getTextureUnits=F,this.setTextureUnits=X,this.setTexture2D=_e,this.setTexture2DArray=ne,this.setTexture3D=ue,this.setTextureCube=de,this.rebindTextures=xe,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=qe,this.useMultisampledRTT=St,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function qb(s,e){function t(n,i=Mr){let r;const o=jt.getTransfer(i);if(n===Ii)return s.UNSIGNED_BYTE;if(n===Pd)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ld)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Xm)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===qm)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vm)return s.BYTE;if(n===Wm)return s.SHORT;if(n===Wa)return s.UNSIGNED_SHORT;if(n===Cd)return s.INT;if(n===Es)return s.UNSIGNED_INT;if(n===Gi)return s.FLOAT;if(n===Ts)return s.HALF_FLOAT;if(n===Ym)return s.ALPHA;if(n===Km)return s.RGB;if(n===Vi)return s.RGBA;if(n===er)return s.DEPTH_COMPONENT;if(n===qr)return s.DEPTH_STENCIL;if(n===Id)return s.RED;if(n===Nd)return s.RED_INTEGER;if(n===$r)return s.RG;if(n===Dd)return s.RG_INTEGER;if(n===Ud)return s.RGBA_INTEGER;if(n===Tc||n===wc||n===Ac||n===Rc)if(o===yn)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Tc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ac)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Rc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Tc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ac)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Rc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fh||n===Oh||n===Bh||n===kh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zh||n===Hh||n===Gh||n===Vh||n===Wh||n===Fc||n===Xh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===zh||n===Hh)return o===yn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Gh)return o===yn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Vh)return r.COMPRESSED_R11_EAC;if(n===Wh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Fc)return r.COMPRESSED_RG11_EAC;if(n===Xh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===qh||n===Yh||n===Kh||n===Zh||n===$h||n===Jh||n===Qh||n===jh||n===ed||n===td||n===nd||n===id||n===sd||n===rd)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===qh)return o===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yh)return o===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kh)return o===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zh)return o===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$h)return o===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jh)return o===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qh)return o===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jh)return o===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ed)return o===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===td)return o===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nd)return o===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===id)return o===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sd)return o===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rd)return o===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===od||n===ad||n===ld)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===od)return o===yn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ad)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ld)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cd||n===ud||n===Oc||n===hd)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===cd)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ud)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hd)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xa?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Yb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Zb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new o0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Xi({vertexShader:Yb,fragmentShader:Kb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new at(new ll(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $b extends Qr{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null;const y=typeof XRWebGLBinding<"u",m=new Zb,p={},w=t.getContextAttributes();let A=null,v=null;const T=[],E=[],P=new Ce;let x=null,R=null;const L=new gi;L.viewport=new wn;const U=new gi;U.viewport=new wn;const V=[L,U],W=new Yx;let F=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ae=T[ie];return ae===void 0&&(ae=new Gu,T[ie]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(ie){let ae=T[ie];return ae===void 0&&(ae=new Gu,T[ie]=ae),ae.getGripSpace()},this.getHand=function(ie){let ae=T[ie];return ae===void 0&&(ae=new Gu,T[ie]=ae),ae.getHandSpace()};function q(ie){const ae=E.indexOf(ie.inputSource);if(ae===-1)return;const Re=T[ae];Re!==void 0&&(Re.update(ie.inputSource,ie.frame,c||o),Re.dispatchEvent({type:ie.type,data:ie.inputSource}))}function te(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",te),i.removeEventListener("inputsourceschange",_e);for(let ie=0;ie<T.length;ie++){const ae=E[ie];ae!==null&&(E[ie]=null,T[ie].disconnect(ae))}F=null,X=null,m.reset();for(const ie in p)delete p[ie];if(e.setRenderTarget(A),f=null,h=null,d=null,i=null,v=null,Dt.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(P.width,P.height,!1),R!==null){const ie=R.camera;ie.fov=R.fov,ie.zoom=R.zoom,ie.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,n.isPresenting===!0&&dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,n.isPresenting===!0&&dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(ie){if(i=ie,i!==null){if(A=e.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",te),i.addEventListener("inputsourceschange",_e),w.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(P),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,xt=null,qe=null;w.depth&&(qe=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=w.stencil?qr:er,xt=w.stencil?Xa:Es);const Mt={colorFormat:t.RGBA8,depthFormat:qe,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Mt),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new cs(h.textureWidth,h.textureHeight,{format:Vi,type:Ii,depthTexture:new $a(h.textureWidth,h.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const Re={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,Re),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new cs(f.framebufferWidth,f.framebufferHeight,{format:Vi,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Dt.setContext(i),Dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function _e(ie){for(let ae=0;ae<ie.removed.length;ae++){const Re=ie.removed[ae],xt=E.indexOf(Re);xt>=0&&(E[xt]=null,T[xt].disconnect(Re))}for(let ae=0;ae<ie.added.length;ae++){const Re=ie.added[ae];let xt=E.indexOf(Re);if(xt===-1){for(let Mt=0;Mt<T.length;Mt++)if(Mt>=E.length){E.push(Re),xt=Mt;break}else if(E[Mt]===null){E[Mt]=Re,xt=Mt;break}if(xt===-1)break}const qe=T[xt];qe&&qe.connect(Re)}}const ne=new S,ue=new S;function de(ie,ae,Re){ne.setFromMatrixPosition(ae.matrixWorld),ue.setFromMatrixPosition(Re.matrixWorld);const xt=ne.distanceTo(ue),qe=ae.projectionMatrix.elements,Mt=Re.projectionMatrix.elements,an=qe[14]/(qe[10]-1),ce=qe[14]/(qe[10]+1),xe=(qe[9]+1)/qe[5],Se=(qe[9]-1)/qe[5],be=(qe[8]-1)/qe[0],Pe=(Mt[8]+1)/Mt[0],lt=an*be,tt=an*Pe,ft=xt/(-be+Pe),St=ft*-be;if(ae.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(St),ie.translateZ(ft),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),qe[10]===-1)ie.projectionMatrix.copy(ae.projectionMatrix),ie.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const N=an+ft,$t=ce+ft,Bt=lt-St,C=tt+(xt-St),_=xe*ce/$t*N,H=Se*ce/$t*N;ie.projectionMatrix.makePerspective(Bt,C,_,H,N,$t),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function Qe(ie,ae){ae===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ae.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(i===null)return;let ae=ie.near,Re=ie.far;m.texture!==null&&(m.depthNear>0&&(ae=m.depthNear),m.depthFar>0&&(Re=m.depthFar)),W.near=U.near=L.near=ae,W.far=U.far=L.far=Re,(F!==W.near||X!==W.far)&&(i.updateRenderState({depthNear:W.near,depthFar:W.far}),F=W.near,X=W.far),W.layers.mask=ie.layers.mask|6,L.layers.mask=W.layers.mask&-5,U.layers.mask=W.layers.mask&-3;const xt=ie.parent,qe=W.cameras;Qe(W,xt);for(let Mt=0;Mt<qe.length;Mt++)Qe(qe[Mt],xt);qe.length===2?de(W,L,U):W.projectionMatrix.copy(L.projectionMatrix),R===null&&ie.isPerspectiveCamera&&(R={camera:ie,fov:ie.fov,zoom:ie.zoom}),Xe(ie,W,xt)};function Xe(ie,ae,Re){Re===null?ie.matrix.copy(ae.matrixWorld):(ie.matrix.copy(Re.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ae.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ae.projectionMatrix),ie.projectionMatrixInverse.copy(ae.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Xo*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(ie){l=ie,h!==null&&(h.fixedFoveation=ie),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ie)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(W)},this.getCameraTexture=function(ie){return p[ie]};let sn=null;function At(ie,ae){if(u=ae.getViewerPose(c||o),g=ae,u!==null){const Re=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let xt=!1;Re.length!==W.cameras.length&&(W.cameras.length=0,xt=!0);for(let ce=0;ce<Re.length;ce++){const xe=Re[ce];let Se=null;if(f!==null)Se=f.getViewport(xe);else{const Pe=d.getViewSubImage(h,xe);Se=Pe.viewport,ce===0&&(e.setRenderTargetTextures(v,Pe.colorTexture,Pe.depthStencilTexture),e.setRenderTarget(v))}let be=V[ce];be===void 0&&(be=new gi,be.layers.enable(ce),be.viewport=new wn,V[ce]=be),be.matrix.fromArray(xe.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(xe.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Se.x,Se.y,Se.width,Se.height),ce===0&&(W.matrix.copy(be.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),xt===!0&&W.cameras.push(be)}const qe=i.enabledFeatures;if(qe&&qe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&y){d=n.getBinding();const ce=d.getDepthInformation(Re[0]);ce&&ce.isValid&&ce.texture&&m.init(ce,i.renderState)}if(qe&&qe.includes("camera-access")&&y){e.state.unbindTexture(),d=n.getBinding();for(let ce=0;ce<Re.length;ce++){const xe=Re[ce].camera;if(xe){let Se=p[xe];Se||(Se=new o0,p[xe]=Se);const be=d.getCameraImage(xe);Se.sourceTexture=be}}}}for(let Re=0;Re<T.length;Re++){const xt=E[Re],qe=T[Re];xt!==null&&qe!==void 0&&qe.update(xt,ae,c||o)}sn&&sn(ie,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),g=null}const Dt=new y0;Dt.setAnimationLoop(At),this.setAnimationLoop=function(ie){sn=ie},this.dispose=function(){}}}const Jb=new Gt,A0=new Ht;A0.set(-1,0,0,0,1,0,0,0,1);function Qb(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,g0(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,w,A,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,w,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Si&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Si&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),A=w.envMap,v=w.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(Jb.makeRotationFromEuler(v)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(A0),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=A*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Si&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function jb(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,T){const E=T.program;n.uniformBlockBinding(v,E)}function c(v,T){let E=i[v.id];E===void 0&&(m(v),E=u(v),i[v.id]=E,v.addEventListener("dispose",w));const P=T.program;n.updateUBOMapping(v,P);const x=e.render.frame;r[v.id]!==x&&(h(v),r[v.id]=x)}function u(v){const T=d();v.__bindingPointIndex=T;const E=s.createBuffer(),P=v.__size,x=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,P,x),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,T,E),E}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const T=i[v.id],E=v.uniforms,P=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let x=0,R=E.length;x<R;x++){const L=E[x];if(Array.isArray(L))for(let U=0,V=L.length;U<V;U++)f(L[U],x,U,P);else f(L,x,0,P)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,T,E,P){if(y(v,T,E,P)===!0){const x=v.__offset,R=v.value;if(Array.isArray(R)){let L=0;for(let U=0;U<R.length;U++){const V=R[U],W=p(V);g(V,v.__data,L),typeof V!="number"&&typeof V!="boolean"&&!V.isMatrix3&&!ArrayBuffer.isView(V)&&(L+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(R,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,x,v.__data)}}function g(v,T,E){typeof v=="number"||typeof v=="boolean"?T[0]=v:v.isMatrix3?(T[0]=v.elements[0],T[1]=v.elements[1],T[2]=v.elements[2],T[3]=0,T[4]=v.elements[3],T[5]=v.elements[4],T[6]=v.elements[5],T[7]=0,T[8]=v.elements[6],T[9]=v.elements[7],T[10]=v.elements[8],T[11]=0):ArrayBuffer.isView(v)?T.set(new v.constructor(v.buffer,v.byteOffset,T.length)):v.toArray(T,E)}function y(v,T,E,P){const x=v.value,R=T+"_"+E;if(P[R]===void 0)return typeof x=="number"||typeof x=="boolean"?P[R]=x:ArrayBuffer.isView(x)?P[R]=x.slice():P[R]=x.clone(),!0;{const L=P[R];if(typeof x=="number"||typeof x=="boolean"){if(L!==x)return P[R]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(L.equals(x)===!1)return L.copy(x),!0}}return!1}function m(v){const T=v.uniforms;let E=0;const P=16;for(let R=0,L=T.length;R<L;R++){const U=Array.isArray(T[R])?T[R]:[T[R]];for(let V=0,W=U.length;V<W;V++){const F=U[V],X=Array.isArray(F.value)?F.value:[F.value];for(let q=0,te=X.length;q<te;q++){const _e=X[q],ne=p(_e),ue=E%P,de=ue%ne.boundary,Qe=ue+de;E+=de,Qe!==0&&P-Qe<ne.storage&&(E+=P-Qe),F.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=E,E+=ne.storage}}}const x=E%P;return x>0&&(E+=P-x),v.__size=E,v.__cache={},this}function p(v){const T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(T.boundary=16,T.storage=v.byteLength):dt("WebGLRenderer: Unsupported uniform value type.",v),T}function w(v){const T=v.target;T.removeEventListener("dispose",w);const E=o.indexOf(T.__bindingPointIndex);o.splice(E,1),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function A(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:l,update:c,dispose:A}}const e1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let gs=null;function t1(){return gs===null&&(gs=new Gd(e1,16,16,$r,Ts),gs.name="DFG_LUT",gs.minFilter=Gn,gs.magFilter=Gn,gs.wrapS=ys,gs.wrapT=ys,gs.generateMipmaps=!1,gs.needsUpdate=!0),gs}class n1{constructor(e={}){const{canvas:t=Gg(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Ii}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const y=f,m=new Set([Ud,Dd,Nd]),p=new Set([Ii,Es,Wa,Xa,Pd,Ld]),w=new Uint32Array(4),A=new Int32Array(4),v=new S;let T=null,E=null;const P=[],x=[];let R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ss,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let U=!1,V=null,W=null,F=null,X=null;this._outputColorSpace=Ln;let q=0,te=0,_e=null,ne=-1,ue=null;const de=new wn,Qe=new wn;let Xe=null;const sn=new Te(0);let At=0,Dt=t.width,ie=t.height,ae=1,Re=null,xt=null;const qe=new wn(0,0,Dt,ie),Mt=new wn(0,0,Dt,ie);let an=!1;const ce=new Wd;let xe=!1,Se=!1;const be=new Gt,Pe=new S,lt=new wn,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function St(){return _e===null?ae:1}let N=n;function $t(M,D){return t.getContext(M,D)}let Bt,C,_,H,Y,re,I,Z,k,J,Ee,Ge,Ie,De,ot,gt,Ut,B,Ue,oe,Fe,ze,ve;try{const M={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ad}`),t.addEventListener("webglcontextlost",dn,!1),t.addEventListener("webglcontextrestored",tn,!1),t.addEventListener("webglcontextcreationerror",oi,!1),N===null){const D="webgl2";if(N=$t(D,M),N===null)throw $t(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ct()}catch(M){throw t.removeEventListener("webglcontextlost",dn,!1),t.removeEventListener("webglcontextrestored",tn,!1),t.removeEventListener("webglcontextcreationerror",oi,!1),wt("WebGLRenderer: "+M.message),M}function ct(){Bt=new tS(N),Bt.init(),Fe=new qb(N,Bt),C=new XM(N,Bt,e,Fe),_=new Wb(N,Bt),C.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),W=N.createFramebuffer(),F=N.createFramebuffer(),X=N.createFramebuffer(),H=new sS(N),Y=new Pb,re=new Xb(N,Bt,_,Y,C,Fe,H),I=new eS(L),Z=new ov(N),ze=new VM(N,Z),k=new nS(N,Z,H,ze),J=new oS(N,k,Z,ze,H),B=new rS(N,C,re),ot=new qM(Y),Ee=new Cb(L,I,Bt,C,ze,ot),Ge=new Qb(L,Y),Ie=new Ib,De=new Bb(Bt),Ut=new GM(L,I,_,J,g,l),gt=new Vb(L,J,C),ve=new jb(N,H,C,_),Ue=new WM(N,Bt,H),oe=new iS(N,Bt,H),H.programs=Ee.programs,L.capabilities=C,L.extensions=Bt,L.properties=Y,L.renderLists=Ie,L.shadowMap=gt,L.state=_,L.info=H}y!==Ii&&(R=new lS(y,t.width,t.height,a,i,r));const st=new $b(L,N);this.xr=st,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const M=Bt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Bt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(M){M!==void 0&&(ae=M,this.setSize(Dt,ie,!1))},this.getSize=function(M){return M.set(Dt,ie)},this.setSize=function(M,D,Q=!0){if(st.isPresenting){dt("WebGLRenderer: Can't change size while VR device is presenting.");return}Dt=M,ie=D,t.width=Math.floor(M*ae),t.height=Math.floor(D*ae),Q===!0&&(t.style.width=M+"px",t.style.height=D+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(Dt*ae,ie*ae).floor()},this.setDrawingBufferSize=function(M,D,Q){Dt=M,ie=D,ae=Q,t.width=Math.floor(M*Q),t.height=Math.floor(D*Q),this.setViewport(0,0,M,D)},this.setEffects=function(M){if(y===Ii){wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let D=0;D<M.length;D++)if(M[D].isOutputPass===!0){dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(de)},this.getViewport=function(M){return M.copy(qe)},this.setViewport=function(M,D,Q,K){M.isVector4?qe.set(M.x,M.y,M.z,M.w):qe.set(M,D,Q,K),_.viewport(de.copy(qe).multiplyScalar(ae).round())},this.getScissor=function(M){return M.copy(Mt)},this.setScissor=function(M,D,Q,K){M.isVector4?Mt.set(M.x,M.y,M.z,M.w):Mt.set(M,D,Q,K),_.scissor(Qe.copy(Mt).multiplyScalar(ae).round())},this.getScissorTest=function(){return an},this.setScissorTest=function(M){_.setScissorTest(an=M)},this.setOpaqueSort=function(M){Re=M},this.setTransparentSort=function(M){xt=M},this.getClearColor=function(M){return M.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor(...arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha(...arguments)},this.clear=function(M=!0,D=!0,Q=!0){let K=0;if(M){let $=!1;if(_e!==null){const O=_e.texture.format;$=m.has(O)}if($){const O=_e.texture.type,Ke=p.has(O),He=Ut.getClearColor(),et=Ut.getClearAlpha(),nt=He.r,It=He.g,kt=He.b;Ke?(w[0]=nt,w[1]=It,w[2]=kt,w[3]=et,N.clearBufferuiv(N.COLOR,0,w)):(A[0]=nt,A[1]=It,A[2]=kt,A[3]=et,N.clearBufferiv(N.COLOR,0,A))}else K|=N.COLOR_BUFFER_BIT}D&&(K|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(K|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&N.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),V=M},this.dispose=function(){t.removeEventListener("webglcontextlost",dn,!1),t.removeEventListener("webglcontextrestored",tn,!1),t.removeEventListener("webglcontextcreationerror",oi,!1),Ut.dispose(),Ie.dispose(),De.dispose(),Y.dispose(),I.dispose(),J.dispose(),ze.dispose(),ve.dispose(),Ee.dispose(),st.dispose(),st.removeEventListener("sessionstart",fl),st.removeEventListener("sessionend",pl),Rs.stop()};function dn(M){M.preventDefault(),kc("WebGLRenderer: Context Lost."),U=!0}function tn(){kc("WebGLRenderer: Context Restored."),U=!1;const M=H.autoReset,D=gt.enabled,Q=gt.autoUpdate,K=gt.needsUpdate,$=gt.type;ct(),H.autoReset=M,gt.enabled=D,gt.autoUpdate=Q,gt.needsUpdate=K,gt.type=$}function oi(M){wt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function _i(M){const D=M.target;D.removeEventListener("dispose",_i),hl(D)}function hl(M){dl(M),Y.remove(M)}function dl(M){const D=Y.get(M).programs;D!==void 0&&(D.forEach(function(Q){Ee.releaseProgram(Q)}),M.isShaderMaterial&&Ee.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,Q,K,$,O){D===null&&(D=tt);const Ke=$.isMesh&&$.matrixWorld.determinantAffine()<0,He=su(M,D,Q,K,$);_.setMaterial(K,Ke);let et=Q.index,nt=1;if(K.wireframe===!0){if(et=k.getWireframeAttribute(Q),et===void 0)return;nt=2}const It=Q.drawRange,kt=Q.attributes.position;let it=It.start*nt,Vt=(It.start+It.count)*nt;O!==null&&(it=Math.max(it,O.start*nt),Vt=Math.min(Vt,(O.start+O.count)*nt)),et!==null?(it=Math.max(it,0),Vt=Math.min(Vt,et.count)):kt!=null&&(it=Math.max(it,0),Vt=Math.min(Vt,kt.count));const vn=Vt-it;if(vn<0||vn===1/0)return;ze.setup($,K,He,Q,et);let Nt,_n=Ue;if(et!==null&&(Nt=Z.get(et),_n=oe,_n.setIndex(Nt)),$.isMesh)K.wireframe===!0?(_.setLineWidth(K.wireframeLinewidth*St()),_n.setMode(N.LINES)):_n.setMode(N.TRIANGLES);else if($.isLine){let Kn=K.linewidth;Kn===void 0&&(Kn=1),_.setLineWidth(Kn*St()),$.isLineSegments?_n.setMode(N.LINES):$.isLineLoop?_n.setMode(N.LINE_LOOP):_n.setMode(N.LINE_STRIP)}else $.isPoints?_n.setMode(N.POINTS):$.isSprite&&_n.setMode(N.TRIANGLES);if($.isBatchedMesh)if(Bt.get("WEBGL_multi_draw"))_n.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Kn=$._multiDrawStarts,Ye=$._multiDrawCounts,ti=$._multiDrawCount,rn=et?Z.get(et).bytesPerElement:1,ni=Y.get(K).currentProgram.getUniforms();for(let Ti=0;Ti<ti;Ti++)ni.setValue(N,"_gl_DrawID",Ti),_n.render(Kn[Ti]/rn,Ye[Ti])}else if($.isInstancedMesh)_n.renderInstances(it,vn,$.count);else if(Q.isInstancedBufferGeometry){const Kn=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ye=Math.min(Q.instanceCount,Kn);_n.renderInstances(it,vn,Ye)}else _n.render(it,vn)};function eo(M,D,Q,K){V!==null&&M.isNodeMaterial&&V.setObject(K,M),xe===!0&&ot.setState(M,Q,!1),M.transparent===!0&&M.side===hn&&M.forceSinglePass===!1?(M.side=Si,M.needsUpdate=!0,wr(M,D,K),M.side=br,M.needsUpdate=!0,wr(M,D,K),M.side=hn):wr(M,D,K)}this.compile=function(M,D,Q=null){Q===null&&(Q=M),V!==null&&V.renderStart(M,D,Q),E=De.get(Q),E.init(D),x.push(E),Q.traverseVisible(function($){$.isLight&&$.layers.test(D.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),M!==Q&&M.traverseVisible(function($){$.isLight&&$.layers.test(D.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),E.setupLights(),V!==null&&V.updateLights(E.state.lightsArray),Se=this.localClippingEnabled,xe=ot.init(this.clippingPlanes,Se),xe===!0&&ot.setGlobalState(this.clippingPlanes,D),V!==null&&gt.render(E.state.shadowsArray,Q,D);const K=new Set;return M.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const O=$.material;if(O)if(Array.isArray(O))for(let Ke=0;Ke<O.length;Ke++){const He=O[Ke];eo(He,Q,D,$),K.add(He)}else eo(O,Q,D,$),K.add(O)}),E=x.pop(),V!==null&&V.renderEnd(),K},this.compileAsync=function(M,D,Q=null){const K=this.compile(M,D,Q);return new Promise($=>{function O(){if(K.forEach(function(Ke){const et=Y.get(Ke).currentProgram;(et===void 0||et.isReady())&&K.delete(Ke)}),K.size===0){$(M);return}setTimeout(O,10)}Bt.get("KHR_parallel_shader_compile")!==null?O():setTimeout(O,10)})};let jo=null;function Tr(M){jo&&jo(M)}function fl(){Rs.stop()}function pl(){Rs.start()}const Rs=new y0;Rs.setAnimationLoop(Tr),typeof self<"u"&&Rs.setContext(self),this.setAnimationLoop=function(M){jo=M,st.setAnimationLoop(M),M===null?Rs.stop():Rs.start()},st.addEventListener("sessionstart",fl),st.addEventListener("sessionend",pl),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;V!==null&&V.renderStart(M,D);const Q=st.enabled===!0&&st.isPresenting===!0,K=R!==null&&(_e===null||Q)&&R.begin(L,_e);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(D),D=st.getCamera()),M.isScene===!0&&M.onBeforeRender(L,M,D,_e),E=De.get(M,x.length),E.init(D),E.state.textureUnits=re.getTextureUnits(),x.push(E),be.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),ce.setFromProjectionMatrix(be,Ms,D.reversedDepth),Se=this.localClippingEnabled,xe=ot.init(this.clippingPlanes,Se),T=Ie.get(M,P.length),T.init(),P.push(T),st.enabled===!0&&st.isPresenting===!0){const Ke=L.xr.getDepthSensingMesh();Ke!==null&&ml(Ke,D,-1/0,L.sortObjects)}ml(M,D,0,L.sortObjects),T.finish(),V!==null&&V.updateLights(E.state.lightsArray),L.sortObjects===!0&&T.sort(Re,xt),ft=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,ft&&Ut.addToRenderList(T,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xe===!0&&ot.beginShadows();const $=E.state.shadowsArray;if(gt.render($,M,D),xe===!0&&ot.endShadows(),(K&&R.hasRenderPass())===!1){const Ke=T.opaque,He=T.transmissive;if(E.setupLights(),D.isArrayCamera){const et=D.cameras;if(He.length>0)for(let nt=0,It=et.length;nt<It;nt++){const kt=et[nt];ea(Ke,He,M,kt)}ft&&Ut.render(M);for(let nt=0,It=et.length;nt<It;nt++){const kt=et[nt];gl(T,M,kt,kt.viewport)}}else He.length>0&&ea(Ke,He,M,D),ft&&Ut.render(M),gl(T,M,D)}_e!==null&&te===0&&(re.updateMultisampleRenderTarget(_e),re.updateRenderTargetMipmap(_e)),K&&R.end(L),M.isScene===!0&&M.onAfterRender(L,M,D),ze.resetDefaultState(),ne=-1,ue=null,x.pop(),x.length>0?(E=x[x.length-1],re.setTextureUnits(E.state.textureUnits),xe===!0&&ot.setGlobalState(L.clippingPlanes,E.state.camera)):E=null,P.pop(),P.length>0?T=P[P.length-1]:T=null,V!==null&&V.renderEnd()};function ml(M,D,Q,K){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)Q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLightProbeGrid)E.pushLightProbeGrid(M);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(ce)){K&&lt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(be);const Ke=J.update(M),He=M.material;He.visible&&T.push(M,Ke,He,Q,lt.z,null,D)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(ce))){const Ke=J.update(M),He=M.material;if(K&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),lt.copy(M.boundingSphere.center)):(Ke.boundingSphere===null&&Ke.computeBoundingSphere(),lt.copy(Ke.boundingSphere.center)),lt.applyMatrix4(M.matrixWorld).applyMatrix4(be)),Array.isArray(He)){const et=Ke.groups;for(let nt=0,It=et.length;nt<It;nt++){const kt=et[nt],it=He[kt.materialIndex];it&&it.visible&&T.push(M,Ke,it,Q,lt.z,kt,D)}}else He.visible&&T.push(M,Ke,He,Q,lt.z,null,D)}}const O=M.children;for(let Ke=0,He=O.length;Ke<He;Ke++)ml(O[Ke],D,Q,K)}function gl(M,D,Q,K){const{opaque:$,transmissive:O,transparent:Ke}=M;E.setupLightsView(Q),xe===!0&&ot.setGlobalState(L.clippingPlanes,Q),K&&_.viewport(de.copy(K)),$.length>0&&nr($,D,Q),O.length>0&&nr(O,D,Q),Ke.length>0&&nr(Ke,D,Q),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function ea(M,D,Q,K){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[K.id]===void 0){const it=Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[K.id]=new cs(1,1,{generateMipmaps:!0,type:it?Ts:Ii,minFilter:Zs,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:jt.workingColorSpace})}const O=E.state.transmissionRenderTarget[K.id],Ke=K.viewport||de;O.setSize(Ke.z*L.transmissionResolutionScale,Ke.w*L.transmissionResolutionScale);const He=L.getRenderTarget(),et=L.getActiveCubeFace(),nt=L.getActiveMipmapLevel();L.setRenderTarget(O),L.getClearColor(sn),At=L.getClearAlpha(),At<1&&L.setClearColor(16777215,.5),L.clear(),ft&&Ut.render(Q);const It=L.toneMapping;L.toneMapping=Ss;const kt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),E.setupLightsView(K),xe===!0&&ot.setGlobalState(L.clippingPlanes,K),nr(M,Q,K),re.updateMultisampleRenderTarget(O),re.updateRenderTargetMipmap(O),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Vt=0,vn=D.length;Vt<vn;Vt++){const Nt=D[Vt],{object:_n,geometry:Kn,material:Ye,group:ti}=Nt;if(Ye.side===hn&&_n.layers.test(K.layers)){const rn=Ye.side;Ye.side=Si,Ye.needsUpdate=!0,ta(_n,Q,K,Kn,Ye,ti),Ye.side=rn,Ye.needsUpdate=!0,it=!0}}it===!0&&(re.updateMultisampleRenderTarget(O),re.updateRenderTargetMipmap(O))}L.setRenderTarget(He,et,nt),L.setClearColor(sn,At),kt!==void 0&&(K.viewport=kt),L.toneMapping=It}function nr(M,D,Q){const K=D.isScene===!0?D.overrideMaterial:null;for(let $=0,O=M.length;$<O;$++){const Ke=M[$],{object:He,geometry:et,group:nt}=Ke;let It=Ke.material;It.allowOverride===!0&&K!==null&&(It=K),He.layers.test(Q.layers)&&ta(He,D,Q,et,It,nt)}}function ta(M,D,Q,K,$,O){V!==null&&$.isNodeMaterial&&V.setObject(M,$),M.onBeforeRender(L,D,Q,K,$,O),M.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),$.onBeforeRender(L,D,Q,K,M,O),$.transparent===!0&&$.side===hn&&$.forceSinglePass===!1?($.side=Si,$.needsUpdate=!0,L.renderBufferDirect(Q,D,K,$,M,O),$.side=br,$.needsUpdate=!0,L.renderBufferDirect(Q,D,K,$,M,O),$.side=hn):L.renderBufferDirect(Q,D,K,$,M,O),M.onAfterRender(L,D,Q,K,$,O)}function wr(M,D,Q){D.isScene!==!0&&(D=tt);const K=Y.get(M),$=E.state.lights,O=E.state.shadowsArray,Ke=$.state.version,He=Ee.getParameters(M,$.state,O,D,Q,E.state.lightProbeGridArray),et=Ee.getProgramCacheKey(He);let nt=K.programs;K.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?D.environment:null,K.fog=D.fog;const It=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;K.envMap=I.get(M.envMap||K.environment,It),K.envMapRotation=K.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,nt===void 0&&(M.addEventListener("dispose",_i),nt=new Map,K.programs=nt);let kt=nt.get(et);if(kt!==void 0){if(K.currentProgram===kt&&K.lightsStateVersion===Ke)return Yn(M,He),kt}else He.uniforms=Ee.getUniforms(M),V!==null&&M.isNodeMaterial&&V.build(M,Q,He),M.onBeforeCompile(He,L),kt=Ee.acquireProgram(He,et),nt.set(et,kt),K.uniforms=He.uniforms;const it=K.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(it.clippingPlanes=ot.uniform),Yn(M,He),K.needsLights=Ei(M),K.lightsStateVersion=Ke,K.needsLights&&(it.ambientLightColor.value=$.state.ambient,it.lightProbe.value=$.state.probe,it.sunLights.value=$.state.sun,it.sunLightShadows.value=$.state.sunShadow,it.directionalLights.value=$.state.directional,it.directionalLightShadows.value=$.state.directionalShadow,it.spotLights.value=$.state.spot,it.spotLightShadows.value=$.state.spotShadow,it.rectAreaLights.value=$.state.rectArea,it.ltc_1.value=$.state.rectAreaLTC1,it.ltc_2.value=$.state.rectAreaLTC2,it.pointLights.value=$.state.point,it.pointLightShadows.value=$.state.pointShadow,it.hemisphereLights.value=$.state.hemi,it.sunShadowMatrix.value=$.state.sunShadowMatrix,it.sunShadowCascade.value=$.state.sunShadowCascade,it.directionalShadowMatrix.value=$.state.directionalShadowMatrix,it.spotLightMatrix.value=$.state.spotLightMatrix,it.spotLightMap.value=$.state.spotLightMap,it.pointShadowMatrix.value=$.state.pointShadowMatrix),K.lightProbeGrid=E.state.lightProbeGridArray.length>0,K.currentProgram=kt,K.uniformsList=null,kt}function _l(M){if(M.uniformsList===null){const D=M.currentProgram.getUniforms();M.uniformsList=Lc.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function Yn(M,D){const Q=Y.get(M);Q.outputColorSpace=D.outputColorSpace,Q.batching=D.batching,Q.batchingColor=D.batchingColor,Q.instancing=D.instancing,Q.instancingColor=D.instancingColor,Q.instancingMorph=D.instancingMorph,Q.skinning=D.skinning,Q.morphTargets=D.morphTargets,Q.morphNormals=D.morphNormals,Q.morphColors=D.morphColors,Q.morphTargetsCount=D.morphTargetsCount,Q.numClippingPlanes=D.numClippingPlanes,Q.numIntersection=D.numClipIntersection,Q.vertexAlphas=D.vertexAlphas,Q.vertexTangents=D.vertexTangents,Q.toneMapping=D.toneMapping}function iu(M,D){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;v.setFromMatrixPosition(D.matrixWorld);for(let Q=0,K=M.length;Q<K;Q++){const $=M[Q];if($.texture!==null&&$.boundingBox.containsPoint(v))return $}return null}function su(M,D,Q,K,$){D.isScene!==!0&&(D=tt),re.resetTextureUnits();const O=D.fog,Ke=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?D.environment:null,He=_e===null?L.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:jt.workingColorSpace,et=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,nt=I.get(K.envMap||Ke,et),It=K.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,kt=!!Q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),it=!!Q.morphAttributes.position,Vt=!!Q.morphAttributes.normal,vn=!!Q.morphAttributes.color;let Nt=Ss;K.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Nt=L.toneMapping);const _n=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Kn=_n!==void 0?_n.length:0,Ye=Y.get(K),ti=E.state.lights;if(xe===!0&&(Se===!0||M!==ue)){const bn=M===ue&&K.id===ne;ot.setState(K,M,bn)}let rn=!1;K.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==ti.state.version||Ye.outputColorSpace!==He||$.isBatchedMesh&&Ye.batching===!1||!$.isBatchedMesh&&Ye.batching===!0||$.isBatchedMesh&&Ye.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Ye.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Ye.instancing===!1||!$.isInstancedMesh&&Ye.instancing===!0||$.isSkinnedMesh&&Ye.skinning===!1||!$.isSkinnedMesh&&Ye.skinning===!0||$.isInstancedMesh&&Ye.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ye.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ye.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ye.instancingMorph===!1&&$.morphTexture!==null||Ye.envMap!==nt||K.fog===!0&&Ye.fog!==O||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==ot.numPlanes||Ye.numIntersection!==ot.numIntersection)||Ye.vertexAlphas!==It||Ye.vertexTangents!==kt||Ye.morphTargets!==it||Ye.morphNormals!==Vt||Ye.morphColors!==vn||Ye.toneMapping!==Nt||Ye.morphTargetsCount!==Kn||!!Ye.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(rn=!0):(rn=!0,Ye.__version=K.version);let ni=Ye.currentProgram;rn===!0&&(ni=wr(K,D,$),V&&K.isNodeMaterial&&V.onUpdateProgram(K,ni,Ye));let Ti=!1,qi=!1,Ps=!1;const ln=ni.getUniforms(),mn=Ye.uniforms;if(_.useProgram(ni.program)&&(Ti=!0,qi=!0,Ps=!0),K.id!==ne&&(ne=K.id,qi=!0),Ye.needsLights){const bn=iu(E.state.lightProbeGridArray,$);Ye.lightProbeGrid!==bn&&(Ye.lightProbeGrid=bn,qi=!0)}if(Ti||ue!==M){_.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ln.setValue(N,"projectionMatrix",M.projectionMatrix),ln.setValue(N,"viewMatrix",M.matrixWorldInverse);const Yi=ln.map.cameraPosition;Yi!==void 0&&Yi.setValue(N,Pe.setFromMatrixPosition(M.matrixWorld)),C.logarithmicDepthBuffer&&ln.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&ln.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),ue!==M&&(ue=M,qi=!0,Ps=!0)}if(Ye.needsLights&&(ti.state.sunShadowMap.length>0&&ln.setValue(N,"sunShadowMap",ti.state.sunShadowMap,re),ti.state.directionalShadowMap.length>0&&ln.setValue(N,"directionalShadowMap",ti.state.directionalShadowMap,re),ti.state.spotShadowMap.length>0&&ln.setValue(N,"spotShadowMap",ti.state.spotShadowMap,re),ti.state.pointShadowMap.length>0&&ln.setValue(N,"pointShadowMap",ti.state.pointShadowMap,re)),$.isSkinnedMesh){ln.setOptional(N,$,"bindMatrix"),ln.setOptional(N,$,"bindMatrixInverse");const bn=$.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),ln.setValue(N,"boneTexture",bn.boneTexture,re))}$.isBatchedMesh&&(ln.setOptional(N,$,"batchingTexture"),ln.setValue(N,"batchingTexture",$._matricesTexture,re),ln.setOptional(N,$,"batchingIdTexture"),ln.setValue(N,"batchingIdTexture",$._indirectTexture,re),ln.setOptional(N,$,"batchingColorTexture"),$._colorsTexture!==null&&ln.setValue(N,"batchingColorTexture",$._colorsTexture,re));const wi=Q.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&B.update($,Q,ni),(qi||Ye.receiveShadow!==$.receiveShadow)&&(Ye.receiveShadow=$.receiveShadow,ln.setValue(N,"receiveShadow",$.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&D.environment!==null&&(mn.envMapIntensity.value=D.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=t1()),qi){if(ln.setValue(N,"toneMappingExposure",L.toneMappingExposure),Ye.needsLights&&ru(mn,Ps),O&&K.fog===!0&&Ge.refreshFogUniforms(mn,O),Ge.refreshMaterialUniforms(mn,K,ae,ie,E.state.transmissionRenderTarget[M.id]),Ye.needsLights&&Ye.lightProbeGrid){const bn=Ye.lightProbeGrid;mn.probesSH.value=bn.texture,mn.probesMin.value.copy(bn.boundingBox.min),mn.probesMax.value.copy(bn.boundingBox.max),mn.probesResolution.value.copy(bn.resolution)}Lc.upload(N,_l(Ye),mn,re)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Lc.upload(N,_l(Ye),mn,re),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&ln.setValue(N,"center",$.center),ln.setValue(N,"modelViewMatrix",$.modelViewMatrix),ln.setValue(N,"normalMatrix",$.normalMatrix),ln.setValue(N,"modelMatrix",$.matrixWorld),K.uniformsGroups!==void 0){const bn=K.uniformsGroups;for(let Yi=0,ds=bn.length;Yi<ds;Yi++){const to=bn[Yi];ve.update(to,ni),ve.bind(to,ni)}}return ni}function ru(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.sunLights.needsUpdate=D,M.sunLightShadows.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function Ei(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return _e},this.setRenderTargetTextures=function(M,D,Q){const K=Y.get(M);K.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),Y.get(M.texture).__webglTexture=D,Y.get(M.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:Q,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,D){const Q=Y.get(M);Q.__webglFramebuffer=D,Q.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,Q=0){_e=M,q=D,te=Q;let K=null,$=!1,O=!1;if(M){const He=Y.get(M);if(He.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(N.FRAMEBUFFER,He.__webglFramebuffer),de.copy(M.viewport),Qe.copy(M.scissor),Xe=M.scissorTest,_.viewport(de),_.scissor(Qe),_.setScissorTest(Xe),ne=-1;return}else if(He.__webglFramebuffer===void 0)re.setupRenderTarget(M);else if(He.__hasExternalTextures)re.rebindTextures(M,Y.get(M.texture).__webglTexture,Y.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const It=M.depthTexture;if(He.__boundDepthTexture!==It){if(It!==null&&Y.has(It)&&(M.width!==It.image.width||M.height!==It.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(M)}}const et=M.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(O=!0);const nt=Y.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(nt[D])?K=nt[D][Q]:K=nt[D],$=!0):M.samples>0&&re.useMultisampledRTT(M)===!1?K=Y.get(M).__webglMultisampledFramebuffer:Array.isArray(nt)?K=nt[Q]:K=nt,de.copy(M.viewport),Qe.copy(M.scissor),Xe=M.scissorTest}else de.copy(qe).multiplyScalar(ae).floor(),Qe.copy(Mt).multiplyScalar(ae).floor(),Xe=an;if(Q!==0&&(K=W),_.bindFramebuffer(N.FRAMEBUFFER,K)&&_.drawBuffers(M,K),_.viewport(de),_.scissor(Qe),_.setScissorTest(Xe),$){const He=Y.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,He.__webglTexture,Q)}else if(O){const He=D;for(let et=0;et<M.textures.length;et++){const nt=Y.get(M.textures[et]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+et,nt.__webglTexture,Q,He)}}else if(M!==null&&Q!==0){const He=Y.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,He.__webglTexture,Q)}ne=-1};function Cs(M){const D=Y.get(M);return(D.__readFormat!==M.format||D.__readType!==M.type)&&(D.__readFormat=M.format,D.__readType=M.type,D.__formatReadable=C.textureFormatReadable(M.format),D.__typeReadable=C.textureTypeReadable(M.type)),D}this.readRenderTargetPixels=function(M,D,Q,K,$,O,Ke,He=0){if(!(M&&M.isWebGLRenderTarget)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let et=Y.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ke!==void 0&&(et=et[Ke]),et){_.bindFramebuffer(N.FRAMEBUFFER,et);try{const nt=M.textures[He],It=nt.format,kt=nt.type;M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+He);const it=Cs(nt);if(it.__formatReadable===!1){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(it.__typeReadable===!1){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-K&&Q>=0&&Q<=M.height-$&&N.readPixels(D,Q,K,$,Fe.convert(It),Fe.convert(kt),O)}finally{const nt=_e!==null?Y.get(_e).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(M,D,Q,K,$,O,Ke,He=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let et=Y.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ke!==void 0&&(et=et[Ke]),et)if(D>=0&&D<=M.width-K&&Q>=0&&Q<=M.height-$){_.bindFramebuffer(N.FRAMEBUFFER,et);const nt=M.textures[He],It=nt.format,kt=nt.type;M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+He);const it=Cs(nt);if(it.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(it.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Vt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Vt),N.bufferData(N.PIXEL_PACK_BUFFER,O.byteLength,N.STREAM_READ),N.readPixels(D,Q,K,$,Fe.convert(It),Fe.convert(kt),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const vn=_e!==null?Y.get(_e).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,vn);const Nt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Vg(N,Nt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Vt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,O),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(Vt),N.deleteSync(Nt),O}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,D=null,Q=0){const K=Math.pow(2,-Q),$=Math.floor(M.image.width*K),O=Math.floor(M.image.height*K),Ke=D!==null?D.x:0,He=D!==null?D.y:0;re.setTexture2D(M,0),N.copyTexSubImage2D(N.TEXTURE_2D,Q,0,0,Ke,He,$,O),_.unbindTexture()},this.copyTextureToTexture=function(M,D,Q=null,K=null,$=0,O=0){let Ke,He,et,nt,It,kt,it,Vt,vn;const Nt=M.isCompressedTexture?M.mipmaps[O]:M.image;if(Q!==null)Ke=Q.max.x-Q.min.x,He=Q.max.y-Q.min.y,et=Q.isBox3?Q.max.z-Q.min.z:1,nt=Q.min.x,It=Q.min.y,kt=Q.isBox3?Q.min.z:0;else{const mn=Math.pow(2,-$);Ke=Math.floor(Nt.width*mn),He=Math.floor(Nt.height*mn),M.isDataArrayTexture?et=Nt.depth:M.isData3DTexture?et=Math.floor(Nt.depth*mn):et=1,nt=0,It=0,kt=0}K!==null?(it=K.x,Vt=K.y,vn=K.z):(it=0,Vt=0,vn=0);const _n=Fe.convert(D.format),Kn=Fe.convert(D.type);let Ye;D.isData3DTexture?(re.setTexture3D(D,0),Ye=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(re.setTexture2DArray(D,0),Ye=N.TEXTURE_2D_ARRAY):(re.setTexture2D(D,0),Ye=N.TEXTURE_2D),_.activeTexture(N.TEXTURE0),_.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),_.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),_.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);const ti=_.getParameter(N.UNPACK_ROW_LENGTH),rn=_.getParameter(N.UNPACK_IMAGE_HEIGHT),ni=_.getParameter(N.UNPACK_SKIP_PIXELS),Ti=_.getParameter(N.UNPACK_SKIP_ROWS),qi=_.getParameter(N.UNPACK_SKIP_IMAGES);_.pixelStorei(N.UNPACK_ROW_LENGTH,Nt.width),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Nt.height),_.pixelStorei(N.UNPACK_SKIP_PIXELS,nt),_.pixelStorei(N.UNPACK_SKIP_ROWS,It),_.pixelStorei(N.UNPACK_SKIP_IMAGES,kt);const Ps=M.isDataArrayTexture||M.isData3DTexture,ln=D.isDataArrayTexture||D.isData3DTexture;if(M.isDepthTexture){const mn=Y.get(M),wi=Y.get(D),bn=Y.get(mn.__renderTarget),Yi=Y.get(wi.__renderTarget);_.bindFramebuffer(N.READ_FRAMEBUFFER,bn.__webglFramebuffer),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,Yi.__webglFramebuffer);for(let ds=0;ds<et;ds++)Ps&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Y.get(M).__webglTexture,$,kt+ds),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Y.get(D).__webglTexture,O,vn+ds)),N.blitFramebuffer(nt,It,Ke,He,it,Vt,Ke,He,N.DEPTH_BUFFER_BIT,N.NEAREST);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if($!==0||M.isRenderTargetTexture||Y.has(M)){const mn=Y.get(M),wi=Y.get(D);_.bindFramebuffer(N.READ_FRAMEBUFFER,F),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,X);for(let bn=0;bn<et;bn++)Ps?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,mn.__webglTexture,$,kt+bn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,mn.__webglTexture,$),ln?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,wi.__webglTexture,O,vn+bn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,wi.__webglTexture,O),$!==0?N.blitFramebuffer(nt,It,Ke,He,it,Vt,Ke,He,N.COLOR_BUFFER_BIT,N.NEAREST):ln?N.copyTexSubImage3D(Ye,O,it,Vt,vn+bn,nt,It,Ke,He):N.copyTexSubImage2D(Ye,O,it,Vt,nt,It,Ke,He);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ln?M.isDataTexture||M.isData3DTexture?N.texSubImage3D(Ye,O,it,Vt,vn,Ke,He,et,_n,Kn,Nt.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(Ye,O,it,Vt,vn,Ke,He,et,_n,Nt.data):N.texSubImage3D(Ye,O,it,Vt,vn,Ke,He,et,_n,Kn,Nt):M.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,O,it,Vt,Ke,He,_n,Kn,Nt.data):M.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,O,it,Vt,Nt.width,Nt.height,_n,Nt.data):N.texSubImage2D(N.TEXTURE_2D,O,it,Vt,Ke,He,_n,Kn,Nt);_.pixelStorei(N.UNPACK_ROW_LENGTH,ti),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,rn),_.pixelStorei(N.UNPACK_SKIP_PIXELS,ni),_.pixelStorei(N.UNPACK_SKIP_ROWS,Ti),_.pixelStorei(N.UNPACK_SKIP_IMAGES,qi),O===0&&D.generateMipmaps&&N.generateMipmap(Ye),_.unbindTexture()},this.initRenderTarget=function(M){Y.get(M).__webglFramebuffer===void 0&&re.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?re.setTextureCube(M,0):M.isData3DTexture?re.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?re.setTexture2DArray(M,0):re.setTexture2D(M,0),_.unbindTexture()},this.resetState=function(){q=0,te=0,_e=null,_.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ms}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(e),t.unpackColorSpace=jt._getUnpackColorSpace()}}const yh=new WeakMap,i1=new URL("/assets/draco_decoder-C32yEggz.wasm",import.meta.url).toString(),s1=new URL("/assets/draco_wasm_wrapper-DxJM36Ib.js",import.meta.url).toString(),r1=new URL("/assets/draco_decoder-fzg4nYZr.js",import.meta.url).toString();new URL("/assets/draco_wasm_wrapper-fZCQGLGb.js",import.meta.url).toString(),new URL("/assets/draco_decoder-Z1_iN-Ht.wasm",import.meta.url).toString();class o1 extends jr{constructor(e){super(e),this.decoderPaths={js:s1,wasm:i1,dep_js:r1},this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){const{decoderPaths:t}=this;return typeof e=="object"?(t.js=e.js,t.wasm=e.wasm,t.dep_js=null):(t.js=Sr.resolveURL("draco_wasm_wrapper.js",e),t.wasm=Sr.resolveURL("draco_decoder.wasm",e),t.dep_js=Sr.resolveURL("draco_decoder.js",e)),this}setDecoderConfig(e){return console.warn("THREE.DRACOLoader: setDecoderConfig to has been deprecated and will be removed in r194."),this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new Xc(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Ln,n).catch(n)}decodeDracoFile(e,t,n,i,r=bi,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(yh.has(e)){const l=yh.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(l=>(i=l,new Promise((c,u)=>{i._callbacks[r]={resolve:c,reject:u},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),yh.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new un;e.index&&t.setIndex(new Pn(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const{name:i,array:r,itemSize:o,stride:a,vertexColorSpace:l}=e.attributes[n];let c;if(o===a)c=new Pn(r,o);else{const u=new n0(r,a);c=new $c(u,o,0)}i==="color"&&(this._assignVertexColorSpace(c,l),c.normalized=!(r instanceof Float32Array)),t.setAttribute(i,c)}return t}_assignVertexColorSpace(e,t){if(t!==Ln)return;const n=new Te;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i),jt.colorSpaceToWorking(n,Ln),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Xc(this.manager);return n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[],{decoderPaths:n}=this;if(e){if(n.dep_js===null)throw new Error("THREE.DRACOLoader: WebAssembly is required when using a custom decoder paths.");t.push(this._loadLibrary(n.dep_js,"text"))}else t.push(this._loadLibrary(n.js,"text")),t.push(this._loadLibrary(n.wasm,"arraybuffer"));return this.decoderPending=Promise.all(t).then(i=>{const r=i[0];e||(this.decoderConfig.wasmBinary=i[1]);const o=a1.toString(),a=["/* draco decoder */",r,"","/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const o=r.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function a1(){let s,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":s=a.decoderConfig,e=new Promise(function(u){s.onModuleLoaded=function(d){u({draco:d})},DracoDecoderModule(s)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(u=>{const d=u.draco,h=new d.Decoder;try{const f=t(d,h,new Int8Array(l),c),g=f.attributes.map(y=>y.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{d.destroy(h)}});break}};function t(o,a,l,c){const u=c.attributeIDs,d=c.attributeTypes;let h,f;const g=a.GetEncodedGeometryType(l);if(g===o.TRIANGULAR_MESH)h=new o.Mesh,f=a.DecodeArrayToMesh(l,l.byteLength,h);else if(g===o.POINT_CLOUD)h=new o.PointCloud,f=a.DecodeArrayToPointCloud(l,l.byteLength,h);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||h.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const y={index:null,attributes:[]};for(const m in u){const p=self[d[m]];let w,A;if(c.useUniqueIDs)A=u[m],w=a.GetAttributeByUniqueId(h,A);else{if(A=a.GetAttributeId(h,o[u[m]]),A===-1)continue;w=a.GetAttribute(h,A)}const v=i(o,a,h,m,p,w);m==="color"&&(v.vertexColorSpace=c.vertexColorSpace),y.attributes.push(v)}return g===o.TRIANGULAR_MESH&&(y.index=n(o,a,h)),o.destroy(h),y}function n(o,a,l){const u=l.num_faces()*3,d=u*4,h=o._malloc(d);a.GetTrianglesUInt32Array(l,d,h);const f=new Uint32Array(o.HEAPF32.buffer,h,u).slice();return o._free(h),{array:f,itemSize:1}}function i(o,a,l,c,u,d){const h=l.num_points(),f=d.num_components(),g=r(o,u),y=f*u.BYTES_PER_ELEMENT,m=Math.ceil(y/4)*4,p=m/u.BYTES_PER_ELEMENT,w=h*y,A=h*m,v=o._malloc(w);a.GetAttributeDataArrayForAllPoints(l,d,g,w,v);const T=new u(o.HEAPF32.buffer,v,w/u.BYTES_PER_ELEMENT);let E;if(y===m)E=T.slice();else{E=new u(A/u.BYTES_PER_ELEMENT);let P=0;for(let x=0,R=T.length;x<R;x++){for(let L=0;L<f;L++)E[P+L]=T[x*f+L];P+=p}}return o._free(v),{name:c,count:h,itemSize:f,array:E,stride:p}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}function xm(s,e){if(e===Cg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===dd||e===Zm){let t=s.getIndex();if(t===null){const r=[],o=s.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===dd)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function R0(s){const e=new Map,t=new Map,n=s.clone();return C0(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function C0(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)C0(s.children[n],e.children[n],t)}class l1 extends jr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new f1(t)}),this.register(function(t){return new p1(t)}),this.register(function(t){return new b1(t)}),this.register(function(t){return new E1(t)}),this.register(function(t){return new T1(t)}),this.register(function(t){return new g1(t)}),this.register(function(t){return new _1(t)}),this.register(function(t){return new x1(t)}),this.register(function(t){return new v1(t)}),this.register(function(t){return new d1(t)}),this.register(function(t){return new y1(t)}),this.register(function(t){return new m1(t)}),this.register(function(t){return new S1(t)}),this.register(function(t){return new M1(t)}),this.register(function(t){return new u1(t)}),this.register(function(t){return new vm(t,en.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new vm(t,en.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new w1(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Sr.extractUrlBase(e);o=Sr.resolveURL(c,this.path)}else o=Sr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Xc(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===P0){try{o[en.KHR_BINARY_GLTF]=new A1(e)}catch(d){i&&i(d);return}r=JSON.parse(o[en.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new z1(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const d=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(d){case en.KHR_MATERIALS_UNLIT:o[d]=new h1;break;case en.KHR_DRACO_MESH_COMPRESSION:o[d]=new R1(r,this.dracoLoader);break;case en.KHR_TEXTURE_TRANSFORM:o[d]=new C1;break;case en.KHR_MESH_QUANTIZATION:o[d]=new P1;break;default:h.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function c1(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Vn(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const en={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class u1{constructor(e){this.parser=e,this.name=en.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Te(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],bi);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Pc(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Gx(u),c.distance=d;break;case"spot":c=new zx(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),_s(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class h1{constructor(){this.name=en.KHR_MATERIALS_UNLIT}getMaterialType(){return Tn}extendParams(e,t,n){const i=[];e.color=new Te(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],bi),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ln))}return Promise.all(i)}}class d1{constructor(e){this.parser=e,this.name=en.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Vn(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class f1{constructor(e){this.parser=e,this.name=en.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Vn(this.parser,e,this.name)!==null?us:null}extendMaterialParams(e,t){const n=Vn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ce(r,r)}return Promise.all(i)}}class p1{constructor(e){this.parser=e,this.name=en.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Vn(this.parser,e,this.name)!==null?us:null}extendMaterialParams(e,t){const n=Vn(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class m1{constructor(e){this.parser=e,this.name=en.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Vn(this.parser,e,this.name)!==null?us:null}extendMaterialParams(e,t){const n=Vn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class g1{constructor(e){this.parser=e,this.name=en.KHR_MATERIALS_SHEEN}getMaterialType(e){return Vn(this.parser,e,this.name)!==null?us:null}extendMaterialParams(e,t){const n=Vn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],bi)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Ln)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class _1{constructor(e){this.parser=e,this.name=en.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Vn(this.parser,e,this.name)!==null?us:null}extendMaterialParams(e,t){const n=Vn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class x1{constructor(e){this.parser=e,this.name=en.KHR_MATERIALS_VOLUME}getMaterialType(e){return Vn(this.parser,e,this.name)!==null?us:null}extendMaterialParams(e,t){const n=Vn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(r[0],r[1],r[2],bi),Promise.all(i)}}class v1{constructor(e){this.parser=e,this.name=en.KHR_MATERIALS_IOR}getMaterialType(e){return Vn(this.parser,e,this.name)!==null?us:null}extendMaterialParams(e,t){const n=Vn(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class y1{constructor(e){this.parser=e,this.name=en.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Vn(this.parser,e,this.name)!==null?us:null}extendMaterialParams(e,t){const n=Vn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(r[0],r[1],r[2],bi),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Ln)),Promise.all(i)}}class M1{constructor(e){this.parser=e,this.name=en.EXT_MATERIALS_BUMP}getMaterialType(e){return Vn(this.parser,e,this.name)!==null?us:null}extendMaterialParams(e,t){const n=Vn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class S1{constructor(e){this.parser=e,this.name=en.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Vn(this.parser,e,this.name)!==null?us:null}extendMaterialParams(e,t){const n=Vn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class b1{constructor(e){this.parser=e,this.name=en.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class E1{constructor(e){this.parser=e,this.name=en.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class T1{constructor(e){this.parser=e,this.name=en.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class vm{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,d=i.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,h,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(f),u,d,h,i.mode,i.filter),f})})}else return null}}class w1{constructor(e){this.name=en.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==ki.TRIANGLES&&c.mode!==ki.TRIANGLE_STRIP&&c.mode!==ki.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],h=c[0].count,f=[];for(const g of d){const y=new Gt,m=new S,p=new Hn,w=new S(1,1,1),A=new Go(g.geometry,g.material,h);for(let T=0;T<h;T++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,T),l.SCALE&&w.fromBufferAttribute(l.SCALE,T),A.setMatrixAt(T,y.compose(m,p,w));let v=null;for(const T in l)if(T==="_COLOR_0"){const E=l[T];A.instanceColor=new zc(E.array,E.itemSize,E.normalized)}else if(T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"){if(v===null){const P=A.geometry;v=new un,v.name=P.name;for(const x in P.attributes)v.setAttribute(x,P.attributes[x]);for(const x in P.morphAttributes)v.morphAttributes[x]=P.morphAttributes[x];P.index!==null&&v.setIndex(P.index),v.morphTargetsRelative=P.morphTargetsRelative;for(const x of P.groups)v.addGroup(x.start,x.count,x.materialIndex);P.boundingBox!==null&&(v.boundingBox=P.boundingBox.clone()),P.boundingSphere!==null&&(v.boundingSphere=P.boundingSphere.clone()),v.drawRange.start=P.drawRange.start,v.drawRange.count=P.drawRange.count,v.userData=Object.assign({},P.userData),A.geometry=v}const E=l[T];v.setAttribute(T,new zc(E.array,E.itemSize,E.normalized))}An.prototype.copy.call(A,g),this.parser.assignFinalMaterial(A),f.push(A)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const P0="glTF",Ca=12,ym={JSON:1313821514,BIN:5130562};class A1{constructor(e){this.name=en.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ca),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==P0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ca,r=new DataView(e,Ca);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===ym.JSON){const c=new Uint8Array(e,Ca+o,a);this.content=n.decode(c)}else if(l===ym.BIN){const c=Ca+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class R1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=en.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const d=Md[u]||u.toLowerCase();a[d]=o[u]}for(const u in e.attributes){const d=Md[u]||u.toLowerCase();if(o[u]!==void 0){const h=n.accessors[e.attributes[u]],f=Vo[h.componentType];c[d]=f.name,l[d]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(d,h){i.decodeDracoFile(u,function(f){for(const g in f.attributes){const y=f.attributes[g],m=l[g];m!==void 0&&(y.normalized=m)}d(f)},a,c,bi,h)})})}}class C1{constructor(){this.name=en.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class P1{constructor(){this.name=en.KHR_MESH_QUANTIZATION}}class L0 extends Zo{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,d=(n-t)/u,h=d*d,f=h*d,g=e*c,y=g-c,m=-2*f+3*h,p=f-h,w=1-m,A=p-h+d;for(let v=0;v!==a;v++){const T=o[y+v+a],E=o[y+v+l]*u,P=o[g+v+a],x=o[g+v]*u;r[v]=w*T+A*E+m*P+p*x}return r}}const L1=new Hn;class I1 extends L0{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return L1.fromArray(r).normalize().toArray(r),r}}const ki={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Vo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Mm={9728:Jn,9729:Gn,9984:Gm,9985:Ec,9986:Ia,9987:Zs},Sm={33071:ys,33648:Uc,10497:Er},Mh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Md={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},xr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},N1={CUBICSPLINE:void 0,LINEAR:Ya,STEP:qa},Sh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function D1(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new zi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:br})),s.DefaultMaterial}function Wr(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function _s(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function U1(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(n){const h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;o.push(h)}if(i){const h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;a.push(h)}if(r){const h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],h=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=h),s.morphTargetsRelative=!0,s})}function F1(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function O1(s){let e;const t=s.extensions&&s.extensions[en.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+bh(t.attributes):e=s.indices+":"+bh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+bh(s.targets[n]);return e}function bh(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Sd(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function B1(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const k1=new Gt;class z1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new c1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Ox(this.options.manager):this.textureLoader=new Xx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Xc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Wr(r,a,i),_s(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[en.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Sr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Mh[i.type],a=Vo[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Pn(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Mh[i.type],c=Vo[i.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,h=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let y,m;if(f&&f!==d){const p=Math.floor(h/f),w="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let A=t.cache.get(w);A||(y=new c(a,p*f,i.count*f/u),A=new n0(y,f/u),t.cache.add(w,A)),m=new $c(A,l,h%f/u,g)}else a===null?y=new c(i.count*l):y=new c(a,h,i.count*l),m=new Pn(y,l,g);if(i.sparse!==void 0){const p=Mh.SCALAR,w=Vo[i.sparse.indices.componentType],A=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,T=new w(o[1],A,i.sparse.count*p),E=new c(o[2],v,i.sparse.count*l);a!==null&&(m=new Pn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let P=0,x=T.length;P<x;P++){const R=T[P];if(m.setX(R,E[P*l]),l>=2&&m.setY(R,E[P*l+1]),l>=3&&m.setZ(R,E[P*l+2]),l>=4&&m.setW(R,E[P*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(r.samplers||{})[o.sampler]||{};return u.magFilter=Mm[h.magFilter]||Gn,u.minFilter=Mm[h.minFilter]||Zs,u.wrapS=Sm[h.wrapS]||Er,u.wrapT=Sm[h.wrapT]||Er,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Jn&&u.minFilter!==Gn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const h=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(h,f){let g=h;t.isImageBitmapLoader===!0&&(g=function(y){const m=new Qn(y);m.needsUpdate=!0,h(m)}),t.load(Sr.resolveURL(d,r.path),g,void 0,f)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),_s(d,o),d.userData.mimeType=o.mimeType||B1(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[en.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[en.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[en.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new s0,bs.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new al,bs.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return zi}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[en.KHR_MATERIALS_UNLIT]){const d=i[en.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,r,t))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new Te(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const h=d.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],bi),a.opacity=h[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,Ln)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=hn);const u=r.alphaMode||Sh.OPAQUE;if(u===Sh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Sh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Tn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ce(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==Tn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Tn){const d=r.emissiveFactor;a.emissive=new Te().setRGB(d[0],d[1],d[2],bi)}return r.emissiveTexture!==void 0&&o!==Tn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ln)),Promise.all(c).then(function(){const d=new o(a);return r.name&&(d.name=r.name),_s(d,r),t.associations.set(d,{materials:e}),r.extensions&&Wr(i,d,r),d})}createUniqueName(e){const t=Sn.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[en.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return bm(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=O1(c),d=i[u];if(d)o.push(d.promise);else{let h;c.extensions&&c.extensions[en.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=bm(new un,c,t),c.mode===ki.TRIANGLE_STRIP?h=h.then(f=>xm(f,Zm)):c.mode===ki.TRIANGLE_FAN&&(h=h.then(f=>xm(f,dd))),i[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?D1(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let f=0,g=u.length;f<g;f++){const y=u[f],m=o[f];let p;const w=c[f];if(m.mode===ki.TRIANGLES||m.mode===ki.TRIANGLE_STRIP||m.mode===ki.TRIANGLE_FAN||m.mode===void 0){const A=r.isSkinnedMesh===!0,v=y.hasAttribute("skinIndex")&&y.hasAttribute("skinWeight");A&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=A&&v?new C_(y,w):new at(y,w),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===ki.LINES)p=new N_(y,w);else if(m.mode===ki.LINE_STRIP)p=new Yr(y,w);else if(m.mode===ki.LINE_LOOP)p=new D_(y,w);else if(m.mode===ki.POINTS)p=new U_(y,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&F1(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),_s(p,r),m.extensions&&Wr(i,p,m),t.assignFinalMaterial(p),d.push(p)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&Wr(i,d[0],r),d[0];const h=new Et;r.extensions&&Wr(i,h,r),t.associations.set(h,{meshes:e});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new gi(ee.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Qc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),_s(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const d=o[c];if(d){a.push(d);const h=new Gt;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Vd(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let d=0,h=i.channels.length;d<h;d++){const f=i.channels[d],g=i.samplers[f.sampler],y=f.target,m=y.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,w=i.parameters!==void 0?i.parameters[g.output]:g.output;y.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",w)),c.push(g),u.push(y))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){const h=d[0],f=d[1],g=d[2],y=d[3],m=d[4],p=[];for(let A=0,v=h.length;A<v;A++){const T=h[A],E=f[A],P=g[A],x=y[A],R=m[A];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const L=n._createAnimationTracks(T,E,P,x,R);if(L)for(let U=0;U<L.length;U++)p.push(L[U])}const w=new Px(r,void 0,p);return _s(w,i),w})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],d=c[1],h=c[2];h!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(h,k1)});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);if(u.userData.pivot!==void 0&&d.length>0){const f=u.userData.pivot,g=d[0];u.pivot=new S().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],g.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new i0:c.length>1?u=new Et:c.length===1?u=c[0]:u=new An,u!==c[0])for(let d=0,h=c.length;d<h;d++)u.add(c[d]);if(r.name&&(u.userData.name=r.name,u.name=o),_s(u,r),r.extensions&&Wr(n,u,r),r.matrix!==void 0){const d=new Gt;d.fromArray(r.matrix),u.applyMatrix4(d)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const d=i.associations.get(u);i.associations.set(u,{...d})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Et;n.name&&(r.name=i.createUniqueName(n.name)),_s(r,n),n.extensions&&Wr(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,d=l.length;u<d;u++){const h=l[u];h.parent!==null?r.add(R0(h)):r.add(h)}const c=u=>{const d=new Map;for(const[h,f]of i.associations)(h instanceof bs||h instanceof Qn)&&d.set(h,f);return u.traverse(h=>{const f=i.associations.get(h);f!=null&&d.set(h,f)}),d};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}xr[r.path]===xr.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let u;switch(xr[r.path]){case xr.weights:u=tl;break;case xr.rotation:u=nl;break;case xr.translation:case xr.scale:u=Wc;break;default:n.itemSize===1?u=tl:u=Wc;break}const d=i.interpolation!==void 0?N1[i.interpolation]:Ya,h=this._getArrayFromAccessor(n);for(let f=0,g=l.length;f<g;f++){const y=new u(l[f]+"."+xr[r.path],t.array,h,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),o.push(y)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Sd(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof nl?I1:L0;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function H1(s,e,t){const n=e.attributes,i=new qn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new S(l[0],l[1],l[2]),new S(c[0],c[1],c[2])),a.normalized){const u=Sd(Vo[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new S,l=new S;for(let c=0,u=r.length;c<u;c++){const d=r[c];if(d.POSITION!==void 0){const h=t.json.accessors[d.POSITION],f=h.min,g=h.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),h.normalized){const y=Sd(Vo[h.componentType]);l.multiplyScalar(y)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new ws;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function bm(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=Md[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return jt.workingColorSpace!==bi&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${jt.workingColorSpace}" not supported.`),_s(s,e),H1(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?U1(s,e.targets,t):s})}const Pa=(s,e,t)=>s+(e-s)*t;function G1(s,e,t,n){const i=[],r=[],o=Math.max(.05,Math.min(.95,n));for(let l=0;l<=s;l++){const c=.5*(1-Math.cos(Math.PI*l/s)),u=5*e*(.2969*Math.sqrt(c)-.126*c-.3516*c*c+.2843*c*c*c-.1036*c*c*c*c);let d,h;if(c<o)d=t/(o*o)*(2*o*c-c*c),h=2*t/(o*o)*(o-c);else{const g=1-o;d=t/(g*g)*(1-2*o+2*o*c-c*c),h=2*t/(g*g)*(o-c)}const f=Math.atan(h);i.push([c-u*Math.sin(f),d+u*Math.cos(f)]),r.push([c+u*Math.sin(f),d-u*Math.cos(f)])}const a=i.slice(0,i.length-1);for(let l=r.length-1;l>0;l--)a.push(r[l]);return a}function ns(s={}){const e={hubRadius:.5,tipRadius:1.5,rootChord:.5,tipChord:.5,rootStagger:20,tipStagger:60,rootThickness:.14,tipThickness:.06,rootCamber:.06,tipCamber:.02,camberPos:.45,sweep:0,lean:0,radialSegments:12,chordSegments:16,x:0,...s},t=e.radialSegments,n=[],i=[],r=[];for(let c=0;c<=t;c++){const u=c/t,d=Pa(e.hubRadius,e.tipRadius,u),h=Pa(e.rootChord,e.tipChord,u),f=ee.degToRad(Pa(e.rootStagger,e.tipStagger,u)),g=Pa(e.rootThickness,e.tipThickness,u),y=Pa(e.rootCamber,e.tipCamber,u),m=G1(e.chordSegments,g,y,e.camberPos),p=e.x+e.sweep*u*u,w=e.lean*u*u,A=[],v=Math.cos(f),T=Math.sin(f);for(let E=0;E<m.length;E++){const P=(m[E][0]-.5)*h,x=m[E][1]*h,R=p+P*v-x*T,U=(w+P*T+x*v)/d;A.push(n.length/3),n.push(R,d*Math.cos(U),d*Math.sin(U))}r.push(A)}const o=r[0].length;for(let c=0;c<t;c++)for(let u=0;u<o;u++){const d=(u+1)%o,h=r[c][u],f=r[c][d],g=r[c+1][d],y=r[c+1][u];i.push(h,f,g,h,g,y)}const a=(c,u)=>{let d=0,h=0,f=0;for(const m of c)d+=n[m*3],h+=n[m*3+1],f+=n[m*3+2];const g=c.length,y=n.length/3;n.push(d/g,h/g,f/g);for(let m=0;m<g;m++){const p=c[m],w=c[(m+1)%g];u?i.push(y,w,p):i.push(y,p,w)}};a(r[0],!0),a(r[t],!1);const l=new un;return l.setAttribute("position",new on(n,3)),l.setIndex(i),l.computeVertexNormals(),l.computeBoundingSphere(),l}function is(s,e,t,n=0,i=0,r=1,o=t){const a=new Go(s,e,t),l=new Gt;for(let c=0;c<t;c++)l.makeRotationX(n+(i+c*r)/o*Math.PI*2),a.setMatrixAt(c,l);return a.instanceMatrix.needsUpdate=!0,a.castShadow=!0,a.receiveShadow=!0,a}const fe={lip:-5.2,throat:-4.94,a1:-3.54,fan:-3.22,splitter:-2.86,boosterIn:-2.74,boosterOut:-2.38,hpcIn:-2.18,hpcOut:-1.04,combIn:-.84,combOut:-.28,hptIn:-.18,hptOut:.12,lptIn:.36,lptOut:1.11,frame:1.48,bypassExit:1.16,coreExit:2.9,plugTip:4.8,fanTip:1.549,caseR:1.829,accR:2.118,nacelleR:2.44},I0=56,Em=.13,V1=Math.PI*2;function W1(s){const e=Math.max(0,Math.min(1,s)),t=V1*Math.pow(e,1.4);if(t<=Em)return{ghosts:1,spread:0,opacity:1};const n=Math.min(I0,Math.ceil(1.5*t/Em)+1);return{ghosts:n,spread:t,opacity:1/n}}const N0=[];function $n(s,{shell:e=!1}={}){const t=new zi(s);return N0.push(t),t}const yt={nacelle:$n({color:15264493,metalness:.25,roughness:.35,side:hn},{shell:!0}),nacelleLip:$n({color:12173511,metalness:1,roughness:.12},{shell:!0}),coreCowl:$n({color:13949148,metalness:.4,roughness:.35,side:hn},{shell:!0}),fanCase:$n({color:9278620,metalness:.85,roughness:.4,side:hn},{shell:!0}),casing:$n({color:8357518,metalness:.9,roughness:.38,side:hn},{shell:!0}),casingHot:$n({color:9073496,metalness:.85,roughness:.45,side:hn},{shell:!0}),combLiner:$n({color:6969928,metalness:.75,roughness:.55,side:hn},{shell:!0}),composite:$n({color:3356735,metalness:.45,roughness:.45,side:hn}),titanium:$n({color:11121080,metalness:.95,roughness:.28,side:hn}),steel:$n({color:9410462,metalness:.9,roughness:.35,side:hn}),nickel:$n({color:12560519,metalness:.9,roughness:.4,side:hn}),turbineHot:$n({color:11043420,metalness:.85,roughness:.45,emissive:0,side:hn}),disk:$n({color:10133928,metalness:.95,roughness:.3,side:hn}),diskHot:$n({color:10257509,metalness:.9,roughness:.42,side:hn}),shaft:$n({color:7304829,metalness:.95,roughness:.25}),accessory:$n({color:4541266,metalness:.7,roughness:.5}),paint:$n({color:15922422,metalness:.1,roughness:.5}),spiral:$n({color:2237995,metalness:.5,roughness:.6,transparent:!0,depthWrite:!1}),pylon:$n({color:14672871,metalness:.3,roughness:.4,side:hn},{shell:!0})};function X1(){return N0}function Fn(s,e,t=96){const n=s.map(o=>new Ce(o[0],o[1])),i=new Kd(n,t),r=new at(i,e);return r.rotation.z=-Math.PI/2,r.castShadow=!0,r.receiveShadow=!0,r}const D0=.32,Tm=s=>D0*(1-ee.smoothstep(s,-.8,1.16)),q1=s=>D0*(1-ee.smoothstep(s,-4.94,-3.6)),bd=ee.degToRad(62),U0=new S(1,0,0),Y1=new S(0,-4.4,0).applyAxisAngle(U0,bd);function K1(s,e,t){const n=ee.clamp(.5+.5*(e-s)/t,0,1);return e*(1-n)+s*n-t*n*(1-n)}function Z1(s){s.computeVertexNormals();const e=s.attributes.position,t=s.attributes.normal,n=new Map;for(let i=0;i<e.count;i++){const r=`${e.getX(i).toFixed(4)}|${e.getY(i).toFixed(4)}|${e.getZ(i).toFixed(4)}`,o=n.get(r);o?o.push(i):n.set(r,[i])}n.forEach(i=>{if(i.length<2)return;let r=0,o=0,a=0;i.forEach(c=>{r+=t.getX(c),o+=t.getY(c),a+=t.getZ(c)});const l=Math.hypot(r,o,a)||1;i.forEach(c=>t.setXYZ(c,r/l,o/l,a/l))}),t.needsUpdate=!0}function Eh(s,e){const t=s.geometry;t.rotateZ(-Math.PI/2),s.rotation.z=0;const n=t.attributes.position;for(let i=0;i<n.count;i++){const r=n.getY(i);if(r>=0)continue;const o=e(n.getX(i));if(o<=1e-4)continue;const a=Math.hypot(r,n.getZ(i));a<1e-4||n.setY(i,-K1(-r,Math.max(a*.4,a-o),a*.09))}return n.needsUpdate=!0,Z1(t),t.computeBoundingSphere(),s}function Do(s,e,t,n,i,r=64){return Fn([[t*.55,s],[t,s],[n,e],[n*.55,e]],i,r)}function $1(s,e,t,n,i,r=64){return Fn([[t,s],[n,s],[n,e],[t,e],[t,s]],i,r)}function J1(s,e,t){for(let n=0;n<s;n++){const i=e(n,n/s*Math.PI*2);i&&t.add(i)}return t}function Q1(){const s=new Et,e=[],t=[],n=[];function i(I,Z){const k=new Et;return k.name=I,k.userData={explode:Z||new S,base:new S},s.add(k),e.push(k),k}function r(I,Z,k=!0){const J=new Et;return I.add(J),k&&(Z===1?t:n).push(J),J}const o=i("nacelle",new S(0,4.4,0)),a=[[1.7,fe.lip],[1.86,-5.1],[2.02,-4.8],[2.2,-4.4],[2.36,-3.9],[fe.nacelleR,fe.a1],[fe.nacelleR,-1.6],[2.36,-.8],[2.2,0],[1.98,.6],[1.78,1],[1.7,fe.bypassExit],[1.62,fe.bypassExit]],l=[[1.62,fe.bypassExit],[1.64,1],[1.68,.3],[1.7,-.6],[1.68,-1.6],[1.64,-2.82],[1.58,fe.fan],[1.58,fe.a1],[1.55,-4.1],[1.53,-4.62],[1.52,fe.throat],[1.7,fe.lip]];o.add(Eh(Fn(a,yt.nacelle,120),Tm)),o.add(Eh(Fn(l,yt.nacelle,120),q1)),o.add(Eh(Fn([[1.7,fe.lip],[1.86,-5.1],[1.98,-4.92],[2.02,-4.8],[1.58,-4.8],[1.51,-4.86],[1.5,fe.throat],[1.7,fe.lip]],yt.nacelleLip,120),Tm));const c=Math.tan(ee.degToRad(5)),u=I=>.72+(I+1.9)*c,d=new Yd;d.moveTo(-2.9,0),d.lineTo(1.7,0),d.lineTo(1.9,u(1.9)),d.lineTo(-1.9,u(-1.9)),d.quadraticCurveTo(-2.7,.44,-2.9,0);const h=new at(new Jc(d,{depth:.3,bevelEnabled:!0,bevelSize:.06,bevelThickness:.06,bevelSegments:2,curveSegments:12}),yt.pylon);h.name="pylon",h.position.set(0,2.28,-.15),o.add(h);const f=i("fan",new S(-2.6,0,0));f.add(Fn([[1.6,fe.a1],[fe.caseR,fe.a1],[fe.caseR,-3.11],[1.74,-2.92],[1.66,-2.92],[1.6,-3.11],[1.6,fe.a1]],yt.fanCase,96));const g=r(f,1),y=.5,m=[];for(let I=0;I<=16;I++){const Z=I/16,k=ee.lerp(fe.fan-1,fe.fan,Z),J=y*Math.pow(Z,.72);m.push([J,k])}m.push([y,fe.fan+.12]),g.add(Fn(m,yt.paint,64));const p=new ss(Array.from({length:60},(I,Z)=>{const k=Z/59,J=ee.lerp(fe.fan-.98,fe.fan-.04,k),Ee=(y+.005)*Math.pow(k,.72)+.004,Ge=k*Math.PI*2.4;return new S(J,Ee*Math.cos(Ge),Ee*Math.sin(Ge))})),w=new Go(new os(p,88,.022,6),yt.spiral,I0);w.instanceMatrix.setUsage(kg),w.count=1,g.add(w),g.add(Do(fe.fan-.12,fe.fan+.3,y,y+.02,yt.disk));const A=ns({hubRadius:y+.01,tipRadius:fe.fanTip,rootChord:.47,tipChord:.558,rootStagger:16,tipStagger:61,rootThickness:.17,tipThickness:.045,rootCamber:.05,tipCamber:.012,sweep:-.3,lean:.12,radialSegments:20,chordSegments:22,x:fe.fan});g.add(is(A,yt.composite,24));const v=ns({hubRadius:1.03,tipRadius:1.64,rootChord:.3,tipChord:.28,rootStagger:34,tipStagger:26,rootThickness:.12,tipThickness:.1,rootCamber:.09,tipCamber:.07,radialSegments:8,chordSegments:14,x:-2.78});f.add(is(v,yt.titanium,44));const T=i("booster",new S(-1.7,0,0));T.add(Fn([[.96,fe.splitter],[1.02,fe.splitter+.1],[1.04,-2.64],[.98,-2.3],[.9,-2.16],[.86,-2.16],[.93,-2.34],[.97,-2.68],[.95,fe.splitter+.12],[.9,fe.splitter+.03],[.96,fe.splitter]],yt.casing,96));const E=r(T,1);E.add(Do(-2.86,-2.28,.56,.62,yt.disk));const P=[{x:fe.boosterIn,hub:.58,tip:.94,n:34},{x:-2.56,hub:.6,tip:.92,n:40},{x:fe.boosterOut,hub:.62,tip:.9,n:46}];P.forEach((I,Z)=>{const k=ns({hubRadius:I.hub,tipRadius:I.tip,rootChord:.1,tipChord:.092,rootStagger:26+Z*3,tipStagger:52+Z*3,rootThickness:.13,tipThickness:.07,rootCamber:.07,tipCamber:.03,radialSegments:6,chordSegments:12,x:I.x});E.add(is(k,yt.titanium,I.n,Z*.1))}),P.forEach((I,Z)=>{const k=ns({hubRadius:I.hub+.02,tipRadius:I.tip,rootChord:.085,tipChord:.08,rootStagger:30,tipStagger:22,rootThickness:.11,tipThickness:.09,rootCamber:.1,tipCamber:.08,radialSegments:5,chordSegments:10,x:I.x+.09});T.add(is(k,yt.steel,I.n+8,.05))});const x=i("hpc",new S(-.8,0,0)),R=9,L=I=>ee.lerp(fe.hpcIn,fe.hpcOut,I/(R-1)),U=I=>ee.lerp(.78,.55,I/(R-1)),V=I=>ee.lerp(.5,.44,I/(R-1)),W=[];for(let I=0;I<=10;I++){const Z=I/10;W.push([ee.lerp(.84,.6,Z),ee.lerp(fe.hpcIn-.12,fe.hpcOut+.05,Z)])}for(let I=10;I>=0;I--){const Z=I/10;W.push([ee.lerp(.8,.57,Z),ee.lerp(fe.hpcIn-.12,fe.hpcOut+.05,Z)])}W.push([.84,fe.hpcIn-.12]),x.add(Fn(W,yt.casing,96)),x.add(Fn([[.9,fe.boosterOut+.04],[.86,fe.boosterOut+.04],[.8,fe.hpcIn-.04],[.84,fe.hpcIn-.04],[.9,fe.boosterOut+.04]],yt.casing,96));const F=r(x,2),X=[];for(let I=0;I<R;I++)X.push([V(I),L(I)-.06]);for(let I=R-1;I>=0;I--)X.push([V(I)*.6,L(I)]);F.add(Fn(X,yt.disk,64));for(let I=0;I<R;I++){const Z=40+I*6,k=ns({hubRadius:V(I),tipRadius:U(I),rootChord:ee.lerp(.078,.048,I/(R-1)),tipChord:ee.lerp(.07,.044,I/(R-1)),rootStagger:24+I*2,tipStagger:48+I*1.5,rootThickness:.12,tipThickness:.07,rootCamber:.06,tipCamber:.025,radialSegments:5,chordSegments:10,x:L(I)});F.add(is(k,yt.titanium,Z,I*.07));const J=ns({hubRadius:V(I)+.01,tipRadius:U(I)+.01,rootChord:ee.lerp(.068,.042,I/(R-1)),tipChord:ee.lerp(.062,.04,I/(R-1)),rootStagger:30,tipStagger:20,rootThickness:.11,tipThickness:.08,rootCamber:.1,tipCamber:.07,radialSegments:5,chordSegments:10,x:L(I)+(fe.hpcOut-fe.hpcIn)/(R-1)/2});x.add(is(J,yt.steel,Z+10,.04))}const q=i("combustor",new S(0,0,0));q.add(Fn([[.6,fe.hpcOut],[.57,fe.hpcOut],[.42,fe.combIn],[.86,fe.combIn],[.9,fe.combIn+.1],[.9,fe.combOut+.05],[.86,fe.combOut+.05],[.86,fe.combIn+.05],[.6,fe.hpcOut]],yt.casingHot,96));const te=[],_e=[];for(let I=0;I<=12;I++){const Z=I/12,k=ee.lerp(fe.combIn,fe.combOut,Z);te.push([.78-.1*Z*Z,k]),_e.push([.44+.06*Z*Z,k])}q.add(Fn(te,yt.combLiner,80)),q.add(Fn(_e,yt.combLiner,80)),q.add(Fn([[.44,fe.combIn],[.5,fe.combIn-.06],[.72,fe.combIn-.06],[.78,fe.combIn]],yt.combLiner,80)),J1(20,(I,Z)=>{const k=new Et,J=new at(new rs(.075,.06,.1,12),yt.nickel);J.rotation.z=-Math.PI/2,J.position.set(fe.combIn-.02,0,0);const Ee=new at(new rs(.028,.028,.26,8),yt.steel);return Ee.position.set(fe.combIn-.16,0,0),Ee.rotation.z=-Math.PI/2,k.add(J,Ee),k.position.set(0,.61*Math.cos(Z),.61*Math.sin(Z)),k.rotation.x=Z,k},q);const ne=[];for(let I=0;I<=14;I++){const Z=I/14,k=ee.lerp(fe.combIn+.02,fe.combOut+.04,Z);ne.push([.755-.1*Z*Z,k])}for(let I=14;I>=0;I--){const Z=I/14,k=ee.lerp(fe.combIn+.02,fe.combOut+.04,Z);ne.push([.46+.06*Z*Z,k])}const ue=new Xi({transparent:!0,depthWrite:!1,blending:Ga,side:hn,uniforms:{uTime:{value:0},uPower:{value:.8},uX0:{value:fe.combIn},uX1:{value:fe.combOut}},vertexShader:`
      varying vec3 vP;
      void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }
    `,fragmentShader:`
      uniform float uTime, uPower, uX0, uX1;
      varying vec3 vP;
      float hash(vec3 p){ return fract(sin(dot(p, vec3(12.9898,78.233,37.719)))*43758.5453); }
      float noise(vec3 p){
        vec3 i = floor(p), f = fract(p);
        f = f*f*(3.0-2.0*f);
        float n = mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),
                          mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),
                      mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),
                          mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);
        return n;
      }
      void main(){
        // vP is in lathe local space: the Y axis is the engine axis
        float t = clamp((vP.y - uX0)/(uX1-uX0), 0.0, 1.0);
        float ang = atan(vP.z, vP.x);
        float n = noise(vec3(ang*3.0, t*6.0 - uTime*3.0, uTime*0.8));
        n = n*0.6 + noise(vec3(ang*7.0, t*14.0 - uTime*6.0, uTime*1.3))*0.4;
        float core = smoothstep(0.0,0.18,t) * (1.0 - smoothstep(0.55,1.0,t));
        float a = core * (0.35 + n*0.9) * uPower;
        vec3 col = mix(vec3(1.0,0.35,0.05), vec3(1.0,0.95,0.75), clamp(n*1.3 - t*0.4,0.0,1.0));
        col = mix(col, vec3(0.55,0.75,1.0), smoothstep(0.0,0.12,t)*0.25*(1.0-t));
        gl_FragColor = vec4(col, a);
      }
    `}),de=Fn(ne,ue,72);de.renderOrder=3,q.add(de);const Qe=i("hpt",new S(.9,0,0));Qe.add(Fn([[.94,fe.hptIn-.06],[.9,fe.hptIn-.06],[.95,fe.hptOut+.1],[.99,fe.hptOut+.1],[.94,fe.hptIn-.06]],yt.casingHot,96));const Xe=r(Qe,2);[{x:.02,hub:.46,tip:.86,n:62,ngv:-.12}].forEach((I,Z)=>{const k=ns({hubRadius:I.hub,tipRadius:I.tip+.02,rootChord:.14,tipChord:.13,rootStagger:52,tipStagger:44,rootThickness:.26,tipThickness:.2,rootCamber:.16,tipCamber:.13,radialSegments:6,chordSegments:14,x:I.ngv});Qe.add(is(k,yt.nickel,44+Z*6,.03));const J=ns({hubRadius:I.hub,tipRadius:I.tip,rootChord:.12,tipChord:.11,rootStagger:32,tipStagger:52,rootThickness:.24,tipThickness:.14,rootCamber:.14,tipCamber:.09,radialSegments:6,chordSegments:14,x:I.x});Xe.add(is(J,yt.turbineHot,I.n,Z*.05)),Xe.add(Do(I.x-.07,I.x+.07,I.hub,I.hub,yt.diskHot))}),Xe.add(Do(fe.hptIn+.04,fe.hptOut-.02,.44,.44,yt.diskHot));const At=i("lpt",new S(1.9,0,0)),Dt=[];for(let I=0;I<=8;I++){const Z=I/8;Dt.push([ee.lerp(.99,1.12,Z),ee.lerp(fe.lptIn-.16,fe.lptOut+.14,Z)])}for(let I=8;I>=0;I--){const Z=I/8;Dt.push([ee.lerp(.95,1.08,Z),ee.lerp(fe.lptIn-.16,fe.lptOut+.14,Z)])}Dt.push([.99,fe.lptIn-.16]),At.add(Fn(Dt,yt.casingHot,96)),At.add(Fn([[.99,fe.hptOut+.08],[.95,fe.hptOut+.08],[.95,fe.lptIn-.14],[.99,fe.lptIn-.14],[.99,fe.hptOut+.08]],yt.casingHot,96));const ie=r(At,1),ae=4;for(let I=0;I<ae;I++){const Z=I/(ae-1),k=ee.lerp(fe.lptIn,fe.lptOut,Z),J=ee.lerp(.5,.6,Z),Ee=ee.lerp(.93,1.1,Z),Ge=ns({hubRadius:J,tipRadius:Ee+.02,rootChord:.13,tipChord:.12,rootStagger:48,tipStagger:40,rootThickness:.2,tipThickness:.15,rootCamber:.15,tipCamber:.12,radialSegments:6,chordSegments:12,x:k-.105});At.add(is(Ge,yt.nickel,68+I*4,.02));const Ie=ns({hubRadius:J,tipRadius:Ee,rootChord:.14,tipChord:.13,rootStagger:30,tipStagger:56,rootThickness:.18,tipThickness:.1,rootCamber:.13,tipCamber:.08,radialSegments:6,chordSegments:12,x:k});ie.add(is(Ie,yt.turbineHot,82+I*6,I*.04)),ie.add(Do(k-.07,k+.07,J,J,yt.diskHot))}ie.add(Do(fe.lptIn-.1,fe.lptOut+.1,.46,.5,yt.diskHot));const Re=i("exhaust",new S(2.9,0,0)),xt=ns({hubRadius:.56,tipRadius:1.12,rootChord:.26,tipChord:.24,rootStagger:6,tipStagger:2,rootThickness:.2,tipThickness:.16,rootCamber:.02,tipCamber:.01,radialSegments:5,chordSegments:12,x:fe.frame+.04});Re.add(is(xt,yt.nickel,10)),Re.add(Fn([[1.12,fe.lptOut+.12],[1.08,fe.lptOut+.12],[.74,fe.coreExit],[.78,fe.coreExit],[1.12,fe.lptOut+.12]],yt.casingHot,96));const qe=[];for(let I=0;I<=16;I++){const Z=I/16;qe.push([.56*Math.pow(1-Z,.75),ee.lerp(fe.frame+.1,fe.plugTip,Z)])}const Mt=Fn([[.56,fe.frame-.1],...qe],yt.nickel,72);Re.add(Mt);const an=i("cowl",new S(0,-3.4,0)),ce=[[.95,fe.splitter],[1.05,-2.61],[1.1,-1.86],[1.14,-.76],[1.16,-.02],[1.18,.48],[1.22,.88],[1.22,1.28],[1.14,1.9],[.92,2.5],[.82,fe.coreExit],[.78,fe.coreExit],[.88,2.5],[1.1,1.9],[1.18,1.28],[1.18,.88],[1.14,.48],[1.12,-.02],[1.1,-.76],[1.06,-1.86],[1.01,-2.61],[.92,fe.splitter],[.95,fe.splitter]];an.add(Fn(ce,yt.coreCowl,96));const xe=i("shafts",new S(0,0,0)),Se=r(xe,1),be=new at(new rs(.15,.15,4.8,24),yt.shaft);be.rotation.z=-Math.PI/2,be.position.x=-1.01,Se.add(be),[-3.16,1.24].forEach(I=>{const Z=new at(new rs(.24,.24,.12,24),yt.shaft);Z.rotation.z=-Math.PI/2,Z.position.x=I,Se.add(Z)}),r(xe,2).add($1(-2.31,.1,.24,.3,yt.shaft,32)),[[-3.11,.34],[-2.36,.36],[.22,.36],[1.38,.3]].forEach(([I,Z])=>{const k=new at(new el(Z,.05,8,32),yt.steel);k.rotation.y=Math.PI/2,k.position.x=I,xe.add(k)});const lt=i("accessory",Y1),tt=new Et;tt.rotation.x=bd,lt.add(tt);const ft=new at(new mi(1.5,.28,.7),yt.accessory);ft.position.set(-2.46,-1.92,0),ft.rotation.z=.03,tt.add(ft),[[-2.96,.2],[-2.46,.22],[-1.96,.19]].forEach(([I,Z],k)=>{const J=new at(new rs(Z,Z,.44,16),yt.accessory);J.rotation.x=Math.PI/2,J.position.set(I,-(Math.sqrt(fe.accR**2-.74**2)-Z)+k*.02,.52),tt.add(J)});const St=new at(new rs(.07,.07,1.15,12),yt.steel);St.position.set(-2.96,-1.3,0),St.rotation.z=.2,tt.add(St),[.35,-.35].forEach(I=>{const Z=new ss([new S(-2.66,-1.15,I*.6),new S(-1.96,-1.32,I),new S(-.86,-1.28,I*.9),new S(-.06,-1.15,I*.5)]);tt.add(new at(new os(Z,40,.045,8),yt.steel))});const N=[{module:o,key:"label.nacelle",pos:new S(-4,2.5,0)},{module:f,key:"label.fan",pos:new S(fe.fan,1.7,0)},{module:T,key:"label.booster",pos:new S(-2.56,1.02,0)},{module:x,key:"label.hpc",pos:new S(-1.61,.9,0)},{module:q,key:"label.combustor",pos:new S(-.56,.98,0)},{module:Qe,key:"label.hpt",pos:new S(-.03,1.02,0)},{module:At,key:"label.lpt",pos:new S(.74,1.18,0)},{module:Re,key:"label.nozzle",pos:new S(3.2,.85,0)},{module:xe,key:"label.shafts",pos:new S(-.96,-.42,0)},{module:lt,key:"label.accessory",pos:new S(-2.46,-2.3,0).applyAxisAngle(U0,bd)}];e.forEach(I=>I.userData.base.copy(I.position));const $t=new Tn({visible:!1}),Bt=[];[[o,fe.lip,fe.bypassExit,2.3,!0],[f,fe.fan-1.05,-2.72,1.55,!1],[T,fe.splitter,-2.26,.95,!1],[x,-2.26,-.94,.8,!1],[q,-.94,-.22,.88,!1],[Qe,-.22,.24,.95,!1],[At,.24,1.24,1.12,!1],[Re,1.24,fe.plugTip,.9,!1],[an,-2.81,fe.coreExit,1.15,!0],[xe,-3.26,1.34,.33,!1]].forEach(([I,Z,k,J,Ee])=>{const Ge=new at(new rs(J,J,k-Z,20,1,!0),$t);Ge.rotation.z=-Math.PI/2,Ge.position.x=(Z+k)/2,Ge.userData.shell=Ee,I.add(Ge),Bt.push(Ge)});{const I=new at(new mi(2,1.5,1.4),$t);I.position.set(-2.56,-1.5,0),tt.add(I),Bt.push(I)}const _=new Gt;let H=-1,Y=-1;function re(I){const{ghosts:Z,spread:k,opacity:J}=W1(I);if(yt.spiral.opacity=J,yt.spiral.depthWrite=J>.95,!(Z===H&&Math.abs(k-Y)<.004)){H=Z,Y=k,w.count=Z;for(let Ee=0;Ee<Z;Ee++)_.makeRotationX(Z>1?-k*(Ee/(Z-1)):0),w.setMatrixAt(Ee,_);w.instanceMatrix.needsUpdate=!0}}return{root:s,modules:e,pickables:Bt,n1Rotors:t,n2Rotors:n,labels:N,flameMat:ue,setSpiralBlur:re,parts:{mNac:o,mFan:f,mBoost:T,mHpc:x,mComb:q,mHpt:Qe,mLpt:At,mExh:Re,mCowl:an,mShaft:xe,mAcc:lt}}}const wm=8826569,j1="/models/airbus_a320_indonesian_presidential_livery.glb",eE="/models/grumman_f-14d_super_tomcat/scene.gltf",cn=5,Uo=1.15,Th=3e3,wh=72,Am=80,Rm=-2.51,tE=120,qs=3600,vr=120,nE=450,Cm=320;function iE(s){const e=new y_;e.background=new Te(wm);const t=document.createElement("canvas");t.width=1024,t.height=512;const n=t.getContext("2d"),i=n.createLinearGradient(0,0,0,t.height);i.addColorStop(0,"#4c5c66"),i.addColorStop(.34,"#849196"),i.addColorStop(.48,"#d5d0c2"),i.addColorStop(.56,"#a8a89b"),i.addColorStop(1,"#4b5a5e"),n.fillStyle=i,n.fillRect(0,0,t.width,t.height);const r=n.createRadialGradient(760,170,12,760,170,190);r.addColorStop(0,"rgba(244, 211, 164, 0.52)"),r.addColorStop(.22,"rgba(214, 196, 163, 0.2)"),r.addColorStop(1,"rgba(196, 187, 164, 0)"),n.fillStyle=r,n.fillRect(560,0,400,360),n.fillStyle="rgba(244, 220, 179, 0.64)",n.beginPath(),n.arc(760,170,23,0,Math.PI*2),n.fill();for(const b of[[100,170,190,22],[310,215,150,18],[510,142,170,20],[890,235,220,24],[690,260,130,16],[30,270,145,18]]){const[G,se,he,ye]=b;n.fillStyle="rgba(220, 218, 207, 0.36)",n.beginPath(),n.ellipse(G,se,he,ye,0,0,Math.PI*2),n.ellipse(G-he*.28,se+3,he*.48,ye*.72,0,0,Math.PI*2),n.ellipse(G+he*.3,se+2,he*.56,ye*.8,0,0,Math.PI*2),n.fill()}const o=new oh(t);o.mapping=Oa,o.colorSpace=Ln;const a=new gi(36,1,.1,24e3),l=a.fov;let c=l;const u=new n1({antialias:!0,alpha:!1,powerPreference:"high-performance"});u.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),u.setSize(s.clientWidth||window.innerWidth,s.clientHeight||window.innerHeight,!1),u.outputColorSpace=Ln,u.toneMapping=Rd,u.toneMappingExposure=1,u.localClippingEnabled=!0,u.domElement.className="flight-canvas",u.domElement.tabIndex=0,u.domElement.setAttribute("aria-label","互動式 3D 模型；拖曳可旋轉各課程的飛機或模型視角"),s.replaceChildren(u.domElement);const d=new Pc(16774376,.85);d.position.set(-3,5,6),e.add(d);const h=new Pc(12375268,.55);h.position.set(5,2,-6),e.add(h),e.add(new Wx(10465468,.05));const f=new Bx(15135999,6845052,1.15);f.visible=!1,e.add(f);const g=new Pc(16770245,1.25);g.position.set(-4,7,8),g.visible=!1,e.add(g);const y=document.createElement("canvas");y.width=512,y.height=256;const m=y.getContext("2d"),p=m.createLinearGradient(0,0,0,256);p.addColorStop(0,"#f4f8fa"),p.addColorStop(.3,"#d8e0e6"),p.addColorStop(.48,"#9aa5ad"),p.addColorStop(.56,"#3a4248"),p.addColorStop(.78,"#23292e"),p.addColorStop(1,"#171b1f"),m.fillStyle=p,m.fillRect(0,0,512,256);for(const b of[72,192,320,440]){const G=m.createLinearGradient(0,8,0,92);G.addColorStop(0,"rgba(255,255,255,1)"),G.addColorStop(1,"rgba(255,255,255,0)"),m.fillStyle=G,m.fillRect(b-34,8,68,84)}const w=new oh(y);w.mapping=Oa,w.colorSpace=Ln;const A=new xd(u);e.environment=A.fromEquirectangular(w).texture,e.environmentIntensity=.62,w.dispose(),A.dispose();const v=new Et,T=document.createElement("canvas");T.width=256,T.height=256;const E=T.getContext("2d");E.fillStyle="#686b69",E.fillRect(0,0,256,256);for(let b=0;b<900;b+=1){const G=78+Math.floor(Math.random()*28),se=.04+Math.random()*.08;E.fillStyle=`rgba(${G}, ${G}, ${G}, ${se})`,E.fillRect(Math.random()*256,Math.random()*256,2+Math.random()*4,1+Math.random()*2)}const P=new oh(T);P.wrapS=Er,P.wrapT=Er,P.repeat.set(6,.8),P.minFilter=Gn,P.magFilter=Gn,P.anisotropy=Math.min(u.capabilities.getMaxAnisotropy(),8),P.generateMipmaps=!1,P.colorSpace=Ln;const x=new zi({color:14012871,map:P,roughness:.96,metalness:0}),R=new zi({color:15066073,roughness:.88,metalness:0}),L=new at(new mi(Th,.08,wh),x);L.position.set(0,-2.55,0),v.add(L);const U=new Et;v.add(U);const V=(b,G,se,he=b)=>{for(const pe of[-1,1]){const z=new at(new mi(G-48,.018,1.2),R);z.position.set(0,-2.4,pe*(se/2-4)),b.add(z)}const Me=Math.floor((G-120)/90);for(let pe=0;pe<Me;pe+=1){const z=new at(new mi(38,.018,1.1),R);z.position.set((pe-(Me-1)/2)*90,-2.4,0),he.add(z)}for(const pe of[-1,1]){const z=pe*(G/2-64);for(let le=0;le<8;le+=1){const j=new at(new mi(22,.018,2.4),R);j.position.set(z,-2.4,(le-3.5)*(se/10)),b.add(j)}for(const le of[-1,1]){const j=new at(new mi(32,.018,2),R);j.position.set(pe*(G/2-210),-2.4,le*(se*.27)),b.add(j)}}};V(v,Th,wh,U),e.add(v);const W=new Et;W.visible=!1,W.scale.setScalar(cn),e.add(W);const F=new Hd(11184027,130*cn,1750*cn),X=Array.from({length:18},(b,G)=>new S(G*970,0,Math.sin(G*Math.PI/2)*800)),q=new ss(X,!1,"catmullrom",.5);q.getLength();const te=X[X.length-1].x,_e=q.getTangentAt(0),ne=-Math.atan2(_e.z,_e.x),ue=new Xr(1,12,8),de=new zi({color:16251901,roughness:1,transparent:!0,opacity:.72,depthWrite:!1}),Qe=new Go(ue,de,80),Xe=new An;for(let b=0;b<16;b+=1){const G=(b+.5)/16,se=q.getPointAt(G),he=q.getTangentAt(G).setY(0).normalize(),ye=new S(-he.z,0,he.x),Me=b%2?1:-1,pe=se.clone().addScaledVector(ye,Me*(520+b*137%620)),z=145+b*59%90,le=95+b*31%65;for(let j=0;j<5;j+=1)Xe.position.set(pe.x+(j-2)*le*.55,z+Math.sin(j*2.1)*le*.1,pe.z+Math.cos(j*1.7)*le*.16),Xe.scale.set(le*(.72+j%3*.13),le*(.2+j%2*.07),le*.32),Xe.updateMatrix(),Qe.setMatrixAt(b*5+j,Xe.matrix)}Qe.instanceMatrix.needsUpdate=!0,W.add(Qe);const sn=te+12e3,At=8e3,Dt=260,ie=72,ae=new Float32Array((Dt+1)*(ie+1)*3),Re=new Float32Array(ae.length),xt=[],qe=new Te(4217698),Mt=new Te(7440521),an=new Te(12237226),ce=new Te,xe=(b,G)=>Math.sin(b*.011+G*.008)*.07+Math.sin(G*.019-b*.004)*.035+Math.sin((b+G)*.043)*.014;for(let b=0;b<=ie;b+=1){const G=(b/ie-.5)*At;for(let se=0;se<=Dt;se+=1){const he=(se/Dt-.5)*sn,ye=b*(Dt+1)+se,Me=ye*3,pe=xe(he,G);ae[Me]=he,ae[Me+1]=-3.05+pe,ae[Me+2]=G;const z=ee.clamp(.38+pe*2.8+Math.sin(he*.003+G*.006)*.12,0,1);if(ce.copy(qe).lerp(Mt,z),ce.lerp(an,Math.max(0,(pe-.045)*2.2)),Re[Me]=ce.r,Re[Me+1]=ce.g,Re[Me+2]=ce.b,se<Dt&&b<ie){const le=ye+Dt+1;xt.push(ye,le,ye+1,ye+1,le,le+1)}}}const Se=new un;Se.setAttribute("position",new Pn(ae,3)),Se.setAttribute("color",new Pn(Re,3)),Se.setIndex(xt),Se.computeVertexNormals();const be=new at(Se,new us({vertexColors:!0,roughness:.26,metalness:.12,clearcoat:.56,clearcoatRoughness:.2,side:hn}));be.position.x=te/2,W.add(be);const Pe=new Go(new ll(1,1),new Tn({color:16121087,transparent:!0,opacity:.46,depthWrite:!1,side:hn}),280),lt=new An;for(let b=0;b<280;b+=1){const G=(b+.5)/280,se=q.getPointAt(G),he=q.getTangentAt(G).setY(0).normalize(),ye=new S(-he.z,0,he.x),Me=Math.sin(b*127.1+19.7)*43758.5453,pe=Me-Math.floor(Me),z=(pe-.5)*3400,le=se.x+ye.x*z,j=se.z+ye.z*z;lt.position.set(le,-3.05+xe(le,j)+.025,j),lt.rotation.set(-Math.PI/2,0,(pe-.5)*.7),lt.scale.set(5+pe*20,.35+pe*.6,1),lt.updateMatrix(),Pe.setMatrixAt(b,lt.matrix)}Pe.instanceMatrix.needsUpdate=!0,W.add(Pe);const tt=360,ft=10,St=ft+1,N=new Float32Array((tt+1)*St*3),$t=new Float32Array(N.length),Bt=[],C=new Te(7899779),_=new Te(11116418),H=new Te;for(let b=0;b<=tt;b+=1){const G=b/tt,se=q.getPointAt(G),he=q.getTangentAt(G).setY(0).normalize(),ye=new S(-he.z,0,he.x);for(let Me=0;Me<=ft;Me+=1){const pe=Me/ft*2-1,z=pe*70,le=b*St+Me,j=le*3,me=se.x+ye.x*z,Ae=se.z+ye.z*z;N[j]=me,N[j+1]=-2.76+Math.sin(G*164+pe*3)*.018,N[j+2]=Ae,H.copy(C).lerp(_,Math.pow(Math.abs(pe),2.4)*.72);const ut=.94+.06*Math.sin(G*217+pe*8);if($t[j]=H.r*ut,$t[j+1]=H.g*ut,$t[j+2]=H.b*ut,b<tt&&Me<ft){const Ft=le+St;Bt.push(le,Ft,le+1,le+1,Ft,Ft+1)}}}const Y=new un;Y.setAttribute("position",new Pn(N,3)),Y.setAttribute("color",new Pn($t,3)),Y.setIndex(Bt),Y.computeVertexNormals();const re=new at(Y,new zi({vertexColors:!0,roughness:.68,metalness:.06,side:hn}));W.add(re);const I=.98,Z=q.getPointAt(I),k=q.getTangentAt(I),J=k.clone().setY(0).normalize(),Ee=Z.clone().addScaledVector(J,qs/2),Ge=Ee.x,Ie=Ee.z,De=new at(new mi(qs,.08,vr),x);De.position.set(Ge,-2.55,Ie),De.rotation.y=Math.atan2(-k.z,k.x),W.add(De);const ot=new Et;V(ot,qs,vr),ot.position.set(Ge,0,Ie),ot.rotation.y=De.rotation.y,W.add(ot);const gt=[],Ut=(b,G,se,he,ye,Me)=>{if(b<G||b>se)return 0;const pe=(b-G)/(se-G),z=Math.pow(Math.max(0,Math.sin(pe*Math.PI)),.72),le=.58+.25*Math.sin(ye*73+Me)+.17*Math.sin(ye*181-Me),j=1+.12*Math.sin(ye*193+pe*17+Me)+.06*Math.sin(ye*347-pe*39+Me*2)+.065*Math.sin(ye*577+pe*57+Me*2)+.032*Math.sin(ye*1103-pe*113+Me*3);return he*z*le*j},B=[5663346,6847102,6846575,8490116].map(()=>new zi({color:16777215,roughness:.97,vertexColors:!0,side:hn})),Ue=[4936019,5988963,4541776,6581099].map(b=>new Te(b)),oe=(b,G,se,he,ye,Me,pe)=>{const me=new Float32Array(37851),Ae=new Float32Array(me.length),ut=new Float32Array(341*37*2),Ft=[],bt=new Te,Pt=new Te(13160657),vt=new S,mt=new S,Wt=new S;for(let Qt=0;Qt<=340;Qt+=1){const Rt=Qt/340;vt.copy(q.getPointAt(Rt)),mt.copy(q.getTangentAt(Rt)).setY(0).normalize(),Wt.set(-mt.z,0,mt.x).multiplyScalar(b);const Ot=.58+.25*Math.sin(Rt*73+ye)+.17*Math.sin(Rt*181-ye);for(let pn=0;pn<=36;pn+=1){const ht=pn/36,pt=Math.pow(Math.max(0,Math.sin(ht*Math.PI)),.72),Yt=1+.12*Math.sin(Rt*193+ht*17+ye)+.06*Math.sin(Rt*347-ht*39+ye*2)+.065*Math.sin(Rt*577+ht*57+ye*2)+.032*Math.sin(Rt*1103-ht*113+ye*3),Lt=he*pt*Ot*Yt,Oe=G+(se-G)*ht,Le=(Qt*37+pn)*3;me[Le]=vt.x+Wt.x*Oe,me[Le+1]=-3.1+Lt,me[Le+2]=vt.z+Wt.z*Oe;const Ze=ee.clamp(Lt/he,0,1),je=Math.sin(Lt*.12+Rt*32+ye)*.09;bt.copy(pe).lerp(Pt,.14+Ze*.68),bt.multiplyScalar(.78+je+.04*Math.sin(Rt*49+ht*31+ye)),Ae[Le]=bt.r,Ae[Le+1]=bt.g,Ae[Le+2]=bt.b;const $e=(Qt*37+pn)*2;ut[$e]=Rt*12,ut[$e+1]=ht*4}}for(let Qt=0;Qt<340;Qt+=1)for(let Rt=0;Rt<36;Rt+=1){const Ot=Qt*37+Rt,pn=Ot+37;Ft.push(Ot,pn,Ot+1,pn,pn+1,Ot+1)}const nn=new un;nn.setAttribute("position",new Pn(me,3)),nn.setAttribute("color",new Pn(Ae,3)),nn.setAttribute("uv",new Pn(ut,2)),nn.setIndex(Ft),nn.computeVertexNormals(),W.add(new at(nn,Me))};oe(-1,105,520,250,.2,B[0],Ue[0]),oe(1,105,520,250,1.7,B[1],Ue[1]),oe(-1,560,1450,480,2.6,B[2],Ue[2]),oe(1,560,1450,480,4.1,B[3],Ue[3]);const Fe=(b,G,se)=>{const ye=[[0,.86],[.12,1],[.28,.87],[.46,.69],[.63,.68],[.78,.64],[.9,.6],[.97,.57],[1,.54]],Me=[],pe=[],z=[];for(let Ae=0;Ae<ye.length;Ae+=1){const[ut,Ft]=ye[Ae];for(let bt=0;bt<32;bt+=1){const Pt=bt/32*Math.PI*2,vt=1+.11*Math.sin(Pt*3+se)+.045*Math.sin(Pt*5-se),mt=1+.035*Math.sin(Pt*4+se+ut*8),Wt=b*Ft*vt*mt,nn=Math.sin(Pt*3+se)*G*.014*Math.sin(ut*Math.PI);Me.push(Math.cos(Pt)*Wt,(ut-.5)*G+nn,Math.sin(Pt)*Wt),pe.push(bt/32*4,ut*3)}}const le=Me.length/3;Me.push(0,G*.5,0),pe.push(.5,3);for(let Ae=0;Ae<ye.length-1;Ae+=1)for(let ut=0;ut<32;ut+=1){const Ft=Ae*32+ut,bt=Ae*32+(ut+1)%32,Pt=Ft+32,vt=bt+32;z.push(Ft,Pt,bt,bt,Pt,vt)}const j=(ye.length-1)*32;for(let Ae=0;Ae<32;Ae+=1)z.push(j+Ae,le,j+(Ae+1)%32);const me=new un;return me.setAttribute("position",new on(Me,3)),me.setAttribute("uv",new on(pe,2)),me.setIndex(z),me.computeVertexNormals(),me},ze=[10129016,11575690,9010280].map(b=>new zi({color:b,roughness:1})),ve=Math.ceil(260/ze.length),ct=ze.map((b,G)=>{const se=new Go(Fe(1,1,G*1.9),b,ve);return se.count=0,W.add(se),se}),st=ze.map(()=>0),dn=new An;for(let b=0;b<260;b+=1){const G=(b+.5)/260,se=q.getPointAt(G),he=q.getTangentAt(G).setY(0).normalize(),ye=new S(-he.z,0,he.x),Me=b%2?1:-1,pe=b%5===0,z=(pe?100:85)+b*47%(pe?110:95),le=Math.min((pe?280:175)+b*71%(pe?300:170),z*(pe?1.6:1.45)),j=(pe?880:260)+z*.35,me=se.clone().addScaledVector(ye,Me*j),Ae=b%ze.length,ut=st[Ae];dn.position.set(me.x,-3+le/2,me.z),dn.rotation.set(0,b*.63,0),dn.scale.set(z,le,z),dn.updateMatrix(),ct[Ae].setMatrixAt(ut,dn.matrix),st[Ae]+=1,ct[Ae].count=st[Ae],gt.push({x:me.x,z:me.z,r:z,h:le*1.03,roundedCrown:!0})}for(const b of ct)b.instanceMatrix.needsUpdate=!0;const tn=.49,oi=q.getPointAt(tn),_i=320,hl=550,dl=new at(Fe(hl,_i,2.4),new zi({color:10984835,roughness:1}));dl.position.set(oi.x,-3+_i/2,oi.z),W.add(dl),gt.push({x:oi.x,z:oi.z,r:hl,h:_i,roundedCrown:!0});const eo=new Et;W.add(eo);const jo=[60,65,100,135,150,110,220,360,210,135,65,45,80,125,160,100],Tr=[1,2,3,4,5,6].map(b=>b/(X.length-1)),fl=.5,pl=Tr[Tr.length-1],Rs=10/17,gl=Math.max(0,Math.min(tn-pl,Rs-tn)-.02),ea=Math.min(fl,gl);Tr.push(tn-ea,tn,tn+ea),Tr.push(10/17,11/17,12/17,13/17,14/17,.85,.88);const nr=jo.map((b,G)=>{const se=Tr[G],he=q.getPointAt(se),ye=q.getTangentAt(se).setY(0).normalize();return{x:he.x,y:b,z:he.z,direction:ye}}),ta=I,wr=q.getPointAt(ta),_l=q.getTangentAt(ta).setY(0).normalize();nr.push({x:wr.x,y:0,z:wr.z,direction:_l,finish:!0});const Yn=[],iu=new Tn({color:16756034,transparent:!0,opacity:.98,depthWrite:!1,toneMapped:!1,fog:!1}),su=new Tn({color:16773572,transparent:!0,opacity:1,depthWrite:!1,toneMapped:!1,fog:!1}),ru=new S(0,0,1);for(let b=0;b<nr.length;b+=1){const G=nr[b],se=G.direction,he=new Et;he.position.set(G.x,G.y,G.z),he.quaternion.setFromUnitVectors(ru,se);const ye=!!G.finish,Me=ye?vr/2-.72:12.5,pe=new at(new el(Me,.72,10,56),iu.clone()),z=new at(new el(ye?Me-.7:11.8,.14,8,56),su.clone());he.add(pe,z),eo.add(he),Yn.push({position:he.position,direction:se,radius:ye?vr/2:15,scored:!1,missed:!1,finish:ye})}const Ei=document.createElement("div");Ei.className="race-hud",Ei.setAttribute("role","status"),Ei.setAttribute("aria-live","polite"),Ei.innerHTML='<div class="race-hud-stat"><span class="race-hud-label">GATES</span><strong><span id="race-gate-count">00</span><span class="race-hud-total"> / 17</span></strong></div><div class="race-hud-stat"><span class="race-missed-label">未通過</span><strong class="race-missed-count" id="race-gate-missed">00</strong></div><span class="race-timer-label">TIME</span><strong class="race-timer" id="race-timer">00:00.00</strong>';const Cs=document.createElement("div");Cs.className="speed-streak-overlay",Cs.setAttribute("aria-hidden","true");const M=document.createElement("aside");M.className="play-flight-hud",M.hidden=!0,M.setAttribute("aria-label","即時飛行儀表"),M.innerHTML='<span class="play-flight-hud-title">FLIGHT DATA</span><div><span>高度</span><strong data-play-value="altitude">0</strong><small>ft</small></div><div><span>空速</span><strong data-play-value="speed">0</strong><small>kt</small></div><div><span>航向</span><strong data-play-value="heading">000</strong><small>°</small></div><div><span>俯仰</span><strong data-play-value="pitch">0</strong><small>°</small></div><div><span>坡度</span><strong data-play-value="bank">0</strong><small>°</small></div><span class="play-assist-badge" hidden>簡易輔助</span>';const D=document.createElement("button");D.className="cockpit-toggle",D.type="button",D.hidden=!0,D.setAttribute("aria-pressed","false"),D.textContent="駕駛艙視角";const Q=document.createElement("aside");Q.className="crash-overlay",Q.hidden=!0,Q.setAttribute("role","alertdialog"),Q.setAttribute("aria-label","飛行中止"),Q.innerHTML='<div class="crash-dialog"><span class="crash-kicker">FLIGHT ENDED</span><strong id="crash-reason">飛行碰撞</strong><small>修正姿態與航線後再試一次</small><button type="button" id="crash-restart">立即重來</button></div>',s.append(Ei,Cs,M,D,Q);const K=Ei.querySelector("#race-gate-count"),$=Q.querySelector("#crash-reason"),O=new Et,Ke=new Hn,He=new Hn,et=new Et,nt=new Et,It=new Et;nt.visible=!0,It.visible=!1,et.add(nt,It),O.add(et);const kt=new Et;kt.visible=!1,It.add(kt);const it=[],Vt={ailerons:[],rudders:[],inboardFlapsLeft:[],inboardFlapsRight:[],outboardFlaps:[],slats:[],spoilers:[],reversers:[],gear:[]},vn={pitch:0,roll:0,rudder:0,spoilers:0,reverser:0},Nt={aileron:0,rudder:0,inboardFlapLeft:0,inboardFlapRight:0,outboardFlap:0,slat:0,spoiler:0,reverser:0,gear:0,elevator:0},_n=[],Kn=[],Ye={instruction:null,play:null},ti=new Set,rn=new S,ni=new S,Ti=new S(1,0,0),qi=[];let Ps=!1;e.add(O);const ln=new Et,mn=new at(new un,new Tn({color:16760195,depthTest:!1,depthWrite:!1}));mn.frustumCulled=!1,mn.visible=!1,mn.renderOrder=5,ln.add(mn),ln.visible=!1,e.add(ln);const wi=new Et;O.add(wi);const bn=new S;let Yi=!1;const ds=new Map([[-1,new Et],[1,new Et]]);for(const[b,G]of ds)G.visible=b===-1,wi.add(G);let to=-1;const xl=new S,vl=new Et;vl.visible=!1,O.add(vl);const ou=[new Et,new Et],sf=[];ou.forEach(b=>vl.add(b));const no=new Et;no.visible=!1,e.add(no);const ir=new Et;ir.position.set(0,-.5,0),no.add(ir);const Ls=new Et;Ls.visible=!1,e.add(Ls);const na=[],G0=[{direction:[0,1,0],origin:[0,0,0],length:7,color:13038847},{direction:[0,-1,0],origin:[0,0,0],length:7,color:15003121},{direction:[1,0,0],origin:[-30,0,0],length:10,color:12183762},{direction:[-1,0,0],origin:[30,0,0],length:10,color:10472408}];for(const b of G0){const G=new fh(new S(...b.direction),new S(...b.origin),b.length,b.color,.85,.52);Ls.add(G),na.push(G)}const Ar=new Et;Ar.position.y=3.4,no.add(Ar);const yl=new Et;Ar.add(yl);const rf=new Et;Ar.add(rf);const au=[],ia=[],Ml=new fh(new S(0,1,0),new S(0,1.05,2.05),1,16765099,.35,.2);Ar.add(Ml);const V0=new fh(new S(-1,0,0),new S(5.5,-1.85,2.05),2.1,13038847,.38,.22);Ar.add(V0);const lu=new Yr(new un,new al({color:16765099}));Ar.add(lu);const ii=new Et;ii.visible=!1,e.add(ii);const io=new Et;io.visible=!1,ii.add(io);const Rr=new Et;ii.add(Rr);const cu=[],Is=[],of=[],af=[],lf=[],Sl=[],cf=[],uf=[];let Ki=null,sr=!1;const sa=[[0,new Te(4508415)],[.32,new Te(6808273)],[.47,new Te(16768085)],[.58,new Te(16747824)],[.78,new Te(16728867)],[1,new Te(16753474)]],uu=(b,G=new Te)=>{for(let se=1;se<sa.length;se+=1){const[he,ye]=sa[se];if(b<=he){const[Me,pe]=sa[se-1];return G.copy(pe).lerp(ye,(b-Me)/(he-Me))}}return G.copy(sa[sa.length-1][1])},bl=[],hf=[],hu=new l1,El=new o1;El.setDecoderPath("/draco/"),El.preload(),hu.setDRACOLoader(El);let ke="idle",Jt="instruction",xi=!1,df=62,Zi=38,ff=6.65,pf=4.2,ra=2.1,du=Math.hypot(ff,pf),vi=-2.68,so=-2.68,$i=0,Tl=0,Cr=0,wl=0,ro=0,Pr=0,Lr=0,oa=0,aa=0,oo=0,ao=0,fu=0,pu=0,Al=0,Rl=1,mu=0,Cl=null,Pl=null,mf=0;const W0=new S(1,0,0),X0=new Hn;let yi=0,En=0,Ai=0,gu=0,_u=0,In=0,Nn=0,Bn=0,Cn=0,Un=0,Ri=0,Ji=0,lo=0,Ll=0,xu=0,Ir=null,Il=0,Nl=!1,rr=!1,co="standard",gf=1,vu=!1,_f=0,uo=!1,ho=!1,Dl=0,la=!1,xf=!1,Ul=0,ca=0,fo=0,Fl=1,or=null,yu=0,Ol=0,ar=null,Ni=null,po=0,mo=0,ua=0,ha=!1,lr=0;const Bl=new S,cr=new S,da=new S;let Mi=4,Nr=0,vf=null,yf=null,Mf=null,ur=18,ui=1,fs=0,hi=0,Dr=8,Di=0,Ur=!1,hr=1/0,ps=!1,fa=!1,Mu=!1,Sf=!1;const Ns=new S(0,3.2,0),kn=new S(0,10,55),fn=new S(0,3,0),kl=fn.clone(),bf=new S,Ef=new S,Tf=new S(0,3,0);let zl=38;const Su=new S(0,3,0),bu=new S,wf=new S,Af=new S,Ds=new Ce,Hl=new S,pa=new sv,ma=new S(-52,15,0),ga=new S(24,3,0),Rf=new S(0,1,0),Cf=new S(0,1,0),_a=new Hn,xa=new Hn,Pf=new Hn,Eu=new Hn,Lf=new Hn,go=new S(0,1,0),Gl=new S(0,0,1),Vl=new S(1,0,0),Ui=new S,Tu=new S,Fr=new S,If=new S,Us=new S,Wl=new S,Nf=new S,wu=new Hn,Df=new Hn,Fi=new S,Xl=new S,Qi=new S,Au=new tr,Ru=new S(-k.z,0,k.x).normalize(),Uf=new Hi(new S(0,0,-1),0),Fs=Q1();for(const b of Fs.modules)b.position.set(0,0,0);const Ff=new qn().setFromObject(Fs.root).getCenter(new S);Fs.root.position.sub(Ff),ii.add(Fs.root),Rr.position.x=-Ff.x,ii.rotation.y=Math.PI,ii.scale.setScalar(.5);for(const b of Fs.n1Rotors)cu.push({group:b,spin:4.3});for(const b of Fs.n2Rotors)cu.push({group:b,spin:-6.7});for(const b of X1())b.clippingPlanes=[Uf],b.clipShadows=!1,b.needsUpdate=!0;$0(),Y0(),Bf(Mi),fa=!0;function q0(){xf||(xf=!0,hu.load("/models/turbofan-cutaway.glb",({scene:b})=>{const G=new Et,se=new Et;se.add(b),G.add(se);const ye=new qn().setFromObject(G).getSize(new S);ye.y>=ye.x&&ye.y>=ye.z?se.rotation.z=-Math.PI/2:ye.z>ye.x&&ye.z>=ye.y&&(se.rotation.y=Math.PI/2),G.updateMatrixWorld(!0);const Me={Steel:{color:10661816,metalness:.38,roughness:.42},Aluminum:{color:13819106,metalness:.64,roughness:.3},"Black Steel":{color:5858157,metalness:.52,roughness:.38},White:{color:15003122,metalness:.18,roughness:.48},Brass:{color:12749378,metalness:.84,roughness:.27}},pe=new S(0,0,1).applyQuaternion(ii.quaternion).normalize(),z=new Hi().setFromNormalAndCoplanarPoint(pe,ii.position),le=new Hi().setFromNormalAndCoplanarPoint(new S(0,1,0),ii.position.clone().add(new S(0,.48,0))),j=new Hi().setFromNormalAndCoplanarPoint(new S(0,-1,0),ii.position.clone().add(new S(0,-.48,0)));b.traverse(ge=>{if(!ge.isMesh)return;if(/^(Compressor_case|Turbine_case)$/i.test(ge.name)){const Be=ge.geometry.clone();Be.computeBoundingBox();const we=Be.boundingBox.getCenter(new S),Xt=Be.attributes.position,_t=Be.attributes.normal,rt=ge.name==="Compressor_case"?2.05:1.1;for(let zt=0;zt<Xt.count;zt+=1)if(Xt.setXY(zt,we.x+(Xt.getX(zt)-we.x)*rt,we.y+(Xt.getY(zt)-we.y)*rt),_t){const gn=new S(_t.getX(zt)/rt,_t.getY(zt)/rt,_t.getZ(zt)).normalize();_t.setXYZ(zt,gn.x,gn.y,gn.z)}Xt.needsUpdate=!0,_t&&(_t.needsUpdate=!0),Be.computeBoundingBox(),Be.computeBoundingSphere(),ge.geometry=Be}const Je=/^(Nacelle|Compressor_case|Combustor_case|Turbine_case)$/i.test(ge.name),Ve=Array.isArray(ge.material)?ge.material:[ge.material];for(const Be of Ve){Je&&(Be.clippingPlanes=ge.name==="Nacelle"?[z,le,j]:[z],Be.clipIntersection=ge.name==="Nacelle",Be.clipShadows=!1,Be.needsUpdate=!0);const we=Me[Be.name];we&&(Be.color.setHex(we.color),Be.metalness=we.metalness,Be.roughness=we.roughness,Be.needsUpdate=!0)}});const me=new qn().setFromObject(G),Ae=me.getSize(new S),ut=10/Math.max(Ae.x,Ae.y,Ae.z);G.scale.set(-ut,ut,ut),G.position.copy(me.getCenter(new S)).multiply(new S(ut,-ut,-ut));const Ft=(ge,Je)=>{const Ve=ge.getAttribute("position"),Be=ge.getIndex();if(!Ve||!Be||Be.count%3!==0)return null;const we=Uint32Array.from({length:Ve.count},(Ct,Zn)=>Zn),Xt=Ct=>{for(;we[Ct]!==Ct;)we[Ct]=we[we[Ct]],Ct=we[Ct];return Ct},_t=(Ct,Zn)=>{const di=Xt(Ct),ks=Xt(Zn);di!==ks&&(we[ks]=di)};for(let Ct=0;Ct<Be.count;Ct+=3){const Zn=Be.getX(Ct);_t(Zn,Be.getX(Ct+1)),_t(Zn,Be.getX(Ct+2))}const rt=new Map;for(let Ct=0;Ct<Be.count;Ct+=3){const Zn=Be.getX(Ct),di=Xt(Zn);rt.has(di)||rt.set(di,{indices:[],vertices:new Set});const ks=rt.get(di);for(let xo=0;xo<3;xo+=1){const Xf=Be.getX(Ct+xo);ks.indices.push(Xf),ks.vertices.add(Xf)}}ge.computeBoundingBox();const zt=ge.boundingBox.getCenter(new S),gn=Math.PI*2/Je,Rn=[],zn=[];for(const Ct of rt.values()){if(Ct.indices.length/3>=100){zn.push(...Ct.indices);continue}let Zn=0,di=0;for(const xo of Ct.vertices)Zn+=Ve.getX(xo),di+=Ve.getY(xo);const ks=(Math.atan2(di/Ct.vertices.size-zt.y,Zn/Ct.vertices.size-zt.x)+Math.PI*2)%(Math.PI*2);Rn.push({...Ct,angle:ks})}if(!Rn.length||Rn.length%Je!==0)return null;const Wn=Rn.map(({angle:Ct})=>(Ct%gn+gn)%gn).sort((Ct,Zn)=>Ct-Zn);let xn=-1,Ci=0;for(let Ct=0;Ct<Wn.length;Ct+=1){const di=(Ct===Wn.length-1?Wn[0]+gn:Wn[Ct+1])-Wn[Ct];di>xn&&(xn=di,Ci=(Wn[Ct]+di/2)%gn)}const Os=(Ci+gn/2)%gn,Bs=Array.from({length:Je},()=>[]),Or=Array(Je).fill(0);for(const Ct of Rn){const Zn=(Math.round((Ct.angle-Os)/gn)%Je+Je)%Je;Bs[Zn].push(...Ct.indices),Or[Zn]+=1}const Br=Rn.length/Je;return Or.some(Ct=>Ct!==Br)?null:{center:zt,hubIndices:zn,blades:Bs}},bt=(ge,Je)=>{const Ve=new un;for(const[Be,we]of Object.entries(ge.attributes)){const Xt=new we.array.constructor(Je.length*we.itemSize),_t=we.isInterleavedBufferAttribute?we.data.stride:we.itemSize,rt=we.isInterleavedBufferAttribute?we.offset:0;for(let zt=0;zt<Je.length;zt+=1){const gn=Je[zt]*_t+rt,Rn=zt*we.itemSize;Xt.set(we.array.subarray(gn,gn+we.itemSize),Rn)}Ve.setAttribute(Be,new Pn(Xt,we.itemSize,we.normalized))}return Ve.computeBoundingBox(),Ve.computeBoundingSphere(),Ve},Pt=(ge,Je,Ve,Be,we,Xt,_t=0)=>{const rt=new Et;rt.position.copy(ge.position).add(Je.center.clone().multiply(ge.scale).applyEuler(ge.rotation)),rt.position.z+=_t,rt.scale.set(Be,Be,1),rt.visible=ge.visible,Xt.add(rt);const zt=(gn,Rn)=>{const zn=new at(bt(ge.geometry,gn),we);zn.position.copy(Je.center).negate(),zn.rotation.copy(ge.rotation),zn.scale.copy(ge.scale),zn.castShadow=ge.castShadow,zn.receiveShadow=ge.receiveShadow,Rn.add(zn)};Je.hubIndices.length&&zt(Je.hubIndices,rt);for(let gn=0;gn<Je.blades.length;gn+=1){const Rn=new Et;rt.add(Rn),zt(Je.blades[gn],Rn),gn%2===0&&of.push({group:Rn,spin:Ve})}return rt},vt=(ge,Je,Ve=1,Be=10402519)=>{const we=b.getObjectByName(ge);if(!we?.isMesh)return;we.geometry.computeBoundingBox();const Xt=we.geometry.boundingBox.getCenter(new S),_t=/turbine/i.test(ge),rt=/High_pressure/i.test(ge)?.42:_t?.2:0,zt=(Array.isArray(we.material)?we.material:[we.material]).map(Wn=>{const xn=Wn.clone();return xn.color.setHex(Be),xn.emissive=new Te(_t?16737311:0),xn.emissiveIntensity=rt,xn.metalness=_t?.82:.92,xn.roughness=_t?.25:.2,xn.needsUpdate=!0,xn}),gn=ge==="Fan_20_blades"?20:/^Compressor_rotor_\d+$/.test(ge)||_t?24:0;if(gn){const Wn=Ft(we.geometry,gn);if(Wn){const Bs=we.parent||b;if(_t){const Br=we.clone(),Ct=zt.map(ks=>ks.clone());Br.material=Array.isArray(we.material)?Ct:Ct[0];const Zn=Pt(Br,Wn,Je,Ve,Br.material,Bs,.08),di=/High_pressure/i.test(ge)?.42:.2;Is.push({group:Zn,spin:0,hot:_t,heat:di,materials:Ct,phase:Is.length*.9})}const Or=Pt(we,Wn,Je,Ve,we.material,Bs);if(we.removeFromParent(),_t){const Br=/High_pressure/i.test(ge)?.42:.2;Is.push({group:Or,spin:0,hot:_t,heat:Br,materials:zt,phase:Is.length*.9})}return Or}if(console.warn(`Could not split rotor blades for alternating rotation: ${ge}`),!_t)return;const xn=we.clone(),Ci=new Et;Ci.position.copy(we.position).add(Xt.clone().multiply(we.scale).applyEuler(we.rotation)),Ci.position.z+=.08,Ci.scale.set(Ve,Ve,1),Ci.add(xn),xn.position.copy(Xt).negate();const Os=zt.map(Bs=>Bs.clone());xn.material=Array.isArray(we.material)?Os:Os[0],(we.parent||b).add(Ci),Is.push({group:Ci,spin:0,hot:_t,heat:rt,materials:Os,phase:Is.length*.9})}const Rn=new Et,zn=we.parent||b;return Rn.position.copy(we.position).add(Xt.clone().multiply(we.scale).applyEuler(we.rotation)),zn.add(Rn),Rn.add(we),we.position.copy(Xt).negate(),Rn.scale.set(Ve,Ve,1),we.material=Array.isArray(we.material)?zt:zt[0],Is.push({group:Rn,spin:Je,hot:_t,heat:rt,materials:zt,phase:Is.length*.9}),Rn},mt=3.2,Wt=-4.8;vt("Spinner",0,1,9477029),vt("Fan_20_blades",mt,1,10402519);for(let ge=1;ge<=7;ge+=1){const Je=ge<=3?mt:Wt;vt(`Compressor_rotor_${ge}`,Je,1,10402519)}vt("High_pressure_turbine_1",Wt,.55,13668955),vt("High_pressure_turbine_2",Wt,.655,12879696),vt("Low_pressure_turbine_3",mt,.76,12151883),vt("Low_pressure_turbine_4",mt,.865,12941141),Ki=new Et,Ki.visible=sr&&ke==="engine",b.add(Ki);const nn=[[1.42,0],[1.2,.045],[1.02,-.07],[.84,.07],[.66,-.07],[.48,.075],[.3,-.06],[.12,.08],[-.04,.02],[-.2,.06],[-.36,-.055],[-.52,.06],[-.68,-.05],[-.84,.04],[-1,0],[-1.2,0]];for(let ge=-1;ge<=1;ge+=1){const Je=new ss(nn.map(([_t,rt])=>new S(ge*.075,.8+ge*.075+rt,_t)),!1,"catmullrom",.32),Ve=new os(Je,180,.012,6,!1),Be=Ve.attributes.uv,we=new Float32Array(Be.count*3);for(let _t=0;_t<Be.count;_t+=1){const rt=uu(Be.getX(_t));we[_t*3]=rt.r,we[_t*3+1]=rt.g,we[_t*3+2]=rt.b}Ve.setAttribute("color",new on(we,3));const Xt=new at(Ve,new Tn({vertexColors:!0,transparent:!0,opacity:.82,depthTest:!1,depthWrite:!1,toneMapped:!1}));Xt.renderOrder=10,Ki.add(Xt);for(let _t=0;_t<4;_t+=1){const rt=new at(new Xr(.027,10,8),new Tn({color:uu(0),toneMapped:!1}));rt.renderOrder=11,Ki.add(rt),uf.push({mesh:rt,curve:Je,phase:(_t/4+(ge+1)*.11)%1,speed:.12})}}const Qt=(ge,Je,Ve)=>new Xi({transparent:!0,depthTest:!1,depthWrite:!1,blending:Ga,side:hn,toneMapped:!1,uniforms:{uTime:{value:0},uPhase:{value:Ve},uOpacity:{value:Je},uColorA:{value:new Te(ge[0])},uColorB:{value:new Te(ge[1])},uColorC:{value:new Te(ge[2])}},vertexShader:`
          varying vec2 vUv;
          uniform float uTime;
          uniform float uPhase;
          void main() {
            vUv = uv;
            vec3 p = position;
            float flicker = sin(uv.y * 23.0 - uTime * 17.0 + uPhase) * 0.03;
            flicker += sin(uv.y * 37.0 - uTime * 27.0 + uPhase * 1.7) * 0.014;
            p.xz *= 1.0 + flicker;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
          }
        `,fragmentShader:`
          varying vec2 vUv;
          uniform float uTime;
          uniform float uPhase;
          uniform float uOpacity;
          uniform vec3 uColorA;
          uniform vec3 uColorB;
          uniform vec3 uColorC;
          void main() {
            float t = clamp(vUv.y, 0.0, 1.0);
            float tongues = 0.5 + 0.5 * sin(vUv.x * 43.0 + t * 19.0 - uTime * 13.0 + uPhase);
            tongues = tongues * 0.58 + (0.5 + 0.5 * sin(vUv.x * 71.0 - t * 31.0 - uTime * 21.0 + uPhase * 1.9)) * 0.42;
            float body = smoothstep(0.015, 0.16, t) * (1.0 - smoothstep(0.68, 1.0, t));
            vec3 color = mix(uColorA, uColorB, smoothstep(0.2, 0.78, tongues + (1.0 - t) * 0.18));
            color = mix(color, uColorC, smoothstep(0.68, 0.98, tongues) * (1.0 - t) * 0.72);
            float alpha = body * (0.28 + tongues * 0.68) * uOpacity;
            gl_FragColor = vec4(color, alpha);
          }
        `}),Rt=(ge,Je,Ve,Be,we)=>{const Xt=new Te(Ve),_t=Qt([Xt.clone().multiplyScalar(.72),Xt.clone().lerp(new Te(16760150),.55),16774357],Be,Sl.length*1.7),rt=new at(new Ys(ge,Je,24,1,!0),_t);rt.position.set(0,.8,we-Je/2),rt.rotation.x=-Math.PI/2,rt.renderOrder=7,b.add(rt),Sl.push({mesh:rt,phase:Sl.length*1.7,baseOpacity:Be})};Rt(.2,1.5,16737326,.32,-1.62),Rt(.13,1.12,16755267,.48,-1.64),Rt(.065,.82,16772541,.72,-1.66);for(let ge=0;ge<6;ge+=1){const Je=ge/6*Math.PI*2,Ve=Math.cos(Je)*.18,Be=Math.sin(Je)*.18,we=ge*.9,Xt=Qt([16730140,16754222,16772528],.92,we),_t=Qt([16755253,16777138,16777215],.82,we+.5),rt=new at(new Ys(.05,.3,16,10),Xt);rt.position.set(Ve,.78+Be,-.18+ge*.02),rt.rotation.x=-Math.PI/2,b.add(rt);const zt=new at(new Ys(.024,.22,12,8),_t);zt.position.copy(rt.position),zt.position.z-=.025,zt.rotation.x=-Math.PI/2,b.add(zt),lf.push({mesh:rt,core:zt,phase:we})}const Ot=(ge,Je,Ve,Be,we,Xt,_t)=>{const rt=new Et,zt=new Tn({color:_t,depthTest:!1,depthWrite:!1,toneMapped:!1}),gn=.17,Rn=.14,zn=new at(new rs(.045,.045,gn,12),zt);zn.position.y=gn/2;const Wn=new at(new Ys(.105,Rn,12),zt);Wn.position.y=gn+Rn/2,rt.add(zn,Wn),rt.quaternion.setFromUnitVectors(new S(0,1,0),new S(0,0,-1)),rt.renderOrder=9,rt.position.set(ge,Je,Ve),b.add(rt),cf.push({arrow:rt,x:ge,y:Je,startZ:Ve,endZ:Be,speed:we,phase:Xt})};Ot(-.88,1.08,1.15,-.95,.12,.02,557055),Ot(-.88,1.08,1.15,-.95,.12,.35,557055),Ot(-.88,1.08,1.15,-.95,.12,.68,557055),Ot(-.28,.82,.28,-.42,.18,.12,15746098),Ot(-.28,.82,.28,-.42,.18,.62,15746098),Ot(-.88,.2,1.15,-.95,.13,.02,557055),Ot(-.88,.2,1.15,-.95,.13,.35,557055),Ot(-.88,.2,1.15,-.95,.13,.68,557055);const pn=new S(0,1,0),ht=new Et;ht.position.set(0,.8,1.24);const pt=-2.55,Yt=2.65,Lt=.36,Oe=Array.from({length:49},(ge,Je)=>{const Ve=pt+(Yt-pt)*Je/48;return new S(Math.cos(Ve)*Lt,Math.sin(Ve)*Lt,0)}),Le=new Tn({color:16760064,depthTest:!1,depthWrite:!1,toneMapped:!1}),Ze=new at(new os(new ss(Oe),72,.018,8,!1),Le);ht.add(Ze);const je=new S(-Math.sin(Yt),Math.cos(Yt),0).normalize(),$e=new at(new Ys(.07,.16,12),Le);$e.quaternion.setFromUnitVectors(pn,je),$e.position.set(Math.cos(Yt)*Lt+je.x*.045,Math.sin(Yt)*Lt+je.y*.045,0),ht.add($e),ht.renderOrder=13,ht.visible=!1,b.add(ht),af.push(ht),io.add(G),la=!0,Ul=performance.now(),Fs.root.visible=!1,io.visible=ke==="engine",Rr.visible=!1,ri()},void 0,b=>console.warn("Using built-in CFM56 engine fallback",b)))}function Of(){const b=O.localToWorld(new S(Zi*.12,Ns.y-4.8,Zi*.21));ii.position.copy(b),ii.rotation.copy(O.rotation),ii.rotateY(Math.PI),Uf.constant=ii.position.z}function Y0(){const b=new Yd;b.moveTo(4,0),b.quadraticCurveTo(1.7,.46,-.5,.4),b.quadraticCurveTo(-2.9,.2,-4,0),b.quadraticCurveTo(-2.9,-.08,-.5,-.1),b.quadraticCurveTo(2.6,-.11,4,0);const G=new Jc(b,{depth:3.2,bevelEnabled:!0,bevelSegments:2,bevelSize:.07,bevelThickness:.05,curveSegments:16});G.translate(0,0,-1.6);const se=new at(G,new zi({color:15397364,metalness:.14,roughness:.38,side:hn}));yl.add(se);const he=new un().setFromPoints([new S(4,.035,2.05),new S(-4,.035,2.05)]),ye=new Yr(he,new Bp({color:16765099,dashSize:.22,gapSize:.12,linewidth:2}));ye.computeLineDistances(),yl.add(ye);for(let Me=0;Me<3;Me+=1){const pe=new Bp({color:Me<2?13038847:15321229,dashSize:.3,gapSize:.18,transparent:!0,opacity:.95,depthWrite:!1}),z=new Yr(new un,pe);rf.add(z),au.push(z),ia.push(pe)}}function K0(){const b=R0(nt);b.visible=!0,b.scale.setScalar(1),b.updateMatrixWorld(!0);const se=new qn().setFromObject(b).getSize(new S),he=Math.max(se.x,se.z);b.scale.setScalar(Math.min(.18,14/Math.max(he,1))),b.updateMatrixWorld(!0);const ye=new qn().setFromObject(b).getCenter(new S);b.position.sub(ye),ir.add(b),ir.visible=ke==="aoa"}function Bf(b){Mi=ee.clamp(Number(b)||0,-5,25);const G=ee.degToRad(Mi),se=Mi>=15,he=Mi<0?Math.round(ee.clamp((Mi+5)*4,0,20)):Mi<=15?Math.round(20+Mi*(80/15)):Math.round(Math.max(20,100-(Mi-15)*8));yl.rotation.z=G;for(let Me=0;Me<au.length;Me+=1){const pe=Me<2,z=[];for(let j=0;j<=64;j+=1){const me=6.5-j*.203125,Ae=Math.exp(-((me-.1)**2)/8),ut=pe?.95+Me*.52:-1.05,Ft=pe?Ae*(.36+Math.max(0,Mi)*.025):-Ae*.12,Pt=(se?ee.clamp((2.4-me)/6,0,1):0)*Math.sin((2.4-me)*4.2+Me*1.7)*.46;z.push(new S(me,ut+Ft+Pt,2.18))}const le=au[Me];le.geometry.dispose(),le.geometry=new un().setFromPoints(z),le.computeLineDistances(),ia[Me].color.set(se&&pe?16760971:pe?13038847:15321229),ia[Me].dashSize=se&&pe?.2:pe?.3:.18}const ye=Array.from({length:25},(Me,pe)=>{const z=Math.PI+G*pe/24;return new S(Math.cos(z)*.82,Math.sin(z)*.82,2.3)});return lu.geometry.dispose(),lu.geometry=new un().setFromPoints(ye),Ml.setLength(.35+he/100*1.8,.35,.2),Ml.setColor(se?16749423:16765099),Ml.position.set(-.5,.55,2.3),{angle:Mi,liftPercent:he,stalled:se}}function Z0(b){O.updateMatrixWorld(!0),b.updateMatrixWorld(!0);const G=new qn().setFromObject(b,!0),se=new qn;for(const ht of[G.min.x,G.max.x])for(const pt of[G.min.y,G.max.y])for(const Yt of[G.min.z,G.max.z])se.expandByPoint(O.worldToLocal(new S(ht,pt,Yt)));const he=se.getSize(new S),ye=se.getCenter(new S),Me=new iv;Me.far=200;const pe=new S,z=new S(0,-1,0).applyQuaternion(O.quaternion),le=new S,j=(ht,pt,Yt=!0)=>{const Lt=[[0,0],[.35,0],[-.35,0],[0,.35],[0,-.35],[.7,0],[-.7,0],[0,.7],[0,-.7],[0,1.1],[0,-1.1],[0,1.5],[0,-1.5]];for(const[Oe,Le]of Yt?Lt:[Lt[0]]){pe.set(ht+Oe,100,pt+Le),O.localToWorld(pe),Me.set(pe,z);const Ze=Me.intersectObject(b,!0);if(!Ze.length)continue;const je=Ze.map($e=>O.worldToLocal(le.copy($e.point)).y).sort(($e,ge)=>ge-$e).filter(($e,ge,Je)=>ge===0||Math.abs($e-Je[ge-1])>.12);if(je.length>1)return{upper:je[0],lower:je[1]}}return null},me={upper:13038847,lower:15321229},Ae=[-11,11],ut=[.12,.34,.58],Ft=ht=>{const pt=[ye.x-he.x*.3,ye.x+he.x*.14],Yt=[];for(let Ze=0;Ze<24;Ze+=1){const je=ee.lerp(pt[0],pt[1],Ze/23),$e=j(je,ht,!0);$e&&Yt.push({chord:je,upper:$e.upper,lower:$e.lower})}if(!Yt.length)return null;const Lt=Yt.map(Ze=>({x:Ze.chord,y:Ze.upper})).sort((Ze,je)=>Ze.x-je.x),Oe=Yt.map(Ze=>({x:Ze.chord,y:Ze.lower})).sort((Ze,je)=>Ze.x-je.x);return{upperProfile:Lt,lowerProfile:Oe,sampleHeight:(Ze,je)=>{if(Ze.length===0)return 0;if(je<=Ze[0].x)return Ze[0].y;if(je>=Ze[Ze.length-1].x)return Ze[Ze.length-1].y;for(let $e=0;$e<Ze.length-1;$e+=1){const ge=Ze[$e],Je=Ze[$e+1];if(je>=ge.x&&je<=Je.x){const Ve=(je-ge.x)/(Je.x-ge.x||1);return ee.lerp(ge.y,Je.y,Ve)}}return Ze[Ze.length-1].y},xMin:pt[0],xMax:pt[1]}};for(const ht of Ae){const pt=ds.get(Math.sign(ht));if(!pt)continue;const Yt=Ft(ht);if(!Yt)continue;const{upperProfile:Lt,lowerProfile:Oe,sampleHeight:Le,xMin:Ze,xMax:je}=Yt,$e=je-(je-Ze)*.18,ge=Ze+(je-Ze)*.08,Je=je+3.2,Ve=Ze-1.6;if(!Yi){const Be=Ze+(je-Ze)*.46,we=Le(Lt,Be),Xt=Le(Oe,Be);bn.set(Be,(we+Xt)*.5,ht),Yi=!0}ut.forEach((Be,we)=>{const Xt=[],_t=[];for(let zn=0;zn<=18;zn+=1){const Wn=zn/18,xn=ee.lerp(Je,Ve,Wn),Ci=Le(Lt,xn),Os=Le(Oe,xn),Bs=xn>=$e?ee.lerp(.62+Be*.85,Ci+.08+Be*.22,ee.clamp((xn-Je)/($e-Je||1),0,1)):xn<=ge?ee.lerp(Ci+.05+Be*.12,.1+Be*.3,ee.clamp((ge-xn)/(ge-Ve||1),0,1)):Ci+.06+Be*.12,Or=xn>=$e?ee.lerp(-.52-Be*.8,Os-.08-Be*.18,ee.clamp((xn-Je)/($e-Je||1),0,1)):xn<=ge?ee.lerp(Os-.05-Be*.12,-.1-Be*.28,ee.clamp((ge-xn)/(ge-Ve||1),0,1)):Os-.05-Be*.12;Xt.push(new S(xn,Bs,ht)),_t.push(new S(xn,Or,ht))}const rt=new ss(Xt,!1,"centripetal"),zt=new ss(_t,!1,"centripetal"),gn=new Tn({color:me.upper,transparent:!0,opacity:.85,depthTest:!0,depthWrite:!1,toneMapped:!1}),Rn=new Tn({color:me.lower,transparent:!0,opacity:.75,depthTest:!0,depthWrite:!1,toneMapped:!1});pt.add(new at(new os(rt,72,.028,6,!1),gn)),pt.add(new at(new os(zt,72,.024,6,!1),Rn));for(const zn of[.18,.5,.8]){const Wn=new at(new mi(.26,.04,.04),new Tn({color:me.upper,transparent:!0,opacity:.9,depthTest:!0,depthWrite:!1,toneMapped:!1})),xn=new at(new mi(.26,.04,.04),new Tn({color:me.lower,transparent:!0,opacity:.8,depthTest:!0,depthWrite:!1,toneMapped:!1}));pt.add(Wn,xn),bl.push({mesh:Wn,curve:rt,phase:zn+we*.08,speed:.36}),bl.push({mesh:xn,curve:zt,phase:zn+we*.09+.2,speed:.24})}})}const bt=Vt.slats.filter(({object:ht,side:pt})=>/^FrontFlapsB[LR]/.test(ht.name)&&pt>0).map(({object:ht})=>({position:O.worldToLocal(ht.getWorldPosition(new S))})).sort((ht,pt)=>Math.abs(pt.position.z)-Math.abs(ht.position.z))[0],Pt=bt?.position.z??se.max.z*.48,vt=bt?.position.x??ye.x,mt=ee.clamp(he.x*.02,.65,1.2),Wt=Array.from({length:12},(ht,pt)=>vt+(.7-pt*.45)*mt),nn=ht=>{const pt=Wt.map(Lt=>j(Lt,ht)),Yt=[!0,!1].map(Lt=>pt.map((Oe,Le)=>({chord:Wt[Le],height:Oe?.[Lt?"upper":"lower"]})).filter(({height:Oe})=>Oe!==void 0));return(Lt,Oe)=>{const Le=Yt[Oe?0:1];if(!Le.length)return Oe?.45:-.25;if(Lt>=Le[0].chord)return Le[0].height;for(let Ze=0;Ze<Le.length-1;Ze+=1){const je=Le[Ze],$e=Le[Ze+1];if(Lt<=je.chord&&Lt>=$e.chord){const ge=(Lt-je.chord)/($e.chord-je.chord);return ee.lerp(je.height,$e.height,ge)}}return Le[Le.length-1].height}},Qt=nn(Pt),Rt=vt-mt*1.55,Ot=(Qt(vt,!0)+Qt(vt,!1))*.5;Su.set(Rt,Ot,Pt),[[[.78,!1,-.09],[.5,!1,-.07],[.22,!1,-.05],[.03,!1,.02],[-.12,!0,.08],[-.28,!0,.09],[-.55,!0,.08],[-.95,!0,.07],[-1.5,!0,.06],[-2.15,!0,.05],[-2.75,!0,.05],[-3.35,!0,.05],[-3.9,!0,.05]],[[.78,!1,-.11],[.5,!1,-.09],[.22,!1,-.06],[.03,!1,.02],[-.12,!0,.1],[-.28,!0,.11],[-.55,!0,.09],[-.95,!0,.08],[-1.5,!0,.07],[-2.15,!0,.06],[-2.75,!0,.05],[-3.35,!0,.05],[-3.9,!0,.05]]].forEach((ht,pt)=>{const Yt=ou[pt];for(const Lt of[-.32,0,.32]){const Oe=Pt+Lt,Le=nn(Oe),Ze=ht.map(([Ve,Be,we],Xt)=>{const _t=vt+Ve*mt,rt=Lt*.025;return new S(_t,Le(_t,Be)+we+rt,Oe)}),je=new ss(Ze,!1,"centripetal"),$e=Lt===0,ge=new Tn({color:pt===1?$e?5627903:8776447:$e?5822975:9169663,transparent:!0,opacity:$e?.96:.78,depthTest:!1,depthWrite:!1,toneMapped:!1}),Je=new at(new os(je,96,$e?.027:.019,7,!1),ge);Je.renderOrder=14,Yt.add(Je);for(const Ve of[.16,.5,.82]){const Be=new at(new Xr($e?.06:.045,10,8),new Tn({color:15006719,transparent:!0,opacity:.96,depthTest:!1,depthWrite:!1,toneMapped:!1}));Be.renderOrder=15,Yt.add(Be),sf.push({mesh:Be,curve:je,phase:Ve+Lt*.08,speed:pt===1?.23:.28,stageIndex:pt})}}})}function Cu(){vl.visible=Jt==="instruction"&&ke==="slats"&&Cr>0,ou.forEach((b,G)=>{b.visible=Cr===G+1})}function $0(){const b=[[-5.2,new Te(2604543)],[-3.22,new Te(3907570)],[-2.38,new Te(6605296)],[-1.04,new Te(16766047)],[-.84,new Te(16752438)],[-.28,new Te(16724503)],[.12,new Te(16733987)],[1.11,new Te(16753470)],[2.9,new Te(16742450)],[4.8,new Te(16761972)]],G=(j,me=new Te)=>{for(let Ae=1;Ae<b.length;Ae+=1){const[ut,Ft]=b[Ae];if(j<=ut){const[bt,Pt]=b[Ae-1];return me.copy(Pt).lerp(Ft,ee.clamp((j-bt)/(ut-bt),0,1))}}return me.copy(b[b.length-1][1])},se=[-4.9,-3.22,-2.86,-2.38,-2.18,-1.04,-.84,-.56,-.28,-.18,.12,.36,1.11,1.48],he=[[-.58,0],[.58,0],[0,-.58],[0,.58]],ye=[-4.9,-3.22,-2.86,-1.04,.5,1.16],Me=[1.45,1.45,1.4,1.34,1.26,1.18],pe=[[1,0],[-1,0],[0,1],[0,-1],[.707,.707],[-.707,.707],[.707,-.707],[-.707,-.707]],z=[...he.map(([j,me])=>({points:se.map(Ae=>[Ae,j,me]),thermal:!0,radius:.032,speed:.72})),...pe.map(([j,me])=>({points:ye.map((Ae,ut)=>[Ae,j*Me[ut],me*Me[ut]]),color:4442623,radius:.022,speed:.86}))];for(const j of z){const me=new ss(j.points.map(([bt,Pt,vt])=>new S(bt,Pt,vt))),Ae=new os(me,120,j.radius,6,!1);if(j.thermal){const bt=Ae.attributes.position,Pt=new Float32Array(bt.count*3),vt=new Te;for(let mt=0;mt<bt.count;mt+=1)G(bt.getX(mt),vt),Pt[mt*3]=vt.r,Pt[mt*3+1]=vt.g,Pt[mt*3+2]=vt.b;Ae.setAttribute("color",new on(Pt,3))}const ut=new Tn({color:j.thermal?16777215:j.color,vertexColors:!!j.thermal,transparent:!0,opacity:j.thermal?.96:.82,depthTest:!0,depthWrite:!1}),Ft=new at(Ae,ut);Rr.add(Ft);for(let bt=0;bt<10;bt+=1){const Pt=new at(new Xr(j.radius*2.5,8,6),new Tn({color:j.thermal?G(j.points[0][0]):j.color}));Rr.add(Pt),bl.push({mesh:Pt,curve:me,phase:bt/10,speed:j.speed,thermal:!!j.thermal,colorAtStation:G})}}[16759119,16733990,16724507].forEach((j,me)=>{const Ae=new at(new Ys(.62-me*.1,3.2+me*.7,24,1,!1),new Tn({color:j,transparent:!0,opacity:.76-me*.16,depthWrite:!1,side:hn}));Ae.rotation.z=-Math.PI/2,Ae.position.set(4.98+me*.12,0,0),Ae.userData.flicker=me*1.73,Ae.userData.baseScale=.92-me*.1,Rr.add(Ae),hf.push(Ae)})}function kf(b){const G=Ye[b];nt.visible=b==="instruction"&&!!Ye.instruction,It.visible=b==="play"&&!!Ye.play,kt.visible=b==="play"&&!!Ye.play,G&&(Zi=G.length,ff=G.halfLength,pf=G.halfWidth,ra=G.halfHeight,du=G.collisionRadius,vi=G.groundY,so=G.playGroundOffset,Ns.copy(G.center),O.position.y=b==="play"?G.playGroundOffset*cn:G.groundY,b==="instruction"&&(na[0].position.y=Ns.y+5,na[1].position.y=Ns.y-5,na[2].position.y=Ns.y,na[3].position.y=Ns.y,fa&&Of()),ri())}function J0(b,G){ti.has(G)||(ti.add(G),hu.load(b,se=>{const he=se.scene,ye=G==="play"?It:nt;he.updateMatrixWorld(!0);const Me=new Set;he.traverse(vt=>{vt.isSkinnedMesh&&Me.add(vt.skeleton)});for(const vt of Me)vt.update();const pe=new qn().setFromObject(he,G==="instruction"),z=pe.getCenter(new S),le=pe.getSize(new S),j=G==="play",me=Math.max(le.x,le.z),Ae=me*Uo/2,ut=Math.min(le.x,le.z)*Uo/2,Ft=le.y*Uo/2;let bt=j?-2.68-pe.min.y:Rm-pe.min.y;const Pt=-2.68-pe.min.y*Uo;if(ye.rotation.y=j?Math.PI/2:G==="instruction"?-Math.PI/2:0,he.position.set(-z.x,0,-z.z),he.scale.setScalar(1),G==="instruction"){const vt=new Map(se.animations.flatMap(Oe=>Oe.tracks.map(Le=>[Le.name,Le]))),mt=new Map;he.traverse(Oe=>{if(!Oe.isMesh)return;const Le=Ze=>{if(mt.has(Ze))return mt.get(Ze);const je=Ze.clone(),$e={value:0},ge={value:0},Je=je.onBeforeCompile;je.onBeforeCompile=(Be,we)=>{Je?.call(je,Be,we),Be.uniforms.uElevatorDeflection=$e,Be.uniforms.uRudderDeflection=ge;const Xt=`
                float elevatorSpan = abs(position.x);
                float elevatorHingeZ = 16.1 + 0.37 * elevatorSpan;
                float elevatorSurfaceMask = step(0.7, elevatorSpan)
                  * (1.0 - step(6.5, elevatorSpan))
                  * step(4.3, position.y)
                  * (1.0 - step(5.55, position.y))
                  * smoothstep(elevatorHingeZ - 0.05, elevatorHingeZ + 0.05, position.z);
                float elevatorAngle = -uElevatorDeflection * 0.45 * elevatorSurfaceMask;
                float elevatorCos = cos(elevatorAngle);
                float elevatorSin = sin(elevatorAngle);
                vec3 elevatorPivot = vec3(0.0, 4.55 + 0.12 * elevatorSpan, elevatorHingeZ);
                float rudderSurfaceMask = (1.0 - step(0.5, abs(position.x)))
                  * step(5.1, position.y)
                  * (1.0 - step(11.9, position.y))
                  * smoothstep(16.2, 16.8, position.z);
                float rudderAngle = -uRudderDeflection * 0.42 * rudderSurfaceMask;
                float rudderCos = cos(rudderAngle);
                float rudderSin = sin(rudderAngle);
                vec3 rudderPivot = vec3(0.0, position.y, 16.4);
              `;Be.vertexShader=Be.vertexShader.replace("#include <common>",`#include <common>
uniform float uElevatorDeflection;
uniform float uRudderDeflection;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
                  ${Xt}
                  objectNormal = vec3(
                    objectNormal.x,
                    objectNormal.y * elevatorCos - objectNormal.z * elevatorSin,
                    objectNormal.y * elevatorSin + objectNormal.z * elevatorCos
                  );
                  objectNormal = vec3(
                    objectNormal.x * rudderCos + objectNormal.z * rudderSin,
                    objectNormal.y,
                    -objectNormal.x * rudderSin + objectNormal.z * rudderCos
                  );
                `).replace("#include <begin_vertex>",`#include <begin_vertex>
                  vec3 elevatorOffset = transformed - elevatorPivot;
                  transformed = elevatorPivot + vec3(
                    elevatorOffset.x,
                    elevatorOffset.y * elevatorCos - elevatorOffset.z * elevatorSin,
                    elevatorOffset.y * elevatorSin + elevatorOffset.z * elevatorCos
                  );
                  vec3 rudderOffset = transformed - rudderPivot;
                  transformed = rudderPivot + vec3(
                    rudderOffset.x * rudderCos + rudderOffset.z * rudderSin,
                    rudderOffset.y,
                    -rudderOffset.x * rudderSin + rudderOffset.z * rudderCos
                  );
                `)};const Ve=je.customProgramCacheKey.bind(je);return je.customProgramCacheKey=()=>`${Ve()}:instruction-controls`,_n.push($e),Kn.push(ge),mt.set(Ze,je),je};Oe.material=Array.isArray(Oe.material)?Oe.material.map(Le):Le(Oe.material)});const Wt=[{kind:"inboardFlapsLeft",nodePattern:/^BackFlapsA2?\.?L_/,poseTime:8},{kind:"inboardFlapsRight",nodePattern:/^BackFlapsA2?\.?R_/,poseTime:8},{kind:"outboardFlaps",nodePattern:/^BackFlapsB2?\.?[LR]_/,poseTime:8},{kind:"slats",nodePattern:/^FrontFlaps[AB]/,poseTime:8},{kind:"ailerons",nodePattern:/^BackAileron\.?[LR]_/,poseTime:21.5},{kind:"spoilers",nodePattern:/^AirBrake2?\.?[LR]_/,poseTime:24.667}],nn=/^(?:Wheel|NoseWheel)/,Qt=(Oe,Le,Ze)=>{const je=vt.get(`${Oe.name}.${Le}`);if(!je)return Oe[Le].clone();const $e=Math.min(Ze,je.times[je.times.length-1]),ge=je.createInterpolant().evaluate($e);return Le==="quaternion"?new Hn(ge[0],ge[1],ge[2],ge[3]):new S(ge[0],ge[1],ge[2])},Rt=(Oe,Le)=>({position:Qt(Oe,"position",Le),quaternion:Qt(Oe,"quaternion",Le),scale:Qt(Oe,"scale",Le)});he.traverse(Oe=>{if(nn.test(Oe.name)){const $e=Rt(Oe,28.166),ge=Rt(Oe,0);Oe.position.copy($e.position),Oe.quaternion.copy($e.quaternion),Oe.scale.copy($e.scale),Vt.gear.push({object:Oe,downPose:$e,upPose:ge})}const Le=Wt.find(({nodePattern:$e})=>$e.test(Oe.name));if(!Le)return;const Ze=["inboardFlapsLeft","inboardFlapsRight","outboardFlaps","slats"].includes(Le.kind)?Qt(Oe,"position",0):Oe.position.clone(),je=["inboardFlapsLeft","inboardFlapsRight","outboardFlaps","slats"].includes(Le.kind)?Qt(Oe,"quaternion",0):Oe.quaternion.clone();Oe.position.copy(Ze),Oe.quaternion.copy(je),Vt[Le.kind].push({object:Oe,restPosition:Ze,targetPosition:Qt(Oe,"position",Le.poseTime),restRotation:je,targetRotation:Qt(Oe,"quaternion",Le.poseTime),side:/\.?R_/.test(Oe.name)?1:-1})});for(const Oe of["inboardFlapsLeft","inboardFlapsRight","outboardFlaps","ailerons","spoilers"])Vt[Oe].length===0&&console.warn(`Instruction A320 model has no animated ${Oe} surfaces`);he.updateWorldMatrix(!0,!0);for(const Oe of Me)Oe.update();ye.add(he);const Ot=O.position.clone(),pn=O.quaternion.clone(),ht=O.scale.clone();O.position.set(0,0,0),O.quaternion.identity(),O.scale.setScalar(1),he.updateWorldMatrix(!0,!0);for(const Oe of Me)Oe.update();const pt=new qn().setFromObject(he,!0),Yt=pt.getSize(new S),Lt=pt.getCenter(new S);z.copy(Lt),mf=pt.min.y;for(const{object:Oe}of Vt.gear){if(!/^(WheelmainTurn|NoseWheelTurn)/.test(Oe.name)||Oe.name.includes("_end_"))continue;const Le=O.worldToLocal(Oe.getWorldPosition(new S));Oe.name.startsWith("WheelmainTurn")?Cl=Cl===null?Le.x:Math.min(Cl,Le.x):Pl=Pl===null?Le.x:Math.max(Pl,Le.x)}zl=Yt.x,Tf.set(pt.min.x+Yt.x*.04,pt.min.y+Yt.y*.32,Lt.z),bt=Rm-pt.min.y,O.position.copy(Ot),O.quaternion.copy(pn),O.scale.copy(ht),O.updateWorldMatrix(!0,!0)}if(j){ye.add(he);const vt=he.getObjectByName("Cockpit");if(vt){ye.updateWorldMatrix(!0,!0);const mt=new qn().setFromObject(vt).getCenter(new S);O.updateWorldMatrix(!0,!1),rn.copy(O.worldToLocal(mt)).add(new S(-1.3,.1,0)),Ps=!0}he.traverse(mt=>{if(!mt.isMesh)return;(Array.isArray(mt.material)?mt.material:[mt.material]).some(nn=>nn.name==="Fuselagem")&&qi.push(mt)}),Pu()}if(j){const vt=()=>{const mt=new un,Wt=[],nn=[],Qt=[],Rt=3.3,Ot=.48,pn=20,ht=12,pt=24,Yt=new Te(2395391),Lt=new Te(16761948),Oe=new Te(16737320),Le=new Te;for(let $e=0;$e<ht;$e+=1){const ge=.18+$e/(ht-1)*.82;ge<.62?Le.copy(Yt).lerp(Lt,ge/.62):Le.copy(Lt).lerp(Oe,(ge-.62)/.38);const Je=Wt.length/3;for(let Ve=0;Ve<=pn;Ve+=1){const Be=Ve/pn,we=Ot*ge*Math.pow(1-Be,.82);for(let Xt=0;Xt<=pt;Xt+=1){const _t=Xt/pt*Math.PI*2;if(Wt.push(Math.cos(_t)*we,Rt*Be,Math.sin(_t)*we),nn.push(Le.r,Le.g,Le.b),Ve<pn&&Xt<pt){const rt=Je+Ve*(pt+1)+Xt,zt=rt+pt+1;Qt.push(rt,zt,rt+1,zt,zt+1,rt+1)}}}}mt.setAttribute("position",new on(Wt,3)),mt.setAttribute("color",new on(nn,3)),mt.setIndex(Qt),mt.computeVertexNormals();const Ze=new Tn({vertexColors:!0,transparent:!0,opacity:.12,depthWrite:!1,side:hn,blending:Ga,toneMapped:!1}),je=new at(mt,Ze);return je.renderOrder=2,je};for(const mt of[-1,1]){const Wt=new Et;Wt.position.set(mt*1.55-z.x,-.3,-6.8-z.z),Wt.rotation.x=-Math.PI/2;const nn=vt();Wt.add(nn),kt.add(Wt),it.push({flameRoot:Wt,mesh:nn,phase:mt*.8})}}Ye[G]={center:z.clone(),length:me,halfLength:Ae,halfWidth:ut,halfHeight:Ft,collisionRadius:Math.hypot(Ae,ut),groundY:bt,playGroundOffset:Pt},G==="instruction"?(Mu=!0,Z0(he),K0()):kt.visible=Jt==="play",kf(Jt),G==="instruction"&&(ke==="aoa"&&(O.visible=!1,no.visible=!0,ir.visible=!0),ri())},void 0,se=>console.error(`Could not load ${G} aircraft model`,se)))}function zf(){const G=ee.degToRad(Math.max(ur,1)),se=9.81*Math.tan(G)/72;Dr=ee.clamp(72*.01/se,5,20);const he=Array.from({length:97},(Me,pe)=>{const z=pe/96*Math.PI*2;return new S(Dr*Math.cos(z),0,Dr*Math.sin(z))}),ye=new os(new ss(he,!0),192,.1,8,!0);mn.geometry.dispose(),mn.geometry=ye}function ri(){const b=Jt==="instruction"&&["aoa","turn"].includes(ke)&&s.clientWidth>600?Math.min(ke==="aoa"?330:310,s.clientWidth*.42):0,G=Math.max((s.clientWidth-b)/Math.max(s.clientHeight,1),.2),se=2*Math.tan(ee.degToRad(a.fov/2)),he=Zi/(se*G*.68),ye=Mu?Ns.y:3.2;if(Jt==="play"&&xi)Ps?(ni.copy(rn),ni.x+=.5,ni.y+=.25):ni.set(Zi*.12,ye+ra*.55,0),O.updateWorldMatrix(!0,!1),kn.copy(O.localToWorld(ni)),O.getWorldQuaternion(_a),Ti.set(1,0,0).applyQuaternion(_a),fn.copy(kn).addScaledVector(Ti,Math.max(120,Zi*3));else if(ke==="engine"){const Me=la?new qn().setFromObject(io):null,pe=Me?.getSize(new S),z=pe?Math.max(pe.x/(se*G*.68),pe.y/(se*.7))+pe.z*.4:10*ii.scale.x/(se*G*.78);Me?(fn.copy(Me.getCenter(new S)),fn.y-=pe.y*.13):fn.copy(ii.position);const le=z/Fl,j=Math.cos(fo)*le,me=pe?Math.sin(ca)*j:0,Ae=pe?Math.sin(fo)*le:.35,ut=pe?Math.cos(ca)*j:Math.sqrt(Math.max(.5,le*le-Ae*Ae));kn.set(fn.x+me,fn.y+Ae,fn.z+ut)}else if(ke==="slats")wf.copy(Ns),O.localToWorld(wf),bu.copy(Su),O.localToWorld(bu),fn.copy(bu),Af.set(4,11,Math.sign(Su.z||1)*13).applyQuaternion(Ke),kn.copy(fn).add(Af),fn.x+=Ds.x,fn.y+=Ds.y,kn.x+=Ds.x,kn.y+=Ds.y;else if(ke==="elevator")bf.copy(Tf),fn.copy(O.localToWorld(bf)),Ef.set(-zl*.04,zl*.05,zl*.9).applyQuaternion(O.quaternion),kn.copy(fn).add(Ef);else if(ke==="wing"){const Me=Ns.clone();Me.y=ye,O.localToWorld(Me),fn.copy(Me);const pe=Math.max(he,Zi*3),z=0,le=.14,j=z+yu,me=ee.clamp(le+Ol,-.35,.65),Ae=Math.cos(me)*pe;kn.set(fn.x+Math.sin(j)*Ae,fn.y+Math.sin(me)*pe,fn.z+Math.cos(j)*Ae)}else if(ke==="cruise"){const Me=ee.clamp(.15+(G-.46)*.2,.15,.35),pe=Zi*Me*Ai,z=O.position.x+pe,le=ye+O.position.y;fn.set(z,le,0),kn.set(z+5,le+1,he*1.25)}else if(ke==="turn"){const Me=Math.sin(hi),pe=Math.cos(hi);Xl.set(Fi.x+ui*Me*Dr,Fi.y+ye-3,Fi.z+ui*pe*Dr),ln.position.copy(Xl),ln.rotation.y=0,fn.copy(Xl);const z=new S(-he*.5,he*.4,he*.35);z.multiplyScalar(.95),kn.copy(Xl).add(z)}else if(ke==="aoa"){fn.set(0,-1,0);const pe=Math.min(Zi*.18,10)/(se*G*.58),z=19/se,le=Math.max(pe,z);kn.set(0,fn.y+.6,le)}else if(ke==="landing"){const Me=O.position.x+Zi*.18,pe=O.position.y+ye-1.5;fn.set(Me,pe,0),kn.set(Me-he*.82,pe+he*.28,he*.22)}else if(ke==="takeoff"){const Me=O.position.x+Zi*.2,pe=O.position.y+ye-1.5;fn.set(Me,pe,0),kn.set(Me+he*.08,pe+he*.12,he)}else fn.set(O.position.x,ye+O.position.y-.2,0),kn.set(O.position.x+he*.08,ye+O.position.y+he*.12,he);Jt==="instruction"&&ke!=="engine"&&ke!=="wing"&&ke!=="slats"&&(Hl.subVectors(kn,fn),pa.setFromVector3(Hl),pa.theta+=po,pa.phi=ee.clamp(pa.phi-mo,.08,Math.PI-.08),Hl.setFromSpherical(pa),kn.copy(fn).add(Hl))}function Hf(){return Jt!=="play"||(xi=!xi,Pu(),D.setAttribute("aria-pressed",String(xi)),D.textContent=xi?"追尾視角":"駕駛艙視角",ri()),xi}function Pu(){for(const b of qi)b.visible=!xi}D.addEventListener("click",Hf);function Q0(b,G={}){const se=ke;se==="slats"&&b!=="slats"&&(O.quaternion.copy(Ke),ua=0),ke=b,Jt=G.mode||Jt,J0(Jt==="play"?eE:j1,Jt),u.domElement.setAttribute("aria-label",b==="wing"?"機翼與氣流近景；拖曳可旋轉視角，按 Q 返回":b==="elevator"?"升降舵近景固定視角；使用課程按鈕切換狀態":b==="slats"?"前緣縫翼近景；拖曳可有限度調整取景，使用課程按鈕切換狀態":"互動式 3D 模型；拖曳可旋轉各課程的飛機或模型視角"),Jt==="instruction"&&se!==b&&(b==="idle"||b==="taxi"?$i=0:b==="takeoff"||b==="landing"?$i=Math.max($i,2):b==="turn"&&($i=0),["idle","taxi","takeoff","landing"].includes(b)?ro=0:(b==="cruise"||b==="flight")&&(ro=1)),b==="wing"&&se!=="wing"&&(yu=0,Ol=0),b==="slats"&&se!=="slats"&&(Tl=0,Cr=0,po=0,mo=0,Ds.set(0,0),Ke.copy(O.quaternion),ua=0),b==="elevator"&&se!=="elevator"&&(wl=0,po=0,mo=0),kf(Jt),e.fog=Jt==="play"?F:null,e.background=Jt==="play"?o:new Te(wm),Ei.hidden=Jt!=="play",M.hidden=Jt!=="play",D.hidden=Jt!=="play",Jt!=="play"&&(xi=!1,Pu()),D.setAttribute("aria-pressed",String(xi)),D.textContent=xi?"追尾視角":"駕駛艙視角",Jt!=="play"&&(Q.hidden=!0),Jt!=="play"&&(c=l),Number.isFinite(G.throttle)&&(df=G.throttle),Number.isFinite(G.bank)&&G.bank,Number.isFinite(G.altitude)&&G.altitude,vf=G.onLandingUpdate||null,yf=G.onCruiseUpdate||null,Mf=G.onTurnUpdate||null,Number.isFinite(G.turnBank)&&(ur=ee.clamp(G.turnBank,0,30)),Number.isFinite(G.turnDirection)&&(ui=Math.sign(G.turnDirection)||1),b==="takeoff"&&se!=="takeoff"&&(yi=0,O.position.set(0,vi,0),O.rotation.set(0,0,0)),zf(),b==="cruise"&&se!=="cruise"&&(Ai=0,Wl.copy(O.position),wu.copy(O.quaternion),Df.identity(),O.scale.setScalar(1),Ls.scale.setScalar(.02)),b==="landing"&&se!=="landing"&&(En=0,Qi.copy(O.position),Au.copy(O.rotation),Qi.y<=vi+1&&(Qi.y=vi+8),gu=Qi.x+48),b==="idle"&&(O.position.set(0,vi,0),O.rotation.set(0,0,0));const he=b==="engine",ye=b==="wing",Me=b==="slats",pe=b==="aoa",z=b==="cruise",le=b==="turn";ln.visible=le,Jt==="instruction"&&se!==b&&(po=0,mo=0),le&&se!=="turn"&&(Di=0,Ur=!1,hr=1/0,ps=!1,fs=O.rotation.y,hi=fs,Fi.copy(O.position),se!=="cruise"&&(fs=0,hi=0,Fi.set(0,vi+12,0),O.position.copy(Fi),O.rotation.set(0,0,0))),he&&(sr=!1,Ki&&(Ki.visible=!1),ca=0,fo=.28,Fl=1.35,Ul=performance.now()),O.visible=!pe&&!he,kt.visible=Jt==="play"&&b==="flight",no.visible=pe,ir.visible=pe&&Mu,Ls.visible=z,Ls.position.copy(O.position),he&&(Of(),q0()),ii.visible=he&&fa,io.visible=he&&la,f.visible=he,g.visible=he,v.visible=!ye&&!Me&&!he&&!pe&&!le,v.scale.setScalar(Jt==="play"?cn:1),v.position.set(0,0,0),b==="landing"&&se!=="landing"&&v.scale.setScalar(.02),v.rotation.y=Jt==="play"?ne:0,wi.visible=!1,Cu(),Rr.visible=he&&fa&&!la,W.visible=b==="flight",b==="flight"&&se!=="flight"?(O.scale.setScalar(Uo*cn),et.scale.set(1,1,1),Iu()):b!=="flight"&&(O.scale.setScalar(1),et.scale.set(1,1,1)),ri()}const _o=new Et;_o.visible=!1,e.add(_o);const Lu=[],j0=new Xr(.5*cn,8,6);for(let b=0;b<42;b+=1){const G=new Tn({color:b%3?16734758:16762726,transparent:!0}),se=new at(j0,G);_o.add(se),Lu.push({mesh:se,velocity:new S})}function dr(b="飛行碰撞"){if(!rr){rr=!0,_f=performance.now(),$.textContent=b,Q.hidden=!1,_o.position.copy(O.position),_o.visible=!0,O.visible=!1;for(const G of Lu)G.mesh.position.set(0,0,0),G.mesh.material.opacity=1,G.mesh.scale.setScalar(1),G.velocity.set((Math.random()-.5)*30*cn,(Math.random()*22+4)*cn,(Math.random()-.5)*30*cn)}}function Iu(){rr=!1,_o.visible=!1,Q.hidden=!0,O.visible=!0,O.scale.setScalar(Uo*cn),et.scale.set(1,1,1),O.position.set(0,so*cn,0),O.rotation.set(0,0,0),In=0,Nn=0,Bn=0,Un=ne,Ri=0,Ji=0,Cn=0,uo=!1,ho=!1,ha=!1,lr=0,lo=0,Ll=0,xu=0,Ir=null,Il=0,Nl=!1,K.textContent="00",Ei.querySelector("#race-gate-missed").textContent="00",Ei.querySelector("#race-timer").textContent="00:00.00";for(const b of Yn)b.scored=!1,b.missed=!1;Gf()}Q.querySelector("#crash-restart").addEventListener("click",Iu);function Gf(){M.querySelector('[data-play-value="altitude"]').textContent=Math.round(Nn*3.28084).toLocaleString(),M.querySelector('[data-play-value="speed"]').textContent=String(Math.round(Cn)),M.querySelector('[data-play-value="heading"]').textContent=String(Math.round(ee.euclideanModulo(ee.radToDeg(Un),360))).padStart(3,"0"),M.querySelector('[data-play-value="pitch"]').textContent=String(Math.round(ee.radToDeg(Ri))),M.querySelector('[data-play-value="bank"]').textContent=String(Math.round(ee.radToDeg(Ji))),M.querySelector(".play-assist-badge").hidden=co!=="easy"}function eg(b,G){if(document.body.classList.contains("paused"))return;const se=window.playInput||{pitch:0,roll:0,throttle:0};if(rr){const z=(G-_f)/1e3;for(const le of Lu)le.mesh.position.addScaledVector(le.velocity,b),le.velocity.y-=22*cn*b,le.mesh.material.opacity=Math.max(0,1-z/3.2),le.mesh.scale.setScalar(1+z*1.8);return z>3.2,void 0}Ui.set(In,Nn,Bn),Us.set(In-Ge,0,Bn-Ie);const he=Us.dot(J),ye=Us.dot(Ru),Me=Math.hypot(Math.max(Math.abs(he)-qs/2,0),Math.max(Math.abs(ye)-vr/2,0));if(!uo&&Nl&&!ho&&!ha&&Me<=nE&&(ho=!0),ha){const j=Yn[Yn.length-1];if(lr=Math.min(2.75,lr+b),lr<=2.2){const me=lr/2.2;In=ee.lerp(Bl.x,cr.x,me),Nn=ee.lerp(Bl.y,cr.y,me),Bn=ee.lerp(Bl.z,cr.z,me)}else{const me=(lr-2.2)/.5499999999999998;In=ee.lerp(cr.x,da.x,me),Nn=ee.lerp(cr.y,da.y,me),Bn=ee.lerp(cr.z,da.z,me)}Un=Math.atan2(-j.direction.z,j.direction.x),Ri=0,Ji=0,O.position.set(In*cn,(so+Nn)*cn,Bn*cn),O.quaternion.copy(xa.setFromAxisAngle(go,Un)),lr>=2.75&&(ha=!1,ho=!0)}else if(uo){const z=se.throttle||0;Ri=0,Ji=0,Cn=z>0?Math.min(55,Cn+z*24*b):Math.max(0,Cn-34*b),In+=Math.cos(Un)*Cn*b,Bn-=Math.sin(Un)*Cn*b,O.position.set(In*cn,so*cn,Bn*cn),O.rotation.y=Un,O.rotation.x=0,O.rotation.z=0}else if(ho){const z=ee.clamp(he,-qs/2+180,qs/2-180),le=Ge+J.x*z,j=Ie+J.z*z,me=le-In,Ae=j-Bn,Ft=Math.hypot(me,Ae)>80?Math.atan2(-Ae,me):Math.atan2(-J.z,J.x),bt=ee.euclideanModulo(Ft-Un+Math.PI,Math.PI*2)-Math.PI,Pt=ee.clamp(bt,-.65*b,.65*b);Un+=Pt,Ji=ee.clamp(-Pt/Math.max(b,.001)/.95,-.32,.32),Cn+=ee.clamp(tE-Cn,-24*b,24*b),In+=Math.cos(Un)*Cn*b,Bn-=Math.sin(Un)*Cn*b,Us.set(In-Ge,0,Bn-Ie);const vt=Us.dot(J),mt=Us.dot(Ru),Wt=Math.abs(vt)<qs/2-20&&Math.abs(mt)<vr/2-10,nn=Math.min(18,Math.max(5,Nn*.2));Nn=Math.max(Wt?0:4,Nn-nn*b),Wt&&Nn<=.02?(uo=!0,ho=!1,Ri=0,Ji=0):Ri=Wt?-.04:-.1,O.position.set(In*cn,(so+Nn)*cn,Bn*cn),O.quaternion.copy(xa.setFromAxisAngle(go,Un)),O.quaternion.multiply(Pf.setFromAxisAngle(Gl,Ri)),O.quaternion.multiply(Eu.setFromAxisAngle(Vl,Ji))}else{const z=se.pitch||0,le=se.roll||0,j=se.throttle||0,me=co==="easy"?250:Cm;Cn=ee.clamp(Cn+j*20*b-4.5*b,0,me),j===0&&(Cn=Math.max(0,Cn-8*b)),Un-=Math.sin(Ji)*.95*b,In+=Math.cos(Un)*Cn*b,Bn-=Math.sin(Un)*Cn*b;const Ae=Nn<=.02,ut=Nn<18&&Cn>=Am,Ft=ee.clamp((Cn-Am)/45,0,1),bt=Ae||ut?(.075+Math.max(0,z)*.03)*Ft:z*.3,Pt=le*.72,vt=Ae?.8:ut?1.2:3.5;if(Ri+=(bt-Ri)*(1-Math.exp(-b*vt)),Ji+=(Pt-Ji)*(1-Math.exp(-b*4)),Ae&&(Ri=Math.max(0,Ri)),Nn=ee.clamp(Nn+Math.sin(Ri)*Cn*b,0,420),O.position.set(In*cn,(so+Nn)*cn,Bn*cn),O.quaternion.copy(xa.setFromAxisAngle(go,Un)),O.quaternion.multiply(Pf.setFromAxisAngle(Gl,Ri)),O.quaternion.multiply(Eu.setFromAxisAngle(Vl,Ji)),Nn<=-1.5&&dr("飛行高度過低"),Nn<=.02){Us.set(In-Ge,0,Bn-Ie);const Rt=Us.dot(J),Ot=Us.dot(Ru),pn=Math.abs(Rt)<qs/2&&Math.abs(Ot)<vr/2,ht=Math.abs(Rt)<qs/2+400&&Math.abs(Ot)<vr/2+400,pt=In*Math.cos(ne)-Bn*Math.sin(ne),Yt=In*Math.sin(ne)+Bn*Math.cos(ne),Lt=Math.abs(pt)<Th/2&&Math.abs(Yt)<wh/2,Oe=In>=be.position.x-sn/2&&In<=be.position.x+sn/2&&Math.abs(Bn)<=At/2;pn?Cn<=170?uo=!0:dr("接地速度過高"):ht?dr("未對準跑道"):Oe&&!Lt?dr("撞上海面"):Lt||dr("未對準跑道")}const mt=In-Ui.x,Wt=Nn-Ui.y,nn=Bn-Ui.z,Qt=Math.max(1,Math.ceil(Math.hypot(mt,Wt,nn)/4));for(const Rt of gt){for(let Ot=0;Ot<=Qt;Ot+=1){const pn=Ot/Qt,ht=Ui.x+mt*pn,pt=Ui.y+Wt*pn,Yt=Ui.z+nn*pn,Lt=ht-Rt.x,Oe=Yt-Rt.z,Le=ee.clamp((pt-ra+3)/Rt.h,0,1),Ze=Rt.r*(1-Le*(Rt.roundedCrown?.46:1));if(Lt*Lt+Oe*Oe<(Ze+du)**2&&pt<Rt.h-3+ra){dr("撞上山體");break}}if(rr)break}if(rr)return;for(let Rt=0;Rt<=Qt;Rt+=1){const Ot=Rt/Qt,pn=Ui.x+mt*Ot,ht=Ui.y+Wt*Ot,pt=Ui.z+nn*Ot,Yt=ee.clamp(pn/te,0,1),Lt=q.getPointAt(Yt),Oe=q.getTangentAt(Yt).setY(0).normalize(),Le=new S(-Oe.z,0,Oe.x),Ze=(pn-Lt.x)*Le.x+(pt-Lt.z)*Le.z;let je=0;for(let $e=-1;$e<=1;$e+=1){const ge=Ze+$e*du,Je=ge<0?-1:1,Ve=Math.abs(ge),Be=Ut(Ve,105,520,250,Yt,Je<0?.2:1.7),we=Ut(Ve,500,1450,480,Yt,Je<0?2.6:4.1);je=Math.max(je,Be,we)}if(ht+ra<je-3){dr("撞上峽谷岩壁");break}}if(rr||(In>te+450&&!uo&&dr("飛出航線"),rr))return}for(const z of Yn){if(z.scored||z.missed)continue;Fr.copy(Ui).sub(z.position);const le=Fr.dot(z.direction);Tu.set(In,Nn,Bn),Fr.copy(Tu).sub(z.position);const j=Fr.dot(z.direction);if(le*j<=0&&le!==j){Ir===null&&(Ir=G);const me=le/(le-j);Fr.copy(Ui).lerp(Tu,me).sub(z.position),If.set(-z.direction.z,0,z.direction.x).normalize();const Ae=Math.abs(Fr.dot(If)),ut=z.radius*(co==="easy"?1.14:1);if(Math.hypot(Ae,Fr.y)<=ut){if(z.scored=!0,Ll+=1,K.textContent=String(Ll).padStart(2,"0"),z.finish&&Ir!==null)Il=G-Ir,Nl=!0;else if(Ll>=Yn.length-1){const Ft=Yn[Yn.length-1];Bl.set(In,Nn,Bn),cr.copy(Ft.position).addScaledVector(Ft.direction,-14),cr.y=0,da.copy(Ft.position).addScaledVector(Ft.direction,18),da.y=0,lr=0,ha=!0}}else z.missed=!0,xu+=1,Ei.querySelector("#race-gate-missed").textContent=String(xu).padStart(2,"0");for(;lo<Yn.length&&(Yn[lo].scored||Yn[lo].missed);)lo+=1}}if(xi)ri();else{const z=Math.max(s.clientWidth/Math.max(s.clientHeight,1),.2),le=ee.clamp(1/Math.max(z,.55),1,1.8);if(ma.set(-52*cn*le,22*cn*le,0),ga.set(24*cn*le,5*cn*le,0),O.updateMatrixWorld(),O.getWorldQuaternion(_a),Nn<20){const j=Math.cos(Un)*ma.x,me=-Math.sin(Un)*ma.x;kn.set(O.position.x+j,O.position.y+ma.y,O.position.z+me),fn.set(O.position.x+Math.cos(Un)*ga.x,O.position.y+ga.y,O.position.z-Math.sin(Un)*ga.x)}else kn.copy(ma).applyQuaternion(xa.setFromAxisAngle(go,Un)).add(O.position),fn.copy(ga).applyQuaternion(xa.setFromAxisAngle(go,Un)).add(O.position)}const pe=co==="easy"?250:Cm;c=l+ee.clamp(Cn/pe,0,1)*13,Gf()}function tg(b,G){Ir!==null&&!Nl&&(Il=G-Ir);const se=Math.floor(Il/10),he=Math.floor(se/6e3),ye=Math.floor(se/100)%60,Me=se%100;Ei.querySelector("#race-timer").textContent=`${String(he).padStart(2,"0")}:${String(ye).padStart(2,"0")}.${String(Me).padStart(2,"0")}`;for(let z=0;z<Yn.length;z+=1){const le=eo.children[z],j=z===lo,me=Yn[z].scored,Ae=Yn[z].missed,ut=le.children[0],Ft=le.children[1],bt=.82+Math.sin(G*.004+z*.7)*.18;ut.material.color.setHex(me?6940314:Ae?15297385:j?Yn[z].finish?16764786:16756034:6721440),ut.material.opacity=(j?1:.42)*bt,Ft.material.color.setHex(me?12906706:Ae?16105657:j?Yn[z].finish?16777215:16773572:12704736),Ft.material.opacity=(j?1:.62)*bt}const pe=ee.clamp((Cn-35)/145,0,.62);Cs.hidden=Jt!=="play"||pe<.02,Cs.style.setProperty("--streak-opacity",pe.toFixed(2)),Cs.style.animationDuration=`${Math.max(.25,1.5-Cn/250)}s`}function ql(){const b=Math.max(s.clientWidth,1),G=Math.max(s.clientHeight,1);a.aspect=b/G,a.updateProjectionMatrix(),u.setSize(b,G,!1),ri()}const Vf=new ResizeObserver(ql);Vf.observe(s),window.addEventListener("resize",ql),ql(),u.domElement.addEventListener("pointerdown",b=>{if(ke==="engine")or={id:b.pointerId,x:b.clientX,y:b.clientY};else if(ke==="wing")ar={id:b.pointerId,x:b.clientX,y:b.clientY};else if(Jt==="instruction"&&ke!=="elevator")Ni={id:b.pointerId,x:b.clientX,y:b.clientY};else return;b.preventDefault(),u.domElement.setPointerCapture(b.pointerId),u.domElement.focus({preventScroll:!0}),u.domElement.classList.add("is-dragging")}),u.domElement.addEventListener("pointermove",b=>{if(or?.id===b.pointerId)ca-=(b.clientX-or.x)*.006,fo=ee.clamp(fo+(b.clientY-or.y)*.006,-1.25,1.25),or.x=b.clientX,or.y=b.clientY;else if(ar?.id===b.pointerId)yu-=(b.clientX-ar.x)*.006,Ol=ee.clamp(Ol+(b.clientY-ar.y)*.006,-.8,.95),ar.x=b.clientX,ar.y=b.clientY;else if(Ni?.id===b.pointerId){const G=ke==="elevator";if(ke==="slats"){Ds.x=ee.clamp(Ds.x-(b.clientX-Ni.x)*.05,-2.4,2.4),Ds.y=ee.clamp(Ds.y+(b.clientY-Ni.y)*.05,-1.5,1.5),Ni.x=b.clientX,Ni.y=b.clientY,ri();return}po=ee.clamp(po-(b.clientX-Ni.x)*.006,G?-.55:-1/0,G?.55:1/0),mo=ee.clamp(mo+(b.clientY-Ni.y)*.006,G?-.35:-1.1,G?.35:1.1),Ni.x=b.clientX,Ni.y=b.clientY}else return;ri()});const Nu=b=>{or?.id===b.pointerId&&(or=null),ar?.id===b.pointerId&&(ar=null),Ni?.id===b.pointerId&&(Ni=null),u.domElement.classList.remove("is-dragging"),u.domElement.hasPointerCapture(b.pointerId)&&u.domElement.releasePointerCapture(b.pointerId)};u.domElement.addEventListener("pointerup",Nu),u.domElement.addEventListener("pointercancel",Nu),u.domElement.addEventListener("lostpointercapture",Nu),u.domElement.addEventListener("wheel",b=>{ke==="engine"&&(b.preventDefault(),Fl=ee.clamp(Fl*Math.exp(-b.deltaY*.001),.68,1.65),ri())},{passive:!1});function ng(b){if(Jt!=="instruction")return;const G=ke==="takeoff"&&yi<1||ke==="cruise"&&Ai<1||ke==="landing"&&En<1||ke==="turn",se=ke==="taxi"||ke==="landing"&&En>=.9,he=ke==="turn"?ui*ee.clamp(ur/30,0,1):0,ye=ke==="turn"?ui*ee.clamp(ur/30,0,1)*.45:vn.rudder,Me=ke==="elevator"?wl:ke==="takeoff"?ee.smoothstep(yi,.44,.62)*.9:ke==="landing"?ee.smoothstep(En,.68,.83)*.85:0,pe=ke==="turn"?-ui*ee.smoothstep(0,.55,Di):0,z=ee.clamp(4+vn.pitch*9,-8,28),le=ke==="takeoff"?40+90*yi:ke==="landing"?112-42*En:ke==="taxi"?18:ke==="turn"?86:100,j=(le/90)**2,me=ke==="landing"||ke==="takeoff"?$i/2:0;ke==="taxi"||ke==="idle"||ke==="landing"?ro=0:ke==="takeoff"?ro=ee.clamp((yi-.68)/.22,0,1):(ke==="cruise"||ke==="flight"||ke==="turn")&&(ro=1),Nt.gear=ee.damp(Nt.gear,ro,4.2,b);const Ae=ke==="takeoff"?ee.smoothstep(yi,.04,.28):0,ut=ke==="landing"?ee.smoothstep(En,.1,.36):0,Ft=Math.max(ke==="slats"?Tl:Math.max(Ae,ut,["takeoff","landing"].includes(ke)?ee.clamp((z-9)/8,0,1):0)),bt=ke==="landing"?Math.max(vn.spoilers?1:0,En>=.93?ee.clamp((En-.93)/.07,0,1):0):0,Pt=se&&vn.reverser?1:0,vt=ee.damp(Nt.slat,Ft,4,b),mt=ee.damp(Nt.spoiler,bt,5,b),Wt=15+vt*7,nn=ee.clamp((z-Wt)/12,0,1)*.65,Qt=Math.max(.08,.78+z*.025+me*.2+vt*.1);fu=ee.clamp(j*Qt/.78*(1-nn)*(1-mt*.78),0,2),pu=j*(.018+me*.028+mt*.22+Math.abs(Al)*.035+Pt*.18);const Rt=he*Math.abs(he)*j*.11,Ot=ye*ee.clamp(le/90,.2,1.4)*.24;Al=ee.clamp(Al+(Rt-Ot-Al*1.8)*b,-.8,.8);const pn={aileron:pe,inboardFlapLeft:me,inboardFlapRight:me,outboardFlap:me,slat:vt,spoiler:mt,reverser:Pt};for(const[Le,Ze]of Object.entries(pn)){const je=ke==="turn"&&["inboardFlapLeft","inboardFlapRight","outboardFlap","slat"].includes(Le);Nt[Le]=je?0:ee.damp(Nt[Le],Ze,7,b)}Nt.elevator=ee.damp(Nt.elevator,Me,7,b);for(const Le of _n)Le.value=Nt.elevator;Nt.rudder=ee.damp(Nt.rudder,ye,7,b);for(const Le of Kn)Le.value=Nt.rudder;Cu();const ht=(Le,Ze,je=!1)=>{for(const $e of Le){const ge=je?$e.side:1,Je=ee.clamp(Ze*ge,-1,1);$e.object.position.copy($e.restPosition).lerp($e.targetPosition,Je);const Ve=$e.restRotation.clone().invert().multiply($e.targetRotation);if(je){Ve.w<0&&Ve.set(-Ve.x,-Ve.y,-Ve.z,-Ve.w);const Be=new S(Ve.x,Ve.y,Ve.z).normalize(),we=2*Math.atan2(Math.hypot(Ve.x,Ve.y,Ve.z),Ve.w);Ve.setFromAxisAngle(Be,we*Je*2.2),$e.object.quaternion.copy($e.restRotation).multiply(Ve);continue}Je<0&&Ve.invert(),$e.object.quaternion.copy($e.restRotation).multiply(new Hn().slerp(Ve,Math.abs(Je)))}};ht(Vt.ailerons,Nt.aileron,!0),ht(Vt.inboardFlapsLeft,Nt.inboardFlapLeft),ht(Vt.inboardFlapsRight,Nt.inboardFlapRight),ht(Vt.outboardFlaps,Nt.outboardFlap),ht(Vt.slats,Nt.slat),ht(Vt.spoilers,Nt.spoiler);const pt=ke==="taxi"||ke==="takeoff"&&yi<.68||ke==="landing"&&En>=.93,Yt=ke==="landing"?1-ee.smoothstep(En,.93,1):1;mu=(mu+b*(pt?7.5*Rl*Yt:0))%(Math.PI*2);for(const{object:Le,downPose:Ze,upPose:je}of Vt.gear){const $e=Nt.gear;if(Le.position.lerpVectors(Ze.position,je.position,$e),Le.quaternion.copy(Ze.quaternion).slerp(je.quaternion,$e),/^(WheelmainTurn|NoseWheelTurn)/.test(Le.name)&&!Le.name.includes("_end_")){const ge=Le.name.startsWith("NoseWheelTurn")?1:-1;Le.quaternion.multiply(X0.setFromAxisAngle(W0,ge*mu))}Le.scale.lerpVectors(Ze.scale,je.scale,$e)}const Lt=vn.roll*.42,Oe=vn.pitch*.16;oa+=(Lt-oo-oa*.8)*2.4*b,aa+=(Oe-ao-aa*.8)*2.8*b,oo=ee.clamp(oo+oa*b,-.55,.55),ao=ee.clamp(ao+aa*b,-.24,.24),G?(Lr+=(fu-1)*.65*b,Lr-=Pr*.9*b,Lr=ee.clamp(Lr,-2.2,2.2),Pr=ee.clamp(Pr+Lr*b,-1.2,1.2),ke==="turn"?O.position.y=Fi.y+Pr:O.position.y+=Pr,O.quaternion.multiply(Lf.setFromAxisAngle(Gl,ao)),O.quaternion.multiply(Lf.setFromAxisAngle(Vl,oo))):(Lr=ee.damp(Lr,0,1.8,b),Pr=ee.damp(Pr,0,1.8,b),oo=ee.damp(oo,0,3,b),ao=ee.damp(ao,0,3,b),oa=ee.damp(oa,0,3,b),aa=ee.damp(aa,0,3,b)),Rl=ee.damp(Rl,se&&Pt?.15:1,1.5,b)}let Wf=performance.now();function ig(b){if(Sf)return;const G=Math.min((b-Wf)/1e3,.05);Wf=b;const se=Jt==="instruction"?vu?0:G*gf:G;if(["taxi","landing","takeoff"].includes(ke)||Jt==="play"){const z=["taxi","landing","takeoff"].includes(ke)?72:2+df*.12;_u+=se*z*(Jt==="instruction"?Rl:1),U.position.x=-(_u%11)}if(ke==="engine"&&fa&&(Dl=Math.min(1,Dl+se/1.35),Dl>.72&&(O.visible=!1)),ke==="turn"){ps||(Di+=se),Ur&&Di>=hr&&(Di=hr,ps=!0);const j=ee.clamp(Di/2,0,1),me=ee.clamp((Di-2)/1.3,0,1),Ae=pt=>pt*pt*(3-2*pt),ut=ur*Ae(j),Ft=ee.degToRad(ut),bt=!ps&&Ft>0?9.81*Math.tan(Ft)/72*Ae(me)*2.4:0,Pt=!ps&&j<1?ui*Ft*.12*(1-me):0,vt=Nt.rudder*.16;fs-=(ui*bt+Pt-vt)*se;const mt=Math.max(0,-ui*(fs-hi)),Wt=Math.cos(hi),nn=-Math.sin(hi),Qt=Math.sin(hi),Rt=Math.cos(hi),Ot=Dr*Math.sin(mt),pn=ui*Dr*(1-Math.cos(mt));O.position.x=Fi.x+Wt*Ot+Qt*pn,O.position.z=Fi.z+nn*Ot+Rt*pn,O.quaternion.setFromAxisAngle(go,fs).multiply(Eu.setFromAxisAngle(Vl,ui*Ft)),mn.visible=ut>.05,ri();const ht=Ur&&ps?hr<=2?"bank":"lift":j<1?"bank":me<1?"lift":"heading";Mf?.({bank:ut,direction:ui,heading:ee.euclideanModulo(ee.radToDeg(hi+ui*Math.abs(fs-hi)),360),rate:ee.radToDeg(bt),phase:ht})}else if(ke==="cruise"&&Ai<1){Ai=Math.min(1,Ai+se/4);const z=Ai*Ai*(3-2*Ai);Nf.set(Wl.x+6,vi+12,0),O.position.lerpVectors(Wl,Nf,z),O.quaternion.copy(wu).slerp(Df,z),Ls.position.copy(O.position),Ls.scale.setScalar(Math.max(.02,z)),yf?.({progress:Ai});const le=1-Math.pow(ee.clamp(Ai/.4,0,1),2)*(3-2*ee.clamp(Ai/.4,0,1));v.scale.setScalar(le),v.visible=le>.01,ri()}else if(ke==="landing"&&En<1){const z=ee.clamp(1-pu*.15,.65,1);En=Math.min(1,En+se/7*z);const le=Ot=>Ot*Ot*(3-2*Ot),j=Ot=>ee.clamp(Ot,0,1),me=le(j(En/.92)),Ae=le(j((En-.1)/.26)),ut=le(j((En-.68)/.23)),Ft=le(j((En-.93)/.07)),bt=Math.round(62-le(j(En/.18))*40),Pt=Math.max(8,Qi.y-vi);O.position.set(Qi.x*(1-me)+gu*me,vi+Pt*(1-me),Qi.z*(1-me)),O.scale.setScalar(1);const vt=le(j(En/.2)),Wt=Au.z*(1-vt)+ee.degToRad(3)*vt+ee.degToRad(ut*3.5-Ft*6.5);O.rotation.set(0,0,Wt);const nn=Wt>=0?Cl:Pl;if(nn!==null){const Ot=nn*Math.sin(Wt)+mf*(Math.cos(Wt)-1);O.position.y-=Ot*me}const Qt=En<.1?"gear":En<.18?"throttle":En<.38?"flaps":En<.7?"glide":En<.93?"flare":"spoilers";vf?.({progress:En,phase:Qt,throttle:bt,flaps:Math.round(Ae*100),spoilers:Math.round(Ft*100),glideAngle:En>=.68?0:3});const Rt=ee.clamp(En/.12,0,1);v.scale.setScalar(Jt==="play"?cn*Rt:Rt),v.visible=Rt>.01,ri()}else if(ke==="takeoff"&&yi<1){const z=ee.clamp(.75+fu*.25-pu*.2,.55,1.2);yi=Math.min(1,yi+se/3.2*z);const le=yi*yi*(3-2*yi);O.position.set(le*9,vi+le*10,0),O.rotation.set(0,0,le*ee.degToRad(7)),ri()}else ke!=="takeoff"&&ke!=="engine"&&Jt==="play"&&eg(se,b);if(ng(se),Jt==="instruction"&&ke==="slats"){const z=Cr===2?ee.degToRad(14):0;ua=ee.damp(ua,z,3.5,se),O.quaternion.copy(Ke).multiply(He.setFromAxisAngle(Gl,ua)),ri()}for(const z of cu)z.group.rotation.x+=se*z.spin;for(const z of Is)if(z.group.rotation.z+=se*z.spin,z.hot){const le=z.heat*(.86+(.5+Math.sin(b/150+z.phase)*.5)*.28);for(const j of z.materials)j.emissiveIntensity=le}for(const z of of)z.group.rotation.z+=se*z.spin;for(const z of it){const le=.96+Math.sin(b/130+z.phase)*.04;z.flameRoot.visible=Jt==="play"&&ke==="flight"&&Cn>8,z.mesh.scale.set(.96,le,.96),z.mesh.material.opacity=.12*le}if(ke==="engine"&&la){const z=(b-Ul)/1e3;Ki&&(Ki.visible=sr);const le=Math.abs(Math.cos(ca))<.38&&Math.abs(fo)<.62;for(const j of cf){j.arrow.visible=!le;const me=(j.phase+z*j.speed)%1;j.arrow.position.set(j.x,j.y,j.startZ+(j.endZ-j.startZ)*me)}for(const j of af)j.visible=le;if(sr)for(const j of uf){const me=(j.phase+z*j.speed)%1;j.mesh.position.copy(j.curve.getPoint(me)),j.mesh.material.color.copy(uu(me))}for(const j of lf){const me=.85+Math.sin(z*12+j.phase)*.15;j.mesh.scale.set(.92+me*.18,.95+me*.25,.95+me*.25),j.mesh.material.uniforms.uTime.value=z,j.mesh.material.uniforms.uOpacity.value=.78+me*.16,j.core.scale.set(.9+me*.12,.92+me*.22,.92+me*.22),j.core.material.uniforms.uTime.value=z,j.core.material.uniforms.uOpacity.value=.74+me*.18}for(const j of Sl){const me=.84+Math.sin(z*18+j.phase)*.16,Ae=.94+me*.12;j.mesh.scale.set(Ae,.9+me*.24,Ae),j.mesh.material.uniforms.uTime.value=z,j.mesh.material.uniforms.uOpacity.value=j.baseOpacity*(.86+me*.14)}}Fs.flameMat.uniforms.uTime.value=b/1e3;const he=.88+Math.sin(b/96)*.12;if(Fs.flameMat.uniforms.uPower.value=he,yt.turbineHot.emissive.setRGB(.32*he,.07*he,.015*he),yt.diskHot.emissive.setRGB(.18*he,.04*he,.01*he),yt.combLiner.emissive.setRGB(.28*he,.045*he,.008*he),wi.visible){a.getWorldPosition(xl),O.worldToLocal(xl),to=Math.abs(xl.z)>.8?Math.sign(xl.z):0;for(const[le,j]of ds)j.visible=to===0||le===to}for(const z of bl){const le=((z.phase+b/1e3*z.speed)%1+1)%1;z.mesh.position.copy(z.curve.getPoint(le)),z.thermal&&z.mesh.material.color.copy(z.colorAtStation(z.mesh.position.x)).multiplyScalar(1.35)}for(const z of sf){const le=((z.phase+b/1e3*z.speed)%1+1)%1;z.mesh.position.copy(z.curve.getPoint(le))}for(let z=0;z<ia.length;z+=1)ia[z].dashOffset=-b*(z<2?45e-5:2e-4);const ye=ee.clamp((Mi-15)/10,0,1);Nr=ee.damp(Nr,ke==="aoa"&&Mi>=15?1:0,4.5,se),ir.position.y=-.5-Nr*(.3+ye*.8)+Math.sin(b/42)*.08*Nr,ir.rotation.set(Math.sin(b/55)*.09*Nr,0,ee.degToRad(Mi)-ee.degToRad(18+ye*12)*Nr+Math.sin(b/68)*.06*Nr);for(const z of hf){const le=b/1e3,j=.7+.3*Math.sin(le*19+z.userData.flicker),me=Math.sin(le*31+z.userData.flicker)*.055;z.scale.set(z.userData.baseScale*(.75+j*.62),.65+j*.62,.65+j*.62),z.position.y=me,z.position.z=me*.7,z.material.opacity=.48+j*.38}const Me=Jt==="play"&&xi?1:1-Math.exp(-se*5.5);a.position.lerp(kn,Me),kl.lerp(fn,Me);const pe=Jt==="play"&&xi?10:0;a.fov+=(c+pe-a.fov)*(1-Math.exp(-se*2.6)),a.updateProjectionMatrix(),O.getWorldQuaternion(_a),Cf.set(0,1,0).applyQuaternion(_a),Rf.set(0,1,0).lerp(Cf,Jt==="play"?.16:0).normalize(),a.up.lerp(Rf,Me).normalize(),a.lookAt(kl),tg(se,b),u.render(e,a)}return u.setAnimationLoop(ig),{setView:Q0,toggleCockpitView:Hf,setAngleOfAttack:Bf,setInstructionControls(b){for(const G of Object.keys(vn))vn[G]=ee.clamp(Number(b?.[G])||0,-1,1)},setSlatLessonDeployment(b){Cr=Math.round(ee.clamp(Number(b)||0,0,2)),Tl=Cr>0?1:0,Cu()},setElevatorLessonDeflection(b){wl=ee.clamp(Number(b)||0,-1,1)},cycleInstructionFlaps(){return $i=($i+1)%3,$i},setDifficulty(b){co=b==="easy"?"easy":"standard",M.querySelector(".play-assist-badge").hidden=co!=="easy"},setLessonPlayback({paused:b,rate:G}){vu=!!b,Number.isFinite(G)&&(gf=ee.clamp(G,.5,1.5))},replayLesson(b){vu=!1,b==="taxi"?(_u=0,O.position.set(0,vi,0),O.rotation.set(0,0,0)):b==="takeoff"?(yi=0,O.position.set(0,vi,0),O.rotation.set(0,0,0),v.visible=!0,v.scale.setScalar(1)):b==="cruise"?(Ai=0,Wl.copy(O.position),wu.identity(),O.quaternion.identity(),Ls.scale.setScalar(.02),v.visible=!0,v.scale.setScalar(1)):b==="landing"?(En=0,Qi.copy(O.position),Au.copy(O.rotation),Qi.y<=vi+1&&(Qi.y=vi+8),gu=Qi.x+48,v.scale.setScalar(.02),v.visible=!0):b==="turn"?this.replayTurnPhase("bank"):b==="slats"?(Tl=0,Cr=0):b==="elevator"?wl=0:b==="engine"&&(Dl=0,O.visible=!0,Ul=performance.now()),ri()},setTurnControls(b,G){const se=ee.clamp(Number(b)||0,0,30),he=Math.sign(Number(G))||1,ye=ke==="turn"&&(se!==ur||he!==ui);ur=se,ui=he,zf(),ye&&(fs=hi,O.position.copy(Fi),Di=0,ps=!1,Ur=!1,hr=1/0),ri()},replayTurnPhase(b){b==="bank"?(fs=hi,O.position.copy(Fi),O.rotation.set(0,hi,0),mn.visible=!1,Di=0,Ur=!0,hr=2,ps=!1):b==="lift"?(fs=hi,O.position.copy(Fi),mn.visible=ur>0,Di=2,Ur=!0,hr=3.29,ps=!1):(Ur=!1,hr=1/0,Di=Math.max(Di,3.3),ps=!1)},toggleEngineAirflow(){return sr=!sr,Ki&&(Ki.visible=sr),sr},restartPlay(){Iu(),c=l,a.fov=l,a.updateProjectionMatrix(),kn.set(-52*cn,15*cn,0),fn.set(24*cn,3*cn,0),a.position.copy(kn),kl.copy(fn),a.up.set(0,1,0),a.lookAt(kl)},dispose(){Sf=!0,u.setAnimationLoop(null),Vf.disconnect(),window.removeEventListener("resize",ql),El.dispose(),u.dispose(),s.replaceChildren()}}}const Ne=s=>document.querySelector(s),F0=Ne("#home-view"),il=Ne("#sim-view"),sE=Ne("#scene-root"),On=iE(sE),Ah=Ne("#instrument-panel"),O0=Ne("#lesson-rail"),Ic=Ne("#controls-help"),B0=Ne("#lesson-transport"),qc=Ne("#difficulty-picker"),Rh=Ne("#toast"),Zt={pitch:0,roll:0,throttle:0};window.playInput=Zt;const Ed={pitch:0,roll:0,rudder:0,spoilers:0,reverser:0};function k0(){Object.assign(Ed,{pitch:0,roll:0,rudder:0,spoilers:0,reverser:0}),On.setInstructionControls(Ed)}let ci="instruction",Tt="idle";const Yc=[];let sl=!1,Bi=62,Js=!1,ko=3200,z0=36,Nc=146,Pm=4,Ua=18,Dc=1,Td="standard",vs=!1,Ko=1,Lm,Kr="idle",wd=performance.now();const rE={idle:{title:"跑道已就緒。",label:"待命",caption:"按 1 開始滑行。",coords:"跑道 05L  ·  TPE",hint:"按 1 開始滑行"},taxi:{title:"跑道已就緒。",label:"01 / 滑行",caption:"滑行至起飛點，準備進入跑道。",coords:"跑道 05L  ·  TPE",hint:"下一階段  2  起飛"},takeoff:{title:"升力正在形成。",label:"02 / 起飛",caption:"起飛滑跑時起落架保持放下；升空後自動收起。襟翼與縫翼在低速時增加升力，左右副翼差動偏轉以控制滾轉。",coords:"爬升  ·  襟翼 15°",hint:"下一階段  3  平飛"},cruise:{title:"四力平衡，穩定平飛。",label:"03 / 平飛",caption:"定速平飛時，升力等於重力，推力等於阻力；高度與速度維持穩定。",coords:"升力 = 重力  ·  推力 = 阻力",hint:"下一階段  4  降落"},landing:{title:"進場與降落。",label:"04 / 降落",caption:"進場時放下起落架與襟翼，沿下滑道下降；機身俯仰呈現拉平動作，觸地後展開擾流板減速。副翼隨滾轉控制偏轉。",coords:"下滑道  ·  起落架 / 襟翼 / 擾流板",hint:"1  滑行  ·  3  平飛"},turn:{title:"坡度帶來轉彎。",label:"05 / 轉彎",caption:"轉彎時副翼一側上偏、另一側下偏，帶動機翼傾斜；升力的水平分量改變航向。",coords:"協調轉彎  ·  教學示意",hint:"調整坡度  ·  按 Q 返回"},engine:{title:"渦輪引擎的內部構造。",label:"引擎剖面",caption:"旁通氣流冷卻外壁，核心氣流穿越燃燒室。",coords:"渦輪風扇  ·  剖面",hint:"下一章  W  翼型氣流"},wing:{title:"氣流如何作用於機翼。",label:"翼型氣流",caption:"翼型壓力差、貼附氣流與下洗流共同改變飛行方向。",coords:"氣流  ·  壓力",hint:"下一章  A  迎角"},aoa:{title:"迎角改變升力。",label:"迎角",caption:"調整迎角，觀察升力增加，以及超過臨界角後氣流分離的失速現象。",coords:"迎角  ·  升力 / 失速",hint:"Q  返回  ·  1  重看"},slats:{title:"縫翼為氣流留出通道。",label:"前緣縫翼",caption:"縫翼放出後進入高迎角，觀察氣流如何經過狹縫並沿機翼上表面流動，延緩氣流分離。",coords:"機翼前緣  ·  高升力裝置",hint:"S  重看  ·  Q  返回"},elevator:{title:"升降舵控制俯仰。",label:"升降舵",caption:"尾翼升降舵上偏時，尾翼向下作用力增加，機頭抬起；下偏時則相反。",coords:"水平尾翼  ·  俯仰控制",hint:"V  重看  ·  Q  返回"},flight:{title:"現在由你駕駛。",label:"自由飛行",caption:"調整油門與姿態，維持穩定飛行。",coords:"飛行模擬  ·  即時",hint:"Esc  返回主選單"}};function tu(){if(ci==="play")Ah.innerHTML=`<div class="panel-kicker">飛行儀表</div><div class="instrument-title">即時飛行數據</div><div class="metric-grid"><div class="metric"><label>高度</label><strong>${Math.round(ko).toLocaleString()}<em>英尺</em></strong></div><div class="metric"><label>空速</label><strong>${Math.round(Nc)}<em>節</em></strong></div><div class="metric"><label>航向</label><strong>${String(Math.round(z0)).padStart(3,"0")}<em>°</em></strong></div><div class="metric"><label>垂直速度</label><strong>${Bi>45?"+":"−"}${Math.abs(Math.round((Bi-45)*28))}<em>英尺/分</em></strong></div></div><div class="control-group"><div class="control-heading"><label for="throttle">油門</label><output id="throttle-output">${Bi}%</output></div><input id="throttle" type="range" min="0" max="100" value="${Bi}" aria-label="油門"/><div class="control-row"><button class="small-control ${Js?"is-active":""}" id="pause-control">${Js?"▶ 繼續":"Ⅱ 暫停"}</button><button class="small-control" id="reset-control">↺ 重設</button></div></div><div class="key-hint"><span class="keycap">Shift</span>/<span class="keycap">Ctrl</span> 調整推力 · <span class="keycap">W</span>/<span class="keycap">S</span> 或 <span class="keycap">↑</span>/<span class="keycap">↓</span> 控制俯仰 · <span class="keycap">A</span>/<span class="keycap">D</span> 或 <span class="keycap">←</span>/<span class="keycap">→</span> 控制滾轉 · <span class="keycap">空白鍵</span> 重啟</div>`,Ne("#throttle").addEventListener("input",s=>{Bi=Number(s.target.value),Nc=Math.max(90,Math.min(320,100+Bi*1.05)),ko=Math.max(500,ko+(Bi-45)*5),Ne("#throttle-output").textContent=`${Bi}%`;const e=Ah.querySelectorAll(".metric strong");e[0].innerHTML=`${Math.round(ko).toLocaleString()}<em>英尺</em>`,e[1].innerHTML=`${Math.round(Nc)}<em>節</em>`,e[3].innerHTML=`${Bi>45?"+":"−"}${Math.abs(Math.round((Bi-45)*28))}<em>英尺/分</em>`,nu()}),Ne("#pause-control").addEventListener("click",uE),Ne("#reset-control").addEventListener("click",hE);else{const s={idle:["地面作業","跑道待命","按 <strong>1</strong> 開始滑行。"],taxi:["地面作業","飛行流程","<strong>1</strong>　滑行<br><strong>2</strong>　起飛<br><strong>3</strong>　平飛<br><strong>4</strong>　降落<br><strong>5</strong>　轉彎<br><strong>E / W / A / S / V</strong>　引擎、氣動與控制面教材"],takeoff:["起飛構型","襟翼展開・起落架收放","起飛滑跑時起落架保持放下；爬升後模型內建輪艙與起落架依序收起。襟翼／縫翼增加低速升力，左右副翼差動偏轉控制滾轉；抬輪時升降舵上偏，呈現機頭抬起的俯仰控制。"],cruise:["飛行原理 / 03","四力平衡","定速平飛時升力等於重力、推力等於阻力；四力互相抵銷，維持等高與等速。"],turn:["飛行原理 / 05","坡度轉彎",'兩側副翼反向偏轉（一側上、一側下），帶動飛機傾斜；升力向量的水平分量使航向改變。<ol class="turn-stages"><li data-turn-phase="bank"><svg viewBox="0 0 84 48" role="img" aria-label="左右副翼一側上偏一側下偏，機翼隨之傾斜"><path d="M42 7v32M18 24h48" stroke="#91a9b8" stroke-dasharray="3 3"/><path d="M23 34L59 14" stroke="#f5f8fa" stroke-width="4"/><path d="M42 24L58 8" stroke="#c6f4ff" stroke-width="2"/><path d="M55 9l4-2-1 5" fill="none" stroke="#c6f4ff" stroke-width="2"/><path d="M42 24v17" stroke="#ffd0ab" stroke-width="2"/></svg><span><b>01　傾斜與副翼</b><small>一側副翼上偏、另一側下偏，機翼開始傾斜。</small></span></li><li data-turn-phase="lift"><svg viewBox="0 0 84 48" role="img" aria-label="傾斜升力分解為向上分量和向內水平分量"><path d="M42 40V9M42 40H72" stroke="#8098a7" stroke-dasharray="3 3"/><path d="M42 40L68 12" stroke="#c6f4ff" stroke-width="2.5"/><path d="M42 40V12M42 40H67" stroke="#ffd0ab" stroke-width="1.7"/><path d="M64 13l5-3-1 6M64 37l5 3-5 2" fill="none" stroke="#ffd0ab" stroke-width="1.7"/><circle cx="42" cy="40" r="2.5" fill="#f5f8fa"/></svg><span><b>02　分解</b><small>垂直分量托住飛機；水平分量指向內側。</small></span></li><li data-turn-phase="heading"><svg viewBox="0 0 84 48" role="img" aria-label="向內的水平分力使飛機沿彎曲航跡改變航向"><path d="M18 36C25 13 54 8 68 22" fill="none" stroke="#ffd0ab" stroke-width="2" stroke-dasharray="4 3"/><path d="M64 14l5 8-9-1" fill="#ffd0ab"/><path d="M31 31l18-5 4 3-17 7-5 7-2-1 2-7-7 1-1-2z" fill="#f5f8fa"/><path d="M49 27L62 15" stroke="#ffd0ab" stroke-width="2"/><path d="M58 16l5-2-1 5" fill="none" stroke="#ffd0ab" stroke-width="2"/></svg><span><b>03　轉向</b><small>向內的力讓航跡彎曲，航向逐漸改變。</small></span></li></ol><div class="control-group"><div class="control-heading"><label for="turn-bank">坡度</label><output id="turn-bank-output">18°</output></div><input id="turn-bank" type="range" min="0" max="30" step="1" value="18" aria-label="轉彎坡度"/><div class="control-row"><button class="small-control" id="turn-left" type="button" aria-pressed="false">↶ 左轉</button><button class="small-control is-active" id="turn-right" type="button" aria-pressed="true">右轉 ↷</button></div><div class="metric-grid"><div class="metric"><label>航向</label><strong id="turn-heading">000<em>°</em></strong></div><div class="metric"><label>轉率</label><strong id="turn-rate">0.0<em>°/s</em></strong></div></div></div>'],landing:["進場 / 04","降落構型","進場開始放下主輪與前輪，再展開襟翼／縫翼；拉平時升降舵上偏，配合機身抬頭姿態。輪胎接觸跑道後擾流板展開，破壞升力並增加阻力。"],engine:["推進系統 / 01","雙轉軸渦輪風扇","風扇加速氣流；旁通氣流冷卻核心外壁，核心氣流則壓縮、燃燒並驅動共用轉軸上的渦輪。"],wing:["氣動原理 / 02","升力如何形成","氣流沿曲面貼附，翼面上下壓力差形成升力；向下偏轉的氣流帶來向上的反作用力。"],aoa:["迎角與失速","改變機翼弦線與相對風的夾角，迎角增加時升力上升；超過臨界迎角後，氣流分離、升力下降並進入失速。"],slats:["氣動原理 / 03","前緣縫翼",'縫翼放出後，翼前緣與縫翼之間形成狹縫；氣流經狹縫加速並吹向機翼上表面，幫助氣流在較高迎角時保持貼附。能延緩失速，但不能消除失速。<ol class="slat-stages"><li data-slat-phase="stowed" class="is-active"><span class="slat-diagram stowed" aria-hidden="true"><i></i><b></b></span><span><b>01　收起</b><small></small></span></li><li data-slat-phase="high-aoa"><span class="slat-diagram deployed airflow" aria-hidden="true"><i></i><b></b><em></em></span><span><b>02　高迎角</b><small>縫翼伸出形成狹縫，引導氣流貼附上表面，延後分離與失速。</small></span></li></ol>'],elevator:["飛行原理 / 06","升降舵與俯仰",'升降舵位於水平尾翼後緣，改變尾翼的氣動力矩，控制機頭俯仰。。<ol class="elevator-stages"><li data-elevator-phase="neutral" class="is-active" role="button" tabindex="0" aria-label="升降舵中立"><span class="elevator-diagram neutral" aria-hidden="true"><i></i><b></b></span><span><b>01　中立</b><small>平飛時保持基本姿態。</small></span></li><li data-elevator-phase="up" role="button" tabindex="0" aria-label="升降舵上偏，機頭抬起"><span class="elevator-diagram up" aria-hidden="true"><i></i><b></b></span><span><b>02　上偏・抬頭</b><small>起飛抬輪或降落拉平時使用。</small></span></li><li data-elevator-phase="down" role="button" tabindex="0" aria-label="升降舵下偏，機頭下壓"><span class="elevator-diagram down" aria-hidden="true"><i></i><b></b></span><span><b>03　下偏・低頭</b><small>尾翼力矩反向，機頭向下。</small></span></li></ol>']}[Tt],e=Tt==="wing"?"A":Tt==="aoa"?"Q":Tt==="engine"?"W":Tt==="turn"?"5":Tt==="slats"?"S":Tt==="elevator"?"V":Tt==="takeoff"?"E":"2",t=["aoa","turn","slats","elevator"].includes(Tt)?"返回課程":"下一章",n=s[0].replace(/^飛行原理\s*\/\s*/,"");if(Ah.innerHTML=`<div class="panel-kicker">${n}</div><div class="instrument-title">${s[1]}</div><div class="panel-separator"></div><div class="panel-note">${s[2]}</div><div class="key-hint"><span class="keycap">${e}</span> ${t}</div>`,Tt==="turn"){const i=Ne('[data-turn-phase="bank"] svg').querySelectorAll("path");i[1].setAttribute("d","M23 14L59 34"),i[2].setAttribute("d","M42 24L26 8"),i[3].setAttribute("d","M29 9l-4-2 1 5"),Ne('[data-turn-phase="lift"] small').textContent="向上分力平衡重量；向內分力提供向心力。",document.querySelectorAll("[data-turn-phase]").forEach(o=>{o.setAttribute("role","button"),o.setAttribute("tabindex","0"),o.setAttribute("aria-label",`${o.querySelector("b").textContent}，重新演示`);const a=()=>On.replayTurnPhase(o.dataset.turnPhase);o.addEventListener("click",a),o.addEventListener("keydown",l=>{l.key!=="Enter"&&l.key!==" "||(l.preventDefault(),a())})}),Ne("#turn-bank").addEventListener("input",o=>{Ua=Number(o.target.value),Ne("#turn-bank-output").textContent=`${Ua}°`,On.setTurnControls(Ua,Dc)});const r=o=>{Dc=o,Ne("#turn-left").classList.toggle("is-active",o<0),Ne("#turn-right").classList.toggle("is-active",o>0),Ne("#turn-left").setAttribute("aria-pressed",String(o<0)),Ne("#turn-right").setAttribute("aria-pressed",String(o>0)),Ne(".turn-stages").classList.toggle("is-left-turn",o<0),On.setTurnControls(Ua,Dc)};Ne("#turn-left").addEventListener("click",()=>r(-1)),Ne("#turn-right").addEventListener("click",()=>r(1))}if(Tt==="slats"&&document.querySelectorAll("[data-slat-phase]").forEach(i=>{const r=()=>{const a=i.dataset.slatPhase==="stowed"?0:i.dataset.slatPhase==="high-aoa"?2:1;On.setSlatLessonDeployment(a),document.querySelectorAll("[data-slat-phase]").forEach(l=>{const c=l===i;l.classList.toggle("is-active",c),l.setAttribute("aria-pressed",String(c))})},o=i.querySelector("span:last-child b").textContent;i.setAttribute("role","button"),i.setAttribute("tabindex","0"),i.setAttribute("aria-label",`${o}，顯示縫翼狀態`),i.setAttribute("aria-pressed",String(i.classList.contains("is-active"))),i.addEventListener("click",r),i.addEventListener("keydown",a=>{a.key!=="Enter"&&a.key!==" "||(a.preventDefault(),r())})}),Tt==="elevator"){const i={neutral:0,up:1,down:-1},r=o=>{document.querySelectorAll("[data-elevator-phase]").forEach(a=>{const l=a===o;a.classList.toggle("is-active",l),a.setAttribute("aria-pressed",String(l))}),On.setElevatorLessonDeflection(i[o.dataset.elevatorPhase])};document.querySelectorAll("[data-elevator-phase]").forEach(o=>{o.setAttribute("aria-pressed",String(o.classList.contains("is-active"))),o.addEventListener("click",()=>r(o)),o.addEventListener("keydown",a=>{a.key!=="Enter"&&a.key!==" "||(a.preventDefault(),r(o))})})}}}function oE(s){const e=Ne("#cruise-panel"),t=s.progress>=1;e.classList.toggle("is-revealed",t),e.setAttribute("aria-hidden",String(!t))}function aE(s){const e=["gear","throttle","flaps","glide","flare","spoilers"],t={gear:"起落架放下",throttle:"收油門",flaps:"放襟翼",glide:"沿下滑道下降",flare:"拉平觸地",spoilers:"擾流板已展開"},n=e.indexOf(s.phase);Ne("#landing-phase-label").textContent=t[s.phase],Ne("#landing-throttle").textContent=`${s.throttle}%`,Ne("#landing-glide").textContent=`${s.glideAngle.toFixed(1)}°`,Ne("#landing-flaps").textContent=s.flaps>95?"全展開":s.flaps>0?"展開中":"收起",Ne("#landing-spoilers").textContent=s.spoilers>95?"已展開":s.spoilers>0?"展開中":"待命",Ne("#landing-flap-meter").style.width=`${s.flaps}%`,Ne("#landing-spoiler-meter").style.width=`${s.spoilers}%`,Ne("#landing-progress-bar").style.width=`${s.progress*100}%`,document.querySelectorAll("#landing-timeline li").forEach(i=>{const r=e.indexOf(i.dataset.phase);i.classList.toggle("is-active",r===n),i.classList.toggle("is-complete",r<n)})}function nu(){On.setView(Tt,{mode:ci,throttle:Bi,altitude:ko,bank:window.flightBank||0,turnBank:Ua,turnDirection:Dc,onLandingUpdate:aE,onCruiseUpdate:oE,onTurnUpdate:lE}),On.setInstructionControls(Ed)}function lE(s){const e=Ne("#turn-heading"),t=Ne("#turn-rate");!e||!t||(e.innerHTML=`${String(Math.round(s.heading)%360).padStart(3,"0")}<em>°</em>`,t.innerHTML=`${s.rate.toFixed(1)}<em>°/s</em>`,document.querySelectorAll("[data-turn-phase]").forEach(n=>{const i=n.dataset.turnPhase===s.phase;n.classList.toggle("is-active",i),n.setAttribute("aria-pressed",String(i))}))}function cE(s=Pm){const e=On.setAngleOfAttack(s);Pm=e.angle,Ne("#aoa-range").value=String(e.angle),Ne("#aoa-output").textContent=`${e.angle}°`,Ne("#aoa-lift-value").textContent=`${e.liftPercent}%`,Ne("#aoa-lift-bar").style.width=`${e.liftPercent}%`,Ne("#aoa-lift-track").setAttribute("aria-valuenow",String(e.liftPercent)),Ne("#aoa-panel").classList.toggle("is-stalled",e.stalled),Ne("#aoa-stall-state").textContent=e.stalled?"失速 · 顛簸 / 下沉":"氣流貼附"}function Ks(s){if(s==="turn"&&Tt==="turn")return Ks("cruise");s==="slats"&&Tt==="slats"&&On.setSlatLessonDeployment(0),s!==Tt&&ci==="instruction"&&!sl&&Yc.push(Tt);const e=["engine","wing","aoa","slats","elevator"];s==="turn"&&Tt!=="turn"&&(Kr=Tt),s==="elevator"&&Tt==="elevator"&&On.setElevatorLessonDeflection(0),e.includes(s)&&!e.includes(Tt)&&(Kr=Tt,Tt==="taxi"&&performance.now()-wd),s==="taxi"&&Tt!=="taxi"&&(wd=performance.now()),["idle","taxi","takeoff","cruise","landing"].includes(s)&&(Kr=s),Tt=s,document.body.classList.toggle("takeoff-mode",Tt==="takeoff"),Ne("#bernoulli-panel").classList.toggle("is-hidden",ci!=="instruction"||Tt!=="wing"),document.body.classList.toggle("zoom-engine",Tt==="engine"),document.body.classList.toggle("zoom-wing",Tt==="wing"),document.body.classList.toggle("zoom-aoa",Tt==="aoa"),document.body.classList.toggle("zoom-slats",Tt==="slats"),document.body.classList.toggle("zoom-elevator",Tt==="elevator"),document.body.classList.toggle("zoom-cruise",Tt==="cruise"),document.body.classList.toggle("zoom-landing",Tt==="landing"),document.body.classList.toggle("zoom-turn",ci==="instruction"&&Tt==="turn");const t=rE[Tt];Ne("#scene-heading").textContent=t.title,Ne("#stage-label").textContent=t.label,Ne("#scene-caption").textContent=t.caption,Ne("#stage-coordinates").textContent=t.coords;const n=["taxi","takeoff","cruise","landing"].indexOf(Tt)+1,i={engine:"E",wing:"W",aoa:"A",slats:"S",elevator:"V",turn:"5"}[Tt];Ne("#scene-progress").innerHTML=Tt==="flight"?"即時 <i></i> 飛行":i?`${i} <i></i> 教材`:`${String(n).padStart(2,"0")} <i></i> 04`,Ne("#aoa-panel").classList.toggle("is-hidden",ci!=="instruction"||Tt!=="aoa"),Ne("#cruise-panel").classList.toggle("is-hidden",ci!=="instruction"||Tt!=="cruise"),Tt==="cruise"&&(Ne("#cruise-panel").classList.remove("is-revealed"),Ne("#cruise-panel").setAttribute("aria-hidden","true")),Ne("#landing-panel").classList.toggle("is-hidden",ci!=="instruction"||Tt!=="landing"),B0.classList.toggle("is-hidden",ci!=="instruction"||Tt==="idle"),Tt!=="aoa"&&Ne("#aoa-panel").contains(document.activeElement)&&document.activeElement.blur(),Ne("#bottom-hint").innerHTML=t.hint.replace(/([1-5EWAQSV])/g,"<b>$1</b>"),O0.classList.toggle("is-hidden",ci==="play"),document.querySelectorAll(".lesson-step").forEach(r=>r.classList.toggle("is-active",r.dataset.scene===Tt)),nu(),tu()}function rl(s){ci=s,Yc.length=0;const e=s==="instruction"?[["1","滑行"],["2","起飛"],["3","平飛"],["4","降落"],["5","轉彎"],["E","引擎"],["W","機翼"],["A","迎角"],["S","前緣縫翼"],["V","升降舵"],["R","引擎氣流"],["Q","返回上一個畫面"],["Esc","返回上一章／主選單"]]:[["Shift","加速"],["Ctrl","減速"],["W","向上"],["S","向下"],["A","向左"],["D","向右"],["C","切換駕駛艙視角"],["Space","重來"],["Esc","回上一頁"]];Ic.innerHTML=`<strong class="controls-help-title">操作快捷鍵</strong><div class="controls-help-grid${s==="instruction"?" instruction-shortcuts":""}">${e.map(([t,n])=>`<div class="controls-help-item"><kbd>${t}</kbd><span>${n}</span></div>`).join("")}</div>`,Ic.classList.remove("is-hidden"),Ic.setAttribute("aria-label",`${s==="instruction"?"Instruction":"Play"} 操作快捷鍵`),Kr="idle",wd=performance.now(),F0.classList.add("is-hidden"),il.classList.remove("is-hidden"),il.classList.toggle("play-mode",s==="play"),document.body.classList.toggle("instruction-mode",s==="instruction"),document.body.classList.toggle("play-mode",s==="play"),On.setDifficulty(Td),vs=!1,Js=!1,document.body.classList.remove("paused"),document.body.classList.remove("lesson-paused"),On.setLessonPlayback({paused:!1,rate:Ko}),Ne("#lesson-pause").textContent="Ⅱ 暫停",Ne("#lesson-pause").setAttribute("aria-label","暫停教學"),document.body.classList.remove("zoom-engine","zoom-wing","zoom-aoa","zoom-slats","zoom-elevator","zoom-cruise","zoom-landing","zoom-turn","takeoff-mode"),Ne("#bernoulli-panel").classList.add("is-hidden"),Ne("#aoa-panel").classList.add("is-hidden"),Ne("#cruise-panel").classList.add("is-hidden"),Ne("#landing-panel").classList.add("is-hidden"),document.body.classList.remove("menu-active"),k0(),Zt.pitch=0,Zt.roll=0,Zt.throttle=0,Ne("#mode-kicker").textContent=s==="instruction"?"飛行學院 / Instruction":"飛行學院 / Play",Ne("#mode-switch-label").textContent=s==="instruction"?"Play":"Instruction",Ne("#connection-label").textContent=s==="instruction"?"課程進行中":"飛行進行中",sl=!0,Ks(s==="instruction"?"idle":"flight"),sl=!1,qc.classList.toggle("is-hidden",s!=="play"),ul(s==="instruction"?"教學模式已啟動 · 1–5 / E / W / A / S / V / R 切換 · Q 返回 · Esc 離開":"自由飛行已啟動 · Shift/Ctrl 油門，W/S 俯仰，A/D 滾轉，空白鍵重啟")}function H0(){F0.classList.remove("is-hidden"),il.classList.add("is-hidden"),Ic.classList.add("is-hidden"),B0.classList.add("is-hidden"),qc.classList.remove("is-hidden"),document.body.classList.remove("instruction-mode","play-mode","zoom-engine","zoom-wing","zoom-aoa","zoom-slats","zoom-cruise","zoom-landing","zoom-turn","takeoff-mode"),Ne("#bernoulli-panel").classList.add("is-hidden"),Ne("#aoa-panel").classList.add("is-hidden"),Ne("#cruise-panel").classList.add("is-hidden"),Ne("#landing-panel").classList.add("is-hidden"),document.body.classList.add("menu-active"),k0(),Zt.pitch=0,Zt.roll=0,Zt.throttle=0,Ne("#connection-label").textContent="系統就緒",document.body.classList.remove("paused"),document.body.classList.remove("lesson-paused"),Js=!1,vs=!1,On.setLessonPlayback({paused:!1,rate:Ko})}function ul(s){Rh.textContent=s,Rh.classList.add("is-visible"),clearTimeout(Lm),Lm=setTimeout(()=>Rh.classList.remove("is-visible"),2300)}function uE(){Js=!Js,document.body.classList.toggle("paused",Js),ul(Js?"模擬已暫停":"模擬已繼續"),tu()}function hE(){Bi=62,ko=3200,z0=36,Nc=146,window.flightBank=0,tu(),nu(),ul("飛行狀態已重設")}Ne("#instruction-button").addEventListener("click",()=>rl("instruction"));Ne("#play-button").addEventListener("click",()=>rl("play"));Ne("#home-button").addEventListener("click",H0);Ne("#mode-switch").addEventListener("click",()=>rl(ci==="instruction"?"play":"instruction"));Ne("#lesson-replay").addEventListener("click",()=>{vs=!1,document.body.classList.remove("lesson-paused"),Ne("#lesson-pause").textContent="Ⅱ 暫停",Ne("#lesson-pause").setAttribute("aria-label","暫停教學"),On.setLessonPlayback({paused:!1,rate:Ko}),On.replayLesson(Tt)});Ne("#lesson-pause").addEventListener("click",()=>{vs=!vs,document.body.classList.toggle("lesson-paused",vs),Ne("#lesson-pause").textContent=vs?"▶ 繼續":"Ⅱ 暫停",Ne("#lesson-pause").setAttribute("aria-label",vs?"繼續教學":"暫停教學"),On.setLessonPlayback({paused:vs,rate:Ko})});Ne("#lesson-speed").addEventListener("change",s=>{Ko=Number(s.target.value),On.setLessonPlayback({paused:vs,rate:Ko})});qc.addEventListener("click",s=>{const e=s.target.closest("[data-difficulty]");e&&(Td=e.dataset.difficulty,qc.querySelectorAll("[data-difficulty]").forEach(t=>{t.setAttribute("aria-pressed",String(t===e))}),On.setDifficulty(Td))});Ne("#aoa-range").addEventListener("input",s=>cE(s.target.value));Ne("#aoa-return").addEventListener("click",()=>Ks(Kr));O0.addEventListener("click",s=>{const e=s.target.closest("[data-scene]");e&&Ks(e.dataset.scene)});Ne("#fullscreen-button").addEventListener("click",async()=>{try{document.fullscreenElement?await document.exitFullscreen():await Ne(".stage-panel").requestFullscreen()}catch{ul("全螢幕模式目前不可用")}});window.addEventListener("keydown",s=>{const e=ci==="instruction"&&document.activeElement?.id==="aoa-range";if(!(["INPUT","TEXTAREA"].includes(document.activeElement?.tagName)&&!(e&&s.key.toLowerCase()==="q"))){if(s.key==="Escape"){if(document.fullscreenElement&&document.exitFullscreen(),!il.classList.contains("is-hidden"))if(ci==="instruction"&&Yc.length){const t=Yc.pop();sl=!0,Ks(t),sl=!1}else H0();return}if(il.classList.contains("is-hidden")){(s.key==="Enter"||s.key.toLowerCase()==="i")&&rl("instruction"),s.key.toLowerCase()==="p"&&rl("play");return}if(ci==="instruction"){const t=s.key.toLowerCase(),n={2:"takeoff",3:"cruise",4:"landing",5:"turn",e:"engine",w:"wing",a:"aoa",s:"slats",v:"elevator"};if(t==="1"){const i=["takeoff","cruise","flight"].includes(Tt)||["takeoff","cruise","flight"].includes(Kr);Ks(i?"landing":"taxi")}else n[t]?Ks(n[t]):t==="r"&&!s.repeat?(Tt!=="engine"&&Ks("engine"),On.toggleEngineAirflow()):t==="q"&&["engine","wing","aoa","slats","elevator","turn"].includes(Tt)&&Ks(Kr)}else{if(s.key.toLowerCase()==="c"&&!s.repeat){On.toggleCockpitView();return}if(s.code==="Space"){s.preventDefault(),Zt.pitch=0,Zt.roll=0,Zt.throttle=0,Js=!1,document.body.classList.remove("paused"),On.restartPlay(),ul("飛行已重新開始"),tu();return}const t=s.key.toLowerCase();if(t==="w"||t==="arrowup")Zt.pitch=1;else if(t==="s"||t==="arrowdown")Zt.pitch=-1;else if(t==="a"||t==="arrowleft")Zt.roll=-1;else if(t==="d"||t==="arrowright")Zt.roll=1;else if(t==="shift")Zt.throttle=1;else if(t==="control")Zt.throttle=-1;else if(s.code==="Numpad8")Zt.pitch=1;else if(s.code==="Numpad2")Zt.pitch=-1;else if(s.code==="Numpad4")Zt.roll=-1;else if(s.code==="Numpad6")Zt.roll=1;else return;(t==="control"||t.startsWith("arrow"))&&s.preventDefault(),nu()}}});window.addEventListener("keyup",s=>{const e=s.key.toLowerCase();ci==="play"&&((e==="w"||e==="arrowup")&&Zt.pitch===1||(e==="s"||e==="arrowdown")&&Zt.pitch===-1?Zt.pitch=0:(e==="a"||e==="arrowleft")&&Zt.roll===-1||(e==="d"||e==="arrowright")&&Zt.roll===1?Zt.roll=0:e==="shift"&&Zt.throttle===1||e==="control"&&Zt.throttle===-1?Zt.throttle=0:s.code==="Numpad8"&&Zt.pitch===1||s.code==="Numpad2"&&Zt.pitch===-1?Zt.pitch=0:(s.code==="Numpad4"&&Zt.roll===-1||s.code==="Numpad6"&&Zt.roll===1)&&(Zt.roll=0))});document.querySelectorAll("button").forEach(s=>s.addEventListener("click",()=>{s.blur()}));
