import Chip from "../Chip";
import ImageSlider from "../Slider";
import { roomImages } from "../../Constants";
import "./RoomCard.css";

import React from "react";

const RoomCard = ({ roomType, roomDetails }) => {
  return (
    <div className="room_card">
      <div className="room_card_media">
        <ImageSlider
          slidesToShow={1}
          slidesToScroll={1}
          images={roomImages}
          isCarousel={false}
        />
      </div>
      <div className="room_card_description">
        <h3>{roomType}</h3>
        <ul className="room_details_chips">
          {roomDetails?.map((item) => (
            <li>
              <Chip content={item} />
            </li>
          ))}
        </ul>
        <p>Basic Amenities</p>
        <ul className="basic_amenities">
          <li>
            <i className="flat_screen_tv"></i>
          </li>
          <li>
            <i className="wifi"></i>
          </li>
          <li>
            <i className="safe_deposit"></i>
          </li>
          <li>
            <i className="tea_coffee"></i>
          </li>
          <li>
            <i className="breakfast"></i>
          </li>
          <li>
            <i className="bottled_water"></i>
          </li>
        </ul>
        <button>BOOK NOW</button>
      </div>
    </div>
  );
};

export default RoomCard;
