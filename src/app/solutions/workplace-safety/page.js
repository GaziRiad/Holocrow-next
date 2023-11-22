"use client";

import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import MainFooter from "@/components/MainFooter";
import SwipingSlider from "@/components/SwipingSlider";
import FirstSection from "@/components/solutions/FirstSection";
import ProductsSection from "@/components/solutions/ProductsSection";
import { motion } from "framer-motion";

function WorkplaceSafety() {
  const content = {
    heroImg: "/assets/Solutions/WorkplaceHero.png",
    heroHeading: "Workplace Safety",
    subHero: ["Allways On", "Billion Hours Trained", "Safety Officer"],
    firstSection: {
      content: [
        {
          img: "/assets/Solutions/img-1.jpg",
          title: "Instant Alerts",
          text: "Get instant alerts in suspicious situations and reduce false alarms by %90 with comprehensive video scene analysis.",
        },
        {
          img: "/assets/Solutions/img-6.png",
          title: "Real-Time Warnings",
          text: "Send live alerts to the relevant employees when safety protocols are violated at the workplace.",
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
          icon: "/assets/icons/1.png",
          title: "PPE Control",
          text: "Control proper PPE usage of staff to minimize effects on them from work accidents.",
        },
        {
          icon: "/assets/icons/2.png",
          title: "Machine Interactions",
          text: "Poor machine usage can cause serious injuries. Watch out and block accidents with real-time warnings to protect your staff and business.",
        },
        {
          icon: "/assets/icons/15.png",
          title: "Housekeeping",
          text: "Injuries due to inadequate housekeeping are entirely avoidable. Prompt identification leads to swift rectification and the prevention of harm.",
        },
        {
          icon: "/assets/icons/11.png",
          title: "Ergonomy Control",
          text: "Monitor ergonomic practices of staff to prevent work-related musculoskeletal disorders and enhance workplace safety.",
        },
        {
          icon: "/assets/icons/13.png",
          title: "Handrail Usage",
          text: "Automatically detect and encourage proper use of handrails in critical areas to prevent falls and injuries.",
        },
        {
          icon: "/assets/icons/22.png",
          title: "Area Controls",
          text: "Manage access to restricted or hazardous areas through visual identification and control systems.",
        },
        {
          icon: "/assets/icons/23.png",
          title: "Vehicle Control",
          text: "Oversee and regulate vehicle movement within premises to prevent accidents and ensure safety compliance.",
        },
        {
          icon: "/assets/icons/24.png",
          title: "Man-down Detection",
          text: "Instantly detect and respond to incidents where staff are incapacitated or in distress for rapid assistance.",
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
          title: "Construction:",
          img: "/assets/Solutions/industriesSlider/construction.jpg",
        },
        {
          title: "Healthcare:",
          img: "/assets/Solutions/industriesSlider/Healthcare-min.JPG",
        },
        {
          title: "Retail:",
          img: "/assets/Solutions/industriesSlider/Retail-min.jpg",
        },
        {
          title: "Warehousing & Logistics:",
          img: "/assets/Solutions/industriesSlider/warehoouse-min.jpg",
        },
        {
          title: "Office Environments:",
          img: "/assets/Solutions/industriesSlider/office-min.jpg",
        },
        {
          title: "Mining:",
          img: "/assets/Solutions/industriesSlider/mining-min.jpg",
        },
        {
          title: "Agriculture:",
          img: "/assets/Solutions/industriesSlider/Agriculture-min.jpg",
        },
        {
          title: "Food Processing:",
          img: "/assets/Solutions/industriesSlider/Food processing-min.jpg",
        },
        {
          title: "Energy and Utilities:",
          img: "/assets/Solutions/industriesSlider/energy.jpg",
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

export default WorkplaceSafety;
