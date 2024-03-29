import { fetchData } from '../../../lib/api/api.js';
import { getAllDivision, getDistricts, getUnions, getUpazilas } from "../../../lib/bd-divisions-to-unions/index.js";
import englishToBengaliNumber from '../../../utils/englishToBengaliNumber.js';

const getWards = (unionCode) => {
  if(!unionCode) {
    return;
  }

  return Array.from(Array(20)).map((ward, index) => ({value: index + 1, title: `ওয়ার্ড নং ${englishToBengaliNumber(index + 1)}`}))
}

const getVillages = async(unionValue) => {
  if(!unionValue) {
    return;
  }
  
  const {data} = await fetchData(`/v1/village/${unionValue}`);
  return data;
}

const generateAddressFields = async(address) => {
  if(!address) {
    return {
      divisions: getAllDivision(),
    }
  }
  
  const { division, district, upazila, union } = address;

  const result = {
    divisions: getAllDivision(),
    districts: getDistricts(division),
    upazilas: getUpazilas(district),
    unions: getUnions(upazila),
    wards: getWards(union),
    villages: await getVillages(union)
  };

  // console.log(result);
  return result;
};

export default generateAddressFields;

