"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

function Feature({ src, name }) {
  const imageRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    setIsHovered(true);
    const image = imageRef.current;
    if (!image) return;

    const sensitivityFactor = 0.3; // Adjust as needed

    const rect = image.getBoundingClientRect();
    const offsetX = (e.clientX - rect.left) / rect.width - 0.5;
    const offsetY = (e.clientY - rect.top) / rect.height - 0.5;

    const x = offsetX * sensitivityFactor * 100;
    const y = offsetY * sensitivityFactor * 100;

    image.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    const image = imageRef.current;
    if (!image) return;

    image.style.transform = "translate(0, 0)";
  };

  const imgSrc = isHovered
    ? `${
        "../assets/features/" +
        src.split("/").at(-1).split(".")[0] +
        "-yellow.png"
      }`
    : src;

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className=" w-72 flex flex-col items-center justify-center gap-5 "
    >
      <motion.img
        ref={imageRef}
        // initial={{ opacity: 0.8, scale: 1 }}
        // whileHover={{ opacity: 1, scale: 1.2 }}
        // whileHover={{ scale: 1.1 }}
        src={imgSrc}
        className="w-32 md:w-40"
      />
      <p className=" text-black-800 uppercase text-lg font-semibold text-center md:text-xl">
        {name}
      </p>
    </div>
  );
}

export default Feature;
