import axios from "../lib/api";
import generateErrorMessage from "../utils/generateErrorMessage";

export const getRiders = async (searchParams) => {
  try {
    const { data } = await axios.get(`/rider?${searchParams.toString()}`);
    return data;
  } catch (error) {
    throw new Error(generateErrorMessage(error));
  }
};
