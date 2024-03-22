import "./FilterPopup.css";
import BackButton from "../BackButton/BackButton";
import {
  fetchCategoriesContext,
  fetchProductsContext
} from "../../context/Context";
import { useContext, useState, useEffect } from "react";

const FilterPopup = () => {
  // Import Context with Categories Data
  const { categoriesData } = useContext(fetchCategoriesContext);

  // Import Context with Products Data
  const { productsData } = useContext(fetchProductsContext);

  // State for Categories Buttons
  const [catVal, setCatVal] = useState("");

  // State for Price Buttons
  const [priceVal, setPriceVal] = useState("");

  // State for Brand Buttons
  const [brandsVal, setBrandsVal] = useState("");

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
                onClick={(e) => setCatVal(e.target.value)}
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
            onClick={(e) => setPriceVal(e.target.value)}
            value="<20"
            className={
              priceVal === "<20" ? "popup__button--selected" : "popup__button"
            }>
            0 - 20 €
          </button>
          <button
            value="<50"
            onClick={(e) => setPriceVal(e.target.value)}
            className={
              priceVal === "<50" ? "popup__button--selected" : "popup__button"
            }>
            20 - 50 €
          </button>
          <button
            value="<100"
            onClick={(e) => setPriceVal(e.target.value)}
            className={
              priceVal === "<100" ? "popup__button--selected" : "popup__button"
            }>
            50 - 100 €
          </button>
          <button
            value=">100"
            className={
              priceVal === ">100" ? "popup__button--selected" : "popup__button"
            }
            onClick={(e) => setPriceVal(e.target.value)}>
            über 100 €
          </button>
        </div>
      </section>
      <section className="popup__brands">
        <h3>Brands</h3>
        <div>
          <button
            onClick={(e) => setBrandsVal(e.target.textContent)}
            className={
              brandsVal === "Apple"
                ? "popup__button--selected"
                : "popup__button"
            }>
            Apple
          </button>
          <button
            onClick={(e) => setBrandsVal(e.target.textContent)}
            className={
              brandsVal === "Samsung"
                ? "popup__button--selected"
                : "popup__button"
            }>
            Samsung
          </button>
          <button
            onClick={(e) => setBrandsVal(e.target.textContent)}
            className={
              brandsVal === "L'Oreal Paris"
                ? "popup__button--selected"
                : "popup__button"
            }>
            L'Oreal Paris
          </button>
          <button
            onClick={(e) => setBrandsVal(e.target.textContent)}
            className={
              brandsVal === "Huawei"
                ? "popup__button--selected"
                : "popup__button"
            }>
            Huawei
          </button>
          <button
            onClick={(e) => setBrandsVal(e.target.textContent)}
            className={
              brandsVal === "Microsoft"
                ? "popup__button--selected"
                : "popup__button"
            }>
            Microsoft
          </button>
          <button
            onClick={(e) => setBrandsVal(e.target.textContent)}
            className={
              brandsVal === "Golden"
                ? "popup__button--selected"
                : "popup__button"
            }>
            Golden
          </button>
          <button
            onClick={(e) => setBrandsVal(e.target.textContent)}
            className={
              brandsVal === "IELGY"
                ? "popup__button--selected"
                : "popup__button"
            }>
            IELGY
          </button>
          <button
            onClick={(e) => setBrandsVal(e.target.textContent)}
            className={
              brandsVal === "Stainless"
                ? "popup__button--selected"
                : "popup__button"
            }>
            Stainless
          </button>
          <button
            onClick={(e) => setBrandsVal(e.target.textContent)}
            className={
              brandsVal === "LouisWill"
                ? "popup__button--selected"
                : "popup__button"
            }>
            LouisWill
          </button>
          <button
            onClick={(e) => setBrandsVal(e.target.textContent)}
            className={
              brandsVal === "Brave Bull"
                ? "popup__button--selected"
                : "popup__button"
            }>
            Brave Bull
          </button>
          <button
            onClick={(e) => setBrandsVal(e.target.textContent)}
            className={
              brandsVal === "Yiosi"
                ? "popup__button--selected"
                : "popup__button"
            }>
            Yiosi
          </button>
          <button
            onClick={(e) => setBrandsVal(e.target.textContent)}
            className={
              brandsVal === "Jiepollyl"
                ? "popup__button--selected"
                : "popup__button"
            }>
            Jiepollyl
          </button>
        </div>
      </section>
    </main>
  );
};

export default FilterPopup;
