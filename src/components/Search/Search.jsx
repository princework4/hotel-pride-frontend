import { useState } from "react";
import "./Search.css";

const Search = () => {
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  return (
    <section className="search-container">
      <div className="wrapper">
        <form id="checkAvailability-form">
          <div className="fields-container">
            <div className="form-group">
              <label>location</label>
              <input
                type="text"
                placeholder="Add your location"
                // value={location}
              />
            </div>

            <div className="form-group">
              <label>Check-In Check Out Date</label>
              <input type="date" />
            </div>

            {/* Guests and Rooms */}
            <div className="form-group">
              <label>Guests and Rooms</label>
              <div className="guestInputs">
                <div>
                  <span
                    className="sign"
                    onClick={() => setAdultCount((c) => c - 1)}
                  >
                    -
                  </span>
                  <span>{adultCount} Adults</span>
                  <span
                    className="sign"
                    onClick={() => setAdultCount((c) => c + 1)}
                  >
                    +
                  </span>
                </div>
                <span>|</span>
                <div>
                  <span
                    className="sign"
                    onClick={() => setChildCount((c) => c - 1)}
                  >
                    -
                  </span>
                  <span>
                    {childCount} {childCount > 1 ? "Children" : "Child"}
                  </span>
                  <span
                    className="sign"
                    onClick={() => setChildCount((c) => c + 1)}
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Search;
