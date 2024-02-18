"use client";

import Feature from "@/components/Feature";
import Hero from "@/components/Hero";

import { motion } from "framer-motion";
import Link from "next/link";

//
import enSolutions from "../../../public/translations/en/solutions.json";
import trSolutions from "../../../public/translations/tr/solutions.json";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";
const translations = {
  en: enSolutions,
  tr: trSolutions,
};

function Solutions() {
  const { activeLanguage } = useLanguage();
  const content = translations[activeLanguage];

  useEffect(() => {
    document.title = "Holocrow — Solutions";
  });

  return (
    <div className="relative">
      <Hero />
      <motion.section
        initial={{ opacity: 0, translateY: -150 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 px-4 md:px-0 absolute top-1/3 w-full"
      >
        <div className="flex items-center justify-center gap-8 flex-wrap mb-10 ">
          {content.features.map((feature) => (
            <Link key={feature.name} href={`/solutions/${feature.link}`}>
              <Feature name={feature.name} src={feature.icon} />
            </Link>
          ))}
        </div>

        {/* <p className="text-black-800 text-center text-lg font-normal">
    {content.text}
  </p> */}
      </motion.section>
    </div>
  );
}

export default Solutions;
