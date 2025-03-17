import React from "react";
import {
  Accessibility,
  DinnerDining,
  DryCleaning,
  FreeBreakfast,
  LocalLaundryService,
  LockOpen,
  LocalParking,
  SmokingRooms,
  SmokeFree,
  RoomService,
  Wifi,
} from "@mui/icons-material";
import "./AmenityCard.css";

const AmenityCard = () => {
  const amenities = [
    [<Accessibility />, "Accessibility"],
    [<FreeBreakfast />, "Breakfast"],
    [<DinnerDining />, "Dinning"],
    [<DryCleaning />, "Dry Cleaning"],
    [<Wifi />, "Free Wifi"],
    [<LocalLaundryService />, "Laundry"],
    [<SmokeFree />, "Non - Smoking Rooms"],
    [<LocalParking />, "Parking"],
    [<LockOpen />, "Safe Deposit"],
    [<SmokingRooms />, "Smoking Rooms"],
    [<RoomService />, "Room Service"],
  ];
  return (
    <div className="amenity_card">
      <ul className="grid">
        {amenities?.map((amenity, i) => (
          <li key={i}>
            {amenity[0]}
            <p>{amenity[1]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AmenityCard;
