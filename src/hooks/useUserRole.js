import { useEffect, useState } from "react";
import { fetchData } from "../lib/api/api";

const useUserRole = () => {
  const [role, setRole] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchData("/v1/user/me")
      .then((data) => {
        if (data?.success) {
          setIsLoggedIn(true);
          setRole(data?.data?.role);
        }
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  return { isLoggedIn, role, isLoading };
};

export default useUserRole;
