/**
 * @classdesc
 * Length class is a abstract representation of the attributes length as
 * defined in the RFCP 4582 - BFCP
 * https://tools.ietf.org/html/rfc4582#section-5.2
 * @memberof bfcp-lib.Attribute
 * @static
 */
class Length {
  /**
   * Gets BeneficiaryId Length in octets as integer
   * @type {Integer}
   * @static
   * @public
   */
  static get BeneficiaryId() {
    return 4;
  }

  /**
   * Gets FloorId Length in octets as integer
   * @type {Integer}
   * @static
   * @public
   */
  static get FloorId() {
    return 4;
  }

  /**
   * Gets FloorRequestId Length in octets as integer
   * @type {Integer}
   * @static
   * @public
   */
  static get FloorRequestId() {
    return 4;
  }

  /**
   * Gets Priority Length in octets as integer
   * @type {Integer}
   * @static
   * @public
   */
  static get Priority() {
    return 4;
  }

  /**
   * Gets RequestStatus Length in octets as integer
   * @type {Integer}
   * @static
   * @public
   */
  static get RequestStatus() {
    return 4;
  }

  /**
   * Gets ErrorCode Length in octets as integer
   * @type {Integer}
   * @static
   * @public
   */
  static get ErrorCode() {
    return 6;
  }

  /**
   * Gets ErrorInfo Length in octets as integer
   * @type {Integer}
   * @static
   * @public
   */
  static get ErrorInfo() {
    return 7;
  }

  /**
   * Gets ParticipantProvidedInfo Length in octets as integer
   * @type {Integer}
   * @static
   * @public
   */
  static get ParticipantProvidedInfo() {
    return 8;
  }

  /**
   * Gets StatusInfo Length in octets as integer
   * @type {Integer}
   * @static
   * @public
   */
  static get StatusInfo() {
    return 9;
  }

  /**
   * Gets SupportedAttributes Length in octets as integer
   * @type {Integer}
   * @static
   * @public
   */
  static get SupportedAttributes() {
    return 2;
  }

  /**
   * Gets SupportedPrimitives Length in octets as integer
   * @type {Integer}
   * @static
   * @public
   */
  static get SupportedPrimitives() {
    return 2;
  }

  /**
   * Gets UserDisplayName Length in octets as integer
   * @type {Integer}
   * @static
   * @public
   */
  static get UserDisplayName() {
    return 12;
  }

  /**
   * Gets UserUri Length in octets as integer
   * @type {Integer}
   * @static
   * @public
   */
  static get UserUri() {
    return 13;
  }

  /**
   * Gets BeneficiaryInformation Length in octets as integer
   * @type {Integer}
   * @static
   * @public
   */
  static get BeneficiaryInformation() {
    return 14;
  }

  /**
   * Gets FloorRequestInformation Length in octets as integer
   * @type {Integer}
   * @static
   * @public
   */
  static get FloorRequestInformation() {
    return 12;
  }

  /**
   * Gets RequestedByInformation Length in octets as integer
   * @type {Integer}
   * @static
   * @public
   */
  static get RequestedByInformation() {
    return 16;
  }

  /**
   * Gets FloorRequestStatus Length in octets as integer
   * @type {Integer}
   * @static
   * @public
   */
  static get FloorRequestStatus() {
    return 8;
  }

  /**
   * Gets OverallRequestStatus Length in octets as integer
   * @type {Integer}
   * @static
   * @public
   */
  static get OverallRequestStatus() {
    return 18;
  }
}

module.exports = Length;
