const Attribute = require('./attribute.js');
const Format = require('./format.js');
const Type = require('./type.js');
const Length = require('./length.js');

class BeneficiaryId extends Attribute {
  constructor(beneficiaryId) {
    super(Type.BeneficiaryId, Length.BeneficiaryId, Format.Unsigned16, beneficiaryId);
  }
}

module.exports = BeneficiaryId;
