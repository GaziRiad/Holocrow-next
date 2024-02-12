"use client";

import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";
import { navigation } from "@/constants/navigation";
import Image from "next/image";
import LocationForm from "@/components/Forms/LocationForm";
import { useEffect, useState } from "react";
import { getUserData } from "../../../utils/funcs";
import DeviceForm from "@/components/Forms/DeviceForm";
import SignupForm from "@/components/Forms/SignupForm";
import OtpForm from "@/components/Forms/OtpForm";
import { FaCheck } from "react-icons/fa6";

function Process() {
  const [userData, setUserData] = useState(null);
  const [currStep, setCurrStep] = useState(null);

  useEffect(() => {
    async function checkUser() {
      const storedAccessToken = localStorage.getItem("accessToken");
      if (!storedAccessToken) return setCurrStep(1);
      const user = await getUserData();

      setUserData(user);
      if (user.register_step === 1) setCurrStep(2);
      if (user.register_step >= 2) setCurrStep(3);
    }
    checkUser();
  }, []);

  const processSteps = [
    { step: 1, name: "Contact Information" },
    { step: 2, name: "OTP Verification" },
    { step: 3, name: "Create Address" },
    { step: 4, name: "Devices Information" },
  ];
  return (
    <section className="pt-14 pb-14 gradient min-h-screen">
      <header className="container mx-auto flex items-center justify-between mb-24 px-8 lg:px-0 lg:mb-12">
        <Logo />
        <Navigation content={navigation} />
      </header>
      <div className="container mx-auto flex justify-center items-center">
        <div className="relative bg-white px-8 py-8 rounded-xl shadow-2xl w-[95%] lg:py-12 lg:px-16 lg:w-[75%] lg:min-h-[80vh] xl:w-[70%] ">
          <div className=" flex items-center justify-center gap-12 md:gap-4 xl:gap-12 mb-6 border-b-2 pb-8">
            {processSteps.map((step) => (
              <div
                className=" flex items-center gap-2 font-semibold"
                key={step.step}
              >
                <p
                  className={`w-6 h-6 ${
                    step.step < currStep ? "bg-primary " : "bg-gray-400 "
                  } text-white rounded-sm flex items-center justify-center`}
                >
                  {step.step < currStep ? <FaCheck /> : `${step.step}`}
                </p>
                <p
                  className={` hidden md:block ${
                    step.step < currStep ? "text-primary " : "text-gray-400 "
                  }`}
                >
                  {step.name}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            <div className="w-full lg:w-[65%] xl:w-[55%]">
              {currStep === 1 && <SignupForm setCurrStep={setCurrStep} />}
              {currStep === 2 && <OtpForm setCurrStep={setCurrStep} />}
              {currStep === 3 && <LocationForm setCurrStep={setCurrStep} />}
              {currStep === 4 && <DeviceForm />}
            </div>
            <div className="">
              <img
                alt="holocrow signup form pages"
                src={`/assets/process/${
                  currStep === 1
                    ? "signup"
                    : currStep === 2
                    ? "OTP"
                    : currStep === 3
                    ? "location"
                    : "device"
                }-icon.png`}
                className="absolute right-4 -top-[10%] w-44 lg:w-fit lg:scale-50 lg:-right-[10%] lg:top-[10%] 2xl:top-[10%] 2xl:right-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
