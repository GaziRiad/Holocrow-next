export const formatTime = (time) => {
  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (time % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
};

export const getTokenFromLocalStorage = () => {
  const storedAccessToken = localStorage.getItem("accessToken");
  return storedAccessToken;
};

export const addTokenToLocalStorage = (token) => {
  return localStorage.setItem("accessToken", token);
};

//

export const refreshToken = async () => {
  const storedRefreshToken = localStorage.getItem("refreshToken");

  if (!storedRefreshToken) {
    throw new Error("Refresh token not found in localStorage");
  }

  const res = await fetch(
    `https://api.holocrow.com/api/accounts/login/refresh/
  `,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh: storedRefreshToken,
      }),
    }
  );

  const data = await res.json();
  console.log("New access token", data.access);
  localStorage.setItem("accessToken", data.access);

  return data.access;
};

//

export const makeAuthenticatedRequest = async (url, options) => {
  try {
    const storedAccessToken = localStorage.getItem("accessToken");

    if (!storedAccessToken) {
      throw new Error("Access token not found in localStorage");
    }

    const res = await fetch(url, {
      ...options,
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${storedAccessToken}`,
      },
    });

    if (res.status === 401) {
      console.log("Access token expired. Refreshing...");

      const newAccessToken = await refreshToken();

      console.log(newAccessToken);

      // Retry the request with the new access token
      return await fetch(url, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${newAccessToken}`,
        },
      });
    }

    return res;
  } catch (error) {
    console.error("Error making authenticated request:", error);
    throw error;
  }
};
