import { flatten } from "lodash";

export const getVillageTitle = (address) => {
  return address?.village?.title;
};

const getVillageTitleArray = (address) => {
  return address?.village?.map(({ title }) => title);
};

const getVillages = (serviceAddress) => {
  const arrayOfVillageTitleArray = serviceAddress.map((address) =>
    getVillageTitleArray(address),
  );
  return flatten(arrayOfVillageTitleArray).join(", "); // returns all the villages in a coma separated string format
};

export default getVillages;
