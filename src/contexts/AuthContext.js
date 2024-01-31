"use client";

import React, { createContext, useContext, useEffect, useReducer } from "react";

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "SUBMIT/LOCATION":
      return {
        ...state,
        location: action.payload,
      };
    case "UNAUTH/USER":
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      return;
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    location: false,
  });

  useEffect(() => {
    const storedAccessToken = localStorage.getItem("accessToken");

    // Update the state with the stored access token
    dispatch({
      type: "AUTHENTICATE/USER",
      payload: {
        isAuthenticated: !!storedAccessToken,
      },
    });
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
