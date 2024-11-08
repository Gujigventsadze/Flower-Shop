import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../ShopContext";
import "./Singleproductpage.css";

const Singleproductpage = () => {
  const { id } = useParams();
  const { products, cart, setCart } = useContext(ShopContext);

  const [add, setAdd] = useState(false);
  const [err, setErr] = useState(false);

  const product = products.find((product) => product.id == id);

  const handleAddCart = () => {
    if (!cart.find((p) => p.id == product.id)) {
      setCart([...cart, product]);
      setAdd(true);
      setTimeout(() => {
        setAdd(false);
      }, 2000);
    } else {
      setErr(true);
      setTimeout(() => {
        setErr(false);
      }, 2000);
    }
  };

  return (
    <section id="single-product-section">
      <div className="product-image-container">
        <img src={product.img} />
      </div>
      <div className="product-description">
        <div className="single-product-title">{product.title}</div>
        <div className="single-product-price">${product.price}</div>
        <div className="description">Description</div>
        <div className="single-product-description">{product.description}</div>
        <div className="single-product-btn">
          <button onClick={handleAddCart}>Add to Cart</button>
        </div>
        <div className={add ? "add-successfully-visible" : "add-successfully"}>
          Added Successfully
        </div>
        <div className={err ? "err-visible" : "err"}>
          Cannot Add more than one
        </div>
      </div>
    </section>
  );
};

export default Singleproductpage;
