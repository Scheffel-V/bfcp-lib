const Attribute = require('./attribute.js');
const FloorRequestStatus = require('./floorRequestStatus.js');
const Format = require('./format.js');
const Type = require('./type.js');
const Length = require('./length.js');


class FloorRequestInformation extends Attribute {
  constructor(floorRequestId, floorId, requestStatus) {
    let content = [];
    content.push(floorRequestId)
    content.push(new FloorRequestStatus(floorId, requestStatus));
    super(Type.FloorRequestInformation, Length.FloorRequestInformation, Format.Grouped, content);
  }

  /** encode() {
    let type = this._complementBinary(this.type.toString(2), 7);
    let m = '0';
    let length = this._complementBinary(this.length.toString(2), 8);
    let content = '';

    for(let attribute of this.content) {
      if(attribute instanceof Attribute) {
        content = content + attribute.encode();
      } else if(typeof attribute === 'string') {
        content = content + this._complementBinary(attribute.toString(2), 16);
      } else {
        throw new Error('Unknown attribute!');
      }
    }

    return this._complementPadding(type + m + length + content);;
  } **/
}

module.exports = FloorRequestInformation;
