"use client";

import Hero from "@/components/Hero";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

function SuccessStories() {
  const content = {
    stories: [
      {
        text: "The Directorate of Forestry in Türkiye used photo-capture devices across the country to protect forests from illegal activities and theft. Initially, these devices weren't centrally managed and used various email types for sending data, which was inefficient. After implementing Holocrow Enterprise, a centralized system with a standard sender address structure was established. This system transformed into an IoT platform for managing 4,000 devices, treating each as an individual 'thing.' With asynchronous architecture, it efficiently handles data capturing and processing using AI. If any real object (like humans, animals, or vehicles if vehicle then type, plate number, make-model, and color) is detected, the system sends an alert with proof snapshots to the relevant staff via email.",
        img: "/assets/successStories/img1.png",
        logo: "/assets/successStories/logos/logo1.png",
      },
      {
        text: "Istanbul is a sprawling metropolis, and the Metropolitan Municipality, making up more than 40% of the city, utilizes over 100,000 cameras to monitor its assets and manage operations. Holocrow Enterprise operates to provide digitized data for various purposes, including visitor analytics, crowd analysis, passenger counting, parking space availability and violation tracking, garbage detection, and the identification of fire, smoke, and water levels. This is achieved by analyzing 2,500 cameras simultaneously, feeding valuable data into smart city platforms.",
        img: "/assets/successStories/img1.png",
        logo: "/assets/successStories/logos/logo2.png",
      },
      {
        text: "1,100 IP cameras across Turkey are integrated with the Holocrow Cloud platform, specifically for monitoring Algida horizontal freezer cabinets. The system detects ice cream products that are taken or left in the cabinet. When the sold quantity reaches half of the box's threshold, an automatic order for the relevant SKU type is generated, triggering Unilever's ERP system. Additionally, by analyzing hand movements, a heatmap is created for each cabinet. This selling data is then combined with the heatmap data, providing valuable insights into consumer behavior at the point of sale.",
        img: "/assets/successStories/img1.png",
        logo: "/assets/successStories/logos/logo3.svg",
      },
      {
        text: "In order to monitor packaging operations, 16 IP cameras are connected to the Holocrow Enterprise system. These cameras detect raw boxes and track their movement onto the automation belt. The system analyzes operation progress trends, and this data is utilized to plan future packaging operations.",
        img: "/assets/successStories/img1.png",
        logo: "/assets/successStories/logos/logo4.jpg",
      },
      {
        text: "There are over 600 IP cameras at Mersin International Port, and initially, 20 of them will be integrated with Holocrow Enterprise to detect WHS & OHS-related violations, particularly those involving machine-to-machine or human-machine interactions. Prohibited areas will be established in each scene by defining virtual zones. By selecting the desired analytics for each zone, Holocrow Enterprise will be capable of reporting violations with proof snapshots and generating alerts for operational teams.",
        img: "/assets/successStories/img1.png",
        logo: "/assets/successStories/logos/logo5.svg",
      },
      {
        text: "KMO provides over 450 km of high-quality autobahn service through numerous tunnels and bridges. Currently, 206 IP cameras are used to operate all roads. In the initial phase, 70 of these cameras will be integrated with Holocrow Enterprise to detect vehicles stopping, moving in the reverse direction, and foreign objects. This will minimize accident risks and enable road users, including drivers and passengers, to receive a higher quality service more promptly.",
        img: "/assets/successStories/img1.png",
        logo: "/assets/successStories/logos/logo6.png",
      },
      {
        text: "In Q1 of 2024, 855 IP cameras will be connected to the Holocrow Cloud platform for visitor analytics in Vodafone stores across Türkiye. Additionally, 4,275 IP cameras will be installed for showcase and planogram validation. Through these implementations, Vodafone will be able to create campaigns and track their effectiveness with accurate, digitized data, providing insights into visitor demographics.",
        img: "/assets/successStories/img1.png",
        logo: "/assets/successStories/logos/logo7.png",
      },
    ],
  };

  return (
    <div className="mb-24">
      <section className="relative h-screen mb-12 sm:mb-24 md:mb-12 xl:mb-4">
        <Hero herobg="hero-solutions" noPattern={true} />
        <div className="absolute top-0 w-full h-full">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={40}
            slidesPerView={1}
            navigation
            // pagination={{ clickable: true }}
            effect="coverflow"
            centeredSlides
            initialSlide={1}
            // onSlideChange={(swiper) => handleSlideChange(swiper)}
            className="storiesSlider w-[95%] absolute right-1/2 translate-x-1/2 top-[40%] -translate-y-1/3 sm:top-[40%] md:top-[35%] lg:w-[80%] xl:top-[45%] xl:w-[65%] shadow-2xl rounded-2xl h-[80%] md:h-[60%]"
          >
            {content.stories.map((story, index) => (
              <SwiperSlide
                className={`transition-transform duration-300 transform`}
                key={index}
              >
                <div className="bg-white/50 h-full flex flex-col items-center justify-center gap-2 px-6 py-6 xl:flex-row xl:p-10 2xl:p-20 2xl:gap-20">
                  <div className="xl:w-1/2">
                    <p className="">{story.text}</p>
                  </div>
                  <div className=" flex flex-col items-center justify-center gap-6 h-full xl:w-1/2">
                    {/* <img src={story.img} /> */}
                    {/* <div className="h-44 w-full"></div> */}
                    <img
                      src={story.logo}
                      className="w-32 h-36"
                      alt={story.text}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className=" flex flex-col items-center justify-center">
        <p className=" text-primary text-3xl font-semibold mb-4">
          Directorate of Forestry
        </p>
        <p className=" flex items-center justify-center">
          <span className="text-3xl">{"{"}</span>
          <span className="px-2 text-lg lg:text-xl">2017 / Turkey</span>
          <span className="text-3xl">{"}"}</span>
        </p>
      </section>
    </div>
  );
}

export default SuccessStories;
