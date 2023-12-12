import { getAllDistrict, getAllDivision, getAllUnion, getAllUpazila } from "bd-divisions-to-unions";

const getDistricts = (divisionTitle) => {
  const divisions = getAllDivision();
  const districts = getAllDistrict();

  // Get current division info from division title
  const division = divisions.find(({ title }) => title === divisionTitle);

  // Get corresponding division value;
  const divisionValue = division?.value;

  // return districts from specified division
  return districts[divisionValue];
};

const getUpazilas = (districtTitle) => {
  const _districts = getAllDistrict();
  const districts = [];
  for (const group in _districts) {
    districts.push(..._districts[group]);
  }

  const upazilas = getAllUpazila();

  // Get current district info from district title
  const district = districts.find(({ title }) => title === districtTitle);

  // Get corresponding district value;
  const districtValue = district?.value;

  // return upazilas from specified district
  return upazilas[districtValue];
};

const getUnions = (upazilaTitle) => {
  const _upazilas = getAllUpazila();
  const upazilas = [];
  for (const group in _upazilas) {
    upazilas.push(..._upazilas[group]);
  }

  const unions = getAllUnion();

  // Get current division info from division title
  const upazila = upazilas.find(({ title }) => title === upazilaTitle);

  // Get corresponding division value;
  const upazilaValue = upazila?.value;  

  // return upazilas from specified division
  return unions[upazilaValue];
};

 export { getDistricts, getUnions, getUpazilas };

