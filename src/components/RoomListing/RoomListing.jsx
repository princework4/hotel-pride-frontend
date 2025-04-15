import React, { useContext, useEffect, useState } from "react";
import ImageSlider from "../Slider/Slider";
import { roomDetails, roomImages, allRoomTypes } from "../../Constants";
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
import { useNavigate } from "react-router-dom";

import nonAcImage1 from "../../assets/Non_Ac/non_ac_img_1.jpeg";
import nonAcImage2 from "../../assets//Non_Ac/non_ac_img_2.jpeg";
import nonAcImage3 from "../../assets//Non_Ac/non_ac_img_3.jpeg";
import deluxeImage1 from "../../assets//Deluxe/deluxe_room_1.jpeg";
import deluxeImage2 from "../../assets//Deluxe/deluxe_room_2.jpeg";
import deluxeImage3 from "../../assets//Deluxe/deluxe_room_3.jpeg";
import deluxeImage4 from "../../assets//Deluxe/deluxe_room_4.jpeg";
import executiveImage1 from "../../assets//Executive/executive_room_1.jpeg";
import executiveImage2 from "../../assets//Executive/executive_room_2.jpeg";
import executiveImage3 from "../../assets//Executive/executive_room_3.jpeg";
import executiveImage4 from "../../assets//Executive/executive_room_4.jpeg";

const RoomListing = ({ roomNumber }) => {
  const { state, dispatch } = useContext(AppContext);
  const {
    filteredAllRoomTypes,
    allRoomTypes,
    allRoomTypes1,
    breakfastPrice,
    checkInDate,
    checkOutDate,
    isOfferAvailable,
    offers,
    selectedRooms,
    selectedRoomTypeId,
  } = state;
  const [roomTypes, setRoomTypes] = useState(filteredAllRoomTypes);
  // const [selectedRoom, setSelectedRoom] = useState(selectedRooms);
  // const [activeRoomNoIndex, setActiveRoomNoIndex] = useState(0);
  // const [openRoomDetails, setOpenRoomDetails] = React.useState([
  //   false,
  //   false,
  //   false,
  // ]);
  const [openRoomDetails, setOpenRoomDetails] = React.useState({});
  const [openRateDetails, setOpenRateDetails] = React.useState({
    withBreakfast: {},
    withoutBreakfast: {},
  });
  let navigate = useNavigate();

  function initializePopupState(isRoomDetails) {
    if (isRoomDetails) {
      const obj = {};
      for (let i = 0; i < filteredAllRoomTypes?.length; i++) {
        obj[filteredAllRoomTypes[i]["id"]] = false;
      }
      return obj;
    } else {
      const withBreakfast = {};
      const withoutBreakfast = {};
      for (let i = 0; i < filteredAllRoomTypes?.length; i++) {
        withBreakfast[filteredAllRoomTypes[i]["id"]] = false;
        withoutBreakfast[filteredAllRoomTypes[i]["id"]] = false;
      }
      return {
        withBreakfast: withBreakfast,
        withoutBreakfast: withoutBreakfast,
      };
    }
  }
  useEffect(() => {
    setOpenRoomDetails(initializePopupState(true));
    setOpenRateDetails(initializePopupState(false));
  }, []);

  useEffect(() => {
    if (selectedRoomTypeId != null) {
      const filteredRoomType = roomTypes.filter(
        (item) => item.id == selectedRoomTypeId
      );
      setRoomTypes(filteredRoomType);
    }
    if (!checkInDate || !checkOutDate) {
      navigate("/");
    }
  }, []);

  const handleRoomDetailsOpen = (idx) => {
    const temp = { ...openRoomDetails };
    temp[idx] = true;
    // setActiveRoomNoIndex(idx);
    setOpenRoomDetails(temp);
  };

  // const handleRoomDetailsClose = () =>
  //   setOpenRoomDetails([false, false, false]);
  const handleRoomDetailsClose = () =>
    setOpenRoomDetails(initializePopupState(true));

  const handleRateDetailsOpen = (idx, isBreakfastIncluded) => {
    const temp = { ...openRateDetails };
    // setActiveRoomNoIndex(idx);
    if (isBreakfastIncluded) {
      temp["withBreakfast"][idx] = true;
    } else {
      temp["withoutBreakfast"][idx] = true;
    }
    setOpenRateDetails(temp);
  };

  const handleRateDetailsClose = () => {
    setOpenRateDetails(initializePopupState(false));
  };

  function handleButtonClick(
    roomType,
    isBreakfastIncluded,
    price,
    selectedRoomId
  ) {
    const temp = selectedRooms;
    if (temp?.[roomNumber]) {
      temp[roomNumber].roomType = roomType;
      temp[roomNumber].isBreakfastIncluded = isBreakfastIncluded;
      temp[roomNumber].price = price;
      temp[roomNumber].selectedRoomId = selectedRoomId;
    } else {
      temp.push({
        roomType: roomType,
        isBreakfastIncluded: isBreakfastIncluded,
        price: price,
        selectedRoomId: selectedRoomId,
      });
    }

    dispatch({ type: reducerMethods.setSelectedRooms, payload: temp });

    console.log("state --> ", state);
  }

  function calculateOfferedPrice(price, id) {
    return Math.round(Number(price * ((100 - offers[id]) / 100)));
  }

  const allAssets = {
    1: [nonAcImage1, nonAcImage2, nonAcImage3],
    2: [deluxeImage1, deluxeImage2, deluxeImage3, deluxeImage4],
    3: [executiveImage1, executiveImage2, executiveImage3, executiveImage4],
  };

  return (
    <div className="room_listing">
      {filteredAllRoomTypes?.map((roomType, index) => (
        <div
          className={
            selectedRooms?.[roomNumber]?.selectedRoomId == roomType.id
              ? "selected_room room"
              : "room"
          }
          key={roomType.id}
        >
          <div className="room_details">
            <ImageSlider
              slidesToShow={1}
              slidesToScroll={1}
              images={roomType.assets}
              // images={allRoomTypes1[index].assets}
              // images={allAssets[index + 1]}
              isCarousel={false}
            />
            <ul className="room_details__chips">
              <li key={Math.random()}>
                {/* <Chip content={[roomType.roomSizeInSquareFeet + " ft²"]} /> */}
                <Chip
                  content={[allRoomTypes1[index].roomSizeInSquareFeet + " ft²"]}
                />
              </li>
              {/* <li key={Math.random()}>
                <Chip content={roomDetails[index][1]} />
              </li> */}
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
              onClick={() => handleRoomDetailsOpen(roomType.id)}
            >
              room details
            </button>
            <PopupRoomDetails
              open={openRoomDetails[roomType.id]}
              handleClose={handleRoomDetailsClose}
              id={roomType.id}
              key={roomType.id}
            />
          </div>
          <div className="room_price">
            <h3>{roomType.typeName}</h3>
            <div className="room_price__container">
              <div className="room_price__with_breakfast">
                <div className="room_price__with_breakfast-left">
                  <h4>With Breakfast</h4>
                  <ul>
                    <li>
                      <SquareIcon sx={{ width: "10px", color: "#b85042" }} />
                      <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
                    </li>
                    <li>
                      <SquareIcon sx={{ width: "10px", color: "#b85042" }} />
                      <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
                    </li>
                    <li>
                      <SquareIcon sx={{ width: "10px", color: "#b85042" }} />
                      <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
                    </li>
                  </ul>
                  <button
                    className="rate_details__popup-button"
                    onClick={() => handleRateDetailsOpen(roomType.id, true)}
                  >
                    rate details
                  </button>
                  <PopupRateDetails
                    isBreakfastIncluded={true}
                    open={openRateDetails["withBreakfast"][roomType.id]}
                    handleClose={handleRateDetailsClose}
                    id={roomType.id}
                  />
                </div>
                <div className="room_price__with_breakfast-right">
                  <div>
                    <span
                      className={isOfferAvailable ? "cancelled_price" : "price"}
                    >
                      &#8377;{roomType.pricePerNight + breakfastPrice}
                    </span>
                    {isOfferAvailable && (
                      <span className="offer_percent">
                        ({offers[roomType.id]}% off)
                      </span>
                    )}
                  </div>
                  {isOfferAvailable && (
                    <span className="offered_price">
                      &#8377;
                      {calculateOfferedPrice(
                        roomType.pricePerNight + breakfastPrice,
                        roomType.id
                      )}
                    </span>
                  )}
                  <button
                    className={
                      selectedRooms?.[roomNumber]?.selectedRoomId == roomType.id
                        ? "selected_room_button"
                        : ""
                    }
                    disabled={
                      selectedRooms?.[roomNumber]?.selectedRoomId == roomType.id
                    }
                    onClick={() =>
                      handleButtonClick(
                        roomType.typeName,
                        true,
                        isOfferAvailable
                          ? calculateOfferedPrice(
                              roomType.pricePerNight + breakfastPrice,
                              roomType.id
                            )
                          : Number(roomType.pricePerNight + breakfastPrice),
                        roomType.id
                      )
                    }
                  >
                    {selectedRooms?.[roomNumber]?.selectedRoomId == roomType.id
                      ? "selected"
                      : "select"}
                  </button>
                </div>
              </div>
              <div className="room_price__without_breakfast">
                <div className="room_price__with_breakfast-left">
                  <h4>Without Breakfast</h4>
                  <ul>
                    <li>
                      <SquareIcon sx={{ width: "10px", color: "#b85042" }} />
                      <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
                    </li>
                    <li>
                      <SquareIcon sx={{ width: "10px", color: "#b85042" }} />
                      <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
                    </li>
                    <li>
                      <SquareIcon sx={{ width: "10px", color: "#b85042" }} />
                      <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
                    </li>
                  </ul>
                  <button
                    className="rate_details__popup-button"
                    onClick={() => handleRateDetailsOpen(roomType.id, false)}
                  >
                    rate details
                  </button>
                  <PopupRateDetails
                    isBreakfastIncluded={false}
                    open={openRateDetails["withoutBreakfast"][roomType.id]}
                    handleClose={handleRateDetailsClose}
                    id={roomType.id}
                  />
                </div>
                <div className="room_price__with_breakfast-right">
                  <div>
                    <span
                      className={isOfferAvailable ? "cancelled_price" : "price"}
                    >
                      &#8377;{roomType.pricePerNight}
                    </span>
                    {isOfferAvailable && (
                      <span className="offer_percent">
                        ({offers[roomType.id]}% off)
                      </span>
                    )}
                  </div>
                  {isOfferAvailable && (
                    <span className="offered_price">
                      &#8377;
                      {calculateOfferedPrice(
                        roomType.pricePerNight,
                        roomType.id
                      )}
                    </span>
                  )}
                  <button
                    className={
                      selectedRooms?.[roomNumber]?.selectedRoomId == roomType.id
                        ? "selected_room_button"
                        : ""
                    }
                    disabled={
                      selectedRooms?.[roomNumber]?.selectedRoomId == roomType.id
                    }
                    onClick={() =>
                      handleButtonClick(
                        roomType.typeName,
                        false,
                        isOfferAvailable
                          ? calculateOfferedPrice(
                              roomType.pricePerNight,
                              roomType.id
                            )
                          : Number(roomType.pricePerNight),
                        roomType.id
                      )
                    }
                  >
                    {selectedRooms?.[roomNumber]?.selectedRoomId == roomType.id
                      ? "selected"
                      : "select"}
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
