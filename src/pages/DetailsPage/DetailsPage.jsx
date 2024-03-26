import "./DetailsPage.css";
import BackButton from "../../components/BackButton/BackButton";
import Navbar from "../../components/Navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  fetchProductsContext,
  darkModeContext,
  localStorageContext
} from "../../context/Context";

const DetailsPage = () => {
  // counter for product count:
  const [count, setCount] = useState(1);

  // state for single product details:
  const [singleProduct, setSingleProduct] = useState();

  // context for global product fetch:
  const { productsData } = useContext(fetchProductsContext);

  // ID of link:
  const { id } = useParams();

  // DarkMode Context
  const { darkMode } = useContext(darkModeContext);

  // Gobal Context for Favorite Items
  const { favorites, setFavorites } = useContext(localStorageContext);

  // find link-id in global fetch:
  useEffect(() => {
    const find = productsData?.products?.find(
      (item) => Number(item.id) === Number(id)
    );
    setSingleProduct(find);
  }, [productsData]);

  // function for subtracting one item in couter (adding as callback-function in render):
  const subItem = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      window.alert("Gib mindestens ein Produkt ein");
    }
  };

  const handleFavorite = (title) => {
    setFavorites([...favorites, title]);
  };

  useEffect(() => {
    window.localStorage.setItem("DATA", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <>
      <section className="product">
        <BackButton />

        <h2 className="product-heading">{singleProduct?.title}</h2>

        {/* product card: */}
        <article className={darkMode ? "product-card dark" : "product-card"}>
          <div
            onClick={(e) => {
              e.preventDefault();
              handleFavorite({
                title: singleProduct.title,
                price: singleProduct.price,
                rating: singleProduct.rating,
                image: singleProduct.thumbnail,
                id: singleProduct.id
              });
            }}
            className={
              darkMode
                ? "product-card__heart-container dark"
                : "product-card__heart-container"
            }>
            <svg
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512">
              <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
            </svg>
          </div>
          <img src={singleProduct?.thumbnail} alt={singleProduct?.title} />
          <div className="product-title-count">
            <h2>{singleProduct?.title}</h2>

            {/* products-Counter: */}
            <div className="product-count">
              {/* Minus-Icon - onclick -1 with min: 1: */}
              <svg
                onClick={subItem}
                width="24"
                height="24"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect
                  x="-4"
                  y="-4"
                  width="24"
                  height="24"
                  rx="3"
                  fill="#CAD1D9"
                />
                <path
                  d="M7.33334 7.33338L8.66668 7.33337L12.6667 7.33338V8.66671H8.66668L7.33334 8.66672L3.33334 8.66671V7.33338H7.33334Z"
                  fill="white"
                />
              </svg>

              {/* render count:  */}
              <p>{count}</p>

              {/* Plus-Icon - onclick +1: */}
              <svg
                onClick={() => {
                  setCount(count + 1);
                }}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="3" fill="#828B9A" />
                <g clipPath="url(#clip0_3610_316)">
                  <path
                    d="M11.3333 11.3334V7.33337H12.6667V11.3334H16.6667V12.6667H12.6667V16.6667H11.3333V12.6667H7.33334V11.3334H11.3333Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3610_316">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(4 4)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          {/* Rating + Star: */}
          <div className="product-rating">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
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
            <p>{singleProduct?.rating}</p>
          </div>

          {/* Stock + Price: */}
          <div className={darkMode ? "product-price dark" : "product-price"}>
            <p>{singleProduct?.stock} pieces in stock</p>
            <h2>$ {singleProduct?.price}</h2>
          </div>
        </article>

        {/* Product Description: */}
        <article className="product-description">
          <h2>Description</h2>
          <p>{singleProduct?.description}</p>
        </article>

        {/* Add to Cart Button: */}
        <div className="product-btn">
          <Link className={darkMode ? "btn dark" : "btn"}>Add to Cart</Link>
        </div>
      </section>
      <Navbar />
    </>
  );
};

export default DetailsPage;
