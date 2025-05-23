import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

import "./OfferHeader.css";
import { updateShouldShowOfferHeader } from "../../features/nonFunctional/nonFunctionalSlice";

const OfferHeader = () => {
  const roomRedux = useSelector((state) => state.roomReducer);
  const dispatch = useDispatch();
  // const modifiedTODate = `${roomRedux.offerEndDate
  //   ?.split("-")
  //   .reverse()
  //   .join("-")}T00:00:00`;
  const modifiedTODate = "2025-05-24T00:00:00";

  return (
    <div className="offer_header">
      <h3>offer ends in : </h3>
      <FlipClockCountdown to={`${modifiedTODate}`} className="flip-clock" />
      <CloseIcon
        sx={{ marginTop: "8px", color: "#fff", cursor: "pointer" }}
        onClick={() => dispatch(updateShouldShowOfferHeader(false))}
      />
    </div>
  );
};

export default OfferHeader;
