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
    <section>
      <FetchCategories />
      <h1>Categories</h1>
      <div>
        {categoriesData ? (
          categoriesData.map((item, index) => (
            <p key={index}>{item.replace("-", " ")}</p>
          ))
        ) : (
          <p> Loading </p>
        )}
      </div>
    </section>
  );
};

export default Categories;
