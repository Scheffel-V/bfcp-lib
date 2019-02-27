const Format = require('./format.js');

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
    let type = this._complementBinary(this.type.toString(2), 7);
    let m = '0';
    let length = this._complementBinary(this.length.toString(2), 8);
    let content = null;

    switch(this.format) {
      case Format.Unsigned16:
        content = this._complementBinary(this.content.toString(2), 16);
        break;

      case Format.Grouped:
        content = this._encodeGroupedAttributeContent();
        break;

      default:
        throw new Error("I can't encode this attribute.");
    }
    return type + m + length + content;
  }

  _encodeGroupedAttributeContent() {
    let newContent = '';
    for(let attribute of this.content) {
      if(attribute instanceof Attribute) {
        newContent = newContent + attribute.encode();
      } else if(typeof attribute === 'string' || typeof attribute === 'number') {
        newContent = newContent + this._complementBinary(attribute.toString(2), 16);
      } else {
        throw new Error('Unknown attribute!');
      }
    }
    return newContent;
  }

  _complementBinary(binary, length) {
    let complement = length - binary.length;
    if(complement <= 0) {
      return binary;
    }
    let complementString = '0'.repeat(complement);
    return complementString + binary;
  }

  _complementPadding(content) {
    while(content.length < 100000 && content.length % 32 != 0) {
      content = content + '00000000';
    }
    return content;
  }
}

module.exports = Attribute;
