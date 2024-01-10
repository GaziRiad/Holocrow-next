"use client";

import { createContext, useContext, useState } from "react";
const FooterContext = createContext();

function FooterProvider({ children }) {
  const [isFooterInView, setIsFooterInView] = useState(false);

  return (
    <FooterContext.Provider value={{ isFooterInView, setIsFooterInView }}>
      {children}
    </FooterContext.Provider>
  );
}

export function useFooter() {
  const context = useContext(FooterContext);
  if (context === undefined)
    throw new Error("FooterContext was used outside of FooterProvider");
  return context;
}

export default FooterProvider;
