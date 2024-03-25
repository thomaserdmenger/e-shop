import "./Sort.css";
import { useContext, useState } from "react";
import {
  fetchProductsContext,
  filteredDataContext,
  darkModeContext,
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

  // state for opening sorting options
  const [sortItem, setSortItem] = useState(false);

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
    setSortItem(false);
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
    setSortItem(false);
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
    setSortItem(false);
  };

  // toggle sorting options
  const chooseSort = () => {
    setSortItem((sortItem) => !sortItem);
  };

  return (
    <section className="sort">
      <p>Sort by:</p>
      <article className={darkMode ? "dropdown dark" : "dropdown"}>
        <p onClick={chooseSort}>{sortName}</p>
        <div
          className={`${sortItem ? "show" : "hide"} ${
            darkMode ? "dropdown-content dark" : "dropdown-content"
          }`}
        >
          <p onClick={sortLowPrice}>Lowest Price</p>
          <p onClick={sortHighPrice}>Highest Price</p>
          <p onClick={sortRating}>Best Rating</p>
        </div>
      </article>
    </section>
  );
};

export default Sort;
