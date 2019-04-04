const Attribute = require('./attribute.js');
const Format = require('./format.js');
const Length = require('./length.js');
const Type = require('./type.js');

class FloorId extends Attribute {
  constructor(floorId) {
    super(Type.FloorId, Length.FloorId, Format.Unsigned16, floorId);
  }
}

module.exports = FloorId;
