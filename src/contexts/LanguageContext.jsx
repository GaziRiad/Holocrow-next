"use client";

import { createContext, useContext, useState } from "react";
const LanguageContext = createContext();

function LanguageProvider({ children }) {
  // set lang in localStorage

  // const [activeLanguage, setActiveLanguage] = useState("en");
  const [activeLanguage, setActiveLanguage] = useState(
    localStorage.getItem("lang") || "en"
  );
  console.log(activeLanguage);

  return (
    <LanguageContext.Provider value={{ activeLanguage, setActiveLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined)
    throw new Error("LanguageContext was used outside of LanguageProvider");
  return context;
}

export default LanguageProvider;
