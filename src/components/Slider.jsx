import Heading from "./Heading";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

function Slider({ slider }) {
  const breakpoints = {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };

  function getStyleForBreakpoint() {
    if (window.innerWidth < 768) {
      return { padding: "0 0px", paddingBottom: "40px" };
    }

    if (window.innerWidth >= 768) {
      return { padding: "0 20px", paddingBottom: "40px" };
    }

    if (window.innerWidth >= 1024) {
      return { padding: "0 40px", paddingBottom: "60px" };
    }
  }

  return (
    <div className="px-6 pb-2 relative">
      <Heading type="h3">{slider.heading}</Heading>
      {/* <div>
        <img src="/src/assets/sliders/Dangeruos 1.png" />
        <p className="font-semibold text-xl text-black-800 capitalize mb-5">
          Restricted Area Control
        </p>
        <p className="text-lg text-black-800">
          Watch your assets with only true alarms according to your security
          rule.
        </p>
      </div> */}

      <Swiper
        slidesPerView={1}
        // style={{ padding: "0 0px", paddingBottom: "75px" }}
        style={getStyleForBreakpoint()}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper mb-10 lg:mb-24 3xl:mx-36 "
        breakpoints={breakpoints}
      >
        {slider?.slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div className="flex flex-col items-center justify-center">
              <img
                // src="/src/assets/sliders/Dangeruos 1.png"
                src={slide.icon}
                className="w-1/5 mb-8"
              />
              <p className="font-semibold text-lg text-black-800 capitalize mb-3">
                {slide.title}
              </p>
              <p className="text-base text-black-800 text-center">
                {slide.text}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
