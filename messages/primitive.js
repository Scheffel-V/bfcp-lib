class Primitive {
  static get FloorRequest() {
    return 1;
  }

  static get FloorRelease() {
    return 2;
  }

  static get FloorRequestQuery() {
    return 3;
  }

  static get FloorRequestStatus() {
    return 4;
  }

  static get UserQuery() {
    return 5;
  }

  static get UserStatus() {
    return 6;
  }

  static get FloorQuery() {
    return 7;
  }

  static get FloorStatus() {
    return 8;
  }

  static get ChairAction() {
    return 9;
  }

  static get ChairActionAck() {
    return 10;
  }

  static get Hello() {
    return 11;
  }

  static get HelloAck() {
    return 12;
  }

  static get Error() {
    return 13;
  }

  static get FloorRequestStatusAck() {
    return 14;
  }
}

module.exports = Primitive;
