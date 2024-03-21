import "./SearchPage.css";
import Search from "../../components/Search/Search";
import FilterButton from "../../components/FilterButton/FilterButton";
import Sort from "../../components/Sort/Sort";
import RenderProducts from "../../components/RenderProducts/RenderProducts";
import Navbar from "../../components/Navbar/Navbar";
import FilterPopup from "../../components/FilterPopup/FilterPopup";

const SearchPage = () => {
  return (
    <>
      <h1>SearchPage</h1>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Search />
        <FilterButton />
      </div>
      <Sort />
      <RenderProducts />
      <Navbar />
      <FilterPopup />
    </>
  );
};

export default SearchPage;
