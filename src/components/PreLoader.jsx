"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

function PreLoader({ setPreloader }) {
  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 2000);
  }, [setPreloader]);

  return (
    <motion.div
      animate={{ borderRadius: 0 }}
      className="fixed bottom-0 left-1/2 -translate-x-1/2 bg-amber-400 z-[9999] flex items-center justify-center transition-all rounded-t-full"
    >
      <motion.div
        className=" flex items-center justify-center"
        initial={{ width: 450, height: 250 }}
        animate={{
          width: "100vw",
          height: "100vh",
          scale: 1.5,
        }}
        transition={{
          ease: "linear",
          duration: 0.5,
          when: "beforeChildren",
          staggerChildren: 0.5,
        }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-8xl text-white font-bold"
        >
          #SEE BEYOND
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default PreLoader;
