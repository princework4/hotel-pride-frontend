import React, { useEffect, useState } from "react";
import ImageSlider from "../Slider/Slider";
import Chip from "../Chip";
import SquareIcon from "@mui/icons-material/Square";
import Breakfast from "../../assets/utensils-solid.svg";
import TV from "../../assets/tv-solid.svg";
import Tea from "../../assets/mug-hot-solid.svg";
import WaterBottle from "../../assets/bottle-water-solid.svg";
import Wifi from "../../assets/wifi-solid.svg";
import PopupRoomDetails from "../PopupRoomDetails";
import PopupRateDetails from "../PopupRateDetails/PopupRateDetails";
import { useNavigate, useParams } from "react-router-dom";
import "./RoomListing.css";

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
import { fetchSingleRoomTypes } from "../../services/Rooms";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedRooms } from "../../features/room/roomSlice";

const RoomListing = ({ roomNumber }) => {
  const guestDetailsRedux = useSelector((state) => state.searchReducer);
  const roomRedux = useSelector((state) => state.roomReducer);
  const dispatch = useDispatch();
  const [roomTypes, setRoomTypes] = useState(roomRedux.availableRoomTypes);
  const [openRoomDetails, setOpenRoomDetails] = React.useState({});
  const [openRateDetails, setOpenRateDetails] = React.useState({
    withBreakfast: {},
    withoutBreakfast: {},
  });
  // const { id } = useParams();
  let navigate = useNavigate();

  function initializePopupState(isRoomDetails) {
    if (isRoomDetails) {
      const obj = {};
      for (let i = 0; i < roomTypes?.length; i++) {
        obj[roomTypes[i]["id"]] = false;
      }
      return obj;
    } else {
      const withBreakfast = {};
      const withoutBreakfast = {};
      for (let i = 0; i < roomTypes?.length; i++) {
        withBreakfast[roomTypes[i]["id"]] = false;
        withoutBreakfast[roomTypes[i]["id"]] = false;
      }
      return {
        withBreakfast: withBreakfast,
        withoutBreakfast: withoutBreakfast,
      };
    }
  }

  // async function getSingleRoomType() {
  //   const data = await fetchSingleRoomTypes(id);
  //   setRoomTypes([data]);
  // }

  useEffect(() => {
    if (!guestDetailsRedux.checkInDate || !guestDetailsRedux.checkOutDate) {
      navigate("/");
    }

    setOpenRoomDetails(initializePopupState(true));
    setOpenRateDetails(initializePopupState(false));

    // if (id != "all") {
    //   getSingleRoomType();
    // }
  }, []);

  const handleRoomDetailsOpen = (idx) => {
    const temp = { ...openRoomDetails };
    temp[idx] = true;
    setOpenRoomDetails(temp);
  };

  const handleRoomDetailsClose = () =>
    setOpenRoomDetails(initializePopupState(true));

  const handleRateDetailsOpen = (idx, isBreakfastIncluded) => {
    const temp = { ...openRateDetails };
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
    const temp = structuredClone(roomRedux.selectedRooms);
    if (temp && temp?.[roomNumber]) {
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
    dispatch(updateSelectedRooms(temp));
  }

  function calculateOfferedPrice(price, id) {
    return Math.round(Number(price * ((100 - roomRedux.offers[id]) / 100)));
  }

  return (
    <div className="room_listing">
      {roomTypes?.map((roomType, index) => (
        <div
          className={
            roomRedux.selectedRooms?.[roomNumber]?.selectedRoomId == roomType.id
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
              isCarousel={false}
            />
            <ul className="room_details__chips">
              <li key={Math.random()}>
                <Chip
                  content={[
                    roomRedux.allRoomTypes1[index].roomSizeInSquareFeet +
                      " ft²",
                  ]}
                />
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
                      <SquareIcon sx={{ width: "10px", color: "#c4b991" }} />
                      <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
                    </li>
                    <li>
                      <SquareIcon sx={{ width: "10px", color: "#c4b991" }} />
                      <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
                    </li>
                    <li>
                      <SquareIcon sx={{ width: "10px", color: "#c4b991" }} />
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
                      className={
                        roomRedux.isOfferAvailable ? "cancelled_price" : "price"
                      }
                    >
                      &#8377;{roomType.pricePerNight + roomRedux.breakfastPrice}
                    </span>
                    {roomRedux.isOfferAvailable && (
                      <span className="offer_percent">
                        ({roomRedux.offers[roomType.id]}% off)
                      </span>
                    )}
                  </div>
                  {roomRedux.isOfferAvailable && (
                    <span className="offered_price">
                      &#8377;
                      {calculateOfferedPrice(
                        roomType.pricePerNight + roomRedux.breakfastPrice,
                        roomType.id
                      )}
                    </span>
                  )}
                  <button
                    className={
                      roomRedux.selectedRooms?.[roomNumber]?.selectedRoomId ==
                      roomType.id
                        ? "selected_room_button"
                        : ""
                    }
                    disabled={
                      roomRedux.selectedRooms?.[roomNumber]?.selectedRoomId ==
                      roomType.id
                    }
                    onClick={() =>
                      handleButtonClick(
                        roomType.typeName,
                        true,
                        roomRedux.isOfferAvailable
                          ? calculateOfferedPrice(
                              roomType.pricePerNight + roomRedux.breakfastPrice,
                              roomType.id
                            )
                          : Number(
                              roomType.pricePerNight + roomRedux.breakfastPrice
                            ),
                        roomType.id
                      )
                    }
                  >
                    {roomRedux.selectedRooms?.[roomNumber]?.selectedRoomId ==
                    roomType.id
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
                      <SquareIcon sx={{ width: "10px", color: "#c4b991" }} />
                      <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
                    </li>
                    <li>
                      <SquareIcon sx={{ width: "10px", color: "#c4b991" }} />
                      <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
                    </li>
                    <li>
                      <SquareIcon sx={{ width: "10px", color: "#c4b991" }} />
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
                      className={
                        roomRedux.isOfferAvailable ? "cancelled_price" : "price"
                      }
                    >
                      &#8377;{roomType.pricePerNight}
                    </span>
                    {roomRedux.isOfferAvailable && (
                      <span className="offer_percent">
                        ({roomRedux.offers[roomType.id]}% off)
                      </span>
                    )}
                  </div>
                  {roomRedux.isOfferAvailable && (
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
                      roomRedux.selectedRooms?.[roomNumber]?.selectedRoomId ==
                      roomType.id
                        ? "selected_room_button"
                        : ""
                    }
                    disabled={
                      roomRedux.selectedRooms?.[roomNumber]?.selectedRoomId ==
                      roomType.id
                    }
                    onClick={() =>
                      handleButtonClick(
                        roomType.typeName,
                        false,
                        roomRedux.isOfferAvailable
                          ? calculateOfferedPrice(
                              roomType.pricePerNight,
                              roomType.id
                            )
                          : Number(roomType.pricePerNight),
                        roomType.id
                      )
                    }
                  >
                    {roomRedux.selectedRooms?.[roomNumber]?.selectedRoomId ==
                    roomType.id
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
