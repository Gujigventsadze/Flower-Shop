import "./Cartbox.css";
import deleteIcon from "../../assets/icons/delete.png";
import PropTypes from "prop-types";
import { ShopContext } from "../../ShopContext";
import { useContext } from "react";

const Cartbox = (props) => {
  const { removeFromCart } = useContext(ShopContext);

  return (
    <div className="cartbox-container">
      <div className="cartbox-img">
        <img src={props.img} />
      </div>
      <div className="cartbox-description">
        <div className="description-title">{props.title}</div>
        <div className="description-des">{props.description}</div>
        <div className="description-price">${props.price}</div>
      </div>
      <div className="delete-icon">
        <img src={deleteIcon} onClick={() => removeFromCart(props.id)} />
      </div>
    </div>
  );
};

export default Cartbox;

Cartbox.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};
