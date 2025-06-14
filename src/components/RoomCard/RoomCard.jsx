import React from "react";
import Chip from "../Chip";
import ImageSlider from "../Slider";
import Search from "../Search";
import { Modal, Box } from "@mui/material";
import Breakfast from "../../assets/utensils-solid.svg";
import TV from "../../assets/tv-solid.svg";
import Tea from "../../assets/mug-hot-solid.svg";
import WaterBottle from "../../assets/bottle-water-solid.svg";
import Wifi from "../../assets/wifi-solid.svg";
import "./RoomCard.css";
import { useSelector } from "react-redux";

const RoomCard = ({ roomType, roomDetails, roomId, assets, sliderEnabled }) => {
  const roomRedux = useSelector((state) => state.roomReducer);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    width: {
      xs: "335px",
      sm: "400px",
    },
    height: "auto",
    padding: "0",
    border: "none",
    borderRadius: "20px",
    position: "absolute",
    top: "50%",
    left: "50%",
    bgcolor: "background.paper",
    boxShadow: 24,
    overflow: "auto",
    transform: "translate(-50%, -50%)",
  };
  return (
    <div className="room_card">
      <div className="room_card_media">
        <ImageSlider
          slidesToShow={1}
          slidesToScroll={1}
          images={assets}
          isCarousel={false}
          showDots={false}
          sliderEnabled={sliderEnabled}
        />
      </div>
      <div className="room_card_description">
        <h3>
          {roomType}
          {roomRedux.isOfferAvailable && (
            <span className="offer_percent">
              ({roomRedux.offers[roomId]}% off)
            </span>
          )}
        </h3>
        <ul className="room_details_chips">
          {roomDetails?.map((item, i) => (
            <li key={i}>
              <Chip content={item} />
            </li>
          ))}
        </ul>
        <p>Basic Amenities</p>
        <ul className="basic_amenities">
          {/* Don't use this code */}
          <li>
            <img src={TV} />
          </li>
          <li>
            <img src={Wifi} />
          </li>
          <li>
            <img src={Tea} />
          </li>
          <li>
            <img src={Breakfast} />
          </li>
          <li>
            <img src={WaterBottle} />
          </li>
        </ul>
        <button onClick={handleOpen}>BOOK NOW</button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="roomSearch"
      >
        <Box sx={style}>
          <Search
            handleClose={handleClose}
            callFromRoomCard={true}
            selectedRoomTypeId={roomId}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default RoomCard;
