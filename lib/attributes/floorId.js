const Attribute = require('./attribute.js');
const Format = require('./format.js');
const Length = require('./length.js');
const Type = require('./type.js');

/**
 * @classdesc
 * FloorId class is a abstraction of the FloorId attribute
 * as defined at the RFC 4582 - BFCP
 * https://tools.ietf.org/html/rfc4582#section-5.2.2
 * @extends Attribute
 * @memberof bfcp-lib.Attribute
 */
class FloorId extends Attribute {
  /**
   * @constructor
   * @param {Integer} floorId The floor id
   */
  constructor(floorId) {
    super(Type.FloorId, Length.FloorId, Format.Unsigned16, floorId);
  }
}

module.exports = FloorId;
