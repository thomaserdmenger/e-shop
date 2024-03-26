import FetchCategories from "../FetchCategories/FetchCategories";
import "./Categories.css";
import { useContext } from "react";
import {
  fetchCategoriesContext,
  catValContext,
  userInputContext,
} from "../../context/Context";
import { categoriesImgData } from "../../assets/categoriesImgData/categoriesImgData";
import { Link } from "react-router-dom";

const Categories = () => {
  // * useContext für FetchCategories
  const { categoriesData, setCategoriesData } = useContext(
    fetchCategoriesContext
  );

  // * useContext für User Input
  const { userInput, setUserInput } = useContext(userInputContext);

  // * useContext für Kategorie Value catVal
  const { catVal, setCatVal } = useContext(catValContext);

  return (
    <section className="categories">
      <FetchCategories />
      <div className="categories-flex">
        {categoriesData ? (
          categoriesData.map((item, index) => (
            <Link
              to="/search"
              key={index}
              onClick={() => {
                setCatVal(item);
                setUserInput("");
              }}
            >
              <div>
                {/* passende Images aus eigenem Array in categoriesImgData */}
                <img src={categoriesImgData[item]} alt="" />
                <p>{item.replace("-", " ")}</p>
              </div>
            </Link>
          ))
        ) : (
          <p> Loading </p>
        )}
      </div>
    </section>
  );
};

export default Categories;
