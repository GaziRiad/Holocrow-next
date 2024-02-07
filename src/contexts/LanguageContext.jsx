"use client";

import { createContext, useContext, useEffect, useState } from "react";
const LanguageContext = createContext();

function LanguageProvider({ children }) {
  const [activeLanguage, setActiveLanguage] = useState("en");

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang) {
      setActiveLanguage(storedLang);
    }
  }, []);

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
