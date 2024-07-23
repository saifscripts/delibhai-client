import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchData } from "../../../lib/api/api";
import { getAuthUser } from "../../../redux/features/auth/authSlice";

const useUserInfo = (id) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const user = useSelector(getAuthUser);

  useEffect(() => {
    setIsLoading(true);
    if (user?._id === id) {
      setUserInfo(user);
      setIsLoading(false);
    } else {
      fetchData(`/v1/user/${id}`).then((data) => {
        if (data.success) {
          setUserInfo(data.data);
        } else {
          setUserInfo(null);
        }
        setIsLoading(false);
      });
    }
  }, [id, user]);

  return { isLoading, userInfo };
};

export default useUserInfo;
