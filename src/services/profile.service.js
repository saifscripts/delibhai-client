import axios from "../lib/api";

export const getUser = async (id) => {
  try {
    const { data } = await axios.get(`/user/${id}`);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const removeAvatar = async () => {
  try {
    const { data } = await axios.delete("/user/avatar");
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
