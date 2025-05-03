import React, { useEffect } from "react";
import CustomStepper from "../../components/Stepper/Stepper";
import { useDispatch } from "react-redux";
import {
  updateIsUserLoggedIn,
  updateLoggedInUser,
} from "../../features/auth/authSlice";

const Rooms = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (sessionStorage.getItem("userObj")) {
      const obj = JSON.parse(sessionStorage.getItem("userObj"));
      dispatch(updateIsUserLoggedIn(obj.isLoggedIn));
      dispatch(
        updateLoggedInUser({
          id: obj.id,
          name: obj.name,
          email: obj.email,
          contactNumber: obj.contactNumber,
        })
      );
    }
  }, []);

  return (
    <section>
      <div className="wrapper">
        <CustomStepper />
      </div>
    </section>
  );
};

export default Rooms;
