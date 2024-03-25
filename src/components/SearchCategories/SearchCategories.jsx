import "./SearchCategories.css";
import { useContext } from "react";
import { userInputContext } from "../../context/Context";
import FetchProducts from "../FetchProducts/FetchProducts";

const SearchCategories = () => {
    // *Global Context für userInput und für Products Fetch
  const { userInput, setUserInput } = useContext(userInputContext);
  const { productsData ,setProductsData } = useContext(fetchProductsContext);

  return (
    <section>
      <FetchProducts />
      <p>hi</p>
    </section>
  );
};

export default SearchCategories;
