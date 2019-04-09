const Attribute = require('./attribute.js');
const Format = require('./format.js');
const Length = require('./length.js');
const RequestStatus = require('./requestStatus.js');
const Type = require('./type.js');

/**
 * @classdesc
 * FloorRequestStatus class is a abstraction of the FloorRequestStatus
 * attribute as defined at the RFC 4582 - BFCP
 * https://tools.ietf.org/html/rfc4582#section-5.2.17
 * @extends Attribute
 * @memberof bfcp-lib.Attribute
 */
class FloorRequestStatus extends Attribute {
  /**
   * @constructor
   * @param {Integer} floorId       The floor id
   * @param {Integer} requestStatus The request status
   */
  constructor(floorId, requestStatus) {
    let content = [];
    content.push(floorId);
    content.push(new RequestStatus(requestStatus));
    super(Type.FloorRequestStatus, Length.FloorRequestStatus, Format.Grouped, content);
  }
}

module.exports = FloorRequestStatus;
