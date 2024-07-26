import upazilas from "../data/upazilas";

const getUpazilas = (districtId) => {
  if (!districtId) return;
  return upazilas.filter((upazila) => districtId === upazila.districtId);
};

export default getUpazilas;
