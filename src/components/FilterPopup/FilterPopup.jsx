import "./FilterPopup.css";
import BackButton from "../BackButton/BackButton";
import { fetchCategoriesContext } from "../../context/Context";
import { useContext, useState } from "react";

const FilterPopup = () => {
  // Import Context with Categories Data
  const { categoriesData } = useContext(fetchCategoriesContext);

  // State for Categories Buttons
  const [catVal, setCatVal] = useState("");

  // State for Price Buttons
  const [priceVal, setPriceVal] = useState("");

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
      <section className="price">
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
    </main>
  );
};

export default FilterPopup;
