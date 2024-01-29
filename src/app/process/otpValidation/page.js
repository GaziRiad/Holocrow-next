"use client";

import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";
import OtpForm from "@/components/Forms/OtpForm";
import { navigation } from "@/constants/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function OtpValidation() {
  const router = useRouter();

  const { isAuthenticated, isVerified } = useAuth().state;

  useEffect(() => {
    if (!isAuthenticated) router.push("/process/signup");
    if (isVerified) router.push("/");
  }, [isAuthenticated, isVerified, router]);

  return (
    <section className="pt-14 pb-14 gradient min-h-screen">
      <header className="container mx-auto flex items-center justify-between mb-24 px-8 lg:px-0 lg:mb-12">
        <Logo />
        <Navigation content={navigation} />
      </header>
      <div className="container mx-auto flex justify-center items-center">
        <div className="relative flex  justify-between bg-white px-8 py-8 rounded-xl shadow-2xl w-[95%] lg:py-12 lg:px-16 lg:w-[75%] xl:w-[60%]">
          <div className="w-full lg:w-[65%] xl:w-[55%]">
            <OtpForm />
          </div>
          <div className="">
            <Image
              height={500}
              width={500}
              alt="holocrow signup form pages"
              src={
                "/assets/sign-up-hand.png"
                // : "/assets/sign-up-cctv.png"
              }
              className="absolute right-4 -top-[10%] w-44 2xl:-top-[12%] 2xl:-right-[14%] lg:w-fit lg:scale-50 lg:-right-[26%] xl:scale-75"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OtpValidation;
