import Link from "next/link";
import Heading from "./Heading";
import Feature from "./Feature";

import { motion } from "framer-motion";

function OtherSolutions({ content }) {
  return (
    <motion.section
      initial={{ opacity: 0, translateY: 150 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto"
    >
      <Heading type="h3" style=" !text-black-800">
        {content.otherSolutions.headline}
      </Heading>
      <div className="flex items-center justify-center gap-8 flex-wrap mb-10  ">
        {content.otherSolutions.features.map((feature) => (
          <Link href={`/solutions/${feature.link}`} key={feature.name}>
            <Feature name={feature.name} src={feature.icon} />
          </Link>
        ))}
      </div>
    </motion.section>
  );
}

export default OtherSolutions;
