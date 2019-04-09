let User = require('./lib/user/user.js');
let Primitive = require('./lib/messages/primitive.js');
let RequestStatusValue = require('./lib/messages/requestStatusValue.js');
let AttributeName = require('./lib/attributes/name.js');

let BFCPLib = {
  'User': User,
  'Primitive': Primitive,
  'RequestStatusValue': RequestStatusValue,
  'AttributeName': AttributeName
}

module.exports = BFCPLib;
