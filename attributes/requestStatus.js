const Attribute = require('./attribute.js');
const Format = require('./format.js');
const Type = require('./type.js');
const Length = require('./length.js');

class RequestStatus extends Attribute {
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
