import SubHero from "../SubHero";

import { motion } from "framer-motion";

function FirstSection({ content }) {
  return (
    <section className="container mx-auto mb-12 px-10 lg:px-0 lg:mb-40">
      <SubHero content={content.subHero} />

      <div className="flex items-start justify-center flex-col gap-12 md:flex-row md:flex-wrap lg:gap-4 xl:px-4">
        {content.firstSection.content.map((el) => (
          <div key={el.title} className="lg:max-w-md 2xl:max-w-md">
            <motion.img
              whileHover={{
                y: -20,
              }}
              src={el.img}
              className="rounded-2xl mb-6 w-[85%]"
            />
            <p className="font-semibold mb-2 text-black-800 text-lg">
              {el.title}
            </p>
            <p className="text-black-800 text-base">{el.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FirstSection;
