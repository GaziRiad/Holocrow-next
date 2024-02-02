import Link from "next/link";

function Button({
  children,
  type = "medium",
  to = "",
  style,
  onClick,
  disabled,
}) {
  if (type === "mobile-navigation")
    return (
      <Link
        href={to}
        className={`rounded-full shadow-sm uppercase text-lg tracking-wide bg-white text-black-800 text-center font-secondary font-semibold px-6 py-1.5 transition-all`}
      >
        {children}
      </Link>
    );

  if (type === "navigation")
    return (
      <Link
        href={to}
        onClick={onClick}
        className={`rounded-full shadow-sm uppercase tracking-wider bg-primary text-white text-center font-secondary font-semibold px-8 py-2 transition-all hover:bg-primary-darker`}
      >
        {children}
      </Link>
    );

  if (type === "small")
    return (
      <Link
        href={to}
        className={`rounded-full shadow-sm uppercase text-xs tracking-wide bg-white text-primary text-center font-secondary font-bold px-3 py-3 transition-all ${style}`}
      >
        {children}
      </Link>
    );

  if (type === "medium")
    return (
      <Link
        href={to}
        className={`rounded-full shadow-sm uppercase tracking-wider bg-white text-primary text-sm text-center font-secondary font-bold px-6 py-3.5 md:text-lg ${style}`}
      >
        {children}
      </Link>
    );

  if (type === "signup") {
    return (
      <button
        onClick={onClick}
        className={`rounded-full shadow-sm uppercase tracking-wider bg-primary text-white text-center font-secondary font-semibold px-8 py-2 disabled:cursor-not-allowed disabled:opacity-75 transition-all`}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
}

export default Button;
