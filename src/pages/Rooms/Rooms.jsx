import React from "react";
import CustomStepper from "../../components/Stepper/Stepper";
import Search from "../../components/Search";

const Rooms = () => {
  return (
    <section>
      <div className="wrapper">
        <Search />
        <CustomStepper />
      </div>
    </section>
  );
};

export default Rooms;
