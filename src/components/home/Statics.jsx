"use client";

import Heading from "../Heading";
import Static from "./Static";

import { motion } from "framer-motion";

function Statics({ content }) {
  return (
    <motion.section
      initial={{ opacity: 0, translateY: 150 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto mb-64 px-4 md:px-0"
    >
      <Heading type="tag">#EmpoweredbyAI</Heading>
      <div className="flex flex-col items-center justify-center gap-28 lg:flex-row lg:flex-wrap lg:gap-40">
        {content.statics.map((stat) => (
          <Static key={stat.title} number={stat.number} name={stat.title} />
        ))}
        {/* <Static number="1K+" name="active users" />
        <Static number="10" name="years of experience" />
        <Static number={`2B Per min`} name="images generated" /> */}
      </div>
    </motion.section>
  );
}

export default Statics;
