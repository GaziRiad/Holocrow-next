import CardsSection from "@/components/CardsSection";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import HowDoesItWork from "@/components/HowDoesItWork";
import TrustedBySection from "@/components/TrustedBySection";

function HowItWorks() {
  const content = {
    heroImg: "../assets/hero-crow-img.png",
    subHero: [
      "No Installation",
      "No Hardware",
      "Just Click & Use",
      "With Existing Cameras",
    ],

    howDoesItWorkSection: {
      heading: "Then How Does Holocrow Work?",
      img: "../assets/HowItWorksPage/mac-intro.png",
      features: [
        {
          icon: "../assets/icons/8.png",
          text: "Vehicle Identification",
        },
        { icon: "../assets/icons/21.png", text: "Stock Controls" },
        { icon: "../assets/icons/1.png", text: "PPE Check" },
        {
          icon: "../assets/icons/18.png",
          text: "Ergonomy Control",
        },
        {
          icon: "../assets/icons/17.png",
          text: "Suspicious Item Detection",
        },
        { icon: "../assets/icons/19.png", text: "Visitor Counting" },
      ],
    },

    cardsSection: [
      {
        icon: "../assets/HowItWorksPage/security-icon.png",
        title: "Security",
        options: [
          "Restricted Area Control",
          "Vehicle Identification",
          "Suspicious Item Detection",
          "Crowd Analysis",
          "Facial Recognition",
          "Behavioral Analysis",
          "Surveillance & Real-time Analysis",
        ],
      },
      {
        icon: "../assets/HowItWorksPage/safety-icon.png",
        title: "Safety",
        options: [
          "PPE",
          "Housekeeping",
          "Workplace Safety",
          "Machine Interactions",
          "Pedestrian Path",
          "Ergonomy Control",
          "Handrail Usage",
          "Area Controls",
          "Vehicle Control",
          "Man-down Detection",
        ],
      },
      {
        icon: "../assets/HowItWorksPage/marketing-icon.png",
        title: "Marketing",
        options: [
          "Sales & Marketing",
          "Demographic Targeting",
          "A/B Testing",
          "Heatmap & Footfall",
          "Product Engagement Analysis",
          "Inventory & Stock Control",
        ],
      },
      {
        icon: "../assets/HowItWorksPage/quality-control-icon.png",
        title: "Quality Control",
        options: [
          "Stock Controls",
          "Efficiency",
          "Patterns & Colours Check",
          "Operational Excellence",
          "Staff Efficiency Analysis",
          "Operational Excellence",
          "Packaging Control",
        ],
      },
    ],

    trustedBySection: {
      heading: "We make them see the beyond.",
      companies: [
        "../assets/HowItWorksPage/companies/image1.png",
        "../assets/HowItWorksPage/companies/image2.png",
        "../assets/HowItWorksPage/companies/image3.png",
        "../assets/HowItWorksPage/companies/image4.png",
        "../assets/HowItWorksPage/companies/image5.png",
        "../assets/HowItWorksPage/companies/image6.png",
        "../assets/HowItWorksPage/companies/image7.png",
        "../assets/HowItWorksPage/companies/image8.png",
        "../assets/HowItWorksPage/companies/image9.png",
      ],
    },
  };

  return (
    <>
      <Hero img={content.heroImg} />
      <div className=" text-center text-lg md:text-xl lg:text-2xl flex flex-col gap-4 mb-12 lg:mb-32">
        {content.subHero.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
      <HowDoesItWork content={content} />
      <Heading type="tag">#BeyondWatching</Heading>
      <CardsSection content={content} />
      <TrustedBySection content={content} />
      <Footer icon="../assets/footer-img.png" />
    </>
  );
}

export default HowItWorks;
