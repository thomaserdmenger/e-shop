import FetchCategories from "../FetchCategories/FetchCategories";
import "./Categories.css";
import { useContext } from "react";
import { fetchCategoriesContext } from "../../context/Context";

const Categories = () => {
  // * useContext für FetchCategories
  const { categoriesData, setCategoriesData } = useContext(
    fetchCategoriesContext
  );

  console.log(categoriesData);
  return (
    <section className="categories">
      <FetchCategories />
      <h1>Categories</h1>
      <div className="categories-flex">
        {categoriesData ? (
          categoriesData.map((item, index) => (
            <div key={index}>
              <img src="/images/products/automotive.jpeg" alt="" />
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
