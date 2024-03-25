import "./RenderProducts.css";
import { useContext, useState } from "react";
import {
  fetchProductsContext,
  filteredDataContext,
  darkModeContext
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

  return (
    <>
      <section className={darkMode ? "render dark" : "render"}>
        {/* render filtered products */}
        {filteredData.length > 0 &&
          !filteredData.includes("noResult") &&
          filteredData?.slice(0, loadItems).map((item, index) => (
            <Link to={`/details/${item.id}`} key={index}>
              <article>
                {/* Product image */}
                <img src={item.thumbnail} alt={`image of ${item.title}`} />

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
                <div
                  className={darkMode ? "render-title dark" : "render-title"}>
                  <section>
                    <h4>{item.title}</h4>
                    <p>$ {item.price}</p>
                  </section>
                  {/* Round blue plus-icon */}
                  <svg
                    width="24"
                    height="24"
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

        {/* render all products */}
        {filteredData.length === 0 &&
          productsData?.products?.slice(0, loadItems).map((item, index) => (
            <Link to={`/details/${item.id}`} key={index}>
              <article>
                {/* Product image */}
                <img src={item.thumbnail} alt={`image of ${item.title}`} />

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
                        <rect width="16" height="16" fill="" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p>{item.rating}</p>
                </div>

                {/* Title + Price + Plus-Icon */}
                <div
                  className={darkMode ? "render-title dark" : "render-title"}>
                  <section>
                    <h4>{item.title}</h4>
                    <p>$ {item.price}</p>
                  </section>
                  {/* Round blue plus-icon */}
                  <svg
                    width="24"
                    height="24"
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
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
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
      {filteredData.length === 0 && (
        <div className="render-btn">
          <Link className="btn" onClick={() => setLoadItems(loadItems + 20)}>
            Load More
          </Link>
        </div>
      )}
    </>
  );
};

export default RenderProducts;
