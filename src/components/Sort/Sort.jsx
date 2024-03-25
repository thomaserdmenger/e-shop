import "./Sort.css";
import { useContext, useState } from "react";
import {
  fetchProductsContext,
  filteredDataContext,
  darkModeContext
} from "../../context/Context";

// props for filteredData and setFilteredData from SearchPage.jsx
const Sort = () => {
  // import context for fetched product data
  const { productsData } = useContext(fetchProductsContext);

  // import filteredData
  const { filteredData, setFilteredData } = useContext(filteredDataContext);

  // state for chosen sort mechanism
  const [sortName, setSortName] = useState("choose");

  // Global State for DarkMode Context
  const { darkMode } = useContext(darkModeContext);

  // func sort by lowest price
  const sortLowPrice = () => {
    filteredData.length > 0
      ? setFilteredData(
          filteredData.toSorted((a, b) => Number(a.price) - Number(b.price))
        )
      : setFilteredData(
          productsData.products.toSorted(
            (a, b) => Number(a.price) - Number(b.price)
          )
        );
    setSortName("Lowest Price");
  };

  // func ort by highest price
  const sortHighPrice = () => {
    filteredData.length > 0
      ? setFilteredData(
          filteredData.toSorted((a, b) => Number(b.price) - Number(a.price))
        )
      : setFilteredData(
          productsData.products.toSorted(
            (a, b) => Number(b.price) - Number(a.price)
          )
        );
    setSortName("Highest Price");
  };

  // func sort by best rating
  const sortRating = () => {
    filteredData.length > 0
      ? setFilteredData(
          filteredData.toSorted((a, b) => Number(b.rating) - Number(a.rating))
        )
      : setFilteredData(
          productsData.products.toSorted(
            (a, b) => Number(b.rating) - Number(a.rating)
          )
        );
    setSortName("Best Rating");
  };

  return (
    <section className="sort">
      <p>Sort by:</p>
      <article className={darkMode ? "dropdown dark" : "dropdown"}>
        <p>{sortName}</p>
        <div
          className={darkMode ? "dropdown-content dark" : "dropdown-content"}>
          <p onClick={sortLowPrice}>Lowest Price</p>
          <p onClick={sortHighPrice}>Highest Price</p>
          <p onClick={sortRating}>Rating</p>
        </div>
      </article>
    </section>
  );
};

export default Sort;
