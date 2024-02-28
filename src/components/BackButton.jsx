"use client";

import { useRouter } from "next/navigation";
import { HiArrowLongLeft } from "react-icons/hi2";

function BackButton() {
  const router = useRouter();

  return (
    <button
      className=" bg-stone-700 uppercase text-white px-4 py-2 font-semibold rounded-lg flex items-center justify-center gap-2 ml-auto hover:bg-stone-600 transition-all"
      onClick={() => router.back()}
    >
      <HiArrowLongLeft />
      Go back
    </button>
  );
}

export default BackButton;
