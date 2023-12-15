import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";
import { navigation } from "@/constants/navigation";

function Contact() {
  return (
    <section className="pt-14 pb-14 gradient min-h-screen">
      <header className="container mx-auto flex items-center justify-between mb-24 px-8 lg:px-0 lg:mb-12">
        <Logo />
        <Navigation content={navigation} />
      </header>
      <div className="container mx-auto px-4 lg:px-32  ">
        <div className="flex flex-col items-center justify-between md:mt-20 lg:flex-row mb-10">
          <p className=" text-7xl font-bold text-white/50 mb-10 lg:mb-0 xl:text-8xl">
            Contact US
          </p>
          <img
            src="assets/footer/footerHomeIcon.png"
            className=" md:w-2/3 lg:w-1/2"
          />
        </div>
        {/*  */}
        <div className="text-center lg:text-left mb-8 ">
          <p className="text-5xl text-white font-bold mb-4">Support</p>
          <p className=" flex gap-2 font-medium justify-center lg:justify-start">
            <span className="text-white">Whatsapp Business Account (WBA):</span>
            <span>+90 850 309 1458</span>
          </p>
        </div>
        {/*  */}
        <div className="text-center lg:text-left mb-8 ">
          <p className="text-5xl text-white font-bold mb-4 ">Contact</p>
          <p className=" flex gap-2 font-medium justify-center lg:justify-start">
            <span className="text-white">E-mail:</span>
            <span>info@holocrow.com</span>
          </p>
        </div>
        {/*  */}
        <div className="flex flex-col gap-4 text-center lg:text-left lg:flex-row lg:justify-between">
          <div>
            <p className="text-white text-lg font-medium">Baltic Branch:</p>
            <p>
              Science Park Tehnopol <br />
              Mäealuse 2/4Floor: 312618, Tallinn / ESTONIA <br />
              +372 5353 6447
            </p>
          </div>
          <div>
            <p className="text-white text-lg font-medium">R&D Center:</p>
            <p>
              YTU Davutpasa Teknopark <br />
              151/1E C1 Blok No:106-3
              <br />
              34220, Esenler - Istanbul / TURKEY <br />
              +90 212 803 01 19
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
