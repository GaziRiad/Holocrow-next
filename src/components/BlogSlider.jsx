"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import Link from "next/link";
import { FiLink } from "react-icons/fi";

function BlogSlider({ posts }) {
  const breakpoints = {
    768: {
      slidesPerView: 2,
      spaceBetween: 80,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 100,
    },
  };

  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      navigation={true}
      modules={[Navigation]}
      className="blogSwiper w-full 3xl:mx-36 md:!px-24 "
      breakpoints={breakpoints}
    >
      {posts?.map((post) => (
        <SwiperSlide key={post.title} className="group rounded-xl pb-4">
          <Link href={`/blog/${post.slug.current}`}>
            <div className=" hidden group-hover:block absolute top-0 left-0 bg-slate-900/60  w-full h-full rounded-xl" />
            <FiLink
              className="hidden group-hover:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              size={42}
              color="#fff"
            />
            <div className="flex flex-col items-center overflow-hidden h-[440px] lg:h-[520px]">
              <img
                src={post.mainImage.asset?.url}
                alt={post.mainImage.alt}
                className="w-full h-72 rounded-2xl mb-4"
              />
              <p className="w-full text-sm text-primary font-semibold uppercase -mb-0.5 px-4">
                Blog Post
              </p>
              <p className="w-full font-bold text-lg text-black-800 mb-3 text-left px-4 capitalize">
                {post.title}
              </p>
              <p className="text-base text-black-800 text-left px-4">
                {`${post.body[0].children[0].text.substring(0, 210)}...`}
              </p>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default BlogSlider;
