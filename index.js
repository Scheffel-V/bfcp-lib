let User = require('./user/user.js');
let Primitive = require('./messages/primitive.js');
let RequestStatusValue = require('./messages/requestStatusValue.js');


User.Primitive = Primitive;
User.RequestStatusValue = RequestStatusValue;
module.exports = User;
