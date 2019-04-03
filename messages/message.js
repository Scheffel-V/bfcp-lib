class Message {
  constructor(commonHeader, attributes) {
    this._commonHeader = commonHeader;
    this._attributes = attributes;
    this._name = commonHeader ? this._primitiveName(commonHeader) : null;
  }

  set commonHeader(commonHeader) {
    this._commonHeader = commonHeader;
    this.name = this._primitiveName(commonHeader);
  }

  get commonHeader() {
    return this._commonHeader;
  }

  set attributes(attributes) {
    this._attributes = attributes;
  }

  get attributes() {
    return this._attributes;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  _primitiveName(commonHeader) {
    switch(commonHeader.primitive) {
      case 1:
        return 'FloorRequest';
      case 2:
        return 'FloorRelease';
      case 3:
        return 'FloorRequestQuery';
      case 4:
        return 'FloorRequestStatus';
      case 5:
        return 'UserQuery';
      case 6:
        return 'UserStatus';
      case 7:
        return 'FloorQuery';
      case 8:
        return 'FloorStatus';
      case 9:
        return 'ChairAction';
      case 10:
        return 'ChairActionAck';
      case 11:
        return 'Hello';
      case 12:
        return 'HelloAck';
      case 13:
        return 'Error';
      case 14:
        return 'FloorRequestStatusAck';
      case 16:
        return 'FloorStatusAck';
      default:
        throw new Error("Error in message primitive!");
    }
  }

  encode() {
    let commonHeader = this.commonHeader.encode();
    let attributes = '';
    for(let attribute of this.attributes) {
      attributes = attributes + attribute.encode();
    }
    let message = commonHeader + attributes;
    let size = message.length / 8;
    let octets = [];

    for(let i = 0; i < size; i++) {
      octets.push(parseInt(message.substring(0 + 8 * i, 8 + 8 * i), 2));
    }

    return octets;
  }
}

module.exports = Message;
