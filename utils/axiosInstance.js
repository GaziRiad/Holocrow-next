// const { default: axios } = require("axios");
// const { getTokenFromLocalStorage, addTokenToLocalStorage } = require("./funcs");

// export const customFetch = axios.create({
//   baseURL: "https://api.holocrow.com/api/",
//   headers: {
//     "Content-type": "application/json",
//   },
//   withCredentials: true,
// });

// customFetch.interceptors.request.use(
//   async (config) => {
//     const token = getTokenFromLocalStorage();
//     if (token) {
//       config.headers["Authorization"] = ` bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// const refreshToken = async () => {
//   try {
//     const storedRefreshToken = localStorage.getItem("refreshToken");

//     if (!storedRefreshToken) {
//       throw new Error("Refresh token not found in localStorage");
//     }
//     const resp = await customFetch.post("accounts/login/refresh/", {
//       refresh: storedRefreshToken,
//     });
//     console.log("New access token", resp.data);
//     return resp.data;
//   } catch (e) {
//     console.log("Error", e);
//   }
// };

// customFetch.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async function (error) {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       const resp = await refreshToken();

//       const accessToken = resp.response.access;

//       addTokenToLocalStorage(accessToken);
//       customFetch.defaults.headers.common[
//         "Authorization"
//       ] = `Bearer ${accessToken}`;
//       return customFetch(originalRequest);
//     }
//     return Promise.reject(error);
//   }
// );
