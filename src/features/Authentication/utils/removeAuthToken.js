import postMessageToSubdomains from "./postMessageToSubdomains";

export const removeAuthToken = () => {
  postMessageToSubdomains({
    method: "remove",
  });
};
