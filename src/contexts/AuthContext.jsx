/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from "react";
import { useFetchData, usePostData } from "../api/api";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const { fetchData } = useFetchData();
  const { isLoading, postData } = usePostData();
  const [currentUser, setCurrentUser] = useState(null);

  // To get current user in initial loading
  useEffect(() => {
    fetchData("/v1/user/me").then(({ data }) => {
      setCurrentUser(data?.data);
    });
  }, []);

  // Signup method receives userData, complete signup and set the current user+token
  const signup = async (userData) => {
    // Send userData to the server using POST method
    const { data, error } = await postData("/v1/user/signup", userData);

    // If signup is successful, set the token to the local storage and update current user
    if (data?.success) {
      const { token } = data.data;
      localStorage.setItem("authToken", token);
      setCurrentUser(data?.data?.user);
    }

    // Returns same data sent from the server
    return { data, error };
  };

  // Login method receives userData, complete login and set the current user+token
  const login = async (userData) => {
    const { data, error } = await postData("/v1/user/login", userData);

    // If login is successful, set the token to the local storage and update current user
    if (data?.success) {
      const { token } = data.data;
      localStorage.setItem("authToken", token);
      setCurrentUser(data?.data?.user);
    }

    // Returns same data sent from the server
    return { data, error };
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ isLoading, currentUser, setCurrentUser, signup, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
