import React, { useContext, useEffect, useState } from "react";
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
import { AppContext } from "../../context/AppContext";
import "./PopupRoomDetails.css";

const PopupRoomDetails = ({ open, handleClose, id }) => {
  const { state, dispatch } = useContext(AppContext);
  const [rooms, setRooms] = useState(state.allRoomTypes);

  useEffect(() => {
    const filteredRoom = rooms.filter((item) => item.id === id);
    setRooms(filteredRoom);
    console.log("rooms :- ", rooms);
  }, []);

  const style = {
    width: {
      xs: "300px",
      sm: "550px",
    },
    minHeight: {
      xs: "200px",
    },
    maxHeight: {
      xs: "300px",
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
        <h3>{rooms[0].typeName}</h3>
        <p>{rooms[0].description}</p>
        <div>
          <h4>amenities</h4>
          <div className="popup_room_details__amenities_container">
            <ul>
              {rooms[0].amenities.slice(0, 6)?.map((amenity) => {
                return (
                  <li key={amenity.id}>
                    {" "}
                    <SquareIcon
                      sx={{ width: "10px", height: "13px", color: "#b85042" }}
                    />
                    <span>{amenity.amenityName}</span>
                  </li>
                );
              })}
              {/* <li>
                {" "}
                <SquareIcon sx={{ width: "10px", color: "#b85042" }} />
                <span>Minibar</span>
              </li>
              <li>
                {" "}
                <SquareIcon sx={{ width: "10px", color: "#b85042" }} />
                <span>Electronic safe​</span>
              </li>
              <li>
                {" "}
                <SquareIcon sx={{ width: "10px", color: "#b85042" }} />
                <span>Flat-screen TV​</span>
              </li>
              <li>
                {" "}
                <SquareIcon sx={{ width: "10px", color: "#b85042" }} />
                <span>Bathtub</span>
              </li>
              <li>
                {" "}
                <SquareIcon sx={{ width: "10px", color: "#b85042" }} />
                <span>Wi-fi</span>
              </li>
              <li>
                {" "}
                <SquareIcon sx={{ width: "10px", color: "#b85042" }} />
                <span>24-hour in-room dining</span>
              </li> */}
            </ul>
            {rooms[0].amenities?.length > 6 && (
              <ul>
                {rooms[0].amenities
                  .slice(6, rooms[0].amenities.length)
                  .map((amenity) => {
                    return (
                      <li key={amenity.id}>
                        {" "}
                        <SquareIcon sx={{ width: "10px", color: "#b85042" }} />
                        <span>{amenity.amenityName}</span>​
                      </li>
                    );
                  })}
                {/* <li>
                  {" "}
                  <SquareIcon sx={{ width: "10px", color: "#b85042" }} />
                  <span>Iron & board</span>​
                </li>
                <li>
                  {" "}
                  <SquareIcon sx={{ width: "10px", color: "#b85042" }} />
                  <span>Yoga kit</span>
                </li>
                <li>
                  {" "}
                  <SquareIcon sx={{ width: "10px", color: "#b85042" }} />
                  <span>Newspapers</span>
                </li>
                <li>
                  {" "}
                  <SquareIcon sx={{ width: "10px", color: "#b85042" }} />
                  <span>24-hour laundry service</span>
                </li>
                <li>
                  {" "}
                  <SquareIcon sx={{ width: "10px", color: "#b85042" }} />
                  <span>Rollaway beds</span>​
                </li>
                <li>
                  {" "}
                  <SquareIcon sx={{ width: "10px", color: "#b85042" }} />
                  <span>Separate shower cubicle</span>​
                </li> */}
              </ul>
            )}
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default PopupRoomDetails;
