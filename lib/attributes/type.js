/**
 * @classdesc
 * Type class is a abstraction of the Attribute Type as defined at
 * the RFCP 4582 - BFCP
 * https://tools.ietf.org/html/rfc4582#section-5.2
 * @memberof bfcp-lib.Attribute
 * @static
 */
class Type {
  /**
   * Gets BeneficiaryId Type
   * @type {Integer}
   * @static
   * @public
   */
  static get BeneficiaryId() {
    return 1;
  }

  /**
   * Gets FloorId Type
   * @type {Integer}
   * @static
   * @public
   */
  static get FloorId() {
    return 2;
  }

  /**
   * Gets FloorRequestId Type
   * @type {Integer}
   * @static
   * @public
   */
  static get FloorRequestId() {
    return 3;
  }

  /**
   * Gets Priority Type
   * @type {Integer}
   * @static
   * @public
   */
  static get Priority() {
    return 4;
  }

  /**
   * Gets RequestStatus Type
   * @type {Integer}
   * @static
   * @public
   */
  static get RequestStatus() {
    return 5;
  }

  /**
   * Gets ErrorCode Type
   * @type {Integer}
   * @static
   * @public
   */
  static get ErrorCode() {
    return 6;
  }

  /**
   * Gets ErrorInfo Type
   * @type {Integer}
   * @static
   * @public
   */
  static get ErrorInfo() {
    return 7;
  }

  /**
   * Gets ParticipantProvidedInfo Type
   * @type {Integer}
   * @static
   * @public
   */
  static get ParticipantProvidedInfo() {
    return 8;
  }

  /**
   * Gets StatusInfo Type
   * @type {Integer}
   * @static
   * @public
   */
  static get StatusInfo() {
    return 9;
  }

  /**
   * Gets SupportedAttributes Type
   * @type {Integer}
   * @static
   * @public
   */
  static get SupportedAttributes() {
    return 0;
  }

  /**
   * Gets SupportedPrimitives Type
   * @type {Integer}
   * @static
   * @public
   */
  static get SupportedPrimitives() {
    return 11;
  }

  /**
   * Gets UserDisplayName Type
   * @type {Integer}
   * @static
   * @public
   */
  static get UserDisplayName() {
    return 12;
  }

  /**
   * Gets UserUri Type
   * @type {Integer}
   * @static
   * @public
   */
  static get UserUri() {
    return 13;
  }

  /**
   * Gets BeneficiaryInformation Type
   * @type {Integer}
   * @static
   * @public
   */
  static get BeneficiaryInformation() {
    return 14;
  }

  /**
   * Gets FloorRequestInformation Type
   * @type {Integer}
   * @static
   * @public
   */
  static get FloorRequestInformation() {
    return 15;
  }

  /**
   * Gets RequestedByInformation Type
   * @type {Integer}
   * @static
   * @public
   */
  static get RequestedByInformation() {
    return 16;
  }

  /**
   * Gets FloorRequestStatus Type
   * @type {Integer}
   * @static
   * @public
   */
  static get FloorRequestStatus() {
    return 17;
  }

  /**
   * Gets OverallRequestStatus Type
   * @type {Integer}
   * @static
   * @public
   */
  static get OverallRequestStatus() {
    return 18;
  }
}

module.exports = Type;
