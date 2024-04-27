import { useEffect, useState } from "react";
import { useAuth } from "../../../features/Authentication/contexts/AuthContext";
import { fetchData } from "../../../lib/api/api";

const useUserInfo = (id) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { currentUser } = useAuth();

  useEffect(() => {
    setIsLoading(true);
    if (currentUser?._id === id) {
      setUserInfo(currentUser);
      setIsLoading(false);
    } else {
      fetchData(`/v1/user/${id}`).then((data) => {
        if(data.success) {
          setUserInfo(data.data)
          setIsLoading(false);
        }
      });
    }
  }, [id, currentUser]);

  return { isLoading, userInfo };
};

export default useUserInfo;
