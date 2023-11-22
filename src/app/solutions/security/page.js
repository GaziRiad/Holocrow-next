"use client";

import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import SwipingSlider from "@/components/SwipingSlider";
import FirstSection from "@/components/solutions/FirstSection";
import ProductsSection from "@/components/solutions/ProductsSection";

import { motion } from "framer-motion";

function security() {
  const content = {
    heroImg: "/assets/Solutions/SecurityHero.png",
    heroHeading: "Security",
    subHero: ["Allways On", "Billion Hours Trained", "Security Guard"],
    firstSection: {
      content: [
        {
          img: "/assets/Solutions/img-1.jpg",
          title: "Instant Alerts",
          text: "Get instant alerts in suspicious situations and reduce false alarms by %90 with comprehensive video scene analysis.",
        },
        {
          img: "/assets/Solutions/img-2.jpg",
          title: "Fast Investigations",
          text: "Utilize the visual characteristics of items to effectively locate every video instance where that item appeared.",
        },
        {
          img: "/assets/Solutions/img-3.jpg",
          title: "Data Visualization",
          text: "Get live reports and alerts with easy to understand visuals.",
        },
      ],
    },

    productsSection: {
      heading: "BEYOND WATCHING",
      subHeading: "See our all security products",
      content: [
        {
          icon: "/assets/icons/9.png",
          title: "Restricted Area Control",
          text: "Watch your assets with only true alarms according to your security rule.",
        },
        {
          icon: "/assets/icons/8.png",
          title: "Vehicle Identification",
          text: "Access control of vehicles with their plate and other features to prevent violation and fraud.",
        },
        {
          icon: "/assets/icons/17.png",
          title: "Suspicious Item Detection",
          text: "Detect doubtful attitudes and potential harmful objects, bags, box etc. to secure your area.",
        },
        {
          icon: "/assets/icons/5.png",
          title: "Crowd Analysis",
          text: "Analyze crowd dynamics to manage large gatherings effectively. Monitor crowd density, flow, and behavior to ensure safety and optimize space utilization.",
        },
        {
          icon: "/assets/icons/12.png",
          title: "Facial Recognition",
          text: "Enhance security with accurate facial recognition for identity verification.",
        },
        {
          icon: "/assets/icons/6.png",
          title: "Behavioral Analysis",
          text: "Identify suspicious behaviors through advanced motion and activity analysis.",
        },
        {
          icon: "/assets/icons/25.png",
          title: "Surveillance and Real-time Analysis",
          text: "Implement real-time video surveillance for immediate incident response and security.",
        },
      ],
    },

    thirdSection: {
      heading: "Private Data Collection",
      content: {
        img: "/assets/Solutions/data-collection.jpg",
        text: "Holocrow never collects personal identification details from the visual content we handle. Our primary goal is to enhance security while preserving people’s confidentiality.",
      },
    },

    sliderSection: {
      heading: "industries",
      slides: [
        {
          title: "Retail:",
          img: "/assets/Solutions/industriesSlider/Retail-min.jpg",
        },
        {
          title: "Banking and Finance:",
          img: "/assets/Solutions/industriesSlider/banking.jpg",
        },
        {
          title: "Transports & Logistics:",
          img: "/assets/Solutions/industriesSlider/Transportation - Logistics-min.jpg",
        },
        {
          title: "Healthcare:",
          img: "/assets/Solutions/industriesSlider/Healthcare-min.JPG",
        },
        {
          title: "Manufacturing:",
          img: "/assets/Solutions/industriesSlider/Manufacturing-min.jpg",
        },
        {
          title: "Public Security:",
          img: "/assets/Solutions/industriesSlider/public-security.jpg",
        },
        {
          title: "Airports & Transports Hubs:",
          img: "/assets/Solutions/industriesSlider/Airport-min.jpg",
        },
        {
          title: "Hospitality:",
          img: "/assets/Solutions/industriesSlider/hospitality-min.jpg",
        },
        {
          title: "Smart Cities:",
          img: "/assets/Solutions/industriesSlider/smart cities-min.jpg",
        },
      ],
    },
  };

  return (
    <>
      <Hero
        img={content.heroImg}
        heading={content.heroHeading}
        herobg="hero-solutions"
      />

      <FirstSection content={content} />

      <ProductsSection content={content} />

      <motion.section
        initial={{ opacity: 0, translateY: 150 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto mb-12 px-10 lg:px-0 lg:mb-40 xl:px-4"
      >
        <Heading type="h2" style="lg:!text-left">
          {content.thirdSection.heading}
        </Heading>

        <div className="flex items-center justify-center flex-col gap-8 lg:flex-row lg:gap-6 xl:gap-32 xl:px-4">
          <p className="text-lg text-center leading-relaxed lg:text-left 2xl:text-xl">
            {content.thirdSection.content.text}
          </p>
          <img
            src={content.thirdSection.content.img}
            className="w-full rounded-2xl lg:w-[40%]"
            alt={content.thirdSection.heading}
          />
        </div>
      </motion.section>

      <SwipingSlider content={content.sliderSection} />

      <Footer icon="/assets/footer-img.png" />
    </>
  );
}

export default security;
