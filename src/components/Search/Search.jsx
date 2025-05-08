import * as React from "react";
import { Button, OutlinedInput, Popover } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useNavigate } from "react-router-dom";
import { getRoomsAvailability } from "../../services/Booking";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import "./Search.css";
import {
  increaseAdults,
  decreaseAdults,
  increaseChildrens,
  decreaseChildrens,
  increaseRooms,
  decreaseRooms,
  updateCheckInDate,
  updateCheckOutDate,
} from "../../features/search/searchSlice";
import {
  updateAvailableRoomTypes,
  updateSelectedRoomTypeId,
} from "../../features/room/roomSlice";
import { updateIsHomePage } from "../../features/nonFunctional/nonFunctionalSlice";

const Search = ({ callFromRoomCard = false, selectedRoomTypeId }) => {
  const guestOptionsRedux = useSelector((state) => state.searchReducer);
  const nonFunctionalRedux = useSelector((state) => state.nonFunctionalReducer);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const popOverId = open ? "simple-popover" : undefined;

  React.useEffect(() => {
    if (window.location.pathname === "/") {
      dispatch(updateIsHomePage(true));
    } else {
      dispatch(updateIsHomePage(false));
    }
  }, []);

  function checkRoomsQuantityForSingleCard(response) {
    const roomsWithQuantity = [];
    if (callFromRoomCard) {
      for (let i = 0; i < response.data?.length; i++) {
        if (
          response.data[i].id == selectedRoomTypeId &&
          response.data[i].availableRoomsQty >=
            guestOptionsRedux.guestOptions.rooms
        ) {
          roomsWithQuantity.push(response.data[i]);
          break;
        }
      }
    }
    return roomsWithQuantity;
  }

  function checkRoomsQuantityForAll(response) {
    let roomsWithQuantity = [];
    let totalRoomQuantity = 0;
    for (let i = 0; i < response.data?.length; i++) {
      totalRoomQuantity += response.data[i].availableRoomsQty;
    }
    if (totalRoomQuantity >= guestOptionsRedux.guestOptions.rooms) {
      roomsWithQuantity = response.data;
    }
    return roomsWithQuantity;
  }

  const handleSearch = async () => {
    const response = await getRoomsAvailability(
      guestOptionsRedux.checkInDate,
      guestOptionsRedux.checkOutDate
    );

    if (response.status == 200) {
      if (callFromRoomCard) {
        const roomsWithQuantity = checkRoomsQuantityForSingleCard(response);
        if (roomsWithQuantity.length === 0) {
          toast.error("No Rooms found for the selected configurations.");
          return;
        }

        dispatch(updateAvailableRoomTypes(roomsWithQuantity));
        dispatch(updateSelectedRoomTypeId(selectedRoomTypeId));
        navigate("/rooms");
      } else {
        const roomsWithQuantity = checkRoomsQuantityForAll(response);
        if (roomsWithQuantity.length === 0) {
          toast.error("No Rooms found for the selected configurations.");
          return;
        }
        dispatch(updateAvailableRoomTypes(roomsWithQuantity));
        navigate("/rooms");
      }
    } else {
      toast.error(response?.message || response?.error);
    }
  };

  return (
    <div
      className={`search-container ${
        nonFunctionalRedux.isHomePage ? "homePageSearch" : ""
      }`}
    >
      <form id="checkAvailability-form">
        <div className="form-group">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Check-In Date"
              value={guestOptionsRedux.checkInDate}
              onChange={(newValue) => dispatch(updateCheckInDate(newValue))}
              disablePast={true}
              format="DD-MM-YYYY"
              sx={{
                "& fieldset": {
                  borderColor: "#b85042 !important",
                },
                "& label": {
                  color: "#b85042 !important",
                  transform: "translate(14px, 8px) scale(1)",
                },
                "& label.MuiFormLabel-filled": {
                  color: "#b85042 !important",
                  transform: "translate(14px, -9px) scale(0.75)",
                },
                "& .MuiButtonBase-root": {
                  "&:hover": {
                    border: "none !important",
                    backgroundColor: "transparent !important",
                  },
                },
              }}
            />
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Check-Out Date"
              value={guestOptionsRedux.checkOutDate}
              onChange={(newValue) => dispatch(updateCheckOutDate(newValue))}
              disablePast={true}
              format="DD-MM-YYYY"
              sx={{
                "& fieldset": {
                  borderColor: "#b85042 !important",
                },
                "& label": {
                  color: "#b85042 !important",
                  transform: "translate(14px, 8px) scale(1)",
                },
                "& label.MuiFormLabel-filled": {
                  color: "#b85042 !important",
                  transform: "translate(14px, -9px) scale(0.75)",
                },
                "& .MuiButtonBase-root": {
                  "&:hover": {
                    border: "none !important",
                    backgroundColor: "transparent !important",
                  },
                },
              }}
            />
          </LocalizationProvider>
        </div>

        {/* Guests and Rooms */}

        <div className="form-group" style={{ position: "relative" }}>
          <OutlinedInput
            aria-describedby={popOverId}
            variant="contained"
            fullWidth
            onClick={handleClick}
            value={`${guestOptionsRedux.guestOptions.adults} adult(s)  -  ${guestOptionsRedux.guestOptions.children} Child(ren)  -  ${guestOptionsRedux.guestOptions.rooms} Room(s)`}
            sx={{
              "& fieldset": {
                borderColor: "#b85042 !important",
              },
            }}
          />
          <Popover
            id={popOverId}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            disableScrollLock={true}
          >
            <div className="guestInputs">
              <div className="guest-group">
                <span className="optionText">
                  <strong>Adult(s)</strong>
                </span>
                <div className="counter-buttons">
                  <button
                    disabled={guestOptionsRedux.guestOptions.adults <= 1}
                    className="counter__minus"
                    onClick={() => dispatch(decreaseAdults())}
                  >
                    -
                  </button>
                  <input value={guestOptionsRedux.guestOptions.adults} />
                  <button
                    disabled={
                      guestOptionsRedux.guestOptions.adults >=
                      9 - guestOptionsRedux.guestOptions.children
                    }
                    className="counter__plus"
                    onClick={() => dispatch(increaseAdults())}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="guest-group">
                <span className="optionText">
                  <strong>Child(ren)</strong>
                </span>
                <div className="counter-buttons">
                  <button
                    disabled={guestOptionsRedux.guestOptions.children <= 0}
                    className="counter__minus"
                    onClick={() => dispatch(decreaseChildrens())}
                  >
                    -
                  </button>
                  <input value={guestOptionsRedux.guestOptions.children} />
                  <button
                    className="counter__plus"
                    disabled={
                      guestOptionsRedux.guestOptions.children >=
                      9 - guestOptionsRedux.guestOptions.adults
                    }
                    onClick={() => dispatch(increaseChildrens())}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="guest-group">
                <span className="optionText">
                  <strong>Room(s)</strong>
                </span>
                <div className="counter-buttons">
                  <button
                    className="counter__minus"
                    disabled={guestOptionsRedux.guestOptions.rooms <= 1}
                    onClick={() => dispatch(decreaseRooms())}
                  >
                    -
                  </button>
                  <input value={guestOptionsRedux.guestOptions.rooms} />
                  <button
                    className="counter__plus"
                    disabled={guestOptionsRedux.guestOptions.rooms >= 7}
                    onClick={() => dispatch(increaseRooms())}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </Popover>
        </div>

        <Button
          className={
            !guestOptionsRedux.checkInDate ||
            !guestOptionsRedux.checkOutDate ||
            (guestOptionsRedux.guestOptions.adults == 0 &&
              guestOptionsRedux.guestOptions.rooms == 0)
              ? "disabled-search-btn"
              : "search-btn"
          }
          disabled={
            !guestOptionsRedux.checkInDate ||
            !guestOptionsRedux.checkOutDate ||
            (guestOptionsRedux.guestOptions.adults == 0 &&
              guestOptionsRedux.guestOptions.rooms == 0)
          }
          onClick={handleSearch}
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default Search;
