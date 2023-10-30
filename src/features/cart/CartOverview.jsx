import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div>
      <p>
        <span>X pizzas</span>
        <span> 💲XX</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
