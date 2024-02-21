import { useEffect, useState } from 'react';
import { useFetchData } from '../../../api/api';

const useUserInfo = (id) => {
  const [userInfo, setUserInfo] = useState({});
  const { isLoading, fetchData} = useFetchData();

  useEffect(() => {
    fetchData(`/v1/user/${id}`).then(({data})=> setUserInfo(data.data))
  }, [id]);

  return {isLoading, userInfo};
};

export default useUserInfo;

