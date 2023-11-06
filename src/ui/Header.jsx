import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header
      className="font-pizza flex items-center
      justify-between border-b border-stone-400 bg-teal-600
      px-4 py-3 uppercase text-stone-800 sm:px-6"
    >
      <Link to="/" className="text-base tracking-widest md:text-lg lg:text-2xl">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />

      <Username />
    </header>
  );
}

export default Header;
