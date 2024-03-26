import "./RenderRandom.css";
import { useContext, useEffect } from "react";
import {
  fetchProductsContext,
  darkModeContext,
  localStorageContext
} from "../../context/Context";
import FetchProducts from "../FetchProducts/FetchProducts";
import { Link } from "react-router-dom";

const RenderRandom = () => {
  // * useContext für FetchCategories
  const { productsData } = useContext(fetchProductsContext);

  // Global State for Dark Mode Context
  const { darkMode } = useContext(darkModeContext);

  // Gobal Context for Favorite Items
  const { favorites, setFavorites } = useContext(localStorageContext);

  const handleFavorite = (title) => {
    setFavorites([...favorites, title]);
  };

  useEffect(() => {
    window.localStorage.setItem("DATA", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <>
      <FetchProducts />
      <h3>Popular</h3>
      <section
        style={{ paddingBlockEnd: "8rem" }}
        className={darkMode ? " dark render" : " render"}>
        {productsData?.products?.slice(0, 6).map((item, index) => (
          <Link to={`/details/${item.id}`} key={index}>
            <article>
              {/* Product image */}
              <img src={item.thumbnail} alt="item" />

              {/* Star + Rating */}
              <div className="render-rate">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1_1364)">
                    <path
                      d="M8.00008 11.3333L4.08141 13.7266L5.14674 9.25996L1.66008 6.27329L6.23674 5.90663L8.00008 1.66663L9.76341 5.90663L14.3407 6.27329L10.8534 9.25996L11.9187 13.7266L8.00008 11.3333Z"
                      fill="#FDC34E"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1364">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>{item.rating}</p>
              </div>

              {/* Title + Price + Plus-Icon */}
              <div className={darkMode ? "render-title dark" : "render-title"}>
                <section>
                  <h4>{item.title}</h4>
                  <p>$ {item.price}</p>
                </section>
                {/* Round blue plus-icon */}
                <svg
                  width="24"
                  height="24"
                  onClick={(e) => {
                    e.preventDefault();
                    handleFavorite({
                      title: item.title,
                      price: item.price,
                      rating: item.rating,
                      image: item.thumbnail
                    });
                  }}
                  viewBox="0 0 24 24"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_102_2004)">
                    <path
                      d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z"
                      fill=""
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_102_2004">
                      <rect width="24" height="24" fill="" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </article>
          </Link>
        ))}
      </section>
    </>
  );
};

export default RenderRandom;
