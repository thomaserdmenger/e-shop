import "./SearchPage.css";
import Search from "../../components/Search/Search";
import FilterButton from "../../components/FilterButton/FilterButton";
import Sort from "../../components/Sort/Sort";
import RenderProducts from "../../components/RenderProducts/RenderProducts";
import Navbar from "../../components/Navbar/Navbar";
import FilterPopup from "../../components/FilterPopup/FilterPopup";
import { togglePopupContext } from "../../context/Context";
import { useContext } from "react";

const SearchPage = () => {
  const { togglePopup } = useContext(togglePopupContext);

  return (
    <>
      {togglePopup ? (
        <FilterPopup />
      ) : (
        <main>
          <h1>SearchPage</h1>
          <div className="search-filter">
            <Search />
            <FilterButton />
          </div>
          <Sort />
          <RenderProducts />
          <Navbar />
        </main>
      )}
    </>
  );
};

export default SearchPage;
