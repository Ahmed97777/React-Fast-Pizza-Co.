import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header className="bg-teal-600">
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <p>Hamada</p>
    </header>
  );
}

export default Header;
