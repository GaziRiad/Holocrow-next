"use client";

import Feature from "@/components/Feature";
import Hero from "@/components/Hero";

import { motion } from "framer-motion";
import Link from "next/link";

function solutions() {
  const content = {
    heading: "Get better",
    text: "by seamlessly integrating with existing cameras in facilities",
    features: [
      {
        icon: "../assets/features/security.png",
        name: "Security",
        link: "security",
      },
      {
        icon: "../assets/features/safety.png",
        name: "Workplace-Safety",
        link: "workplace-safety",
      },
      {
        icon: "../assets/features/efficiency.png",
        name: "OPERATIONAL EXCELLENCE",
        link: "operational-excellence",
      },
      {
        icon: "../assets/features/sales-marketing.png",
        name: "RETAIL & FMCG",
        link: "retail",
      },
    ],
  };

  return (
    <div className="relative">
      <Hero />
      <motion.section
        initial={{ opacity: 0, translateY: 150 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 px-4 md:px-0 absolute top-1/3 w-full"
      >
        <div className="flex items-center justify-center gap-8 flex-wrap mb-10 ">
          {content.features.map((feature) => (
            <Link key={feature.name} href={`/${feature.link}`}>
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

export default solutions;
