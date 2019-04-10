const Attribute = require('./attribute.js');
const Format = require('./format.js');
const Length = require('./length.js');
const Type = require('./type.js');

/**
 * @classdesc
 * FloorRequestId class is a abstraction of the FloorRequestId attribute
 * as defined in the RFC 4582 - BFCP
 * https://tools.ietf.org/html/rfc4582#section-5.2.3
 * @extends Attribute
 * @memberof bfcp-lib.Attribute
 */
class FloorRequestId extends Attribute {
  /**
   * @constructor
   * @param {Integer} floorRequestId The floor request id
   */
  constructor(floorRequestId) {
    super(Type.FloorRequestId, Length.FloorRequestId, Format.Unsigned16, floorRequestId);
  }
}

module.exports = FloorRequestId;
