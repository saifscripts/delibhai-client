// export const removeAuthToken = () => {
//     localStorage.removeItem("authToken");
// }

export const removeAuthToken = () => {
    const d = new Date();
    d.setTime(d.getTime() -  10000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = "authToken=" + ";" + expires;
}