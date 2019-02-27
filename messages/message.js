class Message {
  constructor(commonHeader, attributes) {
    this._commonHeader = commonHeader;
    this._attributes = attributes;
  }

  set commonHeader(commonHeader) {
    this._commonHeader = commonHeader;
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
