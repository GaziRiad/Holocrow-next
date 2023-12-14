"use client";

import Heading from "./Heading";
import { motion } from "framer-motion";

function TrustedBySection({ content }) {
  return (
    <motion.section
      initial={{ opacity: 0, translateY: 150 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
      className={` container mx-auto mb-44 px-4 pt-14 md:px-0`}
    >
      <Heading>{content.trustedBySection.heading}</Heading>
      <div className="flex flex-wrap justify-center items-center gap-12">
        {content.trustedBySection.companies.map((company) => (
          <img
            key={company}
            src={company}
            // className=" w-20 h-20 lg:w-28 lg:h-28"
            className=" scale-75 justify-self-center"
          />
        ))}
      </div>
    </motion.section>
  );
}

export default TrustedBySection;
