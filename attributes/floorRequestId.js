const Attribute = require('./attribute.js');
const Format = require('./format.js');
const Type = require('./type.js');
const Length = require('./length.js');

class FloorRequestId extends Attribute {
  constructor(floorRequestId) {
    super(Type.FloorRequestId, Length.FloorRequestId, Format.Unsigned16, floorRequestId);
  }
}

module.exports = FloorRequestId;
