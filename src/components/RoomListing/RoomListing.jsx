import React, { useContext, useEffect, useState } from "react";
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
import { AppContext } from "../../context/AppContext";
import { reducerMethods } from "../../context/reducerMethods";

const RoomListing = ({ roomNumber }) => {
  const { state, dispatch } = useContext(AppContext);
  const [selectedRoom, setSelectedRoom] = useState(state.userObj.selectedRooms);
  const [activeRoomNoIndex, setActiveRoomNoIndex] = useState(0);
  const [openRoomDetails, setOpenRoomDetails] = React.useState([
    false,
    false,
    false,
    false,
  ]);
  const [openRateDetails, setOpenRateDetails] = React.useState({
    withBreakfast: [false, false, false, false],
    withoutBreakfast: [false, false, false, false],
  });

  const handleRoomDetailsOpen = (idx) => {
    const temp = [...openRoomDetails];
    temp[idx] = true;
    setActiveRoomNoIndex(idx);
    setOpenRoomDetails(temp);
  };

  const handleRoomDetailsClose = () =>
    setOpenRoomDetails([false, false, false, false]);

  const handleRateDetailsOpen = (idx, isBreakfastIncluded) => {
    const temp = { ...openRateDetails };
    setActiveRoomNoIndex(idx);
    if (isBreakfastIncluded) {
      temp["withBreakfast"][idx] = true;
    } else {
      temp["withoutBreakfast"][idx] = true;
    }
    setOpenRateDetails(temp);
  };

  const handleRateDetailsClose = () => {
    setOpenRateDetails({
      withBreakfast: [false, false, false, false],
      withoutBreakfast: [false, false, false, false],
    });
  };

  function handleChange(roomType, isBreakfastIncluded, price, selectedRoomNo) {
    const temp = state.userObj.selectedRooms;
    if (temp?.[roomNumber]) {
      temp[roomNumber].roomType = roomType;
      temp[roomNumber].isBreakfastIncluded = isBreakfastIncluded;
      temp[roomNumber].price = price;
      temp[roomNumber].selectedRoomNo = selectedRoomNo;
    } else {
      temp.push({
        roomType: roomType,
        isBreakfastIncluded: isBreakfastIncluded,
        price: price,
        selectedRoomNo: selectedRoomNo,
      });
    }

    dispatch({ type: reducerMethods.setSelectedRooms, payload: temp });
  }

  function calculateOfferedPrice(price, index) {
    return Math.round(
      Number(price.replaceAll(",", "")) * ((100 - state.offers[index]) / 100)
    );
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
              open={openRoomDetails[index]}
              handleClose={handleRoomDetailsClose}
              index={activeRoomNoIndex}
              key={index}
            />
          </div>
          <div className="room_price">
            <h3>{roomType[0]}</h3>
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
                    onClick={() => handleRateDetailsOpen(index, true)}
                  >
                    rate details
                  </button>
                  <PopupRateDetails
                    isBreakfastIncluded={true}
                    open={openRateDetails["withBreakfast"][index]}
                    handleClose={handleRateDetailsClose}
                    index={activeRoomNoIndex}
                  />
                </div>
                <div className="room_price__with_breakfast-right">
                  <div>
                    <span
                      className={
                        state.isOfferAvailable ? "cancelled_price" : "price"
                      }
                    >
                      &#8377; {roomType[2]}
                    </span>
                    {state.isOfferAvailable && (
                      <span className="offer_percent">
                        ({state.offers[index]}% off)
                      </span>
                    )}
                  </div>
                  {state.isOfferAvailable && (
                    <span className="offered_price">
                      &#8377; {calculateOfferedPrice(roomType[2], index)}
                    </span>
                  )}
                  <button
                    onClick={() =>
                      handleChange(
                        roomType[0],
                        true,
                        state.isOfferAvailable
                          ? calculateOfferedPrice(roomType[2], index)
                          : Number(roomType[2].replaceAll(",", "")),
                        index
                      )
                    }
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
                    onClick={() => handleRateDetailsOpen(index, false)}
                  >
                    rate details
                  </button>
                  <PopupRateDetails
                    isBreakfastIncluded={false}
                    open={openRateDetails["withoutBreakfast"][index]}
                    handleClose={handleRateDetailsClose}
                    index={activeRoomNoIndex}
                  />
                </div>
                <div className="room_price__with_breakfast-right">
                  <div>
                    <span
                      className={
                        state.isOfferAvailable ? "cancelled_price" : "price"
                      }
                    >
                      &#8377; {roomType[1]}
                    </span>
                    {state.isOfferAvailable && (
                      <span className="offer_percent">
                        ({state.offers[index]}% off)
                      </span>
                    )}
                  </div>
                  {state.isOfferAvailable && (
                    <span className="offered_price">
                      &#8377; {calculateOfferedPrice(roomType[1], index)}
                    </span>
                  )}
                  <button
                    onClick={() =>
                      handleChange(
                        roomType[0],
                        false,
                        state.isOfferAvailable
                          ? calculateOfferedPrice(roomType[1], index)
                          : Number(roomType[1].replaceAll(",", "")),
                        index
                      )
                    }
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
