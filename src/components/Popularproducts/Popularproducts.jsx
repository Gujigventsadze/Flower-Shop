import Productbox from "../Productbox/Productbox";
import "./Popularproducts.css";
import { ShopContext } from "../../ShopContext";
import { useContext } from "react";

const Popularproducts = () => {
  const { products } = useContext(ShopContext);

  const popularProducts = products.filter(
    (product) => product.popular === true
  );

  return (
    <section id="popular-products-section">
      <div className="pop-products-title">Popular Flowers</div>
      <div className="pop-products-grid">
        {popularProducts.map((product) => (
          <Productbox
            path={`/products/${product.id}`}
            key={product.id}
            img={product.img}
            title={product.title}
            price={product.price}
            id={product.id}
            description={product.description}
            popular={false}
          />
        ))}
      </div>
    </section>
  );
};

export default Popularproducts;
