import { motion } from "framer-motion";
import Heading from "../Heading";
import HeadingDescription from "../HeadingDescription";

function ProductsSection({ content }) {
  return (
    <motion.section
      initial={{ opacity: 0, translateY: 150 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto mb-12 px-10 lg:px-0 lg:mb-40 xl:px-4"
    >
      <Heading type="h2">{content.productsSection.heading}</Heading>
      <HeadingDescription>
        {content.productsSection.subHeading}
      </HeadingDescription>
      <div className="container mx-auto text-center flex flex-col gap-8 md:flex-row md:flex-wrap ">
        {content.productsSection.content.map((el) => (
          <div key={el.title} className="w-full md:w-1/3 xl:w-1/4 mx-auto">
            <img src={el.icon} className="mx-auto w-24 mb-6" alt={el.title} />
            <p className="font-semibold mb-2 text-black-800 2xl:text-lg">
              {el.title}
            </p>
            <p className="text-black-800 lg:text-base 2xl:text-lg">{el.text}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default ProductsSection;
