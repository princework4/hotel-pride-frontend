import React, { useState } from "react";
import ImageSlider from "../Slider/Slider";
import { roomDetails, roomImages, roomTypes } from "../../Constants";
import Chip from "../Chip";
import SquareIcon from "@mui/icons-material/Square";
import Breakfast from "../../assets/utensils-solid.svg";
import TV from "../../assets/tv-solid.svg";
import Tea from "../../assets/mug-hot-solid.svg";
import Vault from "../../assets/vault-solid.svg";
import WaterBottle from "../../assets/bottle-water-solid.svg";
import Wifi from "../../assets/wifi-solid.svg";
import PopupRoomDetails from "../PopupRoomDetails";
import PopupRateDetails from "../PopupRateDetails/PopupRateDetails";
import "./RoomListing.css";

const RoomListing = ({ selectedRoom, setSelectedRoom, roomNumber }) => {
  const [activeRoomNoIndex, setActiveRoomNoIndex] = useState(0);
  const [openRoomDetails, setOpenRoomDetails] = React.useState(false);
  const [openRateDetails, setOpenRateDetails] = React.useState({
    withBreakfast: false,
    withoutBreakfast: false,
  });

  const handleRoomDetailsOpen = (idx) => {
    setActiveRoomNoIndex(idx);
    setOpenRoomDetails(true);
  };
  const handleRoomDetailsClose = () => setOpenRoomDetails(false);

  const handleRateDetailsOpen = (idx) => {
    setActiveRoomNoIndex(idx);
    setOpenRateDetails(true);
  };
  const handleRateDetailsClose = () => setOpenRoomDetails(false);

  function handleChange(roomType, isBreakfastIncluded, price, selectedRoomNo) {
    if (selectedRoom[roomNumber]) {
      const temp = [...selectedRoom];
      temp[roomNumber].roomType = roomType;
      temp[roomNumber].isBreakfastIncluded = isBreakfastIncluded;
      temp[roomNumber].price = price;
      temp[roomNumber].selectedRoomNo = selectedRoomNo;
      setSelectedRoom(temp);
    } else {
      setSelectedRoom((preVal) => [
        ...preVal,
        {
          roomType: roomType,
          isBreakfastIncluded: isBreakfastIncluded,
          price: price,
          selectedRoomNo: selectedRoomNo,
        },
      ]);
    }
  }

  return (
    <div className="room_listing">
      {roomTypes?.map((roomType, index) => (
        <div
          className={
            selectedRoom[roomNumber]?.selectedRoomNo == index
              ? "selected_room room"
              : "room"
          }
          key={index}
        >
          <div className="room_details">
            <ImageSlider
              slidesToShow={1}
              slidesToScroll={1}
              images={roomImages}
              isCarousel={false}
            />
            <ul className="room_details__chips">
              <li key={Math.random()}>
                <Chip content={roomDetails[index][0]} />
              </li>
              <li key={Math.random()}>
                <Chip content={roomDetails[index][1]} />
              </li>
            </ul>
            <ul className="room_basic_amenities">
              <li>
                <img src={TV} />
              </li>
              <li>
                <img src={Wifi} />
              </li>
              <li>
                <img src={Vault} />
              </li>
              <li>
                <img src={Tea} />
              </li>
              <li>
                <img src={Breakfast} />
              </li>
              <li>
                <img src={WaterBottle} />
              </li>
            </ul>
            <button
              className="room_details__popup-button"
              onClick={() => handleRoomDetailsOpen(index)}
            >
              room details
            </button>
            <PopupRoomDetails
              open={openRoomDetails}
              handleClose={handleRoomDetailsClose}
              index={activeRoomNoIndex}
            />
          </div>
          <div className="room_price">
            <h3>{roomType}</h3>
            <div className="room_price__container">
              <div className="room_price__with_breakfast">
                <div className="room_price__with_breakfast-left">
                  <h4>With Breakfast</h4>
                  <ul>
                    <li>
                      <SquareIcon sx={{ width: "10px", color: "#d9736d" }} />
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </p>
                    </li>
                    <li>
                      <SquareIcon sx={{ width: "10px", color: "#d9736d" }} />
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </p>
                    </li>
                    <li>
                      <SquareIcon sx={{ width: "10px", color: "#d9736d" }} />
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </p>
                    </li>
                  </ul>
                  <button
                    className="rate_details__popup-button"
                    onClick={() => handleRateDetailsOpen(index)}
                  >
                    rate details
                  </button>
                  {/* <PopupRateDetails
                    open={openRateDetails}
                    handleClose={handleRateDetailsClose}
                    index={activeRoomNoIndex}
                  /> */}
                </div>
                <div className="room_price__with_breakfast-right">
                  <span className="price">&#8377; 10,000</span>
                  <button
                    onClick={() => handleChange(roomType, true, 10000, index)}
                  >
                    select
                  </button>
                </div>
              </div>
              <div className="room_price__without_breakfast">
                <div className="room_price__with_breakfast-left">
                  <h4>Without Breakfast</h4>
                  <ul>
                    <li>
                      <SquareIcon sx={{ width: "10px", color: "#d9736d" }} />
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </p>
                    </li>
                    <li>
                      <SquareIcon sx={{ width: "10px", color: "#d9736d" }} />
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </p>
                    </li>
                    <li>
                      <SquareIcon sx={{ width: "10px", color: "#d9736d" }} />
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </p>
                    </li>
                  </ul>
                  <button
                    className="rate_details__popup-button"
                    onClick={() => handleRateDetailsOpen(index)}
                  >
                    rate details
                  </button>
                  {/* <PopupRateDetails
                    open={openRateDetails}
                    handleClose={handleRateDetailsClose}
                    index={activeRoomNoIndex}
                  /> */}
                </div>
                <div className="room_price__with_breakfast-right">
                  <span className="price">&#8377; 5,000</span>
                  <button
                    onClick={() => handleChange(roomType, false, 5000, index)}
                  >
                    select
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomListing;
