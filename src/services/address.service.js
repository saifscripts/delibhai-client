import axios from "../lib/api";

export const getVillages = async (unionId) => {
  if (!unionId) return;
  try {
    const { data } = await axios.get(`/village/${unionId}`);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
