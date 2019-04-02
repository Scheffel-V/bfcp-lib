const Parser = require('./parser/parser.js');
const Primitive = require('./messages/primitive.js');
const HelloAck = require('./messages/helloAck.js');
const FloorRequestStatus = require('./messages/floorRequestStatus.js');

class User {
  constructor(userId, conferenceId) {
    this._userId = userId;
    this._conferenceId = conferenceId;
    this._currentMessage = null;
    this._currentTransactionId = 0;
    this._floorRequestId = 0;
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

  set floorRequestId(floorRequestId) {
    this._floorRequestId = floorRequestId;
  }

  get floorRequestId() {
    return this._floorRequestId;
  }

  receiveMessage(message) {
    try {
      let bfcpMessage = Parser.parseMessage(message);
      this.currentMessage = bfcpMessage;
      return bfcpMessage;
    } catch(error) {
      throw error;
    }
  }


  helloAckMessage() {
    let helloAck = new HelloAck(this.conferenceId, this.currentMessage.commonHeader.transactionId, this.userId);
    return Buffer.from(helloAck.encode());
  }

  floorRequestStatusMessage(requestStatus) {
    let floorRequestStatus = new FloorRequestStatus(this.conferenceId, this.currentMessage.commonHeader.transactionId, this.userId, this.floorRequestId++, this.currentMessage.attributes[0].content, requestStatus);
    return Buffer.from(floorRequestStatus.encode());
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
