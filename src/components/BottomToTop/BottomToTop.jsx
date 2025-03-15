import React, { useEffect, useState } from "react";
import { TOP } from "../../Constants";
import UpArrow from "../../assets/angle-up-solid.svg";
import "./BottomToTop.css";

const BottomToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(document.documentElement.scrollTop >= TOP);
    }
    onScroll();
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [TOP]);

  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (visible) {
    return (
      <button id="bottom_to_top" onClick={handleClick}>
        <img src={UpArrow} alt="back to top" />
      </button>
    );
  }
};

export default BottomToTop;
