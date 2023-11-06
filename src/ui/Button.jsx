import { Link } from "react-router-dom";

function Button({ children, disabled, to }) {
  const className = `my-2 inline-block rounded-full bg-teal-600 
  px-2 py-2 font-semibold uppercase tracking-wide
  text-stone-800 transition-colors duration-300
  hover:bg-teal-500 focus:bg-teal-500 
  focus:outline-none focus:ring focus:ring-teal-500
  focus:ring-offset-2 disabled:cursor-not-allowed
  sm:px-4 sm:py-3`;

  if (to === "/order/new")
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}

export default Button;
