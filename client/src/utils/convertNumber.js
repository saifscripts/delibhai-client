function convertNumber(input = '') {
  const output = [];
  const str = input.toString();

  for (const char of str) {
    switch (char) {
      case '0':
        output.push('০');
        break;
      case '1':
        output.push('১');
        break;
      case '2':
        output.push('২');
        break;
      case '3':
        output.push('৩');
        break;
      case '4':
        output.push('৪');
        break;
      case '5':
        output.push('৫');
        break;
      case '6':
        output.push('৬');
        break;
      case '7':
        output.push('৭');
        break;
      case '8':
        output.push('৮');
        break;
      case '9':
        output.push('৯');
        break;
      default:
        output.push(char);
    }
  }

  return output.join('');
}

export default convertNumber;
