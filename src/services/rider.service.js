import axios from "../lib/api";
import generateErrorMessage from "../utils/generateErrorMessage";

export const getRiders = async (searchParams, page) => {
  const params = new URLSearchParams(searchParams);
  params.set("page", page);

  try {
    const { data } = await axios.get(`/rider?${params.toString()}`);
    return data;
  } catch (error) {
    throw new Error(generateErrorMessage(error));
  }
};
