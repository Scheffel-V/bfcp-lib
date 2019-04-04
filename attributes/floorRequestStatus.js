const Attribute = require('./attribute.js');
const Format = require('./format.js');
const Length = require('./length.js');
const RequestStatus = require('./requestStatus.js');
const Type = require('./type.js');

class FloorRequestStatus extends Attribute {
  constructor(floorId, requestStatus) {
    let content = [];
    content.push(floorId);
    content.push(new RequestStatus(requestStatus));
    super(Type.FloorRequestStatus, Length.FloorRequestStatus, Format.Grouped, content);
  }
}

module.exports = FloorRequestStatus;
