import { fetchData } from "../../../lib/fetch";

const getVillages = async (unionId) => {
  if (!unionId) return;
  const { data } = await fetchData(`/v1/village/`, { unionId });
  return data;
};

export default getVillages;