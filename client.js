const dgram = require('dgram');
const client = dgram.createSocket('udp4');
const Config = require('config');
const Hello = require('./messages/hello.js');
const HelloAck = require('./messages/helloAck.js');
const FloorRequest = require('./messages/floorRequest.js');
const Parser = require('./parser/parser.js');

let conferenceId = 1;
let transactionId = 15;
let userId = 2;
let floorId = 5;
let hello1 = new Hello(conferenceId, transactionId, userId, floorId);
let floorRequest1 = new FloorRequest(conferenceId, transactionId, userId, floorId);

//const message = Buffer.from(hello1.encode());
const message = Buffer.from(floorRequest1.encode());

client.on('error', (err) => {
  console.log(`client error:\n${err.stack}`);
  client.close();
});

client.on('message', (msg, rinfo) => {
  console.log('Message received...');
  let obj = Parser.parseMessage(msg);
  console.log(obj);
});

client.on('listening', () => {
  const address = client.address();
  console.log(`client listening ${address.address}:${address.port}`);
});

client.bind(Config.get('client.port'), Config.get('client.ip'));

client.send(message, Config.get('server.port'), Config.get('server.ip'), (err) => {
});
