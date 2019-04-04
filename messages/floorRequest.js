const CommonHeader = require('./commonHeader.js');
const FloorId = require('../attributes/floorId.js');
const Message = require('./message.js');
const Primitive = require('./primitive.js');

class FloorRequest extends Message {
  constructor(conferenceId, transactionId, userId, floorId) {
    super(
      new CommonHeader(
        Primitive.FloorRequest,
        1,
        conferenceId,
        transactionId,
        userId
      ),
      [
        new FloorId(floorId),
      ]
    );
  }
}

module.exports = FloorRequest;
