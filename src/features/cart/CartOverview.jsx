import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-stone-800 text-stone-200">
      <p className="text-stone-400">
        <span>X pizzas</span>
        <span> 💲XX</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
