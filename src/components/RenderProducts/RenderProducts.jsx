import "./RenderProducts.css";
import { useContext, useState, useEffect } from "react";
import {
  fetchProductsContext,
  filteredDataContext,
  darkModeContext,
  localStorageContext,
} from "../../context/Context";
import { Link } from "react-router-dom";

const RenderProducts = ({ noResult }) => {
  // context for fetching all products
  const { productsData, setProductsData } = useContext(fetchProductsContext);

  // context for filtered data
  const { filteredData } = useContext(filteredDataContext);

  // state for first 20 loaded products
  const [loadItems, setLoadItems] = useState(20);

  // State for Dark Mode from Context
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
      <section className={darkMode ? "render dark" : "render"}>
        {/* render filtered products */}
        {filteredData.length > 0 &&
          !filteredData.includes("noResult") &&
          filteredData?.slice(0, loadItems).map((item, index) => (
            <Link to={`/details/${item.id}`} key={index}>
              <article>
                <img src={item.thumbnail} alt="item" />
                <div
                  className={darkMode ? "render-title dark" : "render-title"}
                >
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

        {/* render all products */}
        {filteredData.length === 0 &&
          productsData?.products?.slice(0, loadItems).map((item, index) => (
            <Link to={`/details/${item.id}`} key={index}>
              <article>
                <img src={item.thumbnail} alt="item" />
                <div
                  className={darkMode ? "render-title dark" : "render-title"}
                >
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

      {/* Filtered Data with False Value because there is no result after filtering */}
      {filteredData.includes("noResult") && (
        <section className="noresults">
          <p>
            No results found for your search query. Please change the filter to
            get results.
          </p>
        </section>
      )}

      {/* Load-More-Button for filtered Data, if more than 20 */}
      {filteredData.length > 20 && (
        <div className="render-btn">
          <Link className="btn" onClick={() => setLoadItems(loadItems + 20)}>
            Load More
          </Link>
        </div>
      )}

      {/* Load-More-Button for default all products */}
      {filteredData.length === 0 && loadItems <= 99 && (
        <div className="render-btn">
          <Link
            className={darkMode ? "btn dark" : "btn"}
            onClick={() => setLoadItems(loadItems + 20)}
          >
            Load More
          </Link>
        </div>
      )}
    </>
  );
};

export default RenderProducts;
