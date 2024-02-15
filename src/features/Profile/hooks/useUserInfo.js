
// others
import { useEffect, useState } from 'react';
import { useFetchData } from '../../../api/api';

const useUserInfo = (id) => {
  const [userInfo, setUserInfo] = useState({});
  const { fetchData} = useFetchData();

  useEffect(() => {
    fetchData(`/v1/user/${id}`).then(({data})=> setUserInfo(data.data))
  }, [id]);

  return [userInfo];
};

export default useUserInfo;

