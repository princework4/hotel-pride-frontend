import { useState } from 'react';
import './Search.css'
import * as React from 'react';
import { Button, OutlinedInput, Popover } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useNavigate } from "react-router-dom";


const Search = () => {
  const [guestOptions, setguestOptions] = useState({ adult: 1, children: 0, room: 1 });
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const navigate = useNavigate();


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const popOverId = open ? 'simple-popover' : undefined;


  const handleOption = (name, operation) => {
    setguestOptions({
      ...guestOptions,
      [name]: operation === "i" ? guestOptions[name] + 1 : guestOptions[name] - 1,
    });
  };

  const handleSearch = () => {
    navigate("/rooms");
  };

  return <div className="search-container">
    <form id="checkAvailability-form" >

      <div className="form-group">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Check-In Date"
            value={checkInDate}
            onChange={(newValue) => setCheckInDate(newValue)}
          />
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Check-Out Date"
            value={checkOutDate}
            onChange={(newValue) => setCheckOutDate(newValue)}
          />
        </LocalizationProvider>
      </div>


      {/* Guests and Rooms */}

      <div className='form-group'>
        <OutlinedInput
          aria-describedby={popOverId}
          variant="contained"
          fullWidth
          onClick={handleClick}
          value={`${guestOptions.adult} Adult(s)  -  ${guestOptions.children} Child(ren)  -  ${guestOptions.room} Room(s)`} />
        <Popover
          id={popOverId}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >

          <div className='guestInputs'>
            <div className="guest-group">
              <span className="optionText"><strong>Adult(s)</strong></span>
              <div className="counter-buttons">
                <button
                  disabled={guestOptions.adult <= 1}
                  className="counter__minus"
                  onClick={() => handleOption("adult", "d")}
                >
                  -
                </button>
                <input value={guestOptions.adult} />
                <button
                  disabled={guestOptions.adult >= 9 - guestOptions.children}
                  className="counter__plus"
                  onClick={() => handleOption("adult", "i")}
                >
                  +
                </button>
              </div>
            </div>

            <div className="guest-group">
              <span className="optionText"><strong>Child(ren)</strong></span>
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
                  disabled={guestOptions.children >= 9 - guestOptions.adult}
                  onClick={() => handleOption("children", "i")}
                >
                  +
                </button>
              </div>
            </div>

            <div className="guest-group">
              <span className="optionText"><strong>Room(s)</strong></span>
              <div className="counter-buttons">
                <button
                  className="counter__minus"
                  disabled={guestOptions.room <= 1}
                  onClick={() => handleOption("room", "d")}
                >
                  -
                </button>
                <input
                  value={guestOptions.room}
                />
                <button
                  className="counter__plus"
                  disabled={guestOptions.room >= 7}
                  onClick={() => handleOption("room", "i")}>
                  +
                </button>
              </div>
            </div>
          </div>
        </Popover>
      </div>

      <Button className="search-btn" onClick={handleSearch}>Search</Button>
    </form>
  </div>
}

export default Search;