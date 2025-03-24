import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Location from "./pages/Location";
import NotFound from "./pages/NotFound/NotFound";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import BottomToTop from "./components/BottomToTop";
import RequestCallback from "./components/RequestCallback";
import Rooms from "./pages/Rooms/Rooms";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
        <Route path="gallery" element={<Gallery />} />
        <Route path="location" element={<Location />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <RequestCallback />
      <BottomToTop />
    </>
  );
};

export default Routing;
