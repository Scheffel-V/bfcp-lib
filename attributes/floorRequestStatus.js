const Attribute = require('./attribute.js');
const Format = require('./format.js');
const Type = require('./type.js');
const Length = require('./length.js');
const RequestStatus = require('./requestStatus.js');

class FloorRequestStatus extends Attribute {
  constructor(floorId, requestStatus) {
    let content = [];
    content.push(floorId);
    content.push(new RequestStatus(requestStatus));
    super(Type.FloorRequestStatus, Length.FloorRequestStatus, Format.Grouped, content);
  }
}

module.exports = FloorRequestStatus;
