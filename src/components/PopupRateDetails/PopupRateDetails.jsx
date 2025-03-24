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
import { roomTypes } from "../../Constants";
import "./PopupRateDetails.css";

const PopupRateDetails = ({ open, handleClose, index }) => {
  const style = {
    width: "550px",
    height: "300px",
    padding: "20px",
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
      className="popup_rate_details"
    >
      <Box sx={style}>
        <h3>{roomTypes[index]}</h3>
        <div>
          <h4>rate description</h4>
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
        </div>
        <h4>cancellation policy</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, itaque.
        </p>
        <h4>guarentee policy</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          inventore?
        </p>
      </Box>
    </Modal>
  );
};

export default PopupRateDetails;
