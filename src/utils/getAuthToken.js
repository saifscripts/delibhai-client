// export const getAuthToken = () => {
//   return localStorage.getItem("authToken");
// };

// Using Cookie
export const getAuthToken = () => {
  let name = "authToken=";
  let decodedCookie = decodeURIComponent(document.cookie);
  console.log(document.cookie)
  let ca = decodedCookie.split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      console.log(c.substring(name.length, c.length));
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

