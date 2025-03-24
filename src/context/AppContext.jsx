import { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

const initialState = {
  logInData: { email: "", password: "" },
  logInDataErr: { emailErr: "", passwordErr: "" },
  signUpData: { name: "", email: "", mobile: "", password: "", cpassword: "" },
  signUpDataErr: {
    nameErr: "",
    emailErr: "",
    mobileErr: "",
    passwordErr: "",
    cpasswordErr: "",
  },
  requestCallbackData: { name: "", email: "", mobile: "", guests: 1, rooms: 1 },
  requestCallbackDataErr: {
    nameErr: "",
    emailErr: "",
    mobileErr: "",
    guestsErr: "",
    roomsErr: "",
  },
  showHam: false,
  menuOpen: false,
  size: { width: window.innerWidth || 0, height: window.innerHeight || 0 },
  open: false,
  colorChange: false,
  revertHeader: false,
  adultCount: 0,
  childCount: 0,
  roomsCount: 4,
  userObj: {
    selectedRooms: [],
    totalPrice: 0,
  },
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
