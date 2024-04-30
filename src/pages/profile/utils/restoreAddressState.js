import { getAllDivision } from "bd-divisions-to-unions";
import { getDistricts, getUnions, getUpazilas } from "./getGeoLocation";
import selectObjectByTitle from "./selectObjectByTitle";

const restoreAddressState = (address) => {
  if(!address) {
    return {
      division: getAllDivision(),
      district: null,
      upazila: null,
      union: null,
    }
  }
  
  const { division, district, upazila, union } = address;

  return {
    division: selectObjectByTitle(getAllDivision(), division),
    district: selectObjectByTitle(getDistricts(division), district),
    upazila: selectObjectByTitle(getUpazilas(district), upazila),
    union: selectObjectByTitle(getUnions(upazila), union),
  };
};

export default restoreAddressState;
