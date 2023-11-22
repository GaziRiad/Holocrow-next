import { motion } from "framer-motion";

function FirstSection({ content }) {
  return (
    <motion.section
      initial={{ opacity: 0, translateY: 150 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto mb-12 px-10 lg:px-0 lg:mb-40"
    >
      <div className=" text-center text-lg md:text-xl lg:text-2xl flex flex-col gap-4 mb-12 lg:mb-32">
        {content.subHero.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>

      <div className="flex items-start justify-center flex-col gap-12 md:flex-row md:flex-wrap lg:gap-4 xl:px-4">
        {content.firstSection.content.map((el) => (
          <div key={el.title} className="lg:max-w-md 2xl:max-w-md">
            <img src={el.img} className="rounded-2xl mb-6 w-[85%]" />
            <p className="font-semibold mb-2 text-black-800 text-lg">
              {el.title}
            </p>
            <p className="text-black-800 text-base">{el.text}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default FirstSection;
