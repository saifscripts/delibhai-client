import districts from "../data/districts";

const getDistricts = (divisionId) => {
  if (!divisionId) return;
  return districts.filter((district) => divisionId === district.divisionId);
};

export default getDistricts;
