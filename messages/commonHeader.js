class CommonHeader {
  constructor(primitive, payloadLength, conferenceId, transactionId, userId) {
    this._primitive = primitive;
    this._payloadLength = payloadLength;
    this._conferenceId = conferenceId;
    this._transactionId = transactionId;
    this._userId = userId;
  }

  set primitive(primitive) {
    this._primitive = primitive;
  }

  get primitive() {
    return this._primitive;
  }

  set payloadLength(payloadLength) {
    this._payloadLength = payloadLength;
  }

  get payloadLength() {
    return this._payloadLength;
  }

  set conferenceId(conferenceId) {
    this._conferenceId = conferenceId;
  }

  get conferenceId() {
    return this._conferenceId;
  }

  set transactionId(transactionId) {
    this._transactionId = transactionId;
  }

  get transactionId() {
    return this._transactionId;
  }

  set userId(userId) {
    this._userId = userId;
  }

  get userId() {
    return this._userId;
  }

  encode() {
    let ver = '001';
    let reserved = '00000';
    let primitive = this._complementBinary(this.primitive.toString(2), 8);
    let payloadLength = this._complementBinary(this.payloadLength.toString(2), 16);
    let conferenceId = this._complementBinary(this.conferenceId.toString(2), 32);
    let transactionId = this._complementBinary(this.transactionId.toString(2), 16);
    let userId = this._complementBinary(this.userId.toString(2), 16);

    return ver + reserved + primitive + payloadLength + conferenceId +
      transactionId + userId;
  }

  _complementBinary(binary, length) {
    let complement = length - binary.length;
    if(complement <= 0) {
      return binary;
    }
    let complementString = '0'.repeat(complement);
    return complementString + binary;
  }
}

module.exports = CommonHeader;
