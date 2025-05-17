import React, { useEffect, useState, lazy, Suspense, useRef } from "react";
import RoomCard from "../../components/RoomCard";
import { guestsReviews, allTabDetail } from "../../Constants";
import { useLocation, useNavigate, useNavigationType } from "react-router-dom";
const About = lazy(() => import("../../components/About"));
const AmenityCard = lazy(() => import("../../components/AmenityCard"));
const Banner = lazy(() => import("../../components/Banner"));
const Footer = lazy(() => import("../../components/Footer"));
const Header = lazy(() => import("../../components/Header"));
const Reviews = lazy(() => import("../../components/Reviews/Reviews"));
const Search = lazy(() => import("../../components/Search"));
import Loader from "../../components/Loader";
import OfferHeader from "../../components/OfferHeader/OfferHeader";
import { fetchAllRoomTypes } from "../../services/Rooms";
import { useDispatch, useSelector } from "react-redux";
import { updateShouldShowCallback } from "../../features/nonFunctional/nonFunctionalSlice";
import { resetGuestOptions } from "../../features/search/searchSlice";
import {
  updateAllRoomTypes,
  updateAllRoomTypesName,
  updateAvailableRoomTypes,
  updateIsOfferAvailable,
  updateOfferEndDate,
  updateOffers,
  updateSelectedRooms,
} from "../../features/room/roomSlice";
import {
  updateIsUserLoggedIn,
  updateLoggedInUser,
} from "../../features/auth/authSlice";
import { checkOfferAvailability } from "../../utils";

import { toast } from "react-toastify";

import "./Home.css";

import galleryImage3 from "../../assets/Gallery/gallery_3.jpeg";
import galleryImage4 from "../../assets/Gallery/gallery_4.jpeg";
import galleryImage6 from "../../assets/Gallery/gallery_6.jpeg";
import galleryImage17 from "../../assets/Gallery/gallery_17.jpeg";
import galleryImage18 from "../../assets/Gallery/gallery_18.jpeg";
import galleryImage20 from "../../assets/Gallery/gallery_20.jpeg";

import HotelDescription from "../../components/HotelDescription/HotelDescription";

const Home = () => {
  const [allGalleryImages, setAllGalleryImages] = useState([
    galleryImage18,
    galleryImage3,
    galleryImage4,
    galleryImage6,
    galleryImage20,
    galleryImage17,
  ]);
  const [width, setWidth] = useState(
    window.innerWidth > 0 ? window.innerWidth : screen.width
  );
  const roomRedux = useSelector((state) => state.roomReducer);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const location = useLocation();
  const navigation = useNavigationType();
  const routeChange = (path) => {
    navigate(path);
  };
  const reviewsSection = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(updateShouldShowCallback(true));
  }, []);

  React.useEffect(() => {
    if (navigation == "POP" && location.pathname == "/") {
      dispatch(resetGuestOptions());
      dispatch(updateSelectedRooms([]));
      dispatch(updateAvailableRoomTypes([]));
    }
  }, [location]);

  async function getAllRoomTypes() {
    const data = await fetchAllRoomTypes();
    if (data) {
      dispatch(updateAllRoomTypes(data));

      const roomTypeNames = [allTabDetail];
      const offersObj = {};
      for (let i = 0; i < data.length; i++) {
        roomTypeNames.push([data[i].typeName, `cat${data[i].id}`]);
        offersObj[data[i].id] = data[i].offerDiscountPercentage;
      }

      if (
        checkOfferAvailability(data[0].offerStartDate, data[0].offerEndDate)
      ) {
        dispatch(updateIsOfferAvailable(true));
        dispatch(updateOffers(offersObj));
        dispatch(updateOfferEndDate(data[0].offerEndDate));
      } else {
        // dispatch(updateIsOfferAvailable(false));
        dispatch(updateOffers({}));
        dispatch(updateOfferEndDate(""));
      }
      dispatch(updateAllRoomTypesName(roomTypeNames));
    } else {
      toast.error("Something went wrong while fetching room types.");
    }
  }

  useEffect(() => {
    if (roomRedux.allRoomTypes?.length === 0) {
      getAllRoomTypes();
    }

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

    dispatch(resetGuestOptions());
    dispatch(updateSelectedRooms([]));
    dispatch(updateAvailableRoomTypes([]));
  }, []);

  const scrollTo = () => {
    window.scrollTo({
      top: reviewsSection.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* <Suspense fallback={<Loader />}> */}
      {roomRedux.isOfferAvailable && <OfferHeader />}
      <Header />
      {/* </Suspense> */}
      <main>
        {/* <Suspense fallback={<Loader />}> */}
        <Banner />
        {/* </Suspense> */}
        <Suspense fallback={<Loader />}>
          <section className="search">
            <div className="wrapper">
              <Search />
            </div>
          </section>
        </Suspense>
        <Suspense fallback={<Loader />}>
          <HotelDescription scrollTo={scrollTo} />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <About />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <section className="room_types">
            <div className="wrapper">
              <div className="heading_container">
                {/* <hr /> */}
                <h2>room types</h2>
              </div>
              <p>
                Experience comfort and functionality with our well-appointed
                rooms, thoughtfully designed to make your stay productive and
                relaxing. Whether you're traveling for business or leisure, our
                range of room options ensures a comfortable and hassle free
                stay.
              </p>
              <div className="room_types__container">
                {roomRedux.allRoomTypes?.map((type, index) => (
                  <>
                    <RoomCard
                      key={type.id}
                      roomType={type.typeName}
                      roomDetails={[
                        roomRedux.allRoomTypes1[index].roomSizeInSquareFeet +
                          " ft²",
                      ]}
                      roomId={type.id}
                      assets={type.assets}
                      amenities={roomRedux.allRoomTypes1[index].amenities}
                      sliderEnabled={false}
                    />
                  </>
                ))}
              </div>
            </div>
          </section>
        </Suspense>
        <Suspense fallback={<Loader />}>
          <section className="services">
            <div className="wrapper">
              <div className="heading_container">
                {/* <hr /> */}
                <h2>amenities</h2>
              </div>
              <AmenityCard />
            </div>
          </section>
        </Suspense>
        <Suspense fallback={<Loader />}>
          <section className="gallery">
            <div className="wrapper">
              <div className="heading_container">
                {/* <hr /> */}
                <h2>gallery</h2>
              </div>
              {width > 768 && (
                <p style={{ margin: "15px 0 30px 0" }}>
                  Take a look around <strong>Hotel Pride - </strong> clean
                  rooms, practical amenities, and everything you need for a
                  comfortable and affordable stay in Mumbai. Browse Photos of
                  our rooms, common areas, and the conveniences that make us a
                  guest favourite.
                </p>
              )}
              <div className="gallery__container">
                {width <= 768
                  ? allGalleryImages.slice(0, 3).map((item, i) => (
                      <figure key={i}>
                        <img src={item} alt={`gallery image ` + i + 1} />
                      </figure>
                    ))
                  : allGalleryImages.map((item, i) => (
                      <figure key={i}>
                        <img src={item} alt={`gallery image ` + i + 1} />
                      </figure>
                    ))}
                {/* {allGalleryImages.map((item, i) => (
                  <figure key={i}>
                    <img src={item} alt={i} />
                  </figure>
                ))} */}
              </div>
              <div className="see_more__container">
                <button onClick={() => routeChange("gallery")}>see more</button>
              </div>
            </div>
          </section>
        </Suspense>
        <Suspense fallback={<Loader />}>
          <section className="reviews" ref={reviewsSection}>
            <div className="wrapper">
              <div className="heading_container">
                {/* <hr /> */}
                <h2 data-text="reviews">What our Guests Say</h2>
              </div>
              <div className="reviews__container">
                <Reviews guestsReviews={guestsReviews} />
              </div>
            </div>
          </section>
        </Suspense>
      </main>
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Home;
