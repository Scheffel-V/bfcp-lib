const CommonHeader = require('./commonHeader.js');
const FloorRequestInformation = require('../attributes/floorRequestInformation.js');
const Message = require('./message.js');
const PayloadLength = require('./payloadLength.js');
const Primitive = require('./primitive.js');

/**
 * @classdesc
 * FloorStatus class is a abstraction of the FloorStatus Message
 * as defined at the RFC 4582 - BFCP
 * https://tools.ietf.org/html/rfc4582#section-5.3.8
 * @extends Message
 * @memberof bfcp-lib.Message
 */
class FloorStatus extends Message {
  /**
   * @constructor
   * @param {Integer} conferenceId   The conference id
   * @param {Integer} transactionId  The transaction id
   * @param {Integer} userId         The user id
   * @param {Integet} floorRequestId The floor request id
   * @param {Integer} floorId        The floor id
   * @param {bfcp-lib.Message.RequestStatusValue} requestStatus The request status
   */
  constructor(conferenceId, transactionId, userId, floorRequestId, floorId, requestStatus) {
    super(
      new CommonHeader(
        Primitive.FloorStatus,
        PayloadLength.FloorStatus,
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
