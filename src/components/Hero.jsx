"use client";

import { useInView } from "framer-motion";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { useEffect, useRef, useState } from "react";
import HeroPattern from "./HeroPattern";
import Heading from "./Heading";
import { navigation } from "../constants/navigation";
import Image from "next/image";

import { motion } from "framer-motion";

function Hero({ img, heading, herobg = "hero", noPattern = false }) {
  // Make nav sticky when scrolling
  const [sticky, setSticky] = useState(false);
  const heroRef = useRef();
  const isInView = useInView(heroRef, { once: false, amount: 0.1 });

  useEffect(() => {
    if (isInView) setSticky(false);
    else setSticky(true);
  }, [isInView]);

  return (
    <section ref={heroRef} className={`${herobg} lg:mb-32`}>
      <header
        className={`z-50 top-0 w-full flex justify-between px-8 py-8 items-center lg:justify-around lg:px-0 ${
          sticky
            ? "fixed bg-white shadow-lg md:py-6 2xl:py-8"
            : "absolute pt-10 2xl:pt-20"
        }`}
      >
        <Logo />
        <Navigation content={navigation} sticky={sticky} />
      </header>
      {img && (
        <motion.img
          initial={{ y: -200, x: "-50%" }}
          animate={{ y: 0, x: "-50%" }}
          transition={{ type: "spring", stiffness: 200 }}
          // height={500}
          // width={500}
          alt="hero image"
          src={img}
          className={`absolute left-1/2 -translate-x-1/2 ${
            heading
              ? " w-72 bottom-[35%] lg:bottom-[30%] xl:w-1/4"
              : " w-96 bottom-[20%] md:w-1/2 lg:w-1/4 lg:bottom-[18%] xl:bottom-[20%]"
          } `}
        />
      )}
      {heading && (
        <div className="absolute left-1/2 -translate-x-[50%] bottom-[15%] lg:bottom-[6%]">
          <Heading>{heading}</Heading>
        </div>
      )}

      {!noPattern && <HeroPattern />}
    </section>
  );
}

export default Hero;
