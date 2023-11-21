import Link from "next/link";

function Logo({ src = "/images/holocrow-logo.png", styling = "" }) {
  return (
    <Link href="/">
      <img src={src} className={`w-36 xl:w-48 ${styling}`} />
    </Link>
  );
}

export default Logo;
