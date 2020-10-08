/**
 * @classdesc
 * PayloadLength class is a abstraction of the Message Payload Length as defined in
 * the RFCP 4582 - BFCP, in 4-octets units
 * https://tools.ietf.org/html/rfc4582#section-5.1
 * @memberof bfcp-lib.Message
 * @static
 */
class PayloadLength {
  /**
   * Gets FloorRequest payload length
   * @type {Integer}
   * @static
   * @public
   */
  static get FloorRequest() {
    return 1;
  }

  /**
   * Gets FloorRelease payload length
   * @type {Integer}
   * @static
   * @public
   */
  static get FloorRelease() {
    return 1;
  }

  /**
   * Gets FloorRequestQuery payload length
   * @type {Integer}
   * @static
   * @public
   */
  static get FloorRequestQuery() {
    return -1;
  }

  /**
   * Gets FloorRequestStatus payload length
   * @type {Integer}
   * @static
   * @public
   */
  static get FloorRequestStatus() {
    return 4;
  }

  /**
   * Gets UserQuery payload length
   * @type {Integer}
   * @static
   * @public
   */
  static get UserQuery() {
    return -1;
  }

  /**
   * Gets UserStatus payload length
   * @type {Integer}
   * @static
   * @public
   */
  static get UserStatus() {
    return -1;
  }

  /**
   * Gets FloorQuery payload length
   * @type {Integer}
   * @static
   * @public
   */
  static get FloorQuery() {
    return -1;
  }

  /**
   * Gets FloorStatus payload length
   * @type {Integer}
   * @static
   * @public
   */
  static get FloorStatus() {
    return 4;
  }

  /**
   * Gets ChairAction payload length
   * @type {Integer}
   * @static
   * @public
   */
  static get ChairAction() {
    return -1;
  }

  /**
   * Gets ChairActionAck payload length
   * @type {Integer}
   * @static
   * @public
   */
  static get ChairActionAck() {
    return -1;
  }

  /**
   * Gets Hello payload length
   * @type {Integer}
   * @static
   * @public
   */
  static get Hello() {
    return 1;
  }

  /**
   * Gets HelloAck payload length
   * @type {Integer}
   * @static
   * @public
   */
  static get HelloAck() {
    return 3;
  }

  /**
   * Gets Error payload length
   * @type {Integer}
   * @static
   * @public
   */
  static get Error() {
    return -1;
  }

  /**
   * Gets FloorRequestStatusAck payload length
   * (EXTENDED FROM RFC)
   * @type {Integer}
   * @static
   * @public
   */
  static get FloorRequestStatusAck() {
    return 1;
  }

  /**
   * Gets FloorStatusAck payload length
   * (EXTENDED FROM RFC)
   * @type {Integer}
   * @static
   * @public
   */
  static get FloorStatusAck() {
    return 1;
  }
}

module.exports = PayloadLength;
