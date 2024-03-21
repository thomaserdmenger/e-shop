import "./Home.css";
import Search from "../../components/Search/Search";
import FilterButton from "../../components/FilterButton/FilterButton";
import Categories from "../../components/Categories/Categories";
import RenderProducts from "../../components/RenderProducts/RenderProducts";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Search />
        <FilterButton />
      </div>
      <Categories />
      <RenderProducts />
      <Navbar />
    </>
  );
};

export default Home;
