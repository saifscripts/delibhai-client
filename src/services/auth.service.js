import axios from "../lib/api";

export const registerRider = async (body) => {
  try {
    const { data } = await axios.post("/auth/register-rider", body);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const verifyOTP = async (body) => {
  try {
    const { data } = await axios.post("/auth/verify-otp", body);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const resendOTP = async (body) => {
  try {
    const { data } = await axios.post("/auth/resend-otp", body);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
