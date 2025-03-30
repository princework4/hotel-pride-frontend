import React from "react";
import {
  Button,
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputLabel,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import SquareIcon from "@mui/icons-material/Square";
import { allRoomTypes } from "../../Constants";
import "./PopupRoomDetails.css";

const PopupRoomDetails = ({ open, handleClose, index }) => {
  const style = {
    width: {
      xs: "300px",
      sm: "550px",
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
    // overflow: "auto",
    transform: "translate(-50%, -50%)",
    // maxWidth: 400,
    // minWidth: 300,
    // p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="popup_room_details"
    >
      <Box sx={style}>
        <h3>{allRoomTypes[index][0]}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          unde quam repellat quasi qui error mollitia alias corrupti adipisci
          rerum?
        </p>
        <div>
          <h4>services & amenities</h4>
          <div className="popup_room_details__amenities_container">
            <ul>
              <li>
                {" "}
                <SquareIcon sx={{ width: "10px", color: "#d9736d" }} />
                <span>Minibar</span>
              </li>
              <li>
                {" "}
                <SquareIcon sx={{ width: "10px", color: "#d9736d" }} />
                <span>Electronic safe​</span>
              </li>
              <li>
                {" "}
                <SquareIcon sx={{ width: "10px", color: "#d9736d" }} />
                <span>Flat-screen TV​</span>
              </li>
              <li>
                {" "}
                <SquareIcon sx={{ width: "10px", color: "#d9736d" }} />
                <span>Bathtub</span>
              </li>
              <li>
                {" "}
                <SquareIcon sx={{ width: "10px", color: "#d9736d" }} />
                <span>Wi-fi</span>
              </li>
              <li>
                {" "}
                <SquareIcon sx={{ width: "10px", color: "#d9736d" }} />
                <span>24-hour in-room dining</span>
              </li>
            </ul>
            <ul>
              <li>
                {" "}
                <SquareIcon sx={{ width: "10px", color: "#d9736d" }} />
                <span>Iron & board</span>​
              </li>
              <li>
                {" "}
                <SquareIcon sx={{ width: "10px", color: "#d9736d" }} />
                <span>Yoga kit</span>
              </li>
              <li>
                {" "}
                <SquareIcon sx={{ width: "10px", color: "#d9736d" }} />
                <span>Newspapers</span>
              </li>
              <li>
                {" "}
                <SquareIcon sx={{ width: "10px", color: "#d9736d" }} />
                <span>24-hour laundry service</span>
              </li>
              <li>
                {" "}
                <SquareIcon sx={{ width: "10px", color: "#d9736d" }} />
                <span>Rollaway beds</span>​
              </li>
              <li>
                {" "}
                <SquareIcon sx={{ width: "10px", color: "#d9736d" }} />
                <span>Separate shower cubicle</span>​
              </li>
            </ul>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default PopupRoomDetails;
