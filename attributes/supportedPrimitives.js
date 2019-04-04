const Attribute = require('./attribute.js');
const Format = require('./format.js');
const Length = require('./length.js');
const Primitive = require('../messages/primitive.js');
const Type = require('./type.js');

class SupportedPrimitives extends Attribute {
  constructor(primitives) {
    let supPrimitives = [];
    if(!primitives || primitives == undefined) {
      supPrimitives = [
        Primitive.Hello,
        Primitive.HelloAck
      ];
    } else {
      supPrimitives = primitives;
    }

    let length = supPrimitives.length + Length.SupportedPrimitives;
    super(Type.SupportedPrimitives, length, Format.OctetString, supPrimitives);
  }
}

module.exports = SupportedPrimitives;
