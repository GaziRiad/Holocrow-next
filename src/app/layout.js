import "./globals.css";
import LanguageContext from "../contexts/LanguageContext";
import FooterProvider from "@/contexts/FooterContext";

export const metadata = {
  title: "Holocrow",
  description:
    "Holocrow is a group of human beings dedicated to solving real-world problems by applying fundamental engineering principles. Since 2014, our passionate team members have been developing various solutions using deep neural networks and computer vision for different use cases across verticals such as Retail & FMCG, Wide Area Security & Surveillance, Operational Excellence, and Work & Health Safety (WHS & OHS). These solutions were integrated into components that formed the Holocrow ecosystem in 2022.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageContext>
          <FooterProvider>{children}</FooterProvider>
        </LanguageContext>
      </body>
    </html>
  );
}
