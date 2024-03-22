function englishToBengaliNumber(number) {
  const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return String(number).replace(/[0-9]/g, function (match) {
    return bengaliDigits[parseInt(match)];
  });
}

export default englishToBengaliNumber;
