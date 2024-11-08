import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../ShopContext";
import "./Singleproductpage.css";

const Singleproductpage = () => {
  const { id } = useParams();
  const { products, cart, setCart } = useContext(ShopContext);

  const product = products.find((product) => product.id == id);

  const handleAddCart = () => {
    if (!cart.find((p) => p.id == product.id)) {
      setCart([...cart, product]);
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
      </div>
    </section>
  );
};

export default Singleproductpage;
