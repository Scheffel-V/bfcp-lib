const Attribute = require('./attribute.js');
const Format = require('./format.js');
const Length = require('./length.js');
const Type = require('./type.js');

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

    let length = supAttributes.length + Length.SupportedAttributes;
    super(Type.SupportedAttributes, length, Format.OctetString, supAttributes);
  }
}

module.exports = SupportedAttributes;
