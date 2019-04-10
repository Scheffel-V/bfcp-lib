const Attribute = require('./attribute.js');
const Format = require('./format.js');
const Length = require('./length.js');
const Type = require('./type.js');

/**
 * @classdesc
 * RequestStatus class is a abstraction of the RequestStatus attribute as
 * defined in the RFC 4582 - BFCP
 * https://tools.ietf.org/html/rfc4582#section-5.2.5
 * @extends Attribute
 * @memberof bfcp-lib.Attribute
 */
class RequestStatus extends Attribute {
  /**
   * @constructor
   * @param {Integer} requestStatus The request status
   * @param {Integer} queuePosition The queue position
   */
  constructor(requestStatus, queuePosition) {
    if(queuePosition == null || queuePosition == undefined) {
      queuePosition = 0;
    }

    let content = [
      requestStatus,
      queuePosition
    ]

    super(Type.RequestStatus, Length.RequestStatus, Format.OctetString16, content);
  }
}

module.exports = RequestStatus;
