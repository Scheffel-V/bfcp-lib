const Complements = require('../parser/complements.js');
const Format = require('./format.js');
const Type = require('./type.js');

/**
 * @classdesc
 * Attribute class is a abstraction of the Attribute as defined at the
 * RFC 4582 - BFCP
 * https://tools.ietf.org/html/rfc4582#section-5.2
 * @memberof bfcp-lib
 */
class Attribute {
  /**
   * @constructor
   * @param {bfcp-lib.Attribute.Type}   type    Attribute Type
   * @param {bfcp-lib.Attribute.Length} length  Attribute length in octets
   * @param {bfcp-lib.Attribute.Format} format  Attribute format
   * @param {Object}                    content The attribute content, which
   *  can be an Integer, or other attributes, depending of the format
   */
  constructor(type, length, format, content) {
    this._type = type;
    this._length = length;
    this._format = format;
    this._content = content;
  }

  /**
   * Gets the Type of the Attribute
   * @return {bfcp-lib.Attribute.Type} The Type
   * @public
   */
  get type() {
    return this._type;
  }

  set type(type) {
    this._type = type;
  }

  /**
   * Gets the Length of the Attribute
   * @return {bfcp-lib.Attribute.Length} The Length in octets
   * @public
   */
  get length() {
    return this._length;
  }

  set length(length) {
    this._length = length;
  }

  /**
   * Gets the Format of the Attribute
   * @return {bfcp-lib.Attribute.Format} The Format
   * @public
   */
  get format() {
    return this._format;
  }

  set format(format) {
    this._format = format;
  }

  /**
   * Gets the content of the Attribute, which can be an Integer or other
   * Attributes, depending on the format
   * @return {Object} The content
   * @public
   */
  get content() {
    return this._content;
  }

  set content(content) {
    this._content = content;
  }


  /**
   * Encodes this Attribute instance from object oriented format to the binary
   * format.
   * @return {String} Binary string representing the BFCP Attribute
   * @public
   */
  encode() {
    let type = Complements.complementBinary(this.type.toString(2), 7);
    let m = '0';
    let length = Complements.complementBinary(this.length.toString(2), 8);
    let content = null;

    switch(this.format) {
      case Format.Unsigned16:
        content = Complements.complementBinary(this.content.toString(2), 16);
        break;

      case Format.Grouped:
        content = this._encodeGroupedAttributeContent();
        break;

      case Format.OctetString:
        content = this._encodeOctetStringContent();
        break;

      case Format.OctetString16:
        content = this._encodeOctetString16Content();
        break;

      default:
        throw new Error("I can't encode this attribute. Format unknown.");
    }

    return Complements.complementPadding(type + m + length + content);
  }

  /**
   * Encodes the Grouped type attribute content.
   * @return {String} Binary string representing the BFCP object content
   * @private
   */
  _encodeGroupedAttributeContent() {
    let newContent = '';

    for(let attribute of this.content) {
      if(attribute instanceof Attribute) {
        newContent = newContent + attribute.encode();
      } else if(typeof attribute === 'string' || typeof attribute === 'number') {
        newContent = newContent + Complements.complementBinary(attribute.toString(2), 16);
      } else {
        throw new Error('Unknown attribute!');
      }
    }

    return newContent;
  }

  /**
   * Encodes the OctetString type attribute content.
   * @return {String} Binary string representing the BFCP object content
   * @private
   */
  _encodeOctetStringContent() {
    let newContent = '';

    switch(this.type) {
      case Type.SupportedAttributes:
        for(let attributeType of this.content) {
          newContent = newContent + Complements.complementBinary(attributeType.toString(2), 7) + '0';
        }
        return newContent;

      case Type.SupportedPrimitives:
        for(let primitiveType of this.content) {
          newContent = newContent + Complements.complementBinary(primitiveType.toString(2), 8);
        }
        return newContent;

      default:
        throw new Error("I can't encode this octet string attribute. Type unknown.");
    }
  }

  /**
   * Encodes the OctetString16 type attribute content.
   * @return {String} Binary string representing the BFCP object content
   * @private
   */
  _encodeOctetString16Content() {
    switch(this.type) {
      case Type.RequestStatus:
        let requestStatus = Complements.complementBinary(this.content[0].toString(2), 8);
        let queuePosition = Complements.complementBinary(this.content[1].toString(2), 8);
        return requestStatus + queuePosition;

      default:
        throw new Error("I can't encode this octet string 16 attribute. Type unknown.");
    }
  }
}

module.exports = Attribute;
