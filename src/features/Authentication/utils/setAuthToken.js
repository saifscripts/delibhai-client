import services from "../../../data/services";


export const setAuthToken = (token) => {
  localStorage.setItem("authToken", token);
  postCrossDomainMessage(token, 'parent')
  services?.forEach(({subdomain, active}) => active && postCrossDomainMessage(token, subdomain));
};

// export const setAuthToken = (token) => {
//   const exdays = 60;
//   const d = new Date();
//   d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
//   let expires = "expires=" + d.toUTCString();
//   document.cookie = "authToken=" + token + ";" + expires;
// };

function postCrossDomainMessage(msg, subdomain) {
  const win = document.getElementById(`${subdomain}_frame`).contentWindow;
  win.postMessage(msg, "*");
}
