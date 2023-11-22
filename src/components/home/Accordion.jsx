import { useState } from "react";
import { motion } from "framer-motion";

function Accordion({ content }) {
  const [isOpen, setIsOpen] = useState(0);

  function handleClick(i) {
    // if (isOpen && i === isOpen) setIsOpen(null);
    if (!isOpen || i !== isOpen) setIsOpen(i);
  }

  return (
    <div className="flex flex-col gap-16 xl:flex-row xl:gap-40">
      <div className="flex flex-col gap-10">
        {content.map((block, i) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 5,
            }}
            key={block.title}
            className="flex flex-col gap-3"
          >
            <p
              className={`text-xl font-semibold cursor-pointer  ${
                isOpen === i ? "text-black-800" : "text-stone-400"
              }`}
              onClick={() => handleClick(i)}
            >
              {isOpen === i ? "- " : "+ "}
              {block.title}
            </p>
            <p
              className={`${isOpen === i ? "block" : "hidden"} text-black-800 `}
            >
              {block.text}
            </p>
          </motion.div>
        ))}
      </div>
      <motion.img
        initial={{ translateY: 1 }}
        animate={{ translateY: 15 }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
        }}
        src={content.at(isOpen).img}
        className=" rounded-2xl shadow-lg xl:w-1/2 xl:shadow-xl"
      />
    </div>
  );
}

export default Accordion;
