import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

function Socials() {
  return (
    <div className="text-white gap-8 flex items-center relative font-secondary font-semibold sm:gap-24">
      <p className="after:h-0.5 after:w-6  after:bg-white after:absolute after:top-3 after:left-36 sm:after:w-12 sm:after:left-40">
        Follow Holocrow
      </p>
      <ul className="flex gap-4 items-center">
        <li>
          <a
            href="https://www.instagram.com/_ayvos_/"
            rel="noreferrer"
            target="_blank"
          >
            {<FaInstagram />}
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/ayvos/"
            rel="noreferrer"
            target="_blank"
          >
            {<FaLinkedinIn />}
          </a>
        </li>
        <li>
          <a href="https://x.com/ayvos_" rel="noreferrer" target="_blank">
            {<FaXTwitter />}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Socials;
