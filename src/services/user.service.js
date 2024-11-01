import axios from "../lib/api";
import generateErrorMessage from "../utils/generateErrorMessage";

export const getUser = async (id) => {
  try {
    const { data } = await axios.get(`/user/${id}`);
    return data;
  } catch (error) {
    throw new Error(generateErrorMessage(error));
  }
};

export const getRiderLocation = async (id) => {
  try {
    const { data } = await axios.get(`/rider/location/${id}`);
    return data;
  } catch (error) {
    console.log(generateErrorMessage(error));
  }
};

export const updateRiderLocation = async (location) => {
  try {
    const { data } = await axios.put(`/rider/location/`, location);
    return data;
  } catch (error) {
    console.log(generateErrorMessage(error));
  }
};

export const updateRider = async (body) => {
  try {
    const { data } = await axios.put(`/rider/`, body);
    return data;
  } catch (error) {
    throw new Error(generateErrorMessage(error));
  }
};

export const updateAvatar = async (avatarData) => {
  try {
    const { data } = await axios.put("/user/avatar", avatarData);
    return data;
  } catch (error) {
    throw new Error(generateErrorMessage(error));
  }
};

export const removeAvatar = async () => {
  try {
    const { data } = await axios.delete("/user/avatar");
    return data;
  } catch (error) {
    throw new Error(generateErrorMessage(error));
  }
};
