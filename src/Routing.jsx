import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Location from "./pages/Location";
import NotFound from "./pages/NotFound/NotFound";
import BottomToTop from "./components/BottomToTop";
import RequestCallback from "./components/RequestCallback";
import Rooms from "./pages/Rooms/Rooms";
import PaymentSuccessful from "./components/Payment/PaymentSuccessful";
import PaymentFailed from "./components/Payment/PaymentFailed";
import { useSelector } from "react-redux";

const Routing = () => {
  const nonFunctionalRedux = useSelector((state) => state.nonFunctionalReducer);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
        <Route path="gallery" element={<Gallery />} />
        <Route path="location" element={<Location />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="payment-successful" element={<PaymentSuccessful />} />
        <Route path="payment-failed" element={<PaymentFailed />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {nonFunctionalRedux.shouldShowCallback && <RequestCallback />}
      <BottomToTop />
    </>
  );
};

export default Routing;
