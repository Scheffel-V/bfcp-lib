const Attribute = require('./attribute.js');
const Format = require('./format.js');
const Type = require('./type.js');
const Length = require('./length.js');
const Primitive = require('../messages/primitive.js');

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

    let length = supPrimitives.length + 2;
    super(Type.SupportedPrimitives, length, Format.OctetString, supPrimitives);
  }
}

module.exports = SupportedPrimitives;
