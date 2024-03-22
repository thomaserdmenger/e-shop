import "./FilterPopup.css";
import BackButton from "../BackButton/BackButton";
import {
  fetchCategoriesContext,
  togglePopupContext
} from "../../context/Context";
import { useContext, useState } from "react";

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

  return (
    <main className="popup">
      <div className="popup__header">
        <BackButton />
        <h2>Filters</h2>
      </div>
      <section className="popup__categories">
        <h3>Categories</h3>
        <div>
          {categoriesData.map((cat, index) => {
            return (
              <button
                key={index}
                onClick={(e) => handleCatClick(e.target.value)}
                className={
                  catVal === cat ? "popup__button--selected" : "popup__button"
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
              priceVal == "20" ? "popup__button--selected" : "popup__button"
            }>
            0 - 20 €
          </button>
          <button
            onClick={() => handlePriceClick("50")}
            className={
              priceVal == "50" ? "popup__button--selected" : "popup__button"
            }>
            20 - 50 €
          </button>
          <button
            onClick={() => handlePriceClick("100")}
            className={
              priceVal == "100" ? "popup__button--selected" : "popup__button"
            }>
            50 - 100 €
          </button>
          <button
            onClick={() => handlePriceClick("100.01")}
            className={
              priceVal == "100.01" ? "popup__button--selected" : "popup__button"
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
                ? "popup__button--selected"
                : "popup__button"
            }>
            Apple
          </button>
          <button
            onClick={(e) => handleBrandClick(e.target.textContent)}
            className={
              brandsVal === "Samsung"
                ? "popup__button--selected"
                : "popup__button"
            }>
            Samsung
          </button>
          <button
            onClick={(e) => handleBrandClick(e.target.textContent)}
            className={
              brandsVal === "L'Oreal Paris"
                ? "popup__button--selected"
                : "popup__button"
            }>
            L'Oreal Paris
          </button>
          <button
            onClick={(e) => handleBrandClick(e.target.textContent)}
            className={
              brandsVal === "Huawei"
                ? "popup__button--selected"
                : "popup__button"
            }>
            Huawei
          </button>
          <button
            onClick={(e) => handleBrandClick(e.target.textContent)}
            className={
              brandsVal === "Microsoft Surface"
                ? "popup__button--selected"
                : "popup__button"
            }>
            Microsoft Surface
          </button>
          <button
            onClick={(e) => handleBrandClick(e.target.textContent)}
            className={
              brandsVal === "Golden"
                ? "popup__button--selected"
                : "popup__button"
            }>
            Golden
          </button>
          <button
            onClick={(e) => handleBrandClick(e.target.textContent)}
            className={
              brandsVal === "IELGY"
                ? "popup__button--selected"
                : "popup__button"
            }>
            IELGY
          </button>
          <button
            onClick={(e) => handleBrandClick(e.target.textContent)}
            className={
              brandsVal === "Stainless"
                ? "popup__button--selected"
                : "popup__button"
            }>
            Stainless
          </button>
          <button
            onClick={(e) => handleBrandClick(e.target.textContent)}
            className={
              brandsVal === "LouisWill"
                ? "popup__button--selected"
                : "popup__button"
            }>
            LouisWill
          </button>
          <button
            onClick={(e) => handleBrandClick(e.target.textContent)}
            className={
              brandsVal === "Brave Bull"
                ? "popup__button--selected"
                : "popup__button"
            }>
            Brave Bull
          </button>
          <button
            onClick={(e) => handleBrandClick(e.target.textContent)}
            className={
              brandsVal === "Yiosi"
                ? "popup__button--selected"
                : "popup__button"
            }>
            Yiosi
          </button>
          <button
            onClick={(e) => handleBrandClick(e.target.textContent)}
            className={
              brandsVal === "Jiepollyl"
                ? "popup__button--selected"
                : "popup__button"
            }>
            Jiepollyl
          </button>
        </div>
      </section>
      <div className="popup__button-container">
        <button
          onClick={() => setTogglePopup(!togglePopup)}
          className="btn btn--popup">
          Apply Filter
        </button>
      </div>
    </main>
  );
};

export default FilterPopup;
