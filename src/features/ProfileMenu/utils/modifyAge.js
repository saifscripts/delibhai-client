import englishToBengaliNumber from "../../../utils/englishToBengaliNumber";

const modifyAge = (en_age) => {
  const bn_age = englishToBengaliNumber(en_age);
  return bn_age + " বছর";
};
export default modifyAge;
