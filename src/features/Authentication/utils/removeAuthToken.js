import services from "../../../data/services";
import postMessageToSubdomain from "./postMessageToSubdomain";

export const removeAuthToken = () => {
  localStorage.removeItem("authToken");

  const data = {
    method: "remove",
  };

  postMessageToSubdomain(data, "parent");
  services?.forEach(
    ({ subdomain, active }) => active && postMessageToSubdomain(data, subdomain)
  );
};

// export const removeAuthToken = () => {
//     const d = new Date();
//     d.setTime(d.getTime() -  10000);
//     let expires = "expires=" + d.toUTCString();
//     document.cookie = "authToken=" + ";" + expires;
// }
