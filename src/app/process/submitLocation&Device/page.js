"use client";

import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";
import { navigation } from "@/constants/navigation";
import Image from "next/image";
import LocationForm from "@/components/Forms/LocationForm";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getUserData } from "../../../../utils/funcs";
import { useAuth } from "@/contexts/AuthContext";
import DeviceForm from "@/components/Forms/DeviceForm";

function SignUp() {
  const router = useRouter();
  const {
    state: { location },
  } = useAuth();

  useEffect(() => {
    async function checkUrl() {
      const storedAccessToken = localStorage.getItem("accessToken");
      if (!storedAccessToken) return router.push("/");
      const user = await getUserData();

      if (user.register_step !== 2) return router.push("/");
    }
    checkUrl();
  }, [router]);

  return (
    <section className="pt-14 pb-14 gradient min-h-screen">
      <header className="container mx-auto flex items-center justify-between mb-24 px-8 lg:px-0 lg:mb-12">
        <Logo />
        <Navigation content={navigation} />
      </header>
      <div className="container mx-auto flex justify-center items-center">
        <div className="relative flex  justify-between bg-white px-8 py-8 rounded-xl shadow-2xl w-[95%] lg:py-12 lg:px-16 lg:w-[75%] xl:w-[70%]">
          <div className="w-full lg:w-[65%] xl:w-[55%]">
            <div className=" bg-primary text-xl text-white h-8 w-8 rounded-full flex items-center justify-center mb-2">
              {!location ? "1" : "2"}
            </div>
            {!location ? <LocationForm /> : <DeviceForm />}
          </div>
          <div className="">
            <Image
              height={500}
              width={500}
              alt="holocrow signup form pages"
              src={`/assets/${!location ? "location" : "device"}-icon.png`}
              className="absolute right-4 -top-[10%] w-44 lg:w-fit lg:scale-50 lg:-right-[10%] lg:top-[10%] 2xl:top-[10%] 2xl:right-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
