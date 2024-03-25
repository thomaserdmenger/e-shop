import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./pages/Loading/Loading";
import Home from "./pages/Home/Home";
import Onboarding from "./pages/Onboarding/Onboarding";
import SearchPage from "./pages/SearchPage/SearchPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import { useEffect, useState } from "react";
import {
  fetchProductsContext,
  fetchCategoriesContext,
  userInputContext,
  darkModeContext,
  togglePopupContext,
  filteredDataContext
} from "./context/Context";
import Favorite from "./pages/Favorite/Favorite";

function App() {
  // State for Loading Page
  const [loading, setLoading] = useState(true);
  // console.log(loading);

  // Global State for Fetching Products Data with fetchProductsContext
  const [productsData, setProductsData] = useState([]);
  // console.log(productsData);

  // Global State for Fetching Categogies Data with fetchCategoriesContext
  const [categoriesData, setCategoriesData] = useState([]);
  // console.log(categoriesData);

  // Global State for User Input from Search Bar from Search Component
  const [userInput, setUserInput] = useState("");
  // console.log(userInput);

  // Global State for Dark Mode
  const [darkMode, setDarkMode] = useState(false);
  // console.log(darkMode);

  // Global State to Toogle Popup from Home Page and Search Page
  const [togglePopup, setTogglePopup] = useState(false);
  // console.log(togglePopup);

  // Global State for filtered Data
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading);
    }, 3000);
  }, []);

  return (
    <>
      <div className={darkMode ? "wrapper dark" : "wrapper"}>
        <fetchProductsContext.Provider
          value={{ productsData, setProductsData }}>
          <fetchCategoriesContext.Provider
            value={{ categoriesData, setCategoriesData }}>
            <userInputContext.Provider value={{ userInput, setUserInput }}>
              <darkModeContext.Provider value={{ darkMode, setDarkMode }}>
                <togglePopupContext.Provider
                  value={{ togglePopup, setTogglePopup }}>
                  <filteredDataContext.Provider
                    value={{ filteredData, setFilteredData }}>
                    {loading ? (
                      <Loading />
                    ) : (
                      <BrowserRouter>
                        <Routes>
                          <Route path="/home" element={<Home />} />
                          <Route path="/loading" element={<Loading />} />
                          <Route path="/" element={<Onboarding />} />
                          <Route path="/search" element={<SearchPage />} />
                          <Route
                            path="/details/:id"
                            element={<DetailsPage />}
                          />
                          <Route path="/favorite" element={<Favorite />} />
                        </Routes>
                      </BrowserRouter>
                    )}
                  </filteredDataContext.Provider>
                </togglePopupContext.Provider>
              </darkModeContext.Provider>
            </userInputContext.Provider>
          </fetchCategoriesContext.Provider>
        </fetchProductsContext.Provider>
      </div>
    </>
  );
}

export default App;
