import { getAllDivision, getDistricts, getUnions, getUpazilas } from "../../../lib/bd-divisions-to-unions";

const selectObjectByValue = (objects, value) => {
  return objects?.map((obj) => ({
    ...obj,
    selected: obj.value == value,
  }));
};

const restoreAddressState = (address) => {
  if(!address) {
    return {
      divisions: getAllDivision(),
      districts: null,
      upazilas: null,
      unions: null,
    }
  }
  
  const { division, district, upazila, union } = address;

  return {
    divisions: selectObjectByValue(getAllDivision(), division),
    districts: selectObjectByValue(getDistricts(division), district),
    upazilas: selectObjectByValue(getUpazilas(district), upazila),
    unions: selectObjectByValue(getUnions(upazila), union),
  };
};

export default restoreAddressState;
