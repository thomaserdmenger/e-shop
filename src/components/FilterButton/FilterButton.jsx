import "./FilterButton.css";
import { togglePopupContext } from "../../context/Context";
import { useContext } from "react";

const FilterButton = () => {
  const { togglePopup, setTogglePopup } = useContext(togglePopupContext);

  return (
    <>
      <button onClick={() => setTogglePopup(!togglePopup)}>Filter</button>
    </>
  );
};

export default FilterButton;
