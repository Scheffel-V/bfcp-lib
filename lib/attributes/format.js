/**
 * @classdesc
 * Format class is a abstraction of the attribute Format as defined in
 * the RFCP 4582 - BFCP
 * https://tools.ietf.org/html/rfc4582#section-5.2
 * @memberof bfcp-lib.Attribute
 * @static
 */
class Format {
  /**
   * Gets Unsigned16 Format string
   * @type {String}
   * @static
   * @public
   */
  static get Unsigned16() {
    return 'Unsigned16';
  }

  /**
   * Gets OctetString16 Format string
   * @type {String}
   * @static
   * @public
   */
  static get OctetString16() {
    return 'OctetString16';
  }

  /**
   * Gets OctetString Format string
   * @type {String}
   * @static
   * @public
   */
  static get OctetString() {
    return 'OctetString';
  }

  /**
   * Gets Grouped Format string
   * @type {String}
   * @static
   * @public
   */
  static get Grouped() {
    return 'Grouped';
  }
}

module.exports = Format;
