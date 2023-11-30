"use client";

import { useEffect, useRef, useState } from "react";
import Button from "./Button";

import { motion, useInView, useScroll } from "framer-motion";

function Footer({ children, icon, btn = "sign up", type = "normal" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1.3", "1 1"],
  });

  // Make background yellow when footer isInView
  const [bgColor, setBgColor] = useState(false);
  const footerRef = useRef();
  const isInView = useInView(footerRef, { once: false, amount: 0.55 });

  useEffect(() => {
    if (isInView) setBgColor(false);
    else setBgColor(true);
  }, [isInView]);

  return (
    <motion.div
      ref={footerRef}
      className={`${bgColor ? "bg-white" : "bg-primary"}`}
    >
      <motion.section
        ref={ref}
        style={{ scale: scrollYProgress, opacity: scrollYProgress }}
        className="px-6 py-8 overflow-hidden"
      >
        <footer className="flex flex-col items-center justify-center relative ">
          {children}
          <div
            className={`relative z-20 flex items-center justify-center ${
              type === "home" ? " mb-12 lg:mb-10" : "lg:mb-2 mb-8"
            }`}
          >
            <img
              src={icon}
              className=" scale-125 md:scale-100 lg:w-[90%] xl:w-[80%]"
            />
            <p
              className={`absolute ${
                type === "home" ? "top-[40%]" : "top-[55%]"
              } left-1/2 translate-x-[-50%] z-10 lg:text-2xl font-bold`}
            >
              #BeyondWatching
            </p>
          </div>
          <p className="text-white font-bold text-4xl tracking-wider absolute top-[66%] lg:top-[60%] xl:tracking-[1.25rem] lg:text-8xl  ">
            Let’s Get Started
          </p>
          <Button to="/signup">{btn}</Button>
        </footer>
      </motion.section>
      <div className="bg-white flex items-center justify-center py-2 lg:py-6">
        <img src="/assets/footer/poweredAYVOS.png" />
      </div>
    </motion.div>
  );
}

export default Footer;
