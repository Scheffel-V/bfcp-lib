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

  encode() {
    let type = this._complementBinary(this.type.toString(2), 7);
    let m = '0';
    let length = this._complementBinary(this.length.toString(2), 8);
    let requestStatus = this._complementBinary(this.content[0].toString(2), 8);
    let queuePosition = this._complementBinary(this.content[1].toString(2), 8);
    
    return type + m + length + requestStatus + queuePosition;
  }
}

module.exports = RequestStatus;
