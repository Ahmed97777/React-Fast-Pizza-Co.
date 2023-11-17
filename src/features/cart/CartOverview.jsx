import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  const location = useLocation();
  const currentPath = location.pathname;

  // console.log(currentPath);

  if (!totalCartQuantity) return null;

  return (
    <div
      className="flex items-center justify-between
      bg-stone-800 px-4 py-4 text-sm
                uppercase text-stone-200 sm:px-6 
                md:text-base lg:text-lg"
    >
      <p
        className="space-x-4 font-semibold text-stone-300
        sm:space-x-6"
      >
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>

      {currentPath === "/cart" ? null : (
        <Link to="/cart">Open cart &rarr;</Link>
      )}
    </div>
  );
}

export default CartOverview;
