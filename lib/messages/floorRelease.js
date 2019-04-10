const CommonHeader = require('./commonHeader.js');
const FloorRequestId = require('../attributes/floorRequestId.js');
const Message = require('./message.js');
const PayloadLength = require('./payloadLength.js');
const Primitive = require('./primitive.js');

/**
 * @classdesc
 * FloorRelease class is a abstraction of the FloorRelease Message as defined in the
 * RFC 4582 - BFCP
 * https://tools.ietf.org/html/rfc4582#section-5.3.2
 * @extends Message
 * @memberof bfcp-lib.Message
 */
class FloorRelease extends Message {
  /**
   * @constructor
   * @param {Integer} conferenceId   The conference id
   * @param {Integer} transactionId  The transaction id
   * @param {Integer} userId         The user id
   * @param {Integer} floorRequestId The floor request id
   */
  constructor(conferenceId, transactionId, userId, floorRequestId) {
    super(
      new CommonHeader(
        Primitive.FloorRelease,
        PayloadLength.FloorRelease,
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
