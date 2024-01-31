export const formatTime = (time) => {
  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (time % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
};

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
      const newAccessToken = await refreshToken();

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

export async function getUserData() {
  const res = await makeAuthenticatedRequest(
    "https://api.holocrow.com/api/accounts/get-data/",
    {
      method: "GET",
    }
  );
  if (!res.ok) throw new Error("Error getting users data...");
  const data = await res.json();
  return data;
}
