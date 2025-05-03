import React from "react";
import { amenities } from "../../Constants";
import "./AmenityCard.css";

const AmenityCard = () => {
  return (
    <div className="amenity_card">
      <ul className="grid">
        {amenities?.map((amenity, i) => (
          <li key={i}>
            <img src={amenity[0]} alt={amenity[1]} />
            <p>{amenity[1]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AmenityCard;
