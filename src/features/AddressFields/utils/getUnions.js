import unions from "../data/unions";

const getUnions = (upazilaId) => {
  if (!upazilaId) return;
  return unions.filter((union) => upazilaId === union.upazilaId);
};

export default getUnions;
