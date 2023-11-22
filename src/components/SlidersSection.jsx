"use client";

import Heading from "./Heading";
import HeadingDescription from "./HeadingDescription";
import Slider from "./Slider";

import { motion } from "framer-motion";

function SlidersSection({ content }) {
  return (
    <motion.section
      initial={{ opacity: 0, translateY: 150 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
      className="container mx-auto mb-32 px-4 md:px-0"
    >
      <Heading>{content.slidersSection.heading}</Heading>
      <HeadingDescription>
        {content.slidersSection.subHeading}
      </HeadingDescription>

      {content.slidersSection.sliders.map((slider) => (
        <Slider slider={slider} key={slider.heading} />
      ))}
    </motion.section>
  );
}

export default SlidersSection;
