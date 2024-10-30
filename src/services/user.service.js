import axios from "../lib/api";

export const getUser = async (id) => {
  try {
    const { data } = await axios.get(`/user/${id}`);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const updateRider = async (body) => {
  try {
    const { data } = await axios.put(`/rider/`, body);
    return data;
  } catch (error) {
    console.log(error.response.data);
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
