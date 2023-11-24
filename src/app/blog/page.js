"use client";

import Hero from "@/components/Hero";
import MainFooter from "@/components/MainFooter";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

function About() {
  const slides = [
    {
      img: "/assets/aboutUs/mission-img.png",
      title: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      img: "/assets/aboutUs/mission-img.png",
      title: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      img: "/assets/aboutUs/mission-img.png",
      title: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      img: "/assets/aboutUs/mission-img.png",
      title: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      img: "/assets/aboutUs/mission-img.png",
      title: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      img: "/assets/aboutUs/mission-img.png",
      title: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
  ];

  const breakpoints = {
    768: {
      slidesPerView: 2,
      spaceBetween: 80,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 120,
    },
  };

  return (
    <>
      <div className="mb-20 bg-slate-400">
        <Hero herobg="" noPattern={true} />
      </div>

      <section className="mt-72 container mx-auto mb-12 px-4 flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-24 xl:gap-32 lg:px-16 lg:mb-40 relative">
        <img
          src={"/assets/aboutUs/mission-img.png"}
          // alt={content.thirdSection.heading}
          className="rounded-xl w-3/4 lg:w-[35%] xl:w-[30%]"
        />
        <div className="flex flex-col text-black-800">
          <p className=" font-bold text-3xl mb-2">
            Lorem ipsum dolor sit amet,{" "}
          </p>
          <p className=" mb-4 text-stone-600">
            <em>By Admin - November 16 2023</em>
          </p>
          <p>
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. "Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.’’
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
            ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui
            in ea voluptate velit esse quam nihil molestiae consequatur, vel
            illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
            ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui
            in ea voluptate velit esse quam nihil molestiae consequatur, vel
            illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
        </div>
      </section>
      <section className="container mx-auto flex items-center justify-between gap-60 mb-12 px-4 lg:px-16 lg:mb-40">
        <div className=" relative w-1/2 rounded-2xl overflow-hidden ">
          <img
            className="w-full h-[480px] object-fill"
            src={"/assets/aboutUs/mission-img.png"}
            alt="bannerImgOne"
          />

          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(to bottom, rgba(255, 255, 255, 0.025) 40%, rgba(255, 255, 255, 0.4) 100%)",
            }}
          />
        </div>
        <div className=" relative w-1/2 rounded-2xl overflow-hidden ">
          <img
            className="w-full h-[480px] object-fill"
            src={"/assets/aboutUs/mission-img.png"}
            alt="bannerImgOne"
          />

          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(to bottom, rgba(255, 255, 255, 0.025) 40%, rgba(255, 255, 255, 0.4) 100%)",
            }}
          />
        </div>
      </section>

      <section className="container mx-auto flex items-center justify-center mb-12 px-4 lg:px-16 lg:mb-40">
        <Swiper
          slidesPerView={1}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="blogSwiper mb-10 lg:mb-24 3xl:mx-36 !px-24 "
          breakpoints={breakpoints}
        >
          {slides?.map((slide) => (
            <SwiperSlide key={slide.title}>
              <div className="flex flex-col items-center justify-center overflow-hidden">
                <img src={slide.img} className="w-full h-72 rounded-2xl mb-4" />
                <p className=" w-full font-bold text-lg text-black-800 capitalize mb-3 text-left">
                  {slide.title}
                </p>
                <p className="text-base text-black-800 text-left">
                  {slide.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <MainFooter />
    </>
  );
}
export default About;
