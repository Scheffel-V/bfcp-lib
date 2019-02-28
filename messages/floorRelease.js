const Message = require('./message.js');
const CommonHeader = require('./commonHeader.js');
const Primitive = require('./primitive.js');
const FloorRequestId = require('../attributes/floorRequestId.js');

class FloorRelease extends Message {
  constructor(conferenceId, transactionId, userId, floorRequestId) {
    super(
      new CommonHeader(
        Primitive.FloorRelease,
        1,
        conferenceId,
        transactionId,
        userId
      ),
      [
        new FloorRequestId(floorRequestId),
      ]
    );
  }
}

module.exports = FloorRelease;
