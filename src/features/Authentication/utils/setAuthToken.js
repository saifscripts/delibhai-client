import postMessageToSubdomains from "./postMessageToSubdomains";

export const setAuthToken = (token) => {
  postMessageToSubdomains({
    method: "set",
    token,
  });
};
