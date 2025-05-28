import React, { useEffect, useState } from "react";
import ImageSlider from "../Slider/Slider";
import Chip from "../Chip";
import SquareIcon from "@mui/icons-material/Square";
import Breakfast from "../../assets/utensils-solid.svg";
import TV from "../../assets/tv-solid.svg";
import Tea from "../../assets/mug-hot-solid.svg";
import WaterBottle from "../../assets/bottle-water-solid.svg";
import Wifi from "../../assets/wifi-solid.svg";
import PopupRateDetails from "../PopupRateDetails";
import { useNavigate, useParams } from "react-router-dom";
import "./RoomListing.css";

import { fetchSingleRoomTypes } from "../../services/Rooms";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedRooms } from "../../features/room/roomSlice";

const RoomListing = ({ roomNumber }) => {
  const guestDetailsRedux = useSelector((state) => state.searchReducer);
  const roomRedux = useSelector((state) => state.roomReducer);
  const dispatch = useDispatch();
  const [roomTypes, setRoomTypes] = useState(roomRedux.availableRoomTypes);
  const [openRoomDetails, setOpenRoomDetails] = React.useState({});
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [width, setWidth] = useState(
    window.innerWidth > 0 ? window.innerWidth : screen.width
  );
  let navigate = useNavigate();

  function initializePopupState() {
    const obj = {};
    for (let i = 0; i < roomTypes?.length; i++) {
      obj[roomTypes[i]["id"]] = false;
    }
    return obj;
  }

  useEffect(() => {
    if (!guestDetailsRedux.checkInDate || !guestDetailsRedux.checkOutDate) {
      navigate("/");
    }

    setOpenRoomDetails(initializePopupState());
    console.log(guestDetailsRedux, roomRedux);
  }, []);

  const handleRateDetailsOpen = (idx) => {
    const temp = { ...openRoomDetails };
    temp[idx] = true;
    setOpenRoomDetails(temp);
  };

  const handleRateDetailsClose = () =>
    setOpenRoomDetails(initializePopupState(true));

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
              showDots={false}
              sliderEnabled={false}
            />
            <ul className="room_details__chips">
              <li key={Math.random()}>
                <Chip
                  content={[
                    roomRedux.allRoomTypes[index].roomSizeInSquareFeet + " ft²",
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
              onClick={() => handleRateDetailsOpen(roomType.id)}
            >
              rate details
            </button>
            <PopupRateDetails
              open={openRoomDetails[roomType.id]}
              handleClose={handleRateDetailsClose}
              id={roomType.id}
            />
          </div>
          <div className="room_price">
            <h2>{roomType.typeName}</h2>
            <div className="room_price__container">
              <p className="roomtype_description">{roomType.description}</p>
              <div className="roomtype_features_container">
                <h3>key features</h3>
                <div className="roomtype_features_wrapper">
                  <ul className="roomtype_features_description">
                    {roomType.amenities.map((amenity) => (
                      <li>
                        <SquareIcon
                          sx={{
                            width: "10px",
                            height: { xs: "15px" },
                            marginRight: "5px",
                            color: "#c4b991",
                          }}
                        />
                        <span>{amenity.amenityDescription}</span>
                      </li>
                    ))}
                  </ul>
                  <hr
                    style={
                      width > 768
                        ? index == 0
                          ? { height: "10em" }
                          : index == 1
                          ? { height: "21em" }
                          : { height: "27em" }
                        : { height: "1px" }
                    }
                  />
                  <ul className="roomtype_price_wrapper">
                    <li>
                      <div className="roomtype__price">
                        <div>
                          <span
                            className={
                              roomRedux.isOfferAvailable
                                ? "cancelled_price"
                                : "price"
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
                            {
                              roomRedux.allRoomTypesWithKeyAsId[roomType.id]
                                .priceAfterOffer
                            }
                          </span>
                        )}
                      </div>
                      <button
                        className={
                          roomRedux.selectedRooms?.[roomNumber]
                            ?.selectedRoomId == roomType.id
                            ? "selected_room_button"
                            : ""
                        }
                        disabled={
                          roomRedux.selectedRooms?.[roomNumber]
                            ?.selectedRoomId == roomType.id
                        }
                        onClick={() =>
                          handleButtonClick(
                            roomType.typeName,
                            false,
                            roomRedux.isOfferAvailable
                              ? Number(
                                  roomRedux.allRoomTypes[roomType.id]
                                    .priceAfterOffer
                                )
                              : Number(roomType.pricePerNight),
                            roomType.id
                          )
                        }
                      >
                        {roomRedux.selectedRooms?.[roomNumber]
                          ?.selectedRoomId == roomType.id
                          ? "selected"
                          : "select"}
                      </button>
                    </li>
                  </ul>
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
