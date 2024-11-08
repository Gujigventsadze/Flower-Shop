import "./Productspage.css";
import { ShopContext } from "../ShopContext";
import { useContext } from "react";
import Productbox from "../components/Productbox/Productbox";

const Productspage = () => {
  const { products } = useContext(ShopContext);

  return (
    <section id="products-page">
      <div className="products-header">FLOWERS</div>
      <div className="products-grid">
        {products.map((product) => (
          <Productbox
            path={`/products/${product.id}`}
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            img={product.img}
          />
        ))}
      </div>
    </section>
  );
};

export default Productspage;
