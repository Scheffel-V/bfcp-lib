const Attribute = require('./attribute.js');
const Format = require('./format.js');
const Type = require('./type.js');
const Length = require('./length.js');

class SupportedAttributes extends Attribute {
  constructor(attributes) {
    let supAttributes = [];
    if(!attributes || attributes == undefined) {
      supAttributes = [
        Type.BeneficiaryId,
        Type.FloorId,
        Type.FloorRequestId,
        Type.SupportedPrimitives,
        Type.SupportedAttributes
      ];
    } else {
      supAttributes = attributes;
    }

    let length = supAttributes.length + 2;
    super(Type.SupportedAttributes, length, Format.OctetString, supAttributes);
  }

  encode() {
    let type = this._complementBinary(this.type.toString(2), 7);
    let m = '0';
    let length = this._complementBinary(this.length.toString(2), 8);
    let content = '';

    for(let attributeType of this.content) {
      content = content + this._complementBinary(attributeType.toString(2), 7) + '0';
    }

    return this._complementPadding(type + m + length + content);;
  }
}

module.exports = SupportedAttributes;
