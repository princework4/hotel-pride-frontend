import // Wc,
// DinnerDining,
// DryCleaning,
// FreeBreakfast,
// LocalLaundryService,
// LockOpen,
// LocalParking,
// SmokingRooms,
// SmokeFree,
// RoomService,
// Wifi,
"@mui/icons-material";
import AirConditioner from "./assets/air-conditioner.png";
import AttachedWashroom from "./assets/bathroom.png";
import CCTV from "./assets/cctv-camera.png";
import HouseKeeping from "./assets/cleaner.png";
import WorkDesk from "./assets/desk.png";
import PowerBackup from "./assets/generator.png";
import KitchenFacilities from "./assets/kitchen-appliances.png";
import LaundryService from "./assets/laundry-machine.png";
import LuggageStorage from "./assets/luggage.png";
import Security from "./assets/policeman.png";
import Smoking from "./assets/smoking.png";
import NoSmoking from "./assets/no-smoking.png";
import Wifi from "./assets/wifi.png";

export const roomTypes = [
  ["Superior Room", "6,000", "6,500"],
  ["Delux Room", "8,000", "8,500"],
  ["Standard Room", "5,000", "5,500"],
  ["Suite", "10,000", "10,500"],
];

export const roomDetails = [
  ["270 ft²", "1 Queen / 2 Twin"],
  ["478 ft²", "1 Queen"],
  ["270 ft²", "1 Queen / 2 Twin"],
  ["876 ft²", "1 Queen"],
];

export const roomImages = [
  [
    "https://media.radissonhotels.net/image/country-inn-suites-by-radisson-navi-mumbai/guest-room/16256-114466-f67752247_4k.jpg?impolicy=Card",
    "First Slider Image",
  ],
  [
    "https://media.radissonhotels.net/image/country-inn-suites-by-radisson-navi-mumbai/guest-room/16256-114466-f67752249_4k.jpg?impolicy=Card",
    "Second Slider Image",
  ],
  [
    "https://media.radissonhotels.net/image/country-inn-suites-by-radisson-navi-mumbai/guest-room/16256-114466-f76686228_4k.jpg?impolicy=Card",
    "Third Slider Image",
  ],
  [
    "https://media.radissonhotels.net/image/country-inn-suites-by-radisson-navi-mumbai/guest-room-bath/16256-114466-f76686220_4k.jpg?impolicy=Card",
    "Fourth Slider Image",
  ],
];

export const showcaseImgs = [
  [
    "https://www.conradpune.com/wp-content/uploads/2023/09/13-1.jpg",
    "Elevate your Stay at Corad Pune, Address Mentioned Below.",
  ],
  [
    "https://www.conradpune.com/wp-content/uploads/2023/09/14-1.jpg",
    "Hotels in Pune that Redefine Luxury and Elegance.",
  ],
  [
    "https://www.conradpune.com/wp-content/uploads/2023/09/15.jpg",
    "Experience Delightful Luxury Retreats at the Hilton Conrad, Pune. Keywords - hilton conrad pune, conrad pune prices",
  ],
  [
    "https://www.conradpune.com/wp-content/uploads/2023/09/16.jpg",
    "Pamper Yourself at One of the best 5 Star Hotels in Pune.",
  ],
  [
    "https://www.conradpune.com/wp-content/uploads/2022/08/11-4.png",
    "Conrad Pune Hotel: The Best in Luxury Accomodations.",
  ],
];

export const galleryImgs = [
  ["https://www.conradpune.com/wp-content/uploads/2023/09/13-1.jpg", "cat1"],
  ["https://www.conradpune.com/wp-content/uploads/2023/09/14-1.jpg", "cat2"],
  ["https://www.conradpune.com/wp-content/uploads/2023/09/15.jpg", "cat3"],
  ["https://www.conradpune.com/wp-content/uploads/2023/09/16.jpg", "cat4"],
  ["https://www.conradpune.com/wp-content/uploads/2022/08/11-4.png", "cat5"],
  ["https://www.conradpune.com/wp-content/uploads/2023/09/13-1.jpg", "cat1"],
  ["https://www.conradpune.com/wp-content/uploads/2023/09/14-1.jpg", "cat2"],
  ["https://www.conradpune.com/wp-content/uploads/2023/09/15.jpg", "cat3"],
  ["https://www.conradpune.com/wp-content/uploads/2023/09/16.jpg", "cat4"],
  ["https://www.conradpune.com/wp-content/uploads/2022/08/11-4.png", "cat5"],
  ["https://www.conradpune.com/wp-content/uploads/2023/09/13-1.jpg", "cat1"],
  ["https://www.conradpune.com/wp-content/uploads/2023/09/14-1.jpg", "cat2"],
  ["https://www.conradpune.com/wp-content/uploads/2023/09/15.jpg", "cat3"],
  ["https://www.conradpune.com/wp-content/uploads/2023/09/16.jpg", "cat4"],
  ["https://www.conradpune.com/wp-content/uploads/2022/08/11-4.png", "cat5"],
  ["https://www.conradpune.com/wp-content/uploads/2023/09/13-1.jpg", "cat1"],
  ["https://www.conradpune.com/wp-content/uploads/2023/09/14-1.jpg", "cat2"],
  ["https://www.conradpune.com/wp-content/uploads/2023/09/15.jpg", "cat3"],
  ["https://www.conradpune.com/wp-content/uploads/2023/09/16.jpg", "cat4"],
  ["https://www.conradpune.com/wp-content/uploads/2022/08/11-4.png", "cat5"],
  ["https://www.conradpune.com/wp-content/uploads/2023/09/13-1.jpg", "cat1"],
  ["https://www.conradpune.com/wp-content/uploads/2023/09/14-1.jpg", "cat2"],
  ["https://www.conradpune.com/wp-content/uploads/2023/09/15.jpg", "cat3"],
  ["https://www.conradpune.com/wp-content/uploads/2023/09/16.jpg", "cat4"],
  ["https://www.conradpune.com/wp-content/uploads/2022/08/11-4.png", "cat5"],
];

export const filterTabButtons = [
  "All",
  "Category 1",
  "Category 2",
  "Category 3",
  "Category 4",
  "Category 5",
];

export const TOP = 1000;

export const guestsReviews = [
  {
    name: "John Doe",
    avatar: "https://via.placeholder.com/100",
    rating: 4.5,
    text: "The hotel experience was wonderful! Amazing staff and great services. The amenities were top-notch and really made our stay special.",
  },
  {
    name: "Jane Smith",
    avatar: "https://via.placeholder.com/100",
    rating: 5,
    text: "I had an amazing stay! The location was perfect, and everything was top-notch. Highly recommend it for anyone visiting the city.",
  },
  {
    name: "Chris Johnson",
    avatar: "https://via.placeholder.com/100",
    rating: 3.5,
    text: "Good stay overall, but the room service could be improved. The staff was friendly, but there were a few hiccups with the services.",
  },
  {
    name: "Anna Brown",
    avatar: "https://via.placeholder.com/100",
    rating: 4,
    text: "Great experience, although a bit pricey. The view from the room was amazing, and the food in the restaurant was excellent.",
  },
  {
    name: "Michael Lee",
    avatar: "https://via.placeholder.com/100",
    rating: 4.7,
    text: "A lovely experience overall. The hotel was clean, well-maintained, and very cozy. I loved the vibe of the place.",
  },
  {
    name: "Sophia White",
    avatar: "https://via.placeholder.com/100",
    rating: 5,
    text: "I would definitely stay again! The staff went out of their way to make our stay enjoyable, and the hotel itself was gorgeous.",
  },
];

export const amenities = [
  [AirConditioner, "Air Conditioning"],
  [AttachedWashroom, "Attached Washroom"],
  [CCTV, "CCTV Surveillance"],
  [HouseKeeping, "Daily Housekeeping"],
  [Wifi, "High Speed Wifi"],
  [KitchenFacilities, "Kitchen Facilities"],
  [LaundryService, "Laundry Service"],
  [LuggageStorage, "Luggage Storage"],
  [NoSmoking, "Non - Smoking Rooms"],
  [PowerBackup, "Power Backup"],
  [Smoking, "Smoking Rooms Available"],
  [WorkDesk, "Work Desk"],
  [Security, "24/7 On-Site Security"],
];
