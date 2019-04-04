const Attribute = require('./attribute.js');
const Format = require('./format.js');
const Length = require('./length.js');
const Type = require('./type.js');

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
