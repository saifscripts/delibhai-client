import { useState } from "react";
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

// useUpdateData hook returns loading state and updateData method
export const useUpdateData = () => {
  // Loading State
  const [isLoading, setIsLoading] = useState(false);

  // updateData method directly returns data/error
  const updateData = async (route, body) => {
    const token = getAuthToken();
    let data, error;

    try {
      setIsLoading(true);
      const response = await axios.patch("/api" + route, body, {
        headers: { authorization: token ? `Bearer ${token}` : null },
      });
      data = response.data;
    } catch (err) {
      const appError = err?.response?.data;
      const axiosError = err;
      error = appError || axiosError;
    } finally {
      setIsLoading(false);
    }

    return { data, error };
  };

  return { isLoading, updateData };
};
