import { useState } from "react";
import axios from "./axiosConfig";

// useFetchData hook returns loading state and fetchData method
export const useFetchData = () => {
  // Loading State
  const [isLoading, setIsLoading] = useState(false);

  // fetchData method directly returns data/error
  const fetchData = async (route) => {
    let data, error;

    try {
      setIsLoading(true);
      const response = await axios.get("/api" + route);
      data = response.data;
    } catch (err) {
      console.log(err)
      const appError = err?.response?.data;
      const axiosError = err;
      error = appError || axiosError;
    } finally {
      setIsLoading(false);
    }

    return { data, error };
  };

  return { isLoading, fetchData };
};

// usePostData hook returns loading state and postData method
export const usePostData = () => {
  // Loading State
  const [isLoading, setIsLoading] = useState(false);

  // postData method directly returns data/error
  const postData = async (route, body) => {
    let data, error;

    try {
      setIsLoading(true);
      const response = await axios.post("/api" + route, body);
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

  return { isLoading, postData };
};
