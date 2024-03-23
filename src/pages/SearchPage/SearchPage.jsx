import "./SearchPage.css";
import Search from "../../components/Search/Search";
import FilterButton from "../../components/FilterButton/FilterButton";
import Sort from "../../components/Sort/Sort";
import RenderProducts from "../../components/RenderProducts/RenderProducts";
import Navbar from "../../components/Navbar/Navbar";
import FilterPopup from "../../components/FilterPopup/FilterPopup";
import {
  togglePopupContext,
  userInputContext,
  filteredDataContext,
  fetchProductsContext
} from "../../context/Context";
import { useContext, useEffect, useState } from "react";

const SearchPage = () => {
  // Import Context to Toggle Popup
  const { togglePopup } = useContext(togglePopupContext);

  // Import User Input from Global Context
  const { userInput } = useContext(userInputContext);
  // console.log(userInput);

  // Import filtered Data from Global Context
  const { filteredData, setFilteredData } = useContext(filteredDataContext);
  console.log("filteredData: " + filteredData);

  // Import Global Product Fetch
  const { productsData } = useContext(fetchProductsContext);
  // console.log(productsData);

  // State for Categories Buttons
  const [catVal, setCatVal] = useState("");
  // console.log(catVal);

  // State for Price Buttons
  const [priceVal, setPriceVal] = useState("");
  // console.log(priceVal);

  // State for Brand Buttons
  const [brandsVal, setBrandsVal] = useState("");
  // console.log(brandsVal);

  // const [temp, setTemp] = useState(true);
  // console.log("temp: " + temp);

  // filter all products
  useEffect(() => {
    let filter = productsData?.products?.filter((item) => {
      let finalPriceVal = "";

      if (priceVal === "20" && catVal === "" && brandsVal === "") {
        finalPriceVal = "20";
        return item.price > 0 && item.price <= finalPriceVal;
      } else if (priceVal === "50" && catVal === "" && brandsVal === "") {
        finalPriceVal = "50";
        return item.price > 20.01 && item.price <= finalPriceVal;
      } else if (priceVal === "100" && catVal === "" && brandsVal === "") {
        finalPriceVal = "100";
        return item.price > 50.01 && item.price <= finalPriceVal;
      } else if (priceVal === "100.01" && catVal === "" && brandsVal === "") {
        finalPriceVal = "100.01";
        return item.price > 100.01;
      } else if (
        catVal === item.category &&
        priceVal === "" &&
        brandsVal === ""
      ) {
        return item.category;
      } else if (brandsVal === item.brand && priceVal === "" && catVal === "") {
        return item.category;
      } else if (
        brandsVal === item.brand &&
        catVal === item.category &&
        priceVal === ""
      ) {
        return item.brand && item.category;
      } else if (
        item.category === catVal &&
        brandsVal === "" &&
        priceVal === "20"
      ) {
        finalPriceVal = "20";
        return item.category && item.price > 0 && item.price <= finalPriceVal;
      } else if (
        item.category === catVal &&
        brandsVal === "" &&
        priceVal === "50"
      ) {
        finalPriceVal = "50";
        return (
          item.category && item.price > 20.01 && item.price <= finalPriceVal
        );
      } else if (
        item.category === catVal &&
        brandsVal === "" &&
        priceVal === "100"
      ) {
        finalPriceVal = "100";
        return (
          item.category && item.price > 50.01 && item.price <= finalPriceVal
        );
      } else if (
        item.category === catVal &&
        brandsVal === "" &&
        priceVal === "100.01"
      ) {
        finalPriceVal = "100.01";
        return item.category && item.price > 100.01;
      } else if (
        item.brand === brandsVal &&
        catVal === "" &&
        priceVal === "20"
      ) {
        finalPriceVal = "20";
        return item.brand && item.price > 0 && item.price <= finalPriceVal;
      } else if (
        item.brand === brandsVal &&
        catVal === "" &&
        priceVal === "50"
      ) {
        finalPriceVal = "50";
        return item.brand && item.price > 20.01 && item.price <= finalPriceVal;
      } else if (
        item.brand === brandsVal &&
        catVal === "" &&
        priceVal === "100"
      ) {
        finalPriceVal = "100";
        return item.brand && item.price > 50.01 && item.price <= finalPriceVal;
      } else if (
        item.brand === brandsVal &&
        catVal === "" &&
        priceVal === "100.01"
      ) {
        finalPriceVal = "100.01";
        return item.brand && item.price > 100.01;
      } else if (
        item.brand === brandsVal &&
        catVal === item.category &&
        priceVal === "20"
      ) {
        finalPriceVal = "20";
        return (
          item.brand &&
          item.category &&
          item.price > 0 &&
          item.price <= finalPriceVal
        );
      } else if (
        item.brand === brandsVal &&
        catVal === item.category &&
        priceVal === "50"
      ) {
        finalPriceVal = "50";
        return (
          item.brand &&
          item.category &&
          item.price > 20.01 &&
          item.price <= finalPriceVal
        );
      } else if (
        item.brand === brandsVal &&
        catVal === item.category &&
        priceVal === "100"
      ) {
        finalPriceVal = "100";
        return (
          item.brand &&
          item.category &&
          item.price > 100.01 &&
          item.price <= finalPriceVal
        );
      } else if (
        item.brand === brandsVal &&
        catVal === item.category &&
        priceVal === "100.01"
      ) {
        finalPriceVal = "100.01";
        return item.brand && item.category && item.price > 100.01;
      }
    });

    // if (filter === "") {
    //   setTemp(false);
    // } else {
    //   setTemp(true);
    // }
    // console.log("filter: " + filter);

    // console.log(filter);

    setFilteredData(filter);

    // * einzelne Filter:
    // ! 1. Category
    // ! 2. Brand
    // ! 3. Price 0-20
    // ! 4. Price 20.01-50
    // ! 5. Price 50.01-100
    // ! 6. Price 100.01
    // ! 7. Category + Brand
    // ! 8. Category + Price 0-20
    // ! 9. Category + Price 20.01-50
    // ! 10. Category + Price 50.01-100
    // ! 11. Category + Price 100.01
    // ! 12. Brand + Price 0-20
    // ! 13. Brand + Price 20.01-50
    // ! 14. Brand + Price 50.01-100
    // ! 15. Brand + Price 100.01
    // ! 16. Category + Brand + Price 0-20
    // ! 16. Category + Brand + Price 20.01-50
    // ! 16. Category + Brand + Price 50.01-100
    // ! 16. Category + Brand + Price 100.01

    // # Was ist, wenn Filterergebnis === 0, dann Fehlermeldung einbauen! Bsp: Smartphone (check), Apple (check), 0-20 (keine Angebote)
  }, [catVal, priceVal, brandsVal, productsData, setFilteredData]);

  return (
    <>
      {togglePopup ? (
        <FilterPopup
          catVal={catVal}
          setCatVal={setCatVal}
          priceVal={priceVal}
          setPriceVal={setPriceVal}
          brandsVal={brandsVal}
          setBrandsVal={setBrandsVal}
        />
      ) : (
        <main>
          <h1>SearchPage</h1>
          <div className="search-filter">
            <Search />
            <FilterButton />
          </div>
          <Sort />
          <RenderProducts filteredData={filteredData} />
          <Navbar />
        </main>
      )}
    </>
  );
};

export default SearchPage;
