"use client";

import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import MainFooter from "@/components/MainFooter";
import SwipingSlider from "@/components/SwipingSlider";
import FirstSection from "@/components/solutions/FirstSection";
import ProductsSection from "@/components/solutions/ProductsSection";

import { motion } from "framer-motion";

function OperationalExcellence() {
  const content = {
    heroImg: "/assets/Solutions/EfficiencyHero.png",
    heroHeading: "Operational Excellence",
    subHero: ["Allways On", "Billion Hours Trained", "Operational Manager"],
    firstSection: {
      content: [
        {
          img: "/assets/Solutions/img-4.png",
          title: "Perfect Accuracy",
          text: "Detect errors on your production lines with AI’s 99.9% accuracy.",
        },
        {
          img: "/assets/Solutions/img-5.png",
          title: "Increase Efficiency",
          text: "Analyze the productivity of all employees and increase your operational efficiency by up to 50%.",
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
          icon: "/assets/icons/21.png",
          title: "Stock Controls",
          text: "Count or measure your stocks by CCTV.",
        },
        {
          icon: "/assets/icons/7.png",
          title: "Patterns & Colours Check",
          text: "Analyze visibility of product has been produced over streams and images to approve quality assurance.",
        },
        {
          icon: "/assets/icons/10.png",
          title: "Operational Excellence",
          text: "Detect and track every single step of your operations to analyze processes open to improvement.",
        },
        {
          icon: "/assets/icons/26.png",
          title: "Staff Efficiency Analysis",
          text: "Enhance workforce productivity by analyzing staff movements and activities using video data.",
        },
        {
          icon: "/assets/icons/27.png",
          title: "Packaging Control",
          text: "Ensure accuracy and quality in packaging by visually inspecting for conformity and detecting anomalies.",
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
          title: "Manufacturing:",
          img: "/assets/Solutions/industriesSlider/Manufacturing-min.jpg",
        },
        {
          title: "Automotive Industry:",
          img: "/assets/Solutions/industriesSlider/Automotive-min.jpg",
        },
        {
          title: "Pharmaceuticals:",
          img: "/assets/Solutions/industriesSlider/Pharmaceuticals-min.jpg",
        },
        {
          title: "Electronics:",
          img: "/assets/Solutions/industriesSlider/eloctronics.jpg",
        },
        {
          title: "Food & Beverage Industry:",
          img: "/assets/Solutions/industriesSlider/Food and Beverage Industry-min.jpg",
        },
        {
          title: "Aerospace:",
          img: "/assets/Solutions/industriesSlider/aerospace manufacturin-min.jpg",
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

      <MainFooter />
    </>
  );
}

export default OperationalExcellence;
