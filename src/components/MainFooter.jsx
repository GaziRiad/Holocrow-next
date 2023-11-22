import Footer from "./Footer";

function MainFooter() {
  const footer = [
    {
      icon: "../assets/footer/footer-icon1.png",
      text: "No Installation",
    },
    {
      icon: "../assets/footer/footer-icon2.png",
      text: "Cancel Anytime",
    },
    {
      icon: "../assets/footer/footer-icon3.png",
      text: "7-Day Free Trial",
    },
  ];

  return (
    <Footer icon="/assets/footer/footerHomeIcon.png" type="home">
      <div className="flex flex-wrap items-center justify-center gap-4 mb-6 md:mb-20 md:gap-10">
        {footer.map((el) => (
          <div
            key={el.text}
            className="flex flex-col items-center justify-center gap-2 md:gap-6"
          >
            <img src={el.icon} className=" scale-75 md:scale-90 lg:scale-100" />
            <p className=" text-white font-semibold uppercase tracking-wide text-center lg:text-lg">
              {el.text}
            </p>
          </div>
        ))}
      </div>
    </Footer>
  );
}

export default MainFooter;
