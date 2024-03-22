import "./RenderRandom.css";
import { useContext } from "react";
import { fetchProductsContext } from "../../context/Context";
import FetchProducts from "../FetchProducts/FetchProducts";

const RenderRandom = () => {
  // * useContext für FetchCategories
  const { productsData, setProductsData } = useContext(fetchProductsContext);

  console.log(productsData);
  return (
    <section className="render-random">
      <FetchProducts />
      <h1>RenderRandom</h1>;
      <div>
        {productsData ? (
          productsData.products.map((item, index) => (
            <div key={index}>
              <img src={item.thumbnail} alt="item" />
              <p>{item.rating}</p>
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>
          ))
        ) : (
          <p> Loading </p>
        )}
      </div>
    </section>
  );
};

export default RenderRandom;
