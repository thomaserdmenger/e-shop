import "./FilterPopup.css";
import BackButton from "../BackButton/BackButton";
import {
  fetchCategoriesContext,
  togglePopupContext,
  darkModeContext
} from "../../context/Context";
import { useContext } from "react";

const FilterPopup = ({
  catVal,
  setCatVal,
  priceVal,
  setPriceVal,
  brandsVal,
  setBrandsVal
}) => {
  // Import Context with Categories Data
  const { categoriesData } = useContext(fetchCategoriesContext);

  // Import Context to Toggle Popup
  const { togglePopup, setTogglePopup } = useContext(togglePopupContext);

  // Import DarkMode Context
  const { darkMode } = useContext(darkModeContext);

  const handlePriceClick = (value) => {
    if (priceVal === value) {
      setPriceVal("");
    } else {
      setPriceVal(value);
    }
  };

  const handleCatClick = (value) => {
    if (catVal === value) {
      setCatVal("");
    } else {
      setCatVal(value);
    }
  };

  const handleBrandClick = (value) => {
    if (brandsVal === value) {
      setBrandsVal("");
    } else {
      setBrandsVal(value);
    }
  };

  const handleCloseClick = () => {
    setTogglePopup(false);
  };

  return (
    <main className="popup">
      <div className="popup__header">
        <BackButton />
        <h2>Filters</h2>
        <svg
          className={darkMode ? "popup__icon-close dark" : "popup__icon-close"}
          onClick={handleCloseClick}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512">
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
        </svg>
      </div>
      {/* catVal === cat ? "popup__button--selected" : "popup__button" */}
      <section className="popup__categories">
        <h3>Categories</h3>
        <div>
          {categoriesData.map((cat, index) => {
            return (
              <button
                key={index}
                onClick={(e) => handleCatClick(e.target.value)}
                className={
                  catVal === cat
                    ? darkMode
                      ? "popup__button--selected dark"
                      : "popup__button--selected"
                    : "popup__button"
                }
                value={cat}>
                {cat.replace("-", " ")}
              </button>
            );
          })}
        </div>
      </section>
      <section className="popup__price">
        <h3>Price</h3>
        <div>
          <button
            onClick={() => handlePriceClick("20")}
            className={
              priceVal == "20"
                ? darkMode
                  ? "popup__button--selected dark"
                  : "popup__button--selected "
                : "popup__button"
            }>
            0 - 20 €
          </button>
          <button
            onClick={() => handlePriceClick("50")}
            className={
              priceVal == "50"
                ? darkMode
                  ? "popup__button--selected dark"
                  : "popup__button--selected "
                : "popup__button"
            }>
            20 - 50 €
          </button>
          <button
            onClick={() => handlePriceClick("100")}
            className={
              priceVal == "100"
                ? darkMode
                  ? "popup__button--selected dark"
                  : "popup__button--selected "
                : "popup__button"
            }>
            50 - 100 €
          </button>
          <button
            onClick={() => handlePriceClick("100.01")}
            className={
              priceVal == "100.01"
                ? darkMode
                  ? "popup__button--selected dark"
                  : "popup__button--selected "
                : "popup__button"
            }>
            über 100 €
          </button>
        </div>
      </section>
      <section className="popup__brands">
        <h3>Brands</h3>
        <div>
          <button
            onClick={(e) => handleBrandClick(e.target.textContent)}
            className={
              brandsVal === "Apple"
                ? darkMode
                  ? "popup__button--selected dark"
                  : "popup__button--selected"
                : "popup__button"
            }>
            Apple
          </button>
          <button
            onClick={(e) => handleBrandClick(e.target.textContent)}
            className={
              brandsVal === "Samsung"
                ? darkMode
                  ? "popup__button--selected dark"
                  : "popup__button--selected"
                : "popup__button"
            }>
            Samsung
          </button>
          <button
            onClick={(e) => handleBrandClick(e.target.textContent)}
            className={
              brandsVal === "L'Oreal Paris"
                ? darkMode
                  ? "popup__button--selected dark"
                  : "popup__button--selected"
                : "popup__button"
            }>
            L'Oreal Paris
          </button>
          <button
            onClick={(e) => handleBrandClick(e.target.textContent)}
            className={
              brandsVal === "Huawei"
                ? darkMode
                  ? "popup__button--selected dark"
                  : "popup__button--selected"
                : "popup__button"
            }>
            Huawei
          </button>
          <button
            onClick={(e) => handleBrandClick(e.target.textContent)}
            className={
              brandsVal === "Microsoft Surface"
                ? darkMode
                  ? "popup__button--selected dark"
                  : "popup__button--selected"
                : "popup__button"
            }>
            Microsoft Surface
          </button>
          <button
            onClick={(e) => handleBrandClick(e.target.textContent)}
            className={
              brandsVal === "Golden"
                ? darkMode
                  ? "popup__button--selected dark"
                  : "popup__button--selected"
                : "popup__button"
            }>
            Golden
          </button>
          <button
            onClick={(e) => handleBrandClick(e.target.textContent)}
            className={
              brandsVal === "IELGY"
                ? darkMode
                  ? "popup__button--selected dark"
                  : "popup__button--selected"
                : "popup__button"
            }>
            IELGY
          </button>
          <button
            onClick={(e) => handleBrandClick(e.target.textContent)}
            className={
              brandsVal === "Stainless"
                ? darkMode
                  ? "popup__button--selected dark"
                  : "popup__button--selected"
                : "popup__button"
            }>
            Stainless
          </button>
          <button
            onClick={(e) => handleBrandClick(e.target.textContent)}
            className={
              brandsVal === "LouisWill"
                ? darkMode
                  ? "popup__button--selected dark"
                  : "popup__button--selected"
                : "popup__button"
            }>
            LouisWill
          </button>
          <button
            onClick={(e) => handleBrandClick(e.target.textContent)}
            className={
              brandsVal === "BRAVE BULL"
                ? darkMode
                  ? "popup__button--selected dark"
                  : "popup__button--selected"
                : "popup__button"
            }>
            BRAVE BULL
          </button>
          <button
            onClick={(e) => handleBrandClick(e.target.textContent)}
            className={
              brandsVal === "Xiangle"
                ? darkMode
                  ? "popup__button--selected dark"
                  : "popup__button--selected"
                : "popup__button"
            }>
            Xiangle
          </button>
          <button
            onClick={(e) => handleBrandClick(e.target.textContent)}
            className={
              brandsVal === "JIEPOLLY"
                ? darkMode
                  ? "popup__button--selected dark"
                  : "popup__button--selected"
                : "popup__button"
            }>
            JIEPOLLY
          </button>
        </div>
      </section>
      <div className="popup__button-container">
        <button
          onClick={() => {
            setTogglePopup(!togglePopup);
          }}
          className={darkMode ? "btn dark btn--popup" : "btn btn--popup"}>
          Apply Filter
        </button>
      </div>
    </main>
  );
};

export default FilterPopup;
