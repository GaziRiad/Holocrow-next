"use client";

import Logo from "../Logo";
import Navigation from "../Navigation";
// import { FaPlay } from "react-icons/fa6";
import Socials from "./Socials";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import HeroPattern from "../HeroPattern";

import { motion } from "framer-motion";

function HeroMain({ content }) {
  // Hero video
  const [isPlaying, setIsPlaying] = useState(false);

  // Make nav sticky when scrolling
  const [sticky, setSticky] = useState(false);
  const heroRef = useRef();
  const isInView = useInView(heroRef, { once: false, amount: 0.1 });

  useEffect(() => {
    if (isInView) setSticky(false);
    else setSticky(true);
  }, [isInView]);

  useEffect(() => {
    // Disable body scroll when the video is open
    if (isPlaying) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup the effect
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isPlaying]);

  return (
    <>
      <section ref={heroRef} className={`h-screen w-full mb-8 lg:mb-44`}>
        <video
          className="w-full h-full object-cover object-center cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: 0 });
            setIsPlaying(true);
          }}
          muted
          loop
          autoPlay
          playsInline
          loading="lazy"
          src="/videos/hero-preview.mp4"
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
          <Navigation sticky={sticky} home={true} />
        </header>

        <div className="absolute top-[25%] left-1/2 -translate-x-[50%] flex flex-col gap-8 text-white text-4xl items-center font-extrabold lg:top-[40%] xl:left-1/2 xl:gap-28 xl:text-6xl 2xl:text-8xl lg:flex-row">
          <p>{content.hero.text[0]}</p>
          <img
            src={content.hero.img}
            className="w-20 lg:w-32 h-auto"
            alt="camera vector for holocrow"
          />
          <p className=" opacity-50">{content.hero.text[1]}</p>
        </div>

        <span className="absolute top-[92%] ml-8 sm:ml-8 lg:left-[10%] ">
          <Socials />
        </span>

        <HeroPattern sticky={sticky} />
      </section>
      {isPlaying && (
        <div className=" absolute top-0 left-0 w-full h-screen z-50 animate-fade animate-duration-[600ms] animate-delay-0 animate-ease-in">
          <video
            className="w-full h-full object-cover object-center"
            autoPlay
            src="/videos/hero-video-main.mp4"
            type="video/mp4"
          ></video>

          <button>
            <motion.img
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsPlaying(false)}
              src="/assets/closing.svg"
              className=" w-16 h-16 absolute top-10 right-4"
            />
          </button>
        </div>
      )}
    </>
  );
}

export default HeroMain;
