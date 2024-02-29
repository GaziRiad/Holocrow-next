import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

function Static({ stats, name }) {
  const { activeLanguage } = useLanguage();

  const isImageStat = name.includes("Images") || name.includes("Görüntü");

  return (
    <motion.div className="font-bold relative">
      <p className="text-black-800 uppercase text-xl tracking-[5px] sm:tracking-[10px] sm:text-2xl">
        {name}
      </p>
      <div className="text-primary text-5xl text-center absolute -z-10 top-[-35%] left-1/2 translate-x-[-50%] sm:text-7xl sm:top-[-60%]">
        {isImageStat ? (
          <div className="flex flex-col">
            <span className=" mb-[-10px]">{stats?.processed_imgs}</span>
            <span className="text-2xl">{`${
              activeLanguage === "en" ? "Per min" : "Dakikad"
            }`}</span>
          </div>
        ) : (
          `${
            name === "Active Users" || name === "AKTİF KULLANICI"
              ? stats?.active_users
              : stats?.cameras
          }`
        )}
      </div>
    </motion.div>
  );
}

export default Static;
