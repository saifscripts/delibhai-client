import { flatten } from "lodash";

const getVillageTitleArray = (address) => {
  return address?.village?.map(({ title }) => title);
};

const getVillagesTitle = (serviceAddress) => {
  const arrayOfVillageTitleArray = serviceAddress.map((address) =>
    getVillageTitleArray(address),
  );
  return flatten(arrayOfVillageTitleArray).join(", "); // returns all the villages in a coma separated string format
};

export default getVillagesTitle;
