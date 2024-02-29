"use client";

import { useEffect, useState } from "react";
import Heading from "../Heading";
import Static from "./Static";
import { motion } from "framer-motion";
import { client } from "../../../sanity/lib/client";

function Statics({ content }) {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    async function getStats() {
      const data = await client.fetch(
        `*[_type == "stats"] {active_users, cameras, processed_imgs }`
      );

      setStats(...data);
      return data;
    }
    getStats();
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, translateY: 150 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto mb-64 px-4 md:px-0"
    >
      <Heading type="tag">#EmpoweredbyAI</Heading>
      <div className="flex flex-col items-center justify-center gap-28 lg:flex-row lg:flex-wrap lg:gap-40">
        {content.statics.map((stat) => (
          <Static key={stat.title} stats={stats} name={stat.title} />
        ))}
      </div>
    </motion.section>
  );
}

export default Statics;
