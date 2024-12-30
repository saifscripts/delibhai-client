import axios from '../lib/api';
import generateErrorMessage from '../utils/generateErrorMessage';

export const getRiders = async (searchParams, page) => {
  const params = new URLSearchParams(searchParams);
  params.set('page', page);

  try {
    const { data } = await axios.get(`/rider?${params.toString()}`);
    return data;
  } catch (error) {
    throw new Error(generateErrorMessage(error));
  }
};

export const addRiderServiceArea = async (body) => {
  try {
    const { data } = await axios.post(`/rider/service-area/`, body);
    return data;
  } catch (error) {
    console.log(generateErrorMessage(error));
  }
};

export const deleteRiderServiceArea = async (id) => {
  try {
    const { data } = await axios.delete(`/rider/service-area/${id}`);
    return data;
  } catch (error) {
    throw new Error(generateErrorMessage(error));
  }
};
