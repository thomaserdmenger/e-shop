import "./Home.css";
import Search from "../../components/Search/Search";
import FilterButton from "../../components/FilterButton/FilterButton";
import Categories from "../../components/Categories/Categories";
import Navbar from "../../components/Navbar/Navbar";
import RenderRandom from "../../components/RenderRandom/RenderRandom";
import FetchCategories from "../../components/FetchCategories/FetchCategories";
import SearchCategories from "../../components/SearchCategories/SearchCategories";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Find your favourite Product</h1>
      <div className="search-filter">
        <Search />
        <SearchCategories />
        <Link to="/search">
          <FilterButton />
        </Link>
      </div>
      <FetchCategories />
      <Categories />
      <RenderRandom />
      <Navbar />
    </>
  );
};

export default Home;
