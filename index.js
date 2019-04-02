const Parser = require('./parser/parser.js');
const Primitive = require('./messages/primitive.js');
const HelloAck = require('./messages/helloAck.js');

class User {
  constructor(userId, conferenceId) {
    this._userId = userId;
    this._conferenceId = conferenceId;
    this._currentMessage = null;
    this._currentTransactionId = 0;
  }

  set userId(userId) {
    this._userId = userId;
  }

  get userId() {
    return this._userId;
  }

  set conferenceId(conferenceId) {
    this._conferenceId = conferenceId;
  }

  get conferenceId() {
    return this._conferenceId;
  }

  set currentMessage(currentMessage) {
    this._currentMessage = currentMessage;
  }

  get currentMessage() {
    return this._currentMessage;
  }

  set currentTransactionId(currentTransactionId) {
    this._currentTransactionId = currentTransactionId;
  }

  get currentTransactionId() {
    return this._currentTransactionId;
  }

  receiveMessage(message) {
    let bfcpMessage = Parser.parseMessage(message);
    this.currentMessage = bfcpMessage;

    switch(bfcpMessage.commonHeader.primitive) {
      case Primitive.Hello:
        return bfcpMessage;

      case Primitive.HelloAck:
        return bfcpMessage;

      case Primitive.FloorRequest:
        return bfcpMessage;

      default:
        throw new Error("Unknown primitive received.");
    }
  }


  helloAckMessage() {
    let helloAck = new HelloAck(this.conferenceId, this.currentMessage.commonHeader.transactionId, this.userId);
    return Buffer.from(helloAck.encode());
  }

  floorStatusMessage(floorRequestId, floorId, requestStatus) {
    if(this.currentMessage.transactionId > this.currentTransactionId) {
      this.currentTransactionId = this.currentMessage.transactionId;
    }

    this.currentTransactionId++;

    let floorStatus = new FloorStatus(this.conferenceId, this.currentTransactionId, this.userId, floorRequestId, floorId, requestStatus);
    return Buffer.from(floorStatus.encode());
  }
}

module.exports = User;
