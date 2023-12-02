import { motion } from "framer-motion";

function Static({ number, name }) {
  const isImageStat = number.includes("min") || number.includes("Dakikada");
  const displayedNum = isImageStat ? number.split(" ") : number;

  return (
    <motion.div className="font-bold relative">
      <p className="text-black-800 uppercase text-xl tracking-[5px] sm:tracking-[10px] sm:text-2xl">
        {name}
      </p>
      <div className="text-primary text-5xl text-center absolute -z-10 top-[-35%] left-1/2 translate-x-[-50%] sm:text-7xl sm:top-[-60%]">
        {isImageStat ? (
          <div className="flex flex-col">
            <span className=" mb-[-10px]">{displayedNum[0]}</span>
            <span className="text-2xl">{displayedNum.slice(1).join(" ")}</span>
          </div>
        ) : (
          displayedNum
        )}
      </div>
    </motion.div>
  );
}

export default Static;
