import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

function LinkButton({ children, color = "black", to }) {
  return (
    <Link
      href={to}
      className="flex items-center justify-center gap-1 uppercase font-bold tracking-[0.4rem] text-sm text-black-700 hover:underline hover:underline-offset-4 transition-all md:text-xl"
    >
      <span>{children}</span>
      <span>
        <FaChevronRight color={color} />
      </span>
    </Link>
  );
}

export default LinkButton;
