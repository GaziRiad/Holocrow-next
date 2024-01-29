"use client";

import React, { createContext, useContext, useEffect, useReducer } from "react";

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "AUTHENTICATE/USER":
      const newState = {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
      };

      return newState;
    case "VALIDATE/USER":
      return {
        ...state,
        isVerified: action.payload.isVerified,
      };
    case "UNAUTH/USER":
      return {
        ...state,
        isAuthenticated: false,
        isVerified: false,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    isVerified: false,
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
