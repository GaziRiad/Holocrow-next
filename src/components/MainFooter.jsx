"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Footer from "./Footer";

function MainFooter() {
  const { activeLanguage } = useLanguage();
  const footer = {
    en: {
      array: [
        {
          icon: "../assets/footer/footer-icon1.png",
          text: "EASY CONNECT",
        },
        {
          icon: "../assets/footer/footer-icon2.png",
          text: "Cancel Anytime",
        },
        {
          icon: "../assets/footer/footer-icon3.png",
          text: "14-Day Free Trial",
        },
      ],
    },
    tr: {
      array: [
        {
          icon: "../assets/footer/footer-icon1.png",
          text: "KOLAY BAĞLANTI",
        },
        {
          icon: "../assets/footer/footer-icon2.png",
          text: "İSTEDİĞİNİZ AN İPTAL",
        },
        {
          icon: "../assets/footer/footer-icon3.png",
          text: "14 GÜNLÜK ÜCRETSİZ DENEME",
        },
      ],
    },
  };

  return (
    <Footer icon="/assets/footer/footerHomeIcon.png" type="home">
      <div className="flex flex-wrap items-center justify-center gap-4 mb-6 md:mb-20 md:gap-10">
        {footer[activeLanguage].array.map((el) => (
          <div
            key={el.text}
            className="flex flex-col items-center justify-center gap-2 md:gap-6"
          >
            <img src={el.icon} className=" scale-75 md:scale-90 lg:scale-100" />
            <p className=" text-white font-semibold uppercase tracking-wide text-center lg:text-lg">
              {el.text}
            </p>
          </div>
        ))}
      </div>
    </Footer>
  );
}

export default MainFooter;
