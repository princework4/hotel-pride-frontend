import { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

const initialState = {
  guestOptions: {
    adults: 1,
    children: 0,
    rooms: 1,
  },
  guestDetails: {},
  checkInDate: null,
  checkOutDate: null,
  selectedRooms: [],
  isOfferAvailable: false,
  offers: {
    1: 10,
    2: 15,
    3: 30,
  },
  shouldShowCallback: false,
  isHomePage: true,
  selectedRoomTypeId: null,
  steppersActiveStep: 1,
  isUserLoggedIn: false,
  loggedInUser: {},
  allRoomTypes: [],
  // allRoomTypes1: [
  //   {
  //     id: 0,
  //     typeName: "Non - AC Room",
  //     capacityAdult: 2,
  //     capacityChild: 2,
  //     pricePerNight: 5000,
  //     description:
  //       "Comfortable and functional, ideal for a simple and budget-friendly stay.",
  //     roomSizeInSquareFeet: 270,
  //     amenities: [
  //       {
  //         id: 0,
  //         amenityName: "Attached Bathroom",
  //         amenityIconUrl: "",
  //       },
  //       {
  //         id: 1,
  //         amenityName: "Luggage Storage",
  //         amenityIconUrl: "",
  //       },
  //       {
  //         id: 2,
  //         amenityName: "Cotton Linens",
  //         amenityIconUrl: "",
  //       },
  //     ],
  //     rooms: [],
  //     assets: [
  //       {
  //         id: 0,
  //         assetUrl:
  //           "https://media.radissonhotels.net/image/country-inn-suites-by-radisson-navi-mumbai/guest-room/16256-114466-f67752247_4k.jpg?impolicy=Card",
  //         assetThumbUrl: "",
  //         assetType: "",
  //       },
  //       {
  //         id: 1,
  //         assetUrl:
  //           "https://media.radissonhotels.net/image/country-inn-suites-by-radisson-navi-mumbai/guest-room/16256-114466-f67752249_4k.jpg?impolicy=Card",
  //         assetThumbUrl: "",
  //         assetType: "",
  //       },
  //       {
  //         id: 2,
  //         assetUrl:
  //           "https://media.radissonhotels.net/image/country-inn-suites-by-radisson-navi-mumbai/guest-room/16256-114466-f76686228_4k.jpg?impolicy=Card",
  //         assetThumbUrl: "",
  //         assetType: "",
  //       },
  //       {
  //         id: 3,
  //         assetUrl:
  //           "https://media.radissonhotels.net/image/country-inn-suites-by-radisson-navi-mumbai/guest-room-bath/16256-114466-f76686220_4k.jpg?impolicy=Card",
  //         assetThumbUrl: "",
  //         assetType: "",
  //       },
  //     ],
  //   },
  //   {
  //     id: 1,
  //     typeName: "Deluxe Room",
  //     capacityAdult: 2,
  //     capacityChild: 2,
  //     pricePerNight: 6000,
  //     description:
  //       "Thoughtfully designed with added comfort and convenience for a relaxing experience.",
  //     roomSizeInSquareFeet: 478,
  //     amenities: [
  //       {
  //         id: 0,
  //         amenityName: "Attached Bathroom",
  //         amenityIconUrl: "",
  //       },
  //       {
  //         id: 1,
  //         amenityName: "Luggage Storage",
  //         amenityIconUrl: "",
  //       },
  //       {
  //         id: 2,
  //         amenityName: "Cotton Linens",
  //         amenityIconUrl: "",
  //       },
  //       {
  //         id: 3,
  //         amenityName: "Air Conditioning",
  //         amenityIconUrl: "",
  //       },
  //       {
  //         id: 4,
  //         amenityName: "Designated sitting area with table and chair",
  //         amenityIconUrl: "",
  //       },
  //       {
  //         id: 5,
  //         amenityName: "Bottled Water",
  //         amenityIconUrl: "",
  //       },
  //       {
  //         id: 6,
  //         amenityName: "Toiletries",
  //         amenityIconUrl: "",
  //       },
  //     ],
  //     rooms: [],
  //     assets: [
  //       {
  //         id: 0,
  //         assetUrl:
  //           "https://media.radissonhotels.net/image/country-inn-suites-by-radisson-navi-mumbai/guest-room/16256-114466-f67752247_4k.jpg?impolicy=Card",
  //         assetThumbUrl: "",
  //         assetType: "",
  //       },
  //       {
  //         id: 1,
  //         assetUrl:
  //           "https://media.radissonhotels.net/image/country-inn-suites-by-radisson-navi-mumbai/guest-room/16256-114466-f67752249_4k.jpg?impolicy=Card",
  //         assetThumbUrl: "",
  //         assetType: "",
  //       },
  //       {
  //         id: 2,
  //         assetUrl:
  //           "https://media.radissonhotels.net/image/country-inn-suites-by-radisson-navi-mumbai/guest-room/16256-114466-f76686228_4k.jpg?impolicy=Card",
  //         assetThumbUrl: "",
  //         assetType: "",
  //       },
  //       {
  //         id: 3,
  //         assetUrl:
  //           "https://media.radissonhotels.net/image/country-inn-suites-by-radisson-navi-mumbai/guest-room-bath/16256-114466-f76686220_4k.jpg?impolicy=Card",
  //         assetThumbUrl: "",
  //         assetType: "",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     typeName: "Executive Room",
  //     capacityAdult: 2,
  //     capacityChild: 2,
  //     pricePerNight: 8000,
  //     description:
  //       "Spacious and well-equipped, perfect for business travelers seeking extra comfort and functionality.",
  //     roomSizeInSquareFeet: 876,
  //     amenities: [
  //       {
  //         id: 0,
  //         amenityName: "Attached Bathroom",
  //         amenityIconUrl: "",
  //       },
  //       {
  //         id: 1,
  //         amenityName: "Luggage Storage",
  //         amenityIconUrl: "",
  //       },
  //       {
  //         id: 2,
  //         amenityName: "Cotton Linens",
  //         amenityIconUrl: "",
  //       },
  //       {
  //         id: 3,
  //         amenityName: "Air Conditioning",
  //         amenityIconUrl: "",
  //       },
  //       {
  //         id: 4,
  //         amenityName: "Designated sitting area with table and chair",
  //         amenityIconUrl: "",
  //       },
  //       {
  //         id: 5,
  //         amenityName: "Bottled Water",
  //         amenityIconUrl: "",
  //       },
  //       {
  //         id: 6,
  //         amenityName: "Toiletries",
  //         amenityIconUrl: "",
  //       },
  //       {
  //         id: 7,
  //         amenityName: "Larger Room Size",
  //         amenityIconUrl: "",
  //       },
  //       {
  //         id: 8,
  //         amenityName: "Working Desk",
  //         amenityIconUrl: "",
  //       },
  //     ],
  //     rooms: [],
  //     assets: [
  //       {
  //         id: 0,
  //         assetUrl:
  //           "https://media.radissonhotels.net/image/country-inn-suites-by-radisson-navi-mumbai/guest-room/16256-114466-f67752247_4k.jpg?impolicy=Card",
  //         assetThumbUrl: "",
  //         assetType: "",
  //       },
  //       {
  //         id: 1,
  //         assetUrl:
  //           "https://media.radissonhotels.net/image/country-inn-suites-by-radisson-navi-mumbai/guest-room/16256-114466-f67752249_4k.jpg?impolicy=Card",
  //         assetThumbUrl: "",
  //         assetType: "",
  //       },
  //       {
  //         id: 2,
  //         assetUrl:
  //           "https://media.radissonhotels.net/image/country-inn-suites-by-radisson-navi-mumbai/guest-room/16256-114466-f76686228_4k.jpg?impolicy=Card",
  //         assetThumbUrl: "",
  //         assetType: "",
  //       },
  //       {
  //         id: 3,
  //         assetUrl:
  //           "https://media.radissonhotels.net/image/country-inn-suites-by-radisson-navi-mumbai/guest-room-bath/16256-114466-f76686220_4k.jpg?impolicy=Card",
  //         assetThumbUrl: "",
  //         assetType: "",
  //       },
  //     ],
  //   },
  // ],
  filteredAllRoomTypes: [],
  breakfastPrice: 500,
  userDetailsForPayment: {},
  tax: 2000,
  allRoomTypesName: [],
  allAssetsImages: [],
};

export const AppContext = createContext(initialState);

export const AppStore = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
