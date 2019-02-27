class RequestStatusValue {
  static get Pending() {
    return 1;
  }

  static get Accepted() {
    return 2;
  }

  static get Granted() {
    return 3;
  }

  static get Denied() {
    return 4;
  }

  static get Cancelled() {
    return 5;
  }

  static get Released() {
    return 6;
  }

  static get Revoked() {
    return 7;
  }
}

module.exports = RequestStatusValue;
