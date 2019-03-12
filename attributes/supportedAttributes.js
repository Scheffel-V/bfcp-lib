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
}

module.exports = SupportedAttributes;
