"use client";

import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import MainFooter from "@/components/MainFooter";
import FirstSection from "@/components/solutions/FirstSection";
import ProductsSection from "@/components/solutions/ProductsSection";

import { motion } from "framer-motion";

function page() {
  const content = {
    heroImg: "/assets/Solutions/MarketingHero.png",
    heroHeading: "RETAIL & FMCG",
    subHero: ["Allways On", "Billion Hours Trained", "Marketing Analyst"],
    firstSection: {
      content: [
        {
          img: "/assets/Solutions/img-7.png",
          title: "Accurate Insights",
          text: "Obtain visitor count, heatmap, demographic insights, and many more with 99.9% accuracy.",
        },
        {
          img: "/assets/Solutions/img-8.png",
          title: "Prevent Out of Stock",
          text: "Detect and track every single buying transactions only via video streams to prevent stock out and gather precious insights.",
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
          icon: "/assets/icons/19.png",
          title: "Visitor Counting",
          text: "Count unique visitors using anonymous IDs, excluding staff, to gauge the potential of your stores.",
        },
        {
          icon: "/assets/icons/20.png",
          title: "Demographic Targeting",
          text: "Get the demographic diversity of your visitors to implement the correct segmentation.",
        },
        {
          icon: "/assets/icons/3.png",
          title: "A/B Testing",
          text: "Understand customers' choices on your new products in a quick way.",
        },
        {
          icon: "/assets/icons/14.png",
          title: "Heatmap & Footfall",
          text: "Analyze customer movement patterns and store hotspots to optimize layout and product placement.",
        },
        {
          icon: "/assets/icons/4.png",
          title: "Product Engagement Analysis",
          text: "Monitor customer interactions with products to gain insights into preferences and engagement levels.",
        },
        {
          icon: "/assets/icons/16.png",
          title: "Inventory & Stock Control",
          text: "Automate inventory tracking and maintain optimal stock levels using real-time visual data analysis.",
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

      {/* <SwipingSlider content={content.sliderSection} /> */}

      <MainFooter />
    </>
  );
}

export default page;
