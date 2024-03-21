import "./Loading.css";
import FetchCaregories from "../../components/FetchCaregories/FetchCaregories";
import FetchProducts from "../../components/FetchProducts/FetchProducts";

const Loading = () => {
  return (
    <>
      <h1>Loading</h1>
      <FetchCaregories />
      <FetchProducts />
    </>
  );
};

export default Loading;
