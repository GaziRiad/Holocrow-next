"use client";

import { motion } from "framer-motion";

function CardsSection({ content }) {
  return (
    <motion.section
      initial={{ opacity: 0, translateY: 150 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-grayish-200 py-4 lg:py-32"
    >
      <section className=" container mx-auto grid grid-cols-1 justify-items-center gap-y-8 md:grid-cols-2 lg:gap-y-12 lg:gap-x-10 lg:px-24 xl:px-0 xl:grid-cols-4 xl:gap-4 2xl:gap-x-16 mb-12 lg:mb-20 ">
        {content.cardsSection.map((card, i) => (
          <div
            key={card.title}
            className={`bg-white shadow-md w-[90%] px-4 py-6 flex flex-col items-center gap-4 rounded-xl sm:px-8 sm:w-[70%] md:w-[95%] lg:w-full xl:px-2 2xl:px-8 ${
              i % 2 !== 0 ? "mt-8 " : " mb-8"
            }`}
          >
            <img src={card.icon} className="w-20" />
            <p className="text-xl mb-4 text-center lg:text-left lg:text-2xl text-primary font-semibold">
              {card.title}
            </p>
            <ul className="flex flex-wrap gap-4">
              {card.options.map((text, i) => (
                <li
                  key={i}
                  className="text-base text-black-400 text-center leading-tight shadow-md bg-white rounded-full px-3 py-2 hover:bg-primary hover:text-white transition-all"
                >
                  {text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </motion.section>
  );
}

export default CardsSection;
