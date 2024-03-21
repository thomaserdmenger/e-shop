import "./Loading.css";
import FetchCategories from "../../components/FetchCategories/FetchCategories";
import FetchProducts from "../../components/FetchProducts/FetchProducts";

const Loading = () => {
  return (
    <>
      <h1>Loading</h1>
      <FetchCategories />
      <FetchProducts />
    </>
  );
};

export default Loading;
