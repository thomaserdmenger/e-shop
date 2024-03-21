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
  fetchCategoriesContext
} from "./context/Context";

function App() {
  // State for Loading Page
  const [loading, setLoading] = useState(true);

  // State for Fetching Products Data with fetchProductsContext
  const [productsData, setProductsData] = useState([]);
  // console.log(productsData);

  // State for Fetching Categogies Data with fetchCategoriesContext
  const [categoriesData, setCategoriesData] = useState([]);
  // console.log(categoriesData);

  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading);
    }, 2000);
  }, []);

  return (
    <>
      <div className="wrapper">
        <fetchProductsContext.Provider
          value={{ productsData, setProductsData }}>
          <fetchCategoriesContext.Provider
            value={{ categoriesData, setCategoriesData }}>
            {loading ? (
              <Loading />
            ) : (
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/loading" element={<Loading />} />
                  <Route path="/onboarding" element={<Onboarding />} />
                  <Route path="/search" element={<SearchPage />} />
                  <Route path="/details/:id" element={<DetailsPage />} />
                </Routes>
              </BrowserRouter>
            )}
          </fetchCategoriesContext.Provider>
        </fetchProductsContext.Provider>
      </div>
    </>
  );
}

export default App;
