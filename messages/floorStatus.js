const CommonHeader = require('./commonHeader.js');
const FloorRequestInformation = require('../attributes/floorRequestInformation.js');
const Message = require('./message.js');
const Primitive = require('./primitive.js');

class FloorStatus extends Message {
  constructor(conferenceId, transactionId, userId, floorRequestId, floorId, requestStatus) {
    super(
      new CommonHeader(
        Primitive.FloorStatus,
        4,
        conferenceId,
        transactionId,
        userId
      ),
      [
        new FloorRequestInformation(floorRequestId, floorId, requestStatus),
      ]
    );
  }
}

module.exports = FloorStatus;
