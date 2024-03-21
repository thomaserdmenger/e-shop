import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./pages/Loading/Loading";
import Home from "./pages/Home/Home";
import Onboarding from "./pages/Onboarding/Onboarding";
import SearchPage from "./pages/SearchPage/SearchPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";

function App() {
  return (
    <>
      <div className="wrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/loading" element={<Loading />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/details/:id" element={<DetailsPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
