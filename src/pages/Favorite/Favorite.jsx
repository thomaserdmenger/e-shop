import "./Favorite.css";
import Navbar from "../../components/Navbar/Navbar";
import { localStorageContext, darkModeContext } from "../../context/Context";
import { useContext, useEffect } from "react";

const Favorite = () => {
  const { favorites, setFavorites } = useContext(localStorageContext);
  const { darkMode } = useContext(darkModeContext);

  useEffect(() => {
    const data = window.localStorage.getItem("DATA");
    if (data !== null) {
      // setFavorites(JSON.parse(data));
      const parsedData = JSON.parse(data);
      const uniqueFavorites = removeDuplicates(parsedData);
      setFavorites(uniqueFavorites);
    }
  }, []);

  const removeDuplicates = (arr) => {
    const uniqueArray = arr.filter((item, index) => {
      const firstIndex = arr.findIndex((obj) => {
        return JSON.stringify(obj) === JSON.stringify(item);
      });
      return firstIndex === index;
    });
    return uniqueArray;
  };

  const handleRemove = (index) => {
    const updatedFavorites = [...favorites];
    updatedFavorites.splice(index, 1);
    setFavorites(updatedFavorites);
    window.localStorage.setItem("DATA", JSON.stringify(updatedFavorites));
  };

  return (
    <main>
      <section className="favorites">
        {favorites.map((item, index) => {
          return (
            <article key={index}>
              <img src={item.image} alt={`image of ${item.title}`} />
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
              <div className={darkMode ? "render-title dark" : "render-title"}>
                <section>
                  <h4>{item.title}</h4>
                  <p>$ {item.price}</p>
                </section>
                <svg
                  className="favorites__delete-icon"
                  onClick={() => handleRemove(index)}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512">
                  <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
                </svg>
              </div>
            </article>
          );
        })}
      </section>
      <Navbar />
    </main>
  );
};

export default Favorite;
