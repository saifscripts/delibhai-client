import axios from "../lib/api";
import generateErrorMessage from "../utils/generateErrorMessage";

export const getDistricts = async (divisionId) => {
  if (!divisionId) return [];
  try {
    const { data } = await axios.get(`/district/${divisionId}`);
    return data.data;
  } catch (error) {
    console.log(generateErrorMessage(error));
  }
};

export const getUpazilas = async (districtId) => {
  if (!districtId) return [];
  try {
    const { data } = await axios.get(`/upazila/${districtId}`);
    return data.data;
  } catch (error) {
    console.log(generateErrorMessage(error));
  }
};

export const getUnions = async (upazilaId) => {
  if (!upazilaId) return [];
  try {
    const { data } = await axios.get(`/union/${upazilaId}`);
    return data.data;
  } catch (error) {
    console.log(generateErrorMessage(error));
  }
};

export const getVillages = async (unionId) => {
  if (!unionId) return [];
  try {
    const { data } = await axios.get(`/village/${unionId}`);
    return data.data;
  } catch (error) {
    console.log(generateErrorMessage(error));
  }
};
