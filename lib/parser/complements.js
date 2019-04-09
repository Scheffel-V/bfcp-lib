/**
 * @classdesc
 * Complements class is a static class to handle string (binary) operations of
 * complement (used to make a formated binary string from a not formated one).
 * @memberof bfcp-lib
 * @static
 */
class Complements {
  /**
   * Complements the binary string with '0' at it begin until have reached the
   * necessary string length.
   * @param  {String}  binary The binary string
   * @param  {Integer} length The necessary length
   * @return {String}         The binary string with the correct length
   * @static
   * @public
   */
  static complementBinary(binary, length) {
    let complement = length - binary.length;
    if(complement <= 0) {
      return binary;
    }
    let complementString = '0'.repeat(complement);
    return complementString + binary;
  }

  /**
   * Complements the binary string with 8 bits of '0' at it end have reached
   * the 32bits format. (padding)
   * @param  {String} content The binary string
   * @return {String}         The binary string with the correct format
   * @static
   * @public
   */
  static complementPadding(content) {
    while(content.length < 100000 && content.length % 32 != 0) {
      content = content + '00000000';
    }
    return content;
  }
}

module.exports = Complements;
