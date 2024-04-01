import { fetchData } from "../../../lib/api/api.js";
import englishToBengaliNumber from "../../../utils/englishToBengaliNumber.js";

const getAllDivision = async () => {
  const { data } = await fetchData("/v1/division/all");
  return data;
};

const getDistricts = async (divisionId) => {
  const { data } = await fetchData(`/v1/district/${divisionId}`);
  return data;
};

const getUpazilas = async (districtId) => {
  const { data } = await fetchData(`/v1/upazila/${districtId}`);
  return data;
};

const getUnions = async (upazilaId) => {
  const { data } = await fetchData(`/v1/union/${upazilaId}`);
  return data;
};

const getWards = (unionCode) => {
  if (!unionCode) {
    return;
  }

  return Array.from(Array(20)).map((ward, index) => ({
    _id: index + 1,
    title: `ওয়ার্ড নং ${englishToBengaliNumber(index + 1)}`,
  }));
};

const getVillages = async (unionId) => {
  if (!unionId) {
    return;
  }

  const { data } = await fetchData(`/v1/village/${unionId}`);
  return data;
};

const generateAddressFields = async (address) => {
  const divisions = await getAllDivision();
  if (!address) {
    return { divisions };
  }

  const { division, district, upazila, union } = address;

  const result = {
    divisions,
    districts: await getDistricts(division),
    upazilas: await getUpazilas(district),
    unions: await getUnions(upazila),
    wards: getWards(union),
    villages: await getVillages(union),
  };

  return result;
};

export default generateAddressFields;
