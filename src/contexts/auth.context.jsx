import { useQueryClient } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";
import {
  getAuthToken,
  removeAuthToken,
  setAuthToken,
} from "../utils/authToken";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const queryClient = useQueryClient();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = getAuthToken();
    if (token) {
      const decoded = jwtDecode(token);
      setUser(decoded);
    }
    setIsLoading(false);
  }, []);

  const setAuthUser = (token) => {
    setAuthToken(token);
    const decoded = jwtDecode(token);
    setUser(decoded);
  };

  const logout = () => {
    removeAuthToken();
    queryClient.resetQueries({ queryKey: ["ME"] });
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setAuthUser, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};
