const Attribute = require('./attribute.js');
const Format = require('./format.js');
const Length = require('./length.js');
const Primitive = require('../messages/primitive.js');
const Type = require('./type.js');

/**
 * @classdesc
 * SupportedPrimitives class is a abstraction of the SupportedPrimitives
 * attribute as defined at the RFC 4582 - BFCP
 * https://tools.ietf.org/html/rfc4582#section-5.2.11
 * @extends Attribute
 * @memberof bfcp-lib.Attribute
 */
class SupportedPrimitives extends Attribute {
  /**
   * @constructor
   * @param {bfcp-lib.Message.Primitive} primitives A Message Primitive list
   * representing the supported primitives (messages)
   */
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
