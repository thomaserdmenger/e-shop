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
  fetchProductsContext,
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

  // filter Products-Data
  useEffect(() => {
    console.log(catVal);
    const filter = productsData?.products?.filter(
      (item) => item.category === catVal
    );
    setFilteredData(filter);
    // console.log(filter);
  }, [catVal]);
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
