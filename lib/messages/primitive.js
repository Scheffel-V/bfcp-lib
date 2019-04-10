/**
 * @classdesc
 * Primitive class is a abstraction of the Message Primitive as defined in
 * the RFCP 4582 - BFCP
 * https://tools.ietf.org/html/rfc4582#section-5.1
 * @memberof bfcp-lib.Message
 * @static
 */
class Primitive {
  /**
   * Gets FloorRequest Primitive
   * @type {Integer}
   * @static
   * @public
   */
  static get FloorRequest() {
    return 1;
  }

  /**
   * Gets FloorRelease Primitive
   * @type {Integer}
   * @static
   * @public
   */
  static get FloorRelease() {
    return 2;
  }

  /**
   * Gets FloorRequestQuery Primitive
   * @type {Integer}
   * @static
   * @public
   */
  static get FloorRequestQuery() {
    return 3;
  }

  /**
   * Gets FloorRequestStatus Primitive
   * @type {Integer}
   * @static
   * @public
   */
  static get FloorRequestStatus() {
    return 4;
  }

  /**
   * Gets UserQuery Primitive
   * @type {Integer}
   * @static
   * @public
   */
  static get UserQuery() {
    return 5;
  }

  /**
   * Gets UserStatus Primitive
   * @type {Integer}
   * @static
   * @public
   */
  static get UserStatus() {
    return 6;
  }

  /**
   * Gets FloorQuery Primitive
   * @type {Integer}
   * @static
   * @public
   */
  static get FloorQuery() {
    return 7;
  }

  /**
   * Gets FloorStatus Primitive
   * @type {Integer}
   * @static
   * @public
   */
  static get FloorStatus() {
    return 8;
  }

  /**
   * Gets ChairAction Primitive
   * @type {Integer}
   * @static
   * @public
   */
  static get ChairAction() {
    return 9;
  }

  /**
   * Gets ChairActionAck Primitive
   * @type {Integer}
   * @static
   * @public
   */
  static get ChairActionAck() {
    return 10;
  }

  /**
   * Gets Hello Primitive
   * @type {Integer}
   * @static
   * @public
   */
  static get Hello() {
    return 11;
  }

  /**
   * Gets HelloAck Primitive
   * @type {Integer}
   * @static
   * @public
   */
  static get HelloAck() {
    return 12;
  }

  /**
   * Gets Error Primitive
   * @type {Integer}
   * @static
   * @public
   */
  static get Error() {
    return 13;
  }

  /**
   * Gets FloorRequestStatusAck Primitive
   * (EXTENDED FROM RFC)
   * @type {Integer}
   * @static
   * @public
   */
  static get FloorRequestStatusAck() {
    return 14;
  }

  /**
   * Gets FloorStatusAck Primitive
   * (EXTENDED FROM RFC)
   * @type {Integer}
   * @static
   * @public
   */
  static get FloorStatusAck() {
    return 16;
  }
}

module.exports = Primitive;
