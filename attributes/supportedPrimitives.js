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

  encode() {
    let type = this._complementBinary(this.type.toString(2), 7);
    let m = '0';
    let length = this._complementBinary(this.length.toString(2), 8);
    let content = '';

    for(let primitiveType of this.content) {
      content = content + this._complementBinary(primitiveType.toString(2), 8);
    }

    return this._complementPadding(type + m + length + content);
  }
}

module.exports = SupportedPrimitives;
