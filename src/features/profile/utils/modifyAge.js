import englishToBengaliNumber from "../../../utils/englishToBengaliNumber";
import { calculateAge } from "./calculateAge";

const modifyAge = (dateOfBirth) => {
  const age = calculateAge(dateOfBirth);
  const bn_age = englishToBengaliNumber(age);
  return bn_age + " বছর";
};
export default modifyAge;
