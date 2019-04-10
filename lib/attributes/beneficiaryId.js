const Attribute = require('./attribute.js');
const Format = require('./format.js');
const Length = require('./length.js');
const Type = require('./type.js');

/**
 * @classdesc
 * BeneficiaryId class is a abstraction of the BeneficiaryId attribute
 * as defined in the RFC 4582 - BFCP
 * https://tools.ietf.org/html/rfc4582#section-5.2.1
 * @extends Attribute
 * @memberof bfcp-lib.Attribute
 */
class BeneficiaryId extends Attribute {
  /**
   * @constructor
   * @param {Integer} beneficiaryId The beneficiary id integer
   */
  constructor(beneficiaryId) {
    super(Type.BeneficiaryId, Length.BeneficiaryId, Format.Unsigned16, beneficiaryId);
  }
}

module.exports = BeneficiaryId;
