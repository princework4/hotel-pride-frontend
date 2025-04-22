import React, { useContext, useEffect, useState } from "react";
import { Box, Modal } from "@mui/material";
import SquareIcon from "@mui/icons-material/Square";
import { AppContext } from "../../context/AppContext";
import "./PopupRateDetails.css";

const PopupRateDetails = ({ isBreakfastIncluded, open, handleClose, id }) => {
  const { state, dispatch } = useContext(AppContext);
  const [rooms, setRooms] = useState(state.allRoomTypes);

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
      xs: "315px",
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
        <h3>
          {isBreakfastIncluded ? "Breakfast Included" : "Without Breakfast"}
        </h3>
        <div>
          <h4>rate description</h4>
          <ul>
            <li>
              {" "}
              <SquareIcon
                sx={{
                  width: "10px",
                  height: { xs: "13px", md: "1em" },
                  color: "#b85042",
                }}
              />
              <span>
                Inclusive of buffet breakfast at a designated dining venue
              </span>
            </li>
            <li>
              {" "}
              <SquareIcon
                sx={{
                  width: "10px",
                  height: { xs: "13px", md: "1em" },
                  color: "#b85042",
                }}
              />
              <span>Inclusive of standard Wi-Fi</span>
            </li>
            <li>
              {" "}
              <SquareIcon
                sx={{
                  width: "10px",
                  height: { xs: "13px", md: "1em" },
                  color: "#b85042",
                }}
              />
              <span>Applicable taxes extra</span>
            </li>
          </ul>
        </div>
        <h4>cancellation policy</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, itaque.
        </p>
        <h4>guarantee policy</h4>
        <p
          style={{
            paddingBottom: "20px",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          inventore?
        </p>
      </Box>
    </Modal>
  );
};

export default PopupRateDetails;
