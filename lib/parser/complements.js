class Complements {
  static complementBinary(binary, length) {
    let complement = length - binary.length;
    if(complement <= 0) {
      return binary;
    }
    let complementString = '0'.repeat(complement);
    return complementString + binary;
  }

  static complementPadding(content) {
    while(content.length < 100000 && content.length % 32 != 0) {
      content = content + '00000000';
    }
    return content;
  }
}

module.exports = Complements;
