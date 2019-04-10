const CommonHeader = require('./commonHeader.js');
const Message = require('./message.js');
const PayloadLength = require('./payloadLength.js');
const Primitive = require('./primitive.js');
const SupportedPrimitives = require('../attributes/supportedPrimitives.js');
const SupportedAttributes = require('../attributes/supportedAttributes.js');

/**
 * @classdesc
 * HelloAck class is a abstraction of the HelloAck Message as defined in the
 * RFC 4582 - BFCP
 * https://tools.ietf.org/html/rfc4582#section-5.3.12
 * @extends Message
 * @memberof bfcp-lib.Message
 */
class HelloAck extends Message {
  /**
   * @constructor
   * @param {Integer} conferenceId  The conference id
   * @param {Integer} transactionId The transaction id
   * @param {Integer} userId        The user id
   */
  constructor(conferenceId, transactionId, userId) {
    super(
      new CommonHeader(
        Primitive.HelloAck,
        PayloadLength.HelloAck,
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
