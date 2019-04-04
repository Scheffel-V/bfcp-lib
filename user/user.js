const FloorRequestStatus = require('../messages/floorRequestStatus.js');
const FloorStatus = require('../messages/floorStatus.js');
const Primitive = require('../messages/primitive.js');
const HelloAck = require('../messages/helloAck.js');
const RequestStatusValue = require('../messages/requestStatusValue.js');
const Parser = require('../parser/parser.js');

class User {
  constructor(userId, conferenceId) {
    this._userId = parseInt(userId);
    this._conferenceId = parseInt(conferenceId);
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

  static getFloorRequestId() {
    return this.FloorRequestId;
  }

  static incFloorRequestId() {
    this.FloorRequestId++;
  }

  set wantedFloorId(wantedFloorId) {
    this._wantedFloorId = wantedFloorId;
  }

  get wantedFloorId() {
    return this._wantedFloorId;
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

  helloAckMessage(helloMessage) {
    let helloAck = new HelloAck(this.conferenceId, helloMessage.commonHeader.transactionId, this.userId);
    return Buffer.from(helloAck.encode());
  }

  floorRequestStatusMessage(message, floorId, requestStatus) {
    let floorRequestId;
    if(requestStatus == RequestStatusValue.Granted) {
      User.incFloorRequestId();
      floorRequestId = User.getFloorRequestId();
    } else {
      floorRequestId = message.attributes[0].content;
    }
    let floorRequestStatus = new FloorRequestStatus(this.conferenceId, message.commonHeader.transactionId, this.userId, floorRequestId, floorId, requestStatus);
    return Buffer.from(floorRequestStatus.encode());
  }

  floorStatusMessage(floorId, requestStatus) {
    if(this.currentMessage.commonHeader.transactionId > this.currentTransactionId) {
      this.currentTransactionId = this.currentMessage.commonHeader.transactionId;
    }
    this.currentTransactionId++;
    let floorStatus = new FloorStatus(this.conferenceId, this.currentTransactionId, this.userId, User.getFloorRequestId(), floorId, requestStatus);
    return Buffer.from(floorStatus.encode());
  }
}

User.FloorRequestId = 0;
module.exports = User;
