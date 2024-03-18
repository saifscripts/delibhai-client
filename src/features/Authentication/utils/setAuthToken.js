import services from "../../../data/services";
import postMessageToSubdomain from "./postMessageToSubdomain";


export const setAuthToken = (token) => {
  localStorage.setItem("authToken", token);

  const data = {
    method: 'set',
    token
  }

  postMessageToSubdomain(data, 'parent')
  services?.forEach(({subdomain, active}) => active && postMessageToSubdomain(data, subdomain));
};

// export const setAuthToken = (token) => {
//   const exdays = 60;
//   const d = new Date();
//   d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
//   let expires = "expires=" + d.toUTCString();
//   document.cookie = "authToken=" + token + ";" + expires;
// };
