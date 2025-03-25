import Chip from "../Chip";
import ImageSlider from "../Slider";
import { roomImages } from "../../Constants";
import Breakfast from "../../assets/utensils-solid.svg";
import TV from "../../assets/tv-solid.svg";
import Tea from "../../assets/mug-hot-solid.svg";
import Vault from "../../assets/vault-solid.svg";
import WaterBottle from "../../assets/bottle-water-solid.svg";
import Wifi from "../../assets/wifi-solid.svg";
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
          {roomDetails?.map((item, i) => (
            <li key={i}>
              <Chip content={item} />
            </li>
          ))}
        </ul>
        <p>Basic Amenities</p>
        <ul className="basic_amenities">
          {/* <li>
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
          </li> */}
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
        <button>BOOK NOW</button>
      </div>
    </div>
  );
};

export default RoomCard;
