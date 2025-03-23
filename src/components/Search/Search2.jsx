import { useState } from 'react';
import './Search2.css'
import * as React from 'react';
import { Button, TextField } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const Search2 = () => {
    const [openOptions, setOpenOptions] = useState(false);
    const [guestOptions, setguestOptions] = useState({ adult: 1, children: 0, room: 1 });
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);

    const handleOption = (name, operation) => {
        setguestOptions({
            ...guestOptions,
            [name]: operation === "i" ? guestOptions[name] + 1 : guestOptions[name] - 1,
        });
    };

    const handleSearch = () => {
        // navigate("/rooms", { state: { destination, date, guestOptions } });
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
            <div className="form-group" style={{ position: "relative" }}>

                <TextField
                    className="guestField"
                    label="Guests and Rooms - Search2-jsx."
                    defaultValue={`${guestOptions.adult} Adults | ${guestOptions.children} Children | ${guestOptions.room} Rooms`}
                    onClick={() => setOpenOptions(!openOptions)}
                />

                {openOptions && (
                    <>
                        <div className='guestInputs'>
                            <div className="guest-group">
                                <span className="optionText">Adult</span>
                                <div className="counter-buttons">
                                    <Button
                                        disabled={guestOptions.adult <= 1}
                                        className="sign"
                                        onClick={() => handleOption("adult", "d")}
                                    >
                                        -
                                    </Button>
                                    <input className="optionCounterNumber" value={guestOptions.adult} />
                                    <Button
                                        className="sign"
                                        onClick={() => handleOption("adult", "i")}
                                    >
                                        +
                                    </Button>
                                </div>
                            </div>

                            <div className="guest-group" onBlur={() => setOpenOptions(false)}>
                                <span className="optionText">Children</span>
                                <div className="counter-buttons">
                                    <Button
                                        disabled={guestOptions.children <= 0}
                                        className="sign"
                                        onClick={() => handleOption("children", "d")}
                                    >
                                        -
                                    </Button>
                                    <input className="optionCounterNumber" value={guestOptions.children} />
                                    <Button
                                        className=" sign"
                                        onClick={() => handleOption("children", "i")}
                                    >
                                        +
                                    </Button>
                                </div>
                            </div>

                            <div className="guest-group">
                                <span className="optionText">Room</span>
                                <div className="counter-buttons">
                                    <Button
                                        disabled={guestOptions.room <= 1}
                                        className="sign"
                                        onClick={() => handleOption("room", "d")}
                                    >
                                        -
                                    </Button>
                                    {/* <span className="optionCounterNumber">
                                        {guestOptions.room}
                                    </span> */}
                                    <input className="optionCounterNumber" value={guestOptions.room} />
                                    <Button
                                        className="sign"
                                        onClick={() => handleOption("children", "i")}
                                    >
                                        +
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <button className="search-btn" onClick={handleSearch}>Search</button>
        </form>
    </div>
}

export default Search2;