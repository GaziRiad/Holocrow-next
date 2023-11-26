"use client";

import Button from "../Button";
import Heading from "../Heading";

import { motion } from "framer-motion";
import LinkButton from "../LinkButton";

function HowItWorks({ content }) {
  return (
    <motion.section
      initial={{ opacity: 0, translateY: 150 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
      className="relative mb-32 px-4 bg-primary py-20 md:px-0 overflow-hidden"
    >
      <div className="container mx-auto ">
        <Heading color="white" type="h2">
          {content.howItWorksSection.heading}
        </Heading>

        {content.howItWorksSection.steps.map((step, i) => (
          <div
            key={step.text.title}
            className={`flex flex-col items-center gap-6 sm:gap-10 px-4 sm:px-12 lg:flex-row ${
              i % 2 !== 0 ? "lg:flex-row-reverse" : ""
            } md:mb-20 lg:mb-40 xl:gap-36 lg:px-30 xl:px-44 mb-16 `}
          >
            <div className="z-20">
              <Heading type="h4">{step.text.title}</Heading>
              <p className="text-white text-lg text-center lg:text-left 2xl:text-xl ">
                {step.text.desc}
              </p>
            </div>
            <motion.img
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              viewport={{ once: true }}
              src={step.img}
              className=" w-2/3 lg:w-1/2 mx-auto z-20 rounded-2xl "
            />
          </div>
        ))}
        <div className=" flex flex-col justify-center items-center gap-6">
          <Button bgcolor="white" to="/signup">
            Get started
          </Button>
          <LinkButton to="/howitworks">Learn more</LinkButton>
        </div>
      </div>

      {/* PATTERN */}
      <motion.img
        initial={{ y: 200 }}
        whileInView={{ y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        viewport={{ once: true }}
        src={content.howItWorksSection.patternImg}
        className="absolute top-[8%] right-0 h-[80%] z-10 xl:-top-[7%]"
      />
    </motion.section>
  );
}

export default HowItWorks;
