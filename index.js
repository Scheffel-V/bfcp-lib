let User = require('./user/user.js');
let Primitive = require('./messages/primitive.js');
let RequestStatusValue = require('./messages/requestStatusValue.js');
let AttributeName = require('./attributes/name.js');

let BFCPLib = {
  'User': User,
  'Primitive': Primitive,
  'RequestStatusValue': RequestStatusValue,
  'AttributeName': AttributeName
}

module.exports = BFCPLib;
