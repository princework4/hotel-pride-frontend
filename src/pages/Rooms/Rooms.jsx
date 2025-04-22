import React, { useContext, useEffect } from "react";
import CustomStepper from "../../components/Stepper/Stepper";
import Search from "../../components/Search";
import { AppContext } from "../../context/AppContext";
import { reducerMethods } from "../../context/reducerMethods";

const Rooms = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    if (localStorage.getItem("userObj")) {
      const obj = JSON.parse(localStorage.getItem("userObj"));
      dispatch({
        type: reducerMethods.setLoggedInUser,
        payload: {
          id: obj.id,
          name: obj.name,
          email: obj.email,
          contactNumber: obj.contactNumber,
        },
      });
      dispatch({
        type: reducerMethods.setIsUserLoggedIn,
        payload: obj.isLoggedIn,
      });
    }
  }, []);

  return (
    <section>
      <div className="wrapper">
        {/* {state.steppersActiveStep === 1 && <Search />} */}
        <CustomStepper />
      </div>
    </section>
  );
};

export default Rooms;
