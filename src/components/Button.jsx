import { motion } from "framer-motion";
import Link from "next/link";

function Button({ children, type = "medium", to }) {
  if (type === "mobile-navigation")
    return (
      <motion.button
        className={`rounded-full shadow-sm uppercase text-lg tracking-wide bg-white text-black-800 text-center font-secondary font-semibold px-6 py-1.5`}
        // whileTap={{ scale: 0.9 }}
      >
        {children}
      </motion.button>
    );

  if (type === "navigation")
    return (
      <motion.button
        className={`rounded-full shadow-sm uppercase tracking-wider bg-primary text-white text-center font-secondary font-semibold px-8 py-2`}
        // whileTap={{ scale: 0.9 }}
      >
        {children}
      </motion.button>
    );

  if (type === "small")
    return (
      <Link
        href={to}
        className={`rounded-full shadow-sm uppercase text-xs tracking-wide bg-white text-primary text-center font-secondary font-bold px-3 py-3 `}
        // whileTap={{ scale: 0.9 }}
      >
        {children}
      </Link>
    );

  if (type === "medium")
    return (
      <Link
        href={to}
        className={`rounded-full shadow-sm uppercase tracking-wider bg-white text-primary text-sm text-center font-secondary font-bold px-6 py-3.5 md:text-lg`}
        // whileHover={{ scale: 1.1 }}
        // whileTap={{ scale: 0.9 }}
      >
        {children}
      </Link>
    );
}

export default Button;
