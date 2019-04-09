const Attribute = require('./attribute.js');
const Format = require('./format.js');
const Length = require('./length.js');
const Type = require('./type.js');

/**
 * @classdesc
 * SupportedAttributes class is a abstraction of the SupportedAttributes
 * attribute as defined at the RFC 4582 - BFCP
 * https://tools.ietf.org/html/rfc4582#section-5.2.10
 * @extends Attribute
 * @memberof bfcp-lib.Attribute
 */
class SupportedAttributes extends Attribute {
  /**
   * @constructor
   * @param {bfcp-lib.Attribute.Type[]} attributes A Attribute Type list
   * representing the supported attributes
   */
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
