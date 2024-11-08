import "./Carttotal.css";
import { ShopContext } from "../../ShopContext";
import { useContext } from "react";

const Carttotal = () => {
  const { cart } = useContext(ShopContext);

  if (cart.length === 0) {
    return <div>No products in Cart</div>;
  }

  const productPrice = cart.reduce((acc, product) => acc + product.price, 0);
  const taxRate = 1.02;
  const shipping = 19.99;
  const totalPrice = (productPrice + shipping) * taxRate;

  return (
    <div className="carttotal-container">
      <div className="total-price">
        <div>Products</div>
        <div>${productPrice.toFixed(2)}</div>
      </div>
      <div className="tax">
        <div>Tax</div>
        <div>2%</div>
      </div>
      <div className="shipping">
        <div>Shipping</div>
        <div>${shipping}</div>
      </div>
      <div className="final-price">
        <div>Total</div>
        <div>${totalPrice.toFixed(2)}</div>
      </div>
      <div className="checkout-btn">
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Carttotal;
