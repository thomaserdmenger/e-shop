import { useContext, useEffect, useState } from "react";
import "./BackToTopBtn.css";
import { darkModeContext } from "../../context/Context";

const BackToTopBtn = () => {
  // global context for dark mode
  const { darkMode } = useContext(darkModeContext);

  // state for showing back to top button
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const handleVisibility = () => {
      window.pageYOffset > 300 ? setShowBtn(true) : setShowBtn(false);
    };
    window.addEventListener("scroll", handleVisibility);

    return () => {
      window.removeEventListener("scroll", handleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={darkMode ? "backToTop dark" : "backToTop"}>
      {showBtn && (
        <svg
          onClick={scrollToTop}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
        </svg>
      )}
    </div>
  );
};

export default BackToTopBtn;
