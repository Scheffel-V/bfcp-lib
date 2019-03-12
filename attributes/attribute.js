const Format = require('./format.js');
const Type = require('./type.js');
const Complements = require('../parser/complements.js');

class Attribute {
  constructor(type, length, format, content) {
    this._type = type;
    this._length = length;
    this._format = format;
    this._content = content;
  }

  set type(type) {
    this._type = type;
  }

  get type() {
    return this._type;
  }

  set length(length) {
    this._length = length;
  }

  get length() {
    return this._length;
  }

  set content(content) {
    this._content = content;
  }

  get content() {
    return this._content;
  }

  set format(format) {
    this._format = format;
  }

  get format() {
    return this._format;
  }

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
