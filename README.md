# bfcp-lib
bfcp-lib is a simple library for the Binary Floor Control Protocol, as
defined in the [RFC 4582](https://tools.ietf.org/html/rfc4582).

1. [User](https://github.com/Scheffel-V/bfcp-lib#user)
2. [Primitive](https://github.com/Scheffel-V/bfcp-lib#primitive)
3. [Request Status Value](https://github.com/Scheffel-V/bfcp-lib#request-status-value)
4. [Attribute Name](https://github.com/Scheffel-V/bfcp-lib#attribute-name)

## User
**User** class is a abstract representation of a User at the BFCP environment,
and is used as the _primary interface_ to this library. A User _receive and
returns BFCP messages_ totally in the binary form, as like when receiving
from TCP/UDP sockets, so the application who utilize it doesn't need to
know anything about the codification and decodification of BFCP messages.

```javascript
const dgram = require('dgram');
const BFCPLib = require('./index.js');
const BFCPUser = BFCPLib.User;
const Primitive = BFCPLib.Primitive;
const AttributeName = BFCPLib.AttributeName;
const RequestStatusValue = BFCPLib.RequestStatusValue;

let userId = 1;
let conferenceId = 1;
/**
 * Instantiate a bfcp-lib User and create a UDP server
 * to receive bfcp messages.
 */
let bfcpUser = new BFCPUser(userId, conferenceId);
let udpServer = dgram.createSocket('udp4');

udpServer.bind(8000, '127.0.0.1', () => {
  udpServer.on('message', (msg, rinfo) => {
    /**
     * When a message arrives through the socket,
     * pass it to the bfcpUser using the receiveMessage
     * method. This method will return the message
     * in object oriented form.
     */
    try {
      let message = bfcpUser.receiveMessage(msg);
      let response;
      /**
      * You can interact with the message, checking which
      * one it is, like Hello, FloorRequest, FloorRelease,
      * using the Primitive static class.
      */
      switch(message.commonHeader.primitive) {

        case Primitive.Hello:
          /**
          * You can send responses to the bfcp client,
          * like HelloAck, using the respective method.
          * The method HelloAckMessage will return the
          * message HelloAck you need to send through
          * the socket.
          */
          response = bfcpUser.helloAckMessage(message);
          udpServer.send(response, 8001, '127.0.0.1');
          break;

        case Primitive.FloorRequest:
          /**
           * You can get attributes from the message, asking for it with the
           * method 'getAttribute', using the AttributeName class. Lets get
           * the wanted floor id received in a FlooRequest message.
           */
           let wantedFloorId = message.getAttribute(AttributeName.FloorId).content;

           /**
            * You can send a FloorRequestStatus back to the bfcp client using
            * a request status value, like Granted, Released, using the
            * RequestStatusValue class.
            */
           response = bfcpUser.floorRequestStatusMessage(
             message,
             wantedFloorId,
             RequestStatusValue.Granted
           );
           udpServer.send(response, 8001, '127.0.0.1');
           break;
      }
    } catch(error) {
      console.log("Error while receiving message.", error);
    }
  });
});
```

## Primitive
**Primitive** class is a abstraction of the Message Primitive as defined in
the [RFCP 4582 - BFCP](https://tools.ietf.org/html/rfc4582#section-5.1).

  | Value | Primitive |
  | --- | --- |
  | 1 | FloorRequest |
  | 2 | FloorRelease |
  | 3 | FloorRequestQuery |
  | 4 | FloorRequestStatus |
  | 5 | UserQuery |
  | 6 | UserStatus |
  | 7 | FloorQuery |
  | 8 | FloorStatus |
  | 9 | ChairAction |
  | 10 | ChairActionAck |
  | 11 | Hello |
  | 12 | HelloAck |
  | 13 | Error |


## Request Status Value
**RequestStatusValue** class is a abstraction of the Message Request Status as
defined in the [RFCP 4582 - BFCP](https://tools.ietf.org/html/rfc4582#section-5.2.5).

    | Value | Status |
    | --- | --- |
    | 1 | Pending |
    | 2 | Accepted |
    | 3 | Granted |
    | 4 | Denied |
    | 5 | Cancelled |
    | 6 | Released |
    | 7 | Revoked |


## Attribute Name
**Name** class is a abstraction of the attribute Names.

  | Value | Name |
  |-------------------------------|---------------------------|
  |   'BeneficiaryId'             | BeneficiaryId             |
  |   'FloorId'                   | FloorId                   |
  |   'FloorRequestId'            | FloorRequestId            |
  |   'Priority'                  | Priority                  |
  |   'RequestStatus'             | RequestStatus             |
  |   'ErrorCode'                 | ErrorCode                 |
  |   'ErrorInfo'                 | ErrorInfo                 |
  |   'ParticipantProvidedInfo'   | ParticipantProvidedInfo   |
  |   'StatusInfo'                | StatusInfo                |
  |   'SupportedAttributes'       | SupportedAttributes       |
  |   'SupportedPrimitives'       | SupportedPrimitives       |
  |   'UserDisplayName'           | UserDisplayName           |
  |   'UserUri'                   | UserUri                   |
  |   'BeneficiaryInformation'    | BeneficiaryInformation    |
  |   'FloorRequestInformation'   | FloorRequestInformation   |
  |   'RequestedByInformation'    | RequestedByInformation    |
  |   'FloorRequestStatus'        | FloorRequestStatus        |
  |   'OverallRequestStatus'      | OverallRequestStatus      |
