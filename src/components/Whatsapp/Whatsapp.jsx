import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useEffect } from "react";
import { TOP } from "../../Constants";
import "./Whatsapp.css";

import WhatsappIcon from "../../assets/whatsapp.png";

const Whatsapp = () => {
  const [changePosition, setChangePosition] = React.useState(false);

  useEffect(() => {
    function onScroll() {
      setChangePosition(document.documentElement.scrollTop >= TOP);
    }
    onScroll();
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [TOP]);

  return (
    <div
      className="whatsapp_button"
      style={{ bottom: changePosition ? "175px" : "100px" }}
    >
      <a
        href="https://api.whatsapp.com/send?phone=919819914047"
        className="float"
        target="_blank"
      >
        <img src={WhatsappIcon} alt="whatsapp icon" />
      </a>
    </div>
  );
};

export default Whatsapp;
