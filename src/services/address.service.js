import axios from "../lib/api";
import generateErrorMessage from "../utils/generateErrorMessage";

export const getVillages = async (unionId) => {
  if (!unionId) return;
  try {
    const { data } = await axios.get(`/village/${unionId}`);
    return data;
  } catch (error) {
    throw new Error(generateErrorMessage(error));
  }
};
