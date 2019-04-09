/**
 * @classdesc
 * Type class is a abstraction of the Message Request Status as defined at
 * the RFCP 4582 - BFCP
 * https://tools.ietf.org/html/rfc4582#section-5.2.5
 * @memberof bfcp-lib.Message
 */
class RequestStatusValue {
  /**
   * Gets Pending value
   * @type {Integer}
   * @static
   * @public
   */
  static get Pending() {
    return 1;
  }

  /**
   * Gets Accepted value
   * @type {Integer}
   * @static
   * @public
   */
  static get Accepted() {
    return 2;
  }

  /**
   * Gets Granted value
   * @type {Integer}
   * @static
   * @public
   */
  static get Granted() {
    return 3;
  }

  /**
   * Gets Denied value
   * @type {Integer}
   * @static
   * @public
   */
  static get Denied() {
    return 4;
  }

  /**
   * Gets Cancelled value
   * @type {Integer}
   * @static
   * @public
   */
  static get Cancelled() {
    return 5;
  }

  /**
   * Gets Released value
   * @type {Integer}
   * @static
   * @public
   */
  static get Released() {
    return 6;
  }

  /**
   * Gets Revoked value
   * @type {Integer}
   * @static
   * @public
   */
  static get Revoked() {
    return 7;
  }
}

module.exports = RequestStatusValue;
