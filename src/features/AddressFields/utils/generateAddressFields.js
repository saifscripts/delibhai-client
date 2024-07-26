import divisions from "../data/divisions.js";
import getDistricts from "./getDistricts.js";
import getUnions from "./getUnions.js";
import getUpazilas from "./getUpazilas.js";
import getVillages from "./getVillages.js";

const generateAddressFields = async (address) => {
  if (!address) {
    return { divisions };
  }

  const { division, district, upazila, union } = address;

  return {
    divisions,
    districts: getDistricts(division?._id),
    upazilas: getUpazilas(district?._id),
    unions: getUnions(upazila?._id),
    villages: await getVillages(union?._id),
  };
};

export default generateAddressFields;
