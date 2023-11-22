"use client";

import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";
import SignupForm from "@/components/signup/SignupForm";
import { navigation } from "@/constants/navigation";
import { useState } from "react";

function SignUp() {
  const [step, setStep] = useState(1);

  return (
    <section className="pt-14 pb-14 gradient min-h-screen">
      <header className="container mx-auto flex items-center justify-between mb-24 px-8 lg:px-0 lg:mb-12">
        <Logo />
        <Navigation content={navigation} />
      </header>
      <div className="container mx-auto flex justify-center items-center">
        <div className="relative flex  justify-between bg-white px-8 py-8 rounded-xl shadow-2xl w-[95%] lg:py-12 lg:px-16 lg:w-[75%] xl:w-[60%]">
          <div className="w-full lg:w-[65%] xl:w-[55%]">
            <SignupForm step={step} setStep={setStep} />
          </div>
          <div className="">
            <img
              alt="holocrow signup form pages"
              src={
                step === 1
                  ? "/assets/sign-up-hand.png"
                  : "/assets/sign-up-cctv.png"
              }
              // className="absolute -top-[12%] -right-[14%] scale-75"
              className="absolute right-4 -top-[10%] w-44 2xl:-top-[12%] 2xl:-right-[14%] lg:w-fit lg:scale-50 lg:-right-[26%] xl:scale-75"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
