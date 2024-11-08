import "./Cart.css";
import Cartbox from "../components/Cartbox/Cartbox";
import { ShopContext } from "../ShopContext";
import { useContext } from "react";
import Carttotal from "../components/Carttotal/Carttotal";

const Cart = () => {
  const { cart } = useContext(ShopContext);
  console.log(cart);

  return (
    <section id="cart">
      <div className="cart-items">
        {cart.map((product) => (
          <Cartbox
            key={product.id}
            id={product.id}
            img={product.img}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
      <Carttotal />
    </section>
  );
};

export default Cart;
