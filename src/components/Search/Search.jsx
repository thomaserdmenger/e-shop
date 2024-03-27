import "./Search.css";
import {
  brandValContext,
  catValContext,
  darkModeContext,
  filteredDataContext,
  priceValContext,
  userInputContext,
  sortContext,
} from "../../context/Context";
import { useContext } from "react";

const Search = () => {
  const { userInput, setUserInput } = useContext(userInputContext);
  const { setFilteredData } = useContext(filteredDataContext);
  const { darkMode } = useContext(darkModeContext);
  const { setCatVal } = useContext(catValContext);
  const { setPriceVal } = useContext(priceValContext);
  const { setBrandsVal } = useContext(brandValContext);
  const { setSortName } = useContext(sortContext);

  // Func to reset filteredData and userInput
  const reset = () => {
    setFilteredData([]);
    setUserInput("");
    setCatVal("");
    setPriceVal("");
    setBrandsVal("");
    setSortName("Choose");
  };

  return (
    <form className="searchbar" onSubmit={(e) => e.preventDefault()}>
      <input
        className={darkMode ? "searchbar__input dark" : "searchbar__input"}
        type="text"
        name="user-input"
        id="user-input"
        placeholder="Search"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />

      {/* Search-Icon */}
      <div className="searchbar__icon-container1">
        <svg
          className="searchbar__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </div>

      {/* Reset-Icon */}
      <div className="searchbar__icon-container2">
        <svg
          onClick={reset}
          className="searchbar__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z" />
        </svg>
      </div>
    </form>
  );
};

export default Search;
