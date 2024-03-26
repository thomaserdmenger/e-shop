import "./Favorite.css";
import Navbar from "../../components/Navbar/Navbar";
import { localStorageContext, darkModeContext } from "../../context/Context";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import BackToTopBtn from "../../components/BackToTopBtn/BackToTopBtn";

const Favorite = () => {
  // global context for favorites
  const { favorites, setFavorites } = useContext(localStorageContext);

  // global context for dark mode
  const { darkMode } = useContext(darkModeContext);

  // save favorite items in local storage
  useEffect(() => {
    const data = window.localStorage.getItem("DATA");
    if (data !== null) {
      // setFavorites(JSON.parse(data));
      const parsedData = JSON.parse(data);
      const uniqueFavorites = removeDuplicates(parsedData);
      setFavorites(uniqueFavorites);
    }
  }, []);

  // remove favorite items from local storage
  const removeDuplicates = (arr) => {
    const uniqueArray = arr.filter((item, index) => {
      const firstIndex = arr.findIndex((obj) => {
        return JSON.stringify(obj) === JSON.stringify(item);
      });
      return firstIndex === index;
    });
    return uniqueArray;
  };

  // func to remove favorite items from local storage
  const handleRemove = (index) => {
    const updatedFavorites = [...favorites];
    updatedFavorites.splice(index, 1);
    setFavorites(updatedFavorites);
    window.localStorage.setItem("DATA", JSON.stringify(updatedFavorites));
  };
  console.log(localStorage);

  return (
    <main>
      <section className={darkMode ? "favorites dark" : "favorites"}>
        <div className="favorites__heading">
          {/* heart-icon */}
          <svg
            data-name="Livello 1"
            id="Livello_1"
            viewBox="0 0 128 128"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title />
            <path d="M116.22,16.68C108,8.8,95.16,4.88,83.44,6.71,75,8,68.17,12.26,64.07,18.68c-4-6.53-10.62-10.84-18.93-12.22-11.61-1.91-25,2.19-33.37,10.21A38.19,38.19,0,0,0,0,44.05,39.61,39.61,0,0,0,11.74,72.65L59,119.94a7,7,0,0,0,9.94,0l47.29-47.3A39.61,39.61,0,0,0,128,44.05,38.19,38.19,0,0,0,116.22,16.68ZM112,68.4,64.73,115.7a1,1,0,0,1-1.46,0L16,68.4A33.66,33.66,0,0,1,6,44.11,32.23,32.23,0,0,1,15.94,21c5.89-5.67,14.78-9,23.29-9a30.38,30.38,0,0,1,4.94.4c5,.82,11.67,3.32,15.42,10.56A5.06,5.06,0,0,0,64,25.68h0a4.92,4.92,0,0,0,4.34-2.58h0c3.89-7.2,10.82-9.66,15.94-10.46,9.77-1.52,20.9,1.84,27.7,8.37A32.23,32.23,0,0,1,122,44.11,33.66,33.66,0,0,1,112,68.4Z" />
          </svg>
          <h2>Your favorite items</h2>
        </div>

        {/* render favorite item from local storage */}
        {favorites.map((item, index) => {
          return (
            <article
              key={index}
              className={
                darkMode ? "favorites__container dark" : "favorites__container"
              }
            >
              {/* //# id noch in locale storage object speichern */}
              <Link to={`/details/${item.id}`}>
                <div className="favorites__container-imgtext">
                  {/* render img */}
                  <img src={item.image} alt={`image of ${item.title}`} />

                  {/* render text */}
                  <div
                    className={
                      darkMode ? "favorites__text dark" : "favorites__text"
                    }
                  >
                    <h4>{item.title}</h4>
                    <p>$ {item.price}</p>
                    <div
                      className={
                        darkMode ? "favorites__rate dark" : "favorites__rate"
                      }
                    >
                      {/* star icon */}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
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
                  </div>
                </div>
              </Link>

              {/* bin icon */}
              <svg
                onClick={() => handleRemove(index)}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
              </svg>
            </article>
          );
        })}
      </section>
      <BackToTopBtn />
      <Navbar />
    </main>
  );
};

export default Favorite;
