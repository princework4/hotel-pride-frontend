import { useState } from "react";
import "./Search.css";
import * as React from "react";
import {
  Button,
  OutlinedInput,
  MenuItem,
  Popover,
  Select,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { reducerMethods } from "../../context/reducerMethods";
import { getRoomsAvailability } from "../../services/Booking";
import { toast } from "react-toastify";
import { TOP } from "../../Constants";

const Search = ({ callFromRoomCard = false, selectedRoomTypeId }) => {
  const { state, dispatch } = React.useContext(AppContext);
  const {
    guestOptions,
    checkInDate,
    checkOutDate,
    isHomePage,
    filteredAllRoomTypes,
  } = state;
  // const [guestOptions, setguestOptions] = useState({ adults: 1, children: 0, room: 1 });
  // const [checkInDate, setCheckInDate] = useState(null);
  // const [checkOutDate, setCheckOutDate] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [searchedAvailableRoomTypes, setSearchedAvailableRoomTypes] = useState(
    []
  );

  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const popOverId = open ? "simple-popover" : undefined;

  const handleOption = (name, operation) => {
    dispatch({
      type: reducerMethods.setGuestOptions,
      payload: {
        [name]:
          operation === "i" ? guestOptions[name] + 1 : guestOptions[name] - 1,
      },
    });

    // setguestOptions({
    //   ...guestOptions,
    //   [name]: operation === "i" ? guestOptions[name] + 1 : guestOptions[name] - 1,
    // });
  };

  React.useEffect(() => {
    if (window.location.pathname === "/") {
      dispatch({ type: reducerMethods.setIsHomePage, payload: true });
    } else {
      dispatch({ type: reducerMethods.setIsHomePage, payload: false });
    }
  }, []);

  async function checkRoomAvailability() {
    const response = await getRoomsAvailability(checkInDate, checkOutDate);
    console.log(response.data);
    setSearchedAvailableRoomTypes(response.data);
    dispatch({
      type: reducerMethods.setFilteredAllRoomTypes,
      payload: response?.data,
    });
    console.log("filteredAllRoomTypes :- ", filteredAllRoomTypes);
  }

  const handleSearch = async () => {
    // checkRoomAvailability();

    const response = await getRoomsAvailability(checkInDate, checkOutDate);
    if (response.status == 200) {
      console.log(response.data);
      setSearchedAvailableRoomTypes(response.data);
      // dispatch({
      //   type: reducerMethods.setFilteredAllRoomTypes,
      //   payload: response?.data,
      // });

      if (callFromRoomCard && response.data.length > 0) {
        let roomTypeFound = false;
        for (let i = 0; i < response.data?.length; i++) {
          if (response.data[i].id == selectedRoomTypeId) {
            roomTypeFound = true;
            break;
          }
        }

        if (!roomTypeFound) {
          toast.error("No Rooms found for the selected configurations 1.");
          return;
        } else {
          dispatch({
            type: reducerMethods.setSelectedRoomTypeId,
            payload: selectedRoomTypeId,
          });
          navigate(`/rooms/${selectedRoomTypeId}`);
        }
      } else {
        console.log(
          "filteredAllRoomTypes :- ",
          filteredAllRoomTypes,
          filteredAllRoomTypes.length
        );
        if (response.data.length > 0) {
          navigate("/rooms/all");
        } else {
          toast.error("No Rooms found for the selected configurations 2.");
        }
      }
    } else {
      toast.error(response?.message || response?.error);
    }
  };

  return (
    <div className={`search-container ${isHomePage ? "homePageSearch" : ""}`}>
      <form id="checkAvailability-form">
        <div className="form-group">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Check-In Date"
              value={checkInDate}
              // onChange={(newValue) => setCheckInDate(newValue)}
              onChange={(newValue) =>
                dispatch({
                  type: reducerMethods.setCheckInDate,
                  payload: newValue,
                })
              }
              disablePast={true}
              format="DD-MM-YYYY"
              sx={{
                "& fieldset": {
                  borderColor: "#b85042 !important",
                },
                "& label": {
                  color: "#b85042 !important",
                },
                "& .MuiButtonBase-root": {
                  // color: "#b85042 !important",
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
              value={checkOutDate}
              // onChange={(newValue) => setCheckOutDate(newValue)}
              onChange={(newValue) =>
                dispatch({
                  type: reducerMethods.setCheckOutDate,
                  payload: newValue,
                })
              }
              disablePast={true}
              format="DD-MM-YYYY"
              sx={{
                "& fieldset": {
                  borderColor: "#b85042 !important",
                },
                "& label": {
                  color: "#b85042 !important",
                },
                "& .MuiButtonBase-root": {
                  // color: "#b85042 !important",
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
            value={`${guestOptions.adults} adult(s)  -  ${guestOptions.children} Child(ren)  -  ${guestOptions.rooms} Room(s)`}
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
            // anchorOrigin={{
            //   vertical: "top",
            //   horizontal: "left",
            // }}
            // transformOrigin={{
            //   vertical: "bottom",
            //   horizontal: "left",
            // }}
            // sx={{
            //   position: "absolute",
            //   top: document.documentElement.scrollTop >= 100 ? "40%" : "-1%",
            // }}
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
                    disabled={guestOptions.adults <= 1}
                    className="counter__minus"
                    onClick={() => handleOption("adults", "d")}
                  >
                    -
                  </button>
                  <input value={guestOptions.adults} />
                  <button
                    disabled={guestOptions.adults >= 9 - guestOptions.children}
                    className="counter__plus"
                    onClick={() => handleOption("adults", "i")}
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
                    disabled={guestOptions.children <= 0}
                    className="counter__minus"
                    onClick={() => handleOption("children", "d")}
                  >
                    -
                  </button>
                  <input value={guestOptions.children} />
                  <button
                    className="counter__plus"
                    disabled={guestOptions.children >= 9 - guestOptions.adults}
                    onClick={() => handleOption("children", "i")}
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
                    disabled={guestOptions.rooms <= 1}
                    onClick={() => handleOption("rooms", "d")}
                  >
                    -
                  </button>
                  <input value={guestOptions.rooms} />
                  <button
                    className="counter__plus"
                    disabled={guestOptions.rooms >= 7}
                    onClick={() => handleOption("rooms", "i")}
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
            !checkInDate ||
            !checkOutDate ||
            (guestOptions.adults == 0 && guestOptions.rooms == 0)
              ? "disabled-search-btn"
              : "search-btn"
          }
          disabled={
            !checkInDate ||
            !checkOutDate ||
            (guestOptions.adults == 0 && guestOptions.rooms == 0)
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
