import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-stone-800 p-4 uppercase text-stone-200">
      <p className="space-x-4 font-semibold text-stone-300">
        <span>Xpizzas</span>
        <span>💲XX</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
