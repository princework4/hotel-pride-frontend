import React from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import { useSelector } from "react-redux";

import "./OfferHeader.css";

const OfferHeader = () => {
  const roomRedux = useSelector((state) => state.roomReducer);
  const modifiedTODate = `${roomRedux.offerEndDate
    ?.split("-")
    .reverse()
    .join("-")}T00:00:00`;
  //   const ddate = Date.parse("2025-05-16");
  //   const TO = new Date().getTime() + 24 * 3600 * 1000 + 5000;
  console.log("TO :- ", modifiedTODate);

  return (
    <div className="offer_header">
      <h3>offer ends in : </h3>
      <FlipClockCountdown to={`${modifiedTODate}`} className="flip-clock" />
      {/* <FlipClockCountdown to="2025-05-20T00:00:00" className="flip-clock" /> */}
    </div>
  );
};

export default OfferHeader;
