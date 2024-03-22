import FetchCategories from "../FetchCategories/FetchCategories";
import "./Categories.css";
import { useContext } from "react";
import { fetchCategoriesContext } from "../../context/Context";
import { categoriesImgData } from "../../assets/categoriesImgData/categoriesImgData";

const Categories = () => {
  // * useContext für FetchCategories
  const { categoriesData, setCategoriesData } = useContext(
    fetchCategoriesContext
  );

  return (
    <section className="categories">
      <FetchCategories />
      <h1>Categories</h1>
      <div className="categories-flex">
        {categoriesData ? (
          categoriesData.map((item, index) => (
            <div key={index}>
              {/* passende Images aus eigenem Array in categoriesImgData */}
              <img src={categoriesImgData[item]} alt="" />
              <p>{item.replace("-", " ")}</p>
            </div>
          ))
        ) : (
          <p> Loading </p>
        )}
      </div>
    </section>
  );
};

export default Categories;
