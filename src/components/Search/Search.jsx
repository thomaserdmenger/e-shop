import "./Search.css";
import { userInputContext } from "../../context/Context";
import { useContext } from "react";

const Search = () => {
  const { userInput, setUserInput } = useContext(userInputContext);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        name="user-input"
        id="user-input"
        placeholder="Search"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
    </form>
  );
};

export default Search;
