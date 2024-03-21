import { fetchProductsContext } from "../../context/Context";
import { useContext, useEffect } from "react";

const FetchProducts = () => {
  const { setProductsData } = useContext(fetchProductsContext);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=0")
      .then((res) => res.json())
      .then((data) => setProductsData(data))
      .catch((err) => console.error(err));
  }, []);
};

export default FetchProducts;
