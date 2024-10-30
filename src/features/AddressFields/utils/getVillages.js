import axios from "../../../lib/api";

const getVillages = async (unionId) => {
  if (!unionId) return;
  const { data } = await axios.get(`/village/${unionId}`);
  return data.data;
};

export default getVillages;
