export const setAuthToken = (token) => {
  localStorage.setItem("authToken", token);
};

// export const setAuthToken = (token) => {
//   const exdays = 60;
//   const d = new Date();
//   d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
//   let expires = "expires=" + d.toUTCString();
//   document.cookie = "authToken=" + token + ";" + expires + '; domain=delibhai.com path=/';
// };
