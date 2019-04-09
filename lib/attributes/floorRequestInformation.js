const Attribute = require('./attribute.js');
const FloorRequestStatus = require('./floorRequestStatus.js');
const Format = require('./format.js');
const Length = require('./length.js');
const Type = require('./type.js');

/**
 * @classdesc
 * FloorRequestInformation class is a abstraction of the FloorRequestInformation
 * attribute as defined at the RFC 4582 - BFCP
 * https://tools.ietf.org/html/rfc4582#section-5.2.15
 * @extends Attribute
 * @memberof bfcp-lib.Attribute
 */
class FloorRequestInformation extends Attribute {
  /**
   * @constructor
   * @param {Integer} floorRequestId The floor request id
   * @param {Integer} floorId        The floor id
   * @param {Integer} requestStatus  The request status
   */
  constructor(floorRequestId, floorId, requestStatus) {
    let content = [];
    content.push(floorRequestId)
    content.push(new FloorRequestStatus(floorId, requestStatus));
    super(Type.FloorRequestInformation, Length.FloorRequestInformation, Format.Grouped, content);
  }
}

module.exports = FloorRequestInformation;
