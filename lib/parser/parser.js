const FloorRequest = require('../messages/floorRequest.js');
const FloorRelease = require('../messages/floorRelease.js');
const FloorRequestStatusMsg = require('../messages/floorRequestStatus.js');
const FloorStatus = require('../messages/floorStatus.js');
const Hello = require('../messages/hello.js');
const HelloAck = require('../messages/helloAck.js');
const FloorRequestStatusAck = require('../messages/floorRequestStatusAck.js');
const FloorStatusAck = require('../messages/floorStatusAck.js');
const FloorQuery = require('../messages/floorQuery.js');
const AttributeType = require('../attributes/type.js');
const FloorId = require('../attributes/floorId.js');
const FloorRequestId = require('../attributes/floorRequestId.js');
const FloorRequestStatusAtr = require('../attributes/floorRequestStatus.js');
const SupportedAttributes = require('../attributes/supportedAttributes.js');
const SupportedPrimitives = require('../attributes/supportedPrimitives.js');
const FloorRequestInformation = require('../attributes/floorRequestInformation.js');
const Primitive = require('../messages/primitive.js');
const CommonHeader = require('../messages/commonHeader.js');
const Complements = require('../parser/complements.js');

/**
 * @classdesc
 * Parser class is a static class to handle all the operations needed to parse
 * a binary string (BFCP Message) to the correspondent Object Oriented instance.
 * @memberof bfcp-lib
 * @static
 */
class Parser {
  /**
   * Parses the CommonHeader bits of the message to a CommonHeader Object.
   * @param  {String} commonHeader Binary string representing the CommonHeader
   * @return {bfcp-lib.Message.CommonHeader} The CommonHeader object
   * @static
   * @private
   */
  static _parseCommonHeader(commonHeader) {
    let primitive = parseInt(commonHeader.substring(8, 16), 2);
    let payloadLength = parseInt(commonHeader.substring(16, 32), 2);
    let conferenceId = parseInt(commonHeader.substring(32, 64), 2);
    let transactionId = parseInt(commonHeader.substring(64, 80), 2);
    let userId = parseInt(commonHeader.substring(80, 96), 2);

    return new CommonHeader(primitive, payloadLength, conferenceId, transactionId, userId);
  }

  /**
   * Parses the Attributes bits of the message to a Attribute list object.
   * @param  {String} attributes Binary string representing the Attributes
   * @return {bfcp-lib.Attribute[]} The Attribute list object
   * @static
   * @private
   */
  static _parseAttributes(attributes) {
    let attributeList = [];

    while(attributes != '') {
      let type = parseInt(attributes.substring(0, 7), 2);
      let length = parseInt(attributes.substring(8, 16), 2);
      let attribute = attributes.substring(0, length * 8);
      let content;

      switch(type) {
        case AttributeType.FloorId:
          attributeList.push(Parser._parseFloorId(attribute.substring(16)));
          break;

        case AttributeType.SupportedAttributes:
          attributeList.push(Parser._parseSupportedAttributes(attribute.substring(16)));
          break;

        case AttributeType.SupportedPrimitives:
          attributeList.push(Parser._parseSupportedPrimitives(attribute.substring(16)));
          break;

        case AttributeType.FloorRequestStatus:
          attributeList.push(Parser._parseFloorRequestStatus(attribute.substring(16)));
          break;

        case AttributeType.FloorRequestInformation:
          attributeList.push(Parser._parseFloorRequestInformation(attribute.substring(16)));
          break;

        case AttributeType.RequestStatus:
          attributeList.push(Parser._parseRequestStatus(attribute.substring(16)));
          break;

        case AttributeType.FloorRequestId:
          attributeList.push(Parser._parseFloorRequestId(attribute.substring(16)));
          break;

        default:
          throw new Error('I cant parse this attribute!');
      }

      let size = length * 8;
      while(size % 32 != 0) {
        size = size + 8;
      }
      attributes = attributes.substring(size);
    }

    return attributeList;
  }

  /**
   * Parses the FloorID bits of the message to a FloorId Object.
   * @param  {String} content The binary string
   * @return {bfcp-lib.Attribute.FloorId} FloorId object
   * @static
   * @private
   */
  static _parseFloorId(content) {
    return new FloorId(parseInt(content, 2));
  }

  /**
   * Parses the SupportedAttributes bits of the message to a
   * SupportedAttributes Object.
   * @param  {String} content The binary string
   * @return {bfcp-lib.Attribute.SupportedAttributes} SupportedAttributes object
   * @static
   * @private
   */
  static _parseSupportedAttributes(content) {
    let attributeTypes = [];
    for(let i = 1; i < (content.length / 8) + 1; i++) {
      let binType = content.substring(8 * (i - 1), 8 * i);
      attributeTypes.push(parseInt(binType.substring(0, 7), 2));
    }

    return new SupportedAttributes(attributeTypes);
  }

  /**
   * Parses the SupportedPrimitives bits of the message to a
   * SupportedPrimitives Object.
   * @param  {String} content The binary string
   * @return {bfcp-lib.Attribute.SupportedPrimitives} SupportedPrimitives object
   * @static
   * @private
   */
  static _parseSupportedPrimitives(content) {
    let primitives = [];
    for(let i = 1; i < (content.length / 8) + 1; i++) {
      let binPrimitive = content.substring(8 * (i - 1), 8 * i);
      primitives.push(parseInt(binPrimitive, 2));
    }

    return new SupportedPrimitives(primitives);
  }

  /**
   * Parses the FloorRequestStatus bits of the message to a
   * FloorRequestStatus Object.
   * @param  {String} content The binary string
   * @return {bfcp-lib.Attribute.FloorRequestStatus} FloorRequestStatus object
   * @static
   * @private
   */
  static _parseFloorRequestStatus(content) {
    return new FloorRequestStatusAtr(parseInt(content, 2));
  }

  /**
   * Parses the FloorRequestInformation bits of the message to a
   * FloorRequestInformation Object.
   * @param  {String} content The binary string
   * @return {bfcp-lib.Attribute.FloorRequestInformation} FloorRequestInformation object
   * @static
   * @private
   */
  static _parseFloorRequestInformation(content) {
    return new FloorRequestInformation(
      parseInt(content.substring(0, 16), 2),
      parseInt(content.substring(32, 48), 2),
      parseInt(content.substring(64, 72), 2)
    );
  }

  /**
   * Parses the RequestStatus bits of the message to a RequestStatus Object.
   * @param  {String} content The binary string
   * @return {bfcp-lib.Attribute.RequestStatus} RequestStatus object
   * @static
   * @private
   */
  static _parseRequestStatus(content) {
    return new RequestStatus(
      parseInt(content.substring(0, 8), 2),
      parseInt(content.substring(8, 16), 2)
    );
  }

  /**
   * Parses the FloorRequestId bits of the message to a FloorRequestId Object.
   * @param  {String} content The binary string
   * @return {bfcp-lib.Attribute.FloorRequestId} FloorRequestId object
   * @static
   * @private
   */
  static _parseFloorRequestId(content) {
    return new FloorRequestId(parseInt(content.substring(0, 16), 2));
  }

  /**
   * Parses an BFCP Message as received in a TCP/UDP socket to a Object Oriented
   * BFCP Message. Must receive the message as a Buffer, like when it arrives
   * from the TCP/UDP socket.
   * @param  {Buffer} message The buffered Message
   * @return {bfcp-lib.Message} Object Oriented BFCP Message
   * @throws Will throw an Error if the Message couldn't be parsed.
   */
  static parseMessage(message) {
    try {
      let binaryMessage = '';

      for (const value of message) {
        binaryMessage = binaryMessage + Complements.complementBinary(value.toString(2), 8);
      }
      let commonHeader = Parser._parseCommonHeader(binaryMessage.substring(0, 96));
      let attributes = Parser._parseAttributes(binaryMessage.substring(96));

      switch(commonHeader.primitive) {
        case Primitive.Hello:
          let hello = new Hello();
          hello.commonHeader = commonHeader;
          hello.attributes = attributes;
          return hello;

        case Primitive.HelloAck:
          let helloAck = new HelloAck();
          helloAck.commonHeader = commonHeader;
          helloAck.attributes = attributes;
          return helloAck;

        case Primitive.FloorRequest:
          let floorRequest = new FloorRequest();
          floorRequest.commonHeader = commonHeader;
          floorRequest.attributes = attributes;
          return floorRequest;

        case Primitive.FloorRequestStatus:
          let floorRequestStatus = new FloorRequestStatusMsg();
          floorRequestStatus.commonHeader = commonHeader;
          floorRequestStatus.attributes = attributes;
          return floorRequestStatus;

        case Primitive.FloorRelease:
          let floorRelease = new FloorRelease();
          floorRelease.commonHeader = commonHeader;
          floorRelease.attributes = attributes;
          return floorRelease;

        case Primitive.FloorStatus:
          let floorStatus = new FloorStatus();
          floorStatus.commonHeader = commonHeader;
          floorStatus.attributes = attributes;
          return floorStatus;

        case Primitive.FloorRequestStatusAck:
          let floorRequestStatusAck = new FloorRequestStatusAck();
          floorRequestStatusAck.commonHeader = commonHeader;
          floorRequestStatusAck.attributes = attributes;
          return floorRequestStatusAck;

        case Primitive.FloorStatusAck:
          let floorStatusAck = new FloorStatusAck();
          floorStatusAck.commonHeader = commonHeader;
          floorStatusAck.attributes = attributes;
          return floorStatusAck;

        case Primitive.FloorQuery:
          let floorQuery = new FloorQuery();
          floorQuery.commonHeader = commonHeader;
          floorQuery.attributes = attributes;
          return floorQuery;

        default:
          throw new Error("I can't decode this message. Unknown primitive.");
      }
    } catch(error) {
      throw new Error("Problem parsing message. ", error);
    }
  }
}

module.exports = Parser;
