import "./SearchCategories.css";
import { useContext, useEffect, useState } from "react";
import { userInputContext, fetchProductsContext } from "../../context/Context";
import FetchProducts from "../FetchProducts/FetchProducts";

const SearchCategories = () => {
  // *Global Context für userInput und für Products Fetch
  const { userInput, setUserInput } = useContext(userInputContext);
  const { productsData, setProductsData } = useContext(fetchProductsContext);

  const [test, setTest] = useState([]);

  //   productsData?.products.map((item, index) => (
  //    return item;
  //   ))

  //   if (
  //     productsData?.products.map((item, index) => item.title.includes(userInput))
  //   ) {
  //     console.log(item.category);
  //   }

  //   if (item.title.includes(userInput)) {
  //     console.log(item.category)
  //     }

  useEffect(() => {
    const newArray = productsData?.products.filter((item) => {
      return (
        item.title.toLowerCase().includes(userInput.toLowerCase()) ||
        item.description.toLowerCase().includes(userInput.toLowerCase()) ||
        item.brand.toLowerCase().includes(userInput.toLowerCase())
        // !Achtung nochmal verbessern! description und brand funktionieren nicht!
      );
      // console.log(item);
      //   if (item.title.toLowerCase().includes(userInput.toLowerCase())) {
      // console.log(item.category);
      // setTest(item.category);
      //   }
    });
    const categories = newArray.map((item) => item.category);
    // console.log(categories);
    const uniqueCategories = [...new Set(categories)];
    // console.log(uniqueCategories);
    setTest(uniqueCategories);

    // test.map((item) => console.log(item));
  }, [userInput]);

  return (
    <section className="search-categories">
      <FetchProducts />
      {/* <div>
        {userInput.length > 0 &&
          newArray.map((item, index) => <p>{item.cateogry}</p>)}
        {userInput.length > 0 &&
          productsData?.products.map((item, index) =>
            item.title.toLowerCase().includes(userInput.toLowerCase()) ||
            item.description.toLowerCase().includes(userInput.toLowerCase()) ||
            item.brand.toLowerCase().includes(userInput.toLowerCase()) ? (
              <p> {item.category}</p>
            ) : (
              ""
            )
          )}
      </div> */}
      <div>
        {userInput.length > 0 &&
          test.map((item, index) => <p key={index}>{item}</p>)}
        {/* <p>{userInput.length > 0 && test}</p> */}
      </div>
    </section>
  );
};

export default SearchCategories;
