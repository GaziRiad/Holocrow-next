"use client";

import Link from "next/link";

import { useEffect, useState } from "react";
import Logo from "./Logo";
// import { useLanguage } from "../contexts/LanguageContext";
import { FaChevronDown } from "react-icons/fa6";
import Button from "./Button";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { navigation } from "@/constants/navigation";

function Navigation({ sticky, home = false }) {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [displayLangs, setDisplayLangs] = useState(false);

  const { activeLanguage, setActiveLanguage } = useLanguage();

  function changeActiveLang(lang) {
    setActiveLanguage(lang);
    localStorage.setItem("lang", lang);
  }

  useEffect(() => {
    if (navIsOpen) document.body.style.overflow = "hidden";
    if (!navIsOpen) document.body.style.overflow = "auto";
  }, [navIsOpen]);
  const textColor = sticky
    ? "text-black-800"
    : !sticky && home
    ? "text-white"
    : "text-black-800";
  return (
    <nav>
      <ul
        className={`hidden ${textColor} gap-4 items-center justify-center lg:flex xl:gap-6 2xl:gap-8 xl:text-base 2xl:text-lg relative`}
      >
        {navigation[activeLanguage].links.map((nav) => (
          <Link key={nav.text} href={nav.path}>
            <li className="cursor-pointer translate-x-0 origin-left hover:text-primary hover:translate-x-1 transition-all">
              {nav.text}
            </li>
          </Link>
        ))}
        <ul className=" text-primary flex flex-col items-start justify-center gap-3 relative ">
          {navigation[activeLanguage].languages.map((lang) => {
            if (lang.attribute === activeLanguage)
              return (
                <button
                  key={lang.attribute}
                  className={`flex items-center justify-center gap-2 `}
                  onClick={() => setDisplayLangs((cur) => !cur)}
                >
                  <span>{lang.lang}</span>
                  <span>
                    <FaChevronDown size={16} />
                  </span>
                </button>
              );
          })}

          {displayLangs && (
            <ul className="absolute top-10 flex flex-col gap-3">
              {navigation[activeLanguage].languages.map((lang) => {
                if (lang.attribute !== activeLanguage)
                  return (
                    <li
                      className=" cursor-pointer"
                      key={lang.attribute}
                      onClick={() => {
                        // setActiveLanguage(lang.attribute);
                        changeActiveLang(lang.attribute);
                        setDisplayLangs(false);
                      }}
                    >
                      {lang.lang}
                    </li>
                  );
              })}
            </ul>
          )}
        </ul>

        <Button type="navigation" to="https://app.holocrow.com/">
          {navigation[activeLanguage].button}
        </Button>
      </ul>

      {navIsOpen && (
        <div
          className={`absolute inset-0 h-screen z-10 bg-primary lg:hidden  `}
        >
          <Logo
            src="images/Holocrow-logo-white.png"
            styling="pt-12 pl-8 w-48"
          />

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white text-2xl flex flex-col items-center mt-44 gap-6 "
          >
            <ul className="flex gap-3 text-black-800">
              {navigation[activeLanguage].languages.map((lang) => {
                return (
                  <li
                    className={`${
                      activeLanguage === lang.attribute ? "" : "opacity-50"
                    }`}
                    key={lang.attribute}
                    onClick={() => {
                      // setActiveLanguage(lang.attribute);
                      changeActiveLang(lang.attribute);
                      setDisplayLangs(false);
                    }}
                  >
                    {lang.lang}
                  </li>
                );
              })}
            </ul>
            {navigation[activeLanguage].links.map((nav) => (
              <Link key={nav.text} href={nav.path}>
                {/*  translate-x-0 origin-left hover:text-primary hover:translate-x-1 transition-all */}
                <li className="cursor-pointer hover:text-primary hover:translate-x-1 transition-all">
                  {nav.text}
                </li>
              </Link>
            ))}
            <Button type="mobile-navigation" to="https://app.holocrow.com/">
              {navigation[activeLanguage].button}
            </Button>
          </motion.ul>
        </div>
      )}
      {/* MOBILE MENU */}
      <div
        className={`cursor-pointer absolute ${
          sticky ? "top-1/2 -translate-y-[35%]" : ""
        } right-10 z-20 lg:hidden`}
        onClick={() => setNavIsOpen(!navIsOpen)}
      >
        <div
          className={`${navIsOpen ? " -rotate-45" : ""} w-12 h-1 mb-1.5 ${
            navIsOpen ? "bg-white" : "bg-primary"
          } duration-500`}
        ></div>
        <div
          className={`${navIsOpen ? "hidden" : "block"} w-12 h-1 mb-1.5 ${
            navIsOpen ? "bg-white" : "bg-primary"
          } duration-500 `}
        ></div>
        <div
          className={`${
            navIsOpen ? "rotate-45 -translate-y-2" : ""
          } w-12 h-1 mb-1.5 ${
            navIsOpen ? "bg-white" : "bg-primary"
          } duration-500 `}
        ></div>
      </div>
    </nav>
  );
}

export default Navigation;
