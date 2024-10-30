import {
  getDistricts,
  getUnions,
  getUpazilas,
  getVillages,
} from "../../../services/address.service.js";
import divisions from "../data/divisions.js";

const generateAddressFields = async (address) => {
  if (!address) {
    return { divisions };
  }

  const { division, district, upazila, union } = address;

  return {
    divisions,
    districts: await getDistricts(division?._id),
    upazilas: await getUpazilas(district?._id),
    unions: await getUnions(upazila?._id),
    villages: await getVillages(union?._id),
  };
};

export default generateAddressFields;
