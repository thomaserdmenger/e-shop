import "./SearchPage.css";
import Search from "../../components/Search/Search";
import FilterButton from "../../components/FilterButton/FilterButton";
import Sort from "../../components/Sort/Sort";
import RenderProducts from "../../components/RenderProducts/RenderProducts";
import Navbar from "../../components/Navbar/Navbar";
import FilterPopup from "../../components/FilterPopup/FilterPopup";
import { togglePopupContext } from "../../context/Context";
import { useContext, useState } from "react";

const SearchPage = () => {
  // Import Context to Toggle Popup
  const { togglePopup } = useContext(togglePopupContext);

  // State for Categories Buttons
  const [catVal, setCatVal] = useState("");
  // console.log(catVal);

  // State for Price Buttons
  const [priceVal, setPriceVal] = useState("");
  // console.log(priceVal);

  // State for Brand Buttons
  const [brandsVal, setBrandsVal] = useState("");
  console.log(brandsVal);

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
          <RenderProducts />
          <Navbar />
        </main>
      )}
    </>
  );
};

export default SearchPage;
