import { useState } from 'react';
import './Search.css'
import * as React from 'react';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

const Search = () => {
    const [adultCount, setAdultCount] = useState(0);
    const [childCount, setChildCount] = useState(0);

    return <div className="search-container">
        <form id="checkAvailability-form" >
            {/* <div className="form-group">
                <label>location</label>
                <input
                    type="text"
                    placeholder="Add your location"
                    value={location}
                />
            </div> */}

            <div className="form-group">
                <label>Check-In  Check Out Date</label>
                <input type="date" />
                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateRangePicker']}>
                       
                    </DemoContainer>
                </LocalizationProvider> */}
                {/* <DateRangePicker localeText={{ start: 'Check-in', end: 'Check-out' }} /> */}
            </div>


            {/* Guests and Rooms */}
            <div className="form-group">
                <label>Guests and Rooms</label>
                <div className='guestInputs'>

                    <div className='guest-group'>
                        <span>Adults</span>
                        <div className="counter-buttons">
                            <button className={`sign ${adultCount == 0 ? "isDisabled" : ""}`} onClick={() => setAdultCount(c => c - 1)}>-</button>
                            <input value={adultCount} />
                            <button className='sign' onClick={() => setAdultCount(c => c + 1)}>+</button>
                        </div>
                    </div>

                    <span>|</span>

                    <div className='guest-group'>
                        <span>Children</span>
                        <div className='counter-button'>
                            <button className={`sign ${childCount == 0 ? "isDisabled" : ""}`} onClick={() => setChildCount(c => c - 1)}>-</button>
                            <input value={childCount} />
                            <button className='sign' onClick={() => setChildCount(c => c + 1)}>+</button>
                        </div>
                    </div>

                </div>
            </div>
            <button className="search-btn">Search</button>
        </form>
    </div>
}

export default Search;