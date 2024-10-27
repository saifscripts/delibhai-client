import axios from "../lib/api";

export const removeAvatar = async () => {
  try {
    const { data } = await axios.delete("/user/avatar");
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
