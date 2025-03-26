import Chip from "../Chip";
import ImageSlider from "../Slider";
import Search from "../Search";
import { Modal, Box } from '@mui/material';
import { roomImages } from "../../Constants";
import "./RoomCard.css";

import React from "react";

const RoomCard = ({ roomType, roomDetails }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    width: "400px",
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
    // maxWidth: 400,
    // minWidth: 300,
    // p: 4,
  };
  return (
    <div className="room_card">
      <div className="room_card_media">
        <ImageSlider
          slidesToShow={1}
          slidesToScroll={1}
          images={roomImages}
          isCarousel={false}
        />
      </div>
      <div className="room_card_description">
        <h3>{roomType}</h3>
        <ul className="room_details_chips">
          {roomDetails?.map((item, i) => (
            <li key={i}>
              <Chip content={item} />
            </li>
          ))}
        </ul>
        <p>Basic Amenities</p>
        <ul className="basic_amenities">
          <li>
            <i className="flat_screen_tv"></i>
          </li>
          <li>
            <i className="wifi"></i>
          </li>
          <li>
            <i className="safe_deposit"></i>
          </li>
          <li>
            <i className="tea_coffee"></i>
          </li>
          <li>
            <i className="breakfast"></i>
          </li>
          <li>
            <i className="bottled_water"></i>
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
          {/* <Box className="close_icon_wrapper">
                      <CloseIconCircle handleClose={handleClose} />
                    </Box> */}
          <Search handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
};

export default RoomCard;
