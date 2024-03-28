import { fetchData } from '../../../lib/api/api.js';
import { getAllDivision, getDistricts, getUnions, getUpazilas } from "../../../lib/bd-divisions-to-unions/index.js";

const getWards = async(unionCode) => {
  if(!unionCode) {
    return;
  }

  const response = await fetchData(`/v1/ward/${unionCode}`);
  return response.data;
}

const getVillages = async(wardCode) => {
  if(!wardCode) {
    return;
  }
  
  const response = await fetchData(`/v1/village/${wardCode}`);
  return response.data;
}

const generateAddressFields = async(address) => {
  if(!address) {
    return {
      divisions: getAllDivision(),
    }
  }
  
  const { division, district, upazila, union, ward } = address;

  const result = {
    divisions: getAllDivision(),
    districts: getDistricts(division),
    upazilas: getUpazilas(district),
    unions: getUnions(upazila),
    wards: await getWards(union),
    villages: await getVillages(ward)
  };

  // console.log(result);
  return result;
};

export default generateAddressFields;

