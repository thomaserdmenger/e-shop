import "./SearchCategories.css";
import { useContext, useEffect, useState } from "react";
import {
  userInputContext,
  fetchProductsContext,
  catValContext,
} from "../../context/Context";
import FetchProducts from "../FetchProducts/FetchProducts";
import { Link } from "react-router-dom";

const SearchCategories = () => {
  // *Global Context für userInput und für Products Fetch
  const { userInput, setUserInput } = useContext(userInputContext);

  // *Global Context für Products Fetch
  const { productsData, setProductsData } = useContext(fetchProductsContext);

  // * Globa Context für Kategorie Value catVal
  const { catVal, setCatVal } = useContext(catValContext);

  //   * useState für Categories
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const newArray = productsData?.products.filter((item) => {
      return (
        item.title.toLowerCase().includes(userInput.toLowerCase()) ||
        item.description.toLowerCase().includes(userInput.toLowerCase()) ||
        item.brand.toLowerCase().includes(userInput.toLowerCase()) ||
        item.category.toLowerCase().includes(userInput.toLowerCase())
      );
    });
    // hier werden alle gefilterten Kategorien gespeichert in categories
    const categories = newArray.map((item) => item.category);

    // hier werden alle doppelten Kategorieren in categories rausgenommen
    const uniqueCategories = [...new Set(categories)];

    // hier speichern wir dann die uniquen Categories in unserem State
    setCategories(uniqueCategories);
  }, [userInput]);

  return (
    <section className="search-categories">
      <FetchProducts />
      <div className={userInput.length > 0 ? "show-categories" : ""}>
        {userInput.length > 0 &&
          categories.map((item, index) => (
            <Link
              to="/search"
              key={index}
              onClick={() => {
                setCatVal(item);
                setUserInput("");
              }}
            >
              <p>{item.replace("-", " ")}</p>
              <p>Categories</p>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default SearchCategories;
