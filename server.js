const Hello = require('./messages/hello.js');
const HelloAck = require('./messages/helloAck.js');
const FloorRequest = require('./messages/floorRequest.js');
const FloorRequestStatus = require('./messages/floorRequestStatus.js');
const RequestStatusValue = require('./messages/requestStatusValues.js');
const Parser = require('./parser/parser.js');
const dgram = require('dgram');
const server = dgram.createSocket('udp4');
const SERVER_IP = '127.0.0.1';
const SERVER_PORT = 45000;
const CLIENT_IP = '127.0.0.1';
const CLIENT_PORT = 45001;

let conferenceId = 1;
let transactionId = 15;
let userId = 2;
let floorId = 5;
let helloAck1 = new HelloAck(conferenceId, transactionId, userId);
let floorRequestStatus1 = new FloorRequestStatus(conferenceId, transactionId, userId, 88, 99, RequestStatusValue.Granted);

server.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

function complementBinary(binary, length) {
  let complement = length - binary.length;
  if(complement <= 0) {
    return binary;
  }
  let complementString = '0'.repeat(complement);
  return complementString + binary;
}

server.on('message', (msg, rinfo) => {
  console.log('Message received...');

  let obj = Parser.parseMessage(msg);

  if(obj instanceof Hello) {
    console.log('Hello received, sending HelloAck');
    const message = Buffer.from(helloAck1.encode());
    server.send(message, CLIENT_PORT, CLIENT_IP, (err) => { });
  } else if(obj instanceof FloorRequest) {
    console.log('FloorRequest received, sending FloorRequestStatus');
    const message = Buffer.from(floorRequestStatus1.encode());
    server.send(message, CLIENT_PORT, CLIENT_IP, (err) => { });
  }

});

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(SERVER_PORT, SERVER_IP);
