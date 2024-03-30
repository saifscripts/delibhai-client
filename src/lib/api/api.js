import { getAuthToken } from "../../features/Authentication/utils/getAuthToken.js";
import axios from "./axiosConfig.js";

export const fetchData = async (route, searchParams) => {
  const token = getAuthToken();

  // generate queryString from searchParams obj
  let queryString = "?";
  if (searchParams) {
    for (let param in searchParams) {
      queryString += param + "=" + searchParams[param] + "&";
    }
    queryString = queryString.slice(0, -1);
  } else {
    queryString = "";
  }

  try {
    const response = await axios.get("/api" + route + queryString, {
      headers: { authorization: token ? `Bearer ${token}` : null },
    });

    return response.data;
  } catch (err) {
    const appError = err?.response?.data;
    const axiosError = err;

    return appError || axiosError;
  }
};

export const postData = async (route, body) => {
  const token = getAuthToken();

  try {
    const response = await axios.post("/api" + route, body, {
      headers: { authorization: token ? `Bearer ${token}` : null },
    });
    return response.data;
  } catch (err) {
    const appError = err?.response?.data;
    const axiosError = err;
    return appError || axiosError;
  }
};

export const updateData = async (route, body) => {
  const token = getAuthToken();

  try {
    const response = await axios.patch("/api" + route, body, {
      headers: { authorization: token ? `Bearer ${token}` : null },
    });
    return response.data;
  } catch (err) {
    const appError = err?.response?.data;
    const axiosError = err;
    return appError || axiosError;
  }
};
