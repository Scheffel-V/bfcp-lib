/**
 * @classdesc
 * Message class is a abstraction of the Message as defined in the
 * RFC 4582 - BFCP
 * https://tools.ietf.org/html/rfc4582#section-5.3
 * @memberof bfcp-lib
 */
class Message {
  /**
   * @constructor
   * @param {bfcp-lib.Message.CommonHeader} commonHeader The message common header
   * @param {bfcp-lib.Attribute[]}  attributes   The message list of attributes
   */
  constructor(commonHeader, attributes) {
    this._commonHeader = commonHeader;
    this._attributes = attributes;
  }

  /**
   * Gets the Message CommonHeader
   * @return {bfcp-lib.Message.CommonHeader} The CommonHeader object
   * @public
   */
  get commonHeader() {
    return this._commonHeader;
  }

  set commonHeader(commonHeader) {
    this._commonHeader = commonHeader;
  }

  /**
   * Gets the Message attributes
   * @return {bfcp-lib.Attribute[]} The Attributes List
   * @public
   */
  get attributes() {
    return this._attributes;
  }

  set attributes(attributes) {
    this._attributes = attributes;
  }

  /**
   * Gets the message attribute that contains the name received. If this
   * message haven't this attribute, returns null.
   * @param  {bfcp-lib.Attribute.Name} attributeName The attribute Name
   * @return {bfcp-lib.Attribute}      The attribute
   * @public
   */
  getAttribute(attributeName) {
    for(let attribute of this.attributes) {
      if(attribute.constructor.name == attributeName) {
        return attribute;
      }
    }
    return null;
  }

  /**
   * Encodes this Message instance from object oriented format to the binary
   * format.This process envolve encode the CommonHeader and all attributes.
   * @return {String} Binary string representing the BFCP Message
   * @public
   */
  encode() {
    let commonHeader = this.commonHeader.encode();
    let attributes = '';
    for(let attribute of this.attributes) {
      attributes = attributes + attribute.encode();
    }
    let message = commonHeader + attributes;
    let size = message.length / 8;
    let octets = [];

    for(let i = 0; i < size; i++) {
      octets.push(parseInt(message.substring(0 + 8 * i, 8 + 8 * i), 2));
    }

    return octets;
  }
}

module.exports = Message;
