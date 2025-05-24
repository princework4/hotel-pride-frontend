import React, { useEffect, useState } from "react";
import { Box, Modal } from "@mui/material";
import SquareIcon from "@mui/icons-material/Square";
import "./PopupRateDetails.css";
import { useSelector } from "react-redux";

const PopupRateDetails = ({ open, handleClose, id }) => {
  const roomRedux = useSelector((state) => state.roomReducer);
  const [rooms, setRooms] = useState(roomRedux.allRoomTypes);

  useEffect(() => {
    const filteredRoom = rooms.filter((item) => item.id === id);
    setRooms(filteredRoom);
  }, []);

  const style = {
    width: {
      xs: "300px",
      sm: "400px",
      md: "550px",
    },
    height: {
      xs: "300px",
      sm: "300px",
    },
    padding: {
      xs: "20px 15px",
      sm: "20px",
    },
    border: "none",
    borderRadius: "20px",
    position: "absolute",
    top: "50%",
    left: "50%",
    bgcolor: "background.paper",
    boxShadow: 24,
    transform: "translate(-50%, -50%)",
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="popup_rate_details"
    >
      <Box sx={style}>
        <h3>Rate Details</h3>
        <h4>cancellation policy</h4>
        <ul>
          <li style={{ height: "30px", lineHeight: "18px" }}>
            <span>
              For any type of cancellation, please contact the hotel directly.
              We will assist you based on your specific request.
            </span>
          </li>
        </ul>
        <h4 className="second_heading">extra guest charges</h4>
        <ul>
          <li>
            <span>&#8377;700 per additional guest per night.</span>
          </li>
        </ul>
        <h4>child policy</h4>
        <ul>
          <li>
            <SquareIcon
              sx={{
                width: "10px",
                height: { xs: "15px" },
                color: "#c4b991",
              }}
            />
            <span>Children below 6 years stay free with existing bedding.</span>
          </li>
          <li>
            <SquareIcon
              sx={{
                width: "10px",
                height: { xs: "15px" },
                color: "#c4b991",
              }}
            />
            <span>
              Children above 6 years will require an extra bed, which is
              chargable.
            </span>
          </li>
        </ul>
      </Box>
    </Modal>
  );
};

export default PopupRateDetails;
