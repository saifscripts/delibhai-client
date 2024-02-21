import { useEffect, useState } from 'react';
import { useFetchData } from '../../../api/api';
import { useAuth } from '../../../contexts/AuthContext';

const useUserInfo = (id) => {
  const [userInfo, setUserInfo] = useState({});
  const { isLoading, fetchData} = useFetchData();
  const {currentUser} = useAuth();

  useEffect(() => {
    if (currentUser?._id === id) {
      setUserInfo(currentUser)
    } else {
      fetchData(`/v1/user/${id}`).then(({data})=> setUserInfo(data.data))
    }

  }, [id, currentUser]);

  return {isLoading, userInfo};
};

export default useUserInfo;

