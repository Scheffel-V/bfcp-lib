const Message = require('./message.js');
const CommonHeader = require('./commonHeader.js');
const Primitive = require('./primitive.js');
const FloorId = require('../attributes/floorId.js');

class FloorRequestStatusAck extends Message {
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

module.exports = FloorRequestStatusAck;
