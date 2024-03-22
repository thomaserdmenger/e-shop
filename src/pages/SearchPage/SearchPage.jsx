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

  // filter all products
  useEffect(() => {
    const filter = productsData?.products?.filter((item) => {
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
      }
    });

    console.log(filter);

    setFilteredData(filter);

    // # item.price > 0 && item.price <= priceVal
    // # item.price > 20.01 && item.price <= priceVal

    // item.category === catVal ||
    // (priceVal === 20

    // (priceVal === 20 ? item.price > 0 && item.price <= priceVal : "") ||
    // (priceVal === 50 && item.price > 20.01 && item.price <= priceVal) ||
    // (item.price > 50.01 && item.price <= priceVal) ||
    // item.price > 100.01 ||
    // item.brand === brandsVal

    // item.category === catVal && item.price > 0 && item.price <= priceVal //--> läuft ohne Zeilenumbruch
    // item.category === catVal //--> läuft

    // * einzelne Filter:
    // item.category === catVal||
    // (item.price > 0 && item.price <= priceVal) ||
    // (item.price > 20.01 && item.price <= priceVal) ||
    // (item.price > 50.01 && item.price <= priceVal) ||
    // item.price > 100.01 ||
    // item.brand === brandsVal

    // category
    // brand
    // price20
    // price50
    // price100
    // price100.01

    // category + price20
    // category + price50
    // category + price100
    // category + price100.01

    // brand + price20
    // brand + price50
    // brand + price100
    // brand + price100.01

    // category + brand

    // category + price20 + brand
    // category + price50 + brand
    // category + price100 + brand
    // category + price100.01 + brand
    // console.log(filter);
  }, [catVal, priceVal, brandsVal]);
  console.log(filteredData);

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
