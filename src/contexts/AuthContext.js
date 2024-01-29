"use client";

// AuthContext.js
import React, { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "AUTHENTICATE/USER":
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        accessToken: action.payload.accessToken,
      };
    case "VALIDATE/USER":
      return {
        ...state,
        isVerified: action.payload.isVerified,
      };
    case "UNAUTH/USER":
      return {
        ...state,
        isAuthenticated: false,
        accessToken: null,
        isVerified: false,
      };
    // Add other cases as needed
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    accessToken: null,
    isVerified: false,
  });

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
