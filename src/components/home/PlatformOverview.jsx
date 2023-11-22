"use client";

import Heading from "../Heading";
import { motion } from "framer-motion";
import Accordion from "./Accordion";

function PlatformOverview({ content }) {
  return (
    <motion.section
      initial={{ opacity: 0, translateY: 150 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
      className="container mx-auto mb-44 px-4 xl:px-16"
    >
      <Heading type="h2" style="lg:!text-left">
        {content.platformDetails.heading}
      </Heading>

      <div>
        <Accordion content={content.platformDetails.content} />
      </div>
    </motion.section>
  );
}

export default PlatformOverview;
