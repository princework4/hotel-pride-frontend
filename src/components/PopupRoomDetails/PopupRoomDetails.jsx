import React, { useEffect, useState } from "react";
import { Box, Modal } from "@mui/material";
import SquareIcon from "@mui/icons-material/Square";
import { useSelector } from "react-redux";
import "./PopupRoomDetails.css";

const PopupRoomDetails = ({ open, handleClose, id }) => {
  const roomRedux = useSelector((state) => state.roomReducer);
  const [rooms, setRooms] = useState(roomRedux.allRoomTypes);

  useEffect(() => {
    const filteredRoom = rooms.filter((item) => item.id === id);
    setRooms(filteredRoom);
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
    transform: "translate(-50%, -50%)",
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
              </ul>
            )}
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default PopupRoomDetails;
