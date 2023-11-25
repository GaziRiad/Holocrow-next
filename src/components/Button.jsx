import Link from "next/link";

function Button({ children, type = "medium", to = "" }) {
  if (type === "mobile-navigation")
    return (
      <Link
        href={to}
        className={`rounded-full shadow-sm uppercase text-lg tracking-wide bg-white text-black-800 text-center font-secondary font-semibold px-6 py-1.5`}
      >
        {children}
      </Link>
    );

  if (type === "navigation")
    return (
      <Link
        href={to}
        className={`rounded-full shadow-sm uppercase tracking-wider bg-primary text-white text-center font-secondary font-semibold px-8 py-2`}
      >
        {children}
      </Link>
    );

  if (type === "small")
    return (
      <Link
        href={to}
        className={`rounded-full shadow-sm uppercase text-xs tracking-wide bg-white text-primary text-center font-secondary font-bold px-3 py-3 `}
      >
        {children}
      </Link>
    );

  if (type === "medium")
    return (
      <Link
        href={to}
        className={`rounded-full shadow-sm uppercase tracking-wider bg-white text-primary text-sm text-center font-secondary font-bold px-6 py-3.5 md:text-lg`}
      >
        {children}
      </Link>
    );
}

export default Button;
