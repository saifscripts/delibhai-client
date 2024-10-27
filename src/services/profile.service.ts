import axios from "../lib/api";

export const removeAvatar = async () => {
  const { data } = await axios.delete("/user/avatar");
  return data;
};
