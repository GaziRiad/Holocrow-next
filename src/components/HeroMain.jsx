"use client";

import Logo from "./Logo";
import Navigation from "./Navigation";
// import { FaPlay } from "react-icons/fa6";
import Socials from "./Socials";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import HeroPattern from "./HeroPattern";
import { navigation } from "../constants/navigation";

function HeroMain() {
  // Make nav sticky when scrolling
  const [sticky, setSticky] = useState(false);
  const heroRef = useRef();
  const isInView = useInView(heroRef, { once: false, amount: 0.1 });

  useEffect(() => {
    if (isInView) setSticky(false);
    else setSticky(true);
  }, [isInView]);

  return (
    <section
      ref={heroRef}
      className="h-screen w-full cursor-pointer mb-8 lg:mb-44 "
    >
      <video
        className="w-full h-full object-cover object-center"
        muted
        loop
        autoPlay
        playsInline
        loading="lazy"
        // src="/videos/hero-preview-2.mp4"
        src="/videos/hero-preview-3.mp4"
        type="video/mp4"
      ></video>

      <header
        className={`${
          sticky
            ? "bg-white fixed shadow-xl py-8 md:py-6 2xl:py-8 "
            : "absolute pt-10 2xl:pt-20"
        } z-50 top-0 w-full flex justify-between px-10 items-center lg:justify-around lg:px-0`}
      >
        <Logo />
        <Navigation content={navigation} sticky={sticky} home={true} />
      </header>

      {/* VID OVERLAY */}
      <div className="absolute top-[25%] left-1/2 -translate-x-[50%] flex flex-col gap-8 text-white text-4xl items-center font-extrabold lg:top-[40%] xl:left-1/2 xl:gap-28 xl:text-6xl 2xl:text-8xl lg:flex-row">
        <p>Beyond</p>
        <img
          // width={32}
          // height={32}
          src="/images/camera-vector.png"
          className="w-20 lg:w-32 h-auto"
          alt="camera vector for holocrow"
        />
        <p className=" opacity-50">Watching</p>
      </div>

      {/* <motion.span className="border rounded-full p-8 absolute top-[65%] left-1/2 -translate-x-[70%] cursor-pointer ">
        <FaPlay size={56} color="white" />
      </motion.span> */}
      <span className="absolute top-[92%] ml-8 sm:ml-8 lg:left-[10%] ">
        <Socials />
      </span>

      <HeroPattern />
    </section>
  );
}

export default HeroMain;
