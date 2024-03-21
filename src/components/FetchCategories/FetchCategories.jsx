import { useContext, useEffect } from "react";
import { fetchCategoriesContext } from "../../context/Context";

const FetchCategories = () => {
  const { setCategoriesData } = useContext(fetchCategoriesContext);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategoriesData(data))
      .catch((err) => console.error(err));
  }, []);
};

export default FetchCategories;
