import "./Navbar.css";
import { Link } from "react-router-dom";
import cartIcon from "../../assets/icons/shopping-bag (1).png";
import { useContext, useState } from "react";
import { ShopContext } from "../../ShopContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useContext(ShopContext);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="orange-part">Florist</span>ello
        </Link>
        <ul className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </ul>
        <div className="navbar-cart">
          <Link to="/cart" className="cart-container">
            <img src={cartIcon} />
            <div className="item-count">{cart.length}</div>
          </Link>
          <Link to="/login" className="btn-container">
            <button className="log-in">Log In</button>
          </Link>
        </div>
        <div className="hamburger-menu" onClick={handleMenuClick}>
          <div className={menuOpen ? "line1-active" : "line1"}></div>
          <div className={menuOpen ? "line2-active" : "line2"}></div>
          <div className={menuOpen ? "line3-active" : "line3"}></div>
        </div>
      </div>
      <div
        className={`responsive-menu ${
          menuOpen ? "responsive-menu-visible" : ""
        }`}
      >
        <Link to="/" onClick={handleMenuClick}>
          Home
        </Link>
        <Link to="/about" onClick={handleMenuClick}>
          About
        </Link>
        <Link to="/products" onClick={handleMenuClick}>
          Products
        </Link>
        <Link to="/contact" onClick={handleMenuClick}>
          Contact
        </Link>
        <Link to="/cart" onClick={handleMenuClick}>
          Cart
        </Link>
        <Link to="/login" onClick={handleMenuClick}>
          Login
        </Link>
      </div>
    </>
  );
};

export default Navbar;
