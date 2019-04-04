const Attribute = require('./attribute.js');
const FloorRequestStatus = require('./floorRequestStatus.js');
const Format = require('./format.js');
const Length = require('./length.js');
const Type = require('./type.js');


class FloorRequestInformation extends Attribute {
  constructor(floorRequestId, floorId, requestStatus) {
    let content = [];
    content.push(floorRequestId)
    content.push(new FloorRequestStatus(floorId, requestStatus));
    super(Type.FloorRequestInformation, Length.FloorRequestInformation, Format.Grouped, content);
  }
}

module.exports = FloorRequestInformation;
