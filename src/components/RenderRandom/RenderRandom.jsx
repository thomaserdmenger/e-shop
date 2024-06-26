import "./RenderRandom.css";
import { useContext, useEffect } from "react";
import {
  fetchProductsContext,
  darkModeContext,
  localStorageContext,
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
      <div className="render-random-div">
        <h3 className="render-random__heading">Popular</h3>
        <Link to="/search">
          <p>View All</p>
        </Link>
      </div>
      <section
        style={{ paddingBlockEnd: "8rem" }}
        className={darkMode ? " dark render" : " render"}
      >
        {productsData?.products?.slice(0, 6).map((item, index) => (
          <Link to={`/details/${item.id}`} key={index}>
            <article>
              <img src={item.thumbnail} alt="item" />
              <div className={darkMode ? "render-title dark" : "render-title"}>
                <section>
                  <h4>{item.title}</h4>
                  <div className="render-rate">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill=""
                      xmlns="http://www.w3.org/2000/svg"
                    >
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
                  <div
                    className={
                      darkMode
                        ? "render__blue-container dark"
                        : "render__blue-container"
                    }
                  >
                    <p>$ {item.price}</p>
                    <svg
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      onClick={(e) => {
                        e.preventDefault();
                        handleFavorite({
                          title: item.title,
                          price: item.price,
                          rating: item.rating,
                          image: item.thumbnail,
                          id: item.id,
                        });
                      }}
                    >
                      <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                    </svg>
                  </div>
                </section>
              </div>
            </article>
          </Link>
        ))}
      </section>
    </>
  );
};

export default RenderRandom;
