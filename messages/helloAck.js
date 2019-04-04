const CommonHeader = require('./commonHeader.js');
const Message = require('./message.js');
const Primitive = require('./primitive.js');
const SupportedPrimitives = require('../attributes/supportedPrimitives.js');
const SupportedAttributes = require('../attributes/supportedAttributes.js');

class HelloAck extends Message {
  constructor(conferenceId, transactionId, userId) {
    super(
      new CommonHeader(
        Primitive.HelloAck,
        3,
        conferenceId,
        transactionId,
        userId
      ),
      [
        new SupportedPrimitives(),
        new SupportedAttributes()
      ]
    );
  }
}

module.exports = HelloAck;
