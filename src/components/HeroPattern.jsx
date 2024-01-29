import { motion } from "framer-motion";
import Heading from "./Heading";
import Button from "./Button";
import { useLanguage } from "@/contexts/LanguageContext";

function HeroPattern() {
  const { activeLanguage } = useLanguage();

  const pattern = {
    en: {
      heading: "Beyond Watching",
      text: "Detect Perform Protect with AI",
      button: "Connect Now",
    },
    tr: {
      heading: "İzlemenin Ötesinde",
      text: "AI ile Tespit Et Aksiyon Al ve Koru",
      button: "Bağlan",
    },
  };

  return (
    <div className="hidden absolute md:-bottom-[20%] right-0 w-72 lg:block xl:-bottom-[27%] 2xl:-bottom-[20%]">
      <motion.img
        style={{ transformOrigin: "top" }}
        initial={{ scaleY: 0.95 }}
        animate={{ scaleY: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
        }}
        src={"/assets/hero-pattern.png"}
        className="z-10"
      />
      <div className=" z-20 absolute top-[24%] px-4 pl-10 text-center">
        <Heading type="h4" style="!text-center">
          {pattern[activeLanguage].heading}
        </Heading>
        <p className="text-white mb-3 px-6">{pattern[activeLanguage].text}</p>
        <Button to="/process/signup" type="small">
          {pattern[activeLanguage].button}
        </Button>
      </div>
    </div>
  );
}

export default HeroPattern;
