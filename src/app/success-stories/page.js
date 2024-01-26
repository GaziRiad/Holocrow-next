"use client";

import Hero from "@/components/Hero";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import { useLanguage } from "@/contexts/LanguageContext";
//
import enSuccess from "../../../public/translations/en/success.json";
import trSuccess from "../../../public/translations/tr/success.json";
import { useEffect, useState } from "react";
import { client } from "../../../sanity/lib/client";
import Image from "next/image";
import SanityBlockContent from "@sanity/block-content-to-react";
import { serializers } from "../blog/page";
const translations = {
  en: enSuccess,
  tr: trSuccess,
};

function SuccessStories() {
  const { activeLanguage } = useLanguage();
  const [currStory, setCurrStory] = useState(1);

  const [stories, setStories] = useState([]);

  useEffect(() => {
    async function getStories() {
      const data = await client.fetch(
        `*[_type == "story"] {body, language, mainImage {asset -> {_id, url}, alt,}, logo {asset -> {_id, url}, alt,}} | order(publishedAt desc)`
      );

      setStories(data.filter((story) => story.language === activeLanguage));
    }
    getStories();
  }, [activeLanguage]);
  console.log(stories);
  return (
    <div className="mb-24 text-black-800">
      <section className="relative h-screen mb-12 sm:mb-24 md:-mb-32 xl:-mb-20">
        <Hero herobg="hero-solutions" noPattern={true} />
        <div className="absolute top-0 w-full h-full">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={40}
            slidesPerView={1}
            navigation
            effect="coverflow"
            centeredSlides
            initialSlide={1}
            onSlideChange={(swiper) => {
              setCurrStory(swiper.activeIndex);
            }}
            className="storiesSlider w-[95%] absolute top-[40%] -translate-y-1/3 sm:top-[40%] md:top-[35%] lg:w-[80%] xl:top-[45%] xl:w-[65%] shadow-2xl rounded-2xl h-[90%] md:h-[60%]"
          >
            {stories.map((story, index) => {
              return (
                <SwiperSlide
                  className={`transition-transform duration-300 transform`}
                  key={index}
                >
                  <div className="bg-white/50 h-full flex flex-col items-center justify-center gap-2 px-6 py-6 xl:flex-row xl:p-10 2xl:p-20 2xl:gap-20">
                    <div className="xl:w-1/2 flex items-center justify-center">
                      <Image
                        height={500}
                        width={500}
                        src={story.mainImage.asset.url}
                        alt={story.mainImage?.alt}
                        className="w-50 h-40 xl:h-auto xl:w-full rounded-2xl"
                      />
                    </div>
                    <div className=" flex flex-col items-center xl:items-start justify-center gap-6 h-full xl:w-1/2">
                      <Image
                        height={500}
                        width={500}
                        src={story.logo.assetss.url}
                        className=" w-1/6 xl:w-1/4"
                        alt={story?.logo?.alt}
                      />
                      <p>
                        <SanityBlockContent
                          blocks={story?.body}
                          serializers={serializers}
                        />
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
      {/* <section className=" flex flex-col items-center justify-center">
        <p className=" text-primary text-3xl font-semibold mb-4">
          {content.stories[currStory].clientName}
        </p>
        <p className=" flex items-center justify-center">
          <span className="text-3xl">{"{"}</span>
          <span className="px-2 text-lg lg:text-xl">
            {content.stories[currStory].date}
            {" / "}
            {content.stories[currStory].location}
          </span>
          <span className="text-3xl">{"}"}</span>
        </p>
      </section> */}
    </div>
  );
}

export default SuccessStories;
