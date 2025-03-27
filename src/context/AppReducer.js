import { reducerMethods } from "./reducerMethods";

export const AppReducer = (state, action) => {
  switch (action.type) {
    case reducerMethods.setLoginData:
      return {
        ...state,
        logInData: { ...state.logInData, ...action.payload },
      };

    case reducerMethods.setLogInDataErr:
      return {
        ...state,
        logInDataErr: { ...state.logInDataErr, ...action.payload },
      };

    case reducerMethods.setSignUpData:
      return {
        ...state,
        signUpData: { ...state.signUpData, ...action.payload },
      };

    case reducerMethods.setSignUpdataErr:
      return {
        ...state,
        signUpDataErr: { ...state.signUpDataErr, ...action.payload },
      };

    case reducerMethods.setReqCallbackData:
      return {
        ...state,
        requestCallbackData: { ...state.requestCallbackData, ...action.payload },
      };

    case reducerMethods.setReqCallbackDataErr:
      return {
        ...state,
        requestCallbackDataErr: { ...state.requestCallbackDataErr, ...action.payload },
      };

    case reducerMethods.setShowHam:
      return { ...state, showHam: action.payload };

    case reducerMethods.setMenuOpen:
      return {
        ...state,
        menuOpen: action.payload,
      };

    case reducerMethods.setSize:
      return { ...state, size: { ...state.size, ...action.payload } };

    case reducerMethods.setOpen:
      return {
        ...state,
        open: action.payload,
      };

    case reducerMethods.setColorchange:
      return {
        ...state,
        colorChange: action.payload,
      };

    case reducerMethods.setRevertHeader:
      return {
        ...state,
        revertHeader: action.payload,
      };

    case reducerMethods.setAdultCount:
      return {
        ...state,
        adultCount: action.payload,
      };

    case reducerMethods.setChildCount:
      return {
        ...state,
        childCount: action.payload,
      };

    case reducerMethods.setRoomsCount:
      return {
        ...state,
        roomsCount: action.payload,
      };

    case reducerMethods.setSelectedRooms:
      return {
        ...state,
        userObj: {
          ...state.userObj,
          selectedRooms: action.payload,
        },
      };

    case reducerMethods.setTotalPrice:
      return {
        ...state,
        userObj: {
          ...state.userObj,
          totalPrice: action.payload,
        },
      };

    case reducerMethods.setShouldShowCallback:
      return {
        ...state,
        shouldShowCallback: action.payload,
      };

    default:
      return state;
  }
};
