import "./Productbox.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ShopContext } from "../../ShopContext";
import { useContext } from "react";

const Productbox = (props) => {
  const { cart, setCart } = useContext(ShopContext);

  const handleAddCart = (product) => {
    const existingProduct = cart.find((item) => item.id == product.id);

    if (!existingProduct) {
      setCart([...cart, product]);
    }
  };

  return (
    <div className="productbox-container">
      <Link to={props.path} className="productbox-img">
        <img src={props.img} />
      </Link>
      <div className="productbox-title">{props.title}</div>
      <div className="price-cart">
        <div className="productbox-price price">${props.price}</div>
        <div
          className="productbox-price cart"
          onClick={() =>
            handleAddCart({
              id: props.id,
              title: props.title,
              price: props.price,
              img: props.img,
              description: props.description,
              popular: props.popular,
            })
          }
        >
          Add to Cart
        </div>
      </div>
    </div>
  );
};

export default Productbox;

Productbox.propTypes = {
  id: PropTypes.number.isRequired,
  path: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  product: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  popular: PropTypes.bool.isRequired,
};
