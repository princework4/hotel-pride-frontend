import React, { useContext } from "react";
import CustomStepper from "../../components/Stepper/Stepper";
import Search from "../../components/Search";
import { AppContext } from "../../context/AppContext";

const Rooms = () => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <section>
      <div className="wrapper">
        {state.steppersActiveStep === 1 && <Search />}
        <CustomStepper />
      </div>
    </section>
  );
};

export default Rooms;
