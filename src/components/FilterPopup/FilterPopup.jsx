import "./FilterPopup.css";
import BackButton from "../BackButton/BackButton";
import { fetchCategoriesContext } from "../../context/Context";
import { useContext, useState } from "react";

const FilterPopup = () => {
  // Import Context with Categories Data
  const { categoriesData } = useContext(fetchCategoriesContext);

  // State for Button Text
  const [btnText, setBtnText] = useState("");

  return (
    <main className="popup">
      <div className="popup__header">
        <BackButton />
        <h2>Filters</h2>
      </div>
      <section className="popup__categories">
        <h3>Categories</h3>
        <div className="popup__categories__container">
          {categoriesData.map((cat, index) => {
            return (
              <button
                key={index}
                onClick={(e) => setBtnText(e.target.value)}
                className={
                  btnText === cat ? "popup__button--selected" : "popup__button"
                }
                value={cat}>
                {cat.replace("-", " ")}
              </button>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default FilterPopup;
