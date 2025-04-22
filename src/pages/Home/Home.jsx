import React, { useContext, useEffect, useState } from "react";
import RoomCard from "../../components/RoomCard";
import {
  // allRoomTypes,
  roomDetails,
  galleryImgs,
  guestsReviews,
  allTabDetail,
} from "../../Constants";
import { useLocation, useNavigate, useNavigationType } from "react-router-dom";
import Reviews from "../../components/Reviews/Reviews";
import Banner from "../../components/Banner";
import Search from "../../components/Search";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import About from "../../components/About";
import "./Home.css";
import AmenityCard from "../../components/AmenityCard";
import { AppContext } from "../../context/AppContext";
import { reducerMethods } from "../../context/reducerMethods";
import { fetchAllRoomTypes } from "../../services/Rooms";

import nonAcImage1 from "../../assets/Non_Ac/non_ac_img_1.jpeg";
import nonAcImage2 from "../../assets//Non_Ac/non_ac_img_2.jpeg";
import nonAcImage3 from "../../assets//Non_Ac/non_ac_img_3.jpeg";
import deluxeImage1 from "../../assets//Deluxe/deluxe_room_1.jpeg";
import deluxeImage2 from "../../assets//Deluxe/deluxe_room_2.jpeg";
import deluxeImage3 from "../../assets//Deluxe/deluxe_room_3.jpeg";
import deluxeImage4 from "../../assets//Deluxe/deluxe_room_4.jpeg";
import executiveImage1 from "../../assets//Executive/executive_room_1.jpeg";
import executiveImage2 from "../../assets//Executive/executive_room_2.jpeg";
import executiveImage3 from "../../assets//Executive/executive_room_3.jpeg";
import executiveImage4 from "../../assets//Executive/executive_room_4.jpeg";

const Home = () => {
  const { state, dispatch } = useContext(AppContext);
  const { allRoomTypes, allRoomTypes1, allAssetsImages } = state;
  let navigate = useNavigate();
  const location = useLocation();
  const navigation = useNavigationType();
  const routeChange = (path) => {
    navigate(path);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch({ type: reducerMethods.setShouldShowCallback, payload: true });
  }, []);

  React.useEffect(() => {
    if (navigation == "POP" && location.pathname == "/") {
      dispatch({
        type: reducerMethods.setGuestOptions,
        payload: {
          adults: 1,
          children: 0,
          rooms: 1,
        },
      });
      dispatch({ type: reducerMethods.setCheckInDate, payload: null });
      dispatch({ type: reducerMethods.setCheckOutDate, payload: null });
      dispatch({ type: reducerMethods.setSelectedRooms, payload: [] });
    }
  }, [location]);

  async function getAllRoomTypes() {
    const data = await fetchAllRoomTypes();
    dispatch({ type: reducerMethods.setAllRoomTypes, payload: data });

    const images = [];
    const roomTypeNames = [allTabDetail];
    const offersObj = {};
    for (let i = 0; i < data.length; i++) {
      roomTypeNames.push([data[i].typeName, `cat${data[i].id}`]);
      // for (let j = 0; j < data[i].assets.length; j++) {
      //   images.push([
      //     process.env.BASE_URL + data[i].assets[j].assetUrl,
      //     `cat${data[i].id}`,
      //   ]);
      // }
      offersObj[data[i].id] = data[i].offerDiscountPercentage;
    }

    dispatch({
      type: reducerMethods.setOffers,
      payload: offersObj,
    });

    dispatch({
      type: reducerMethods.setAllRoomTypesName,
      payload: roomTypeNames,
    });
    // dispatch({ type: reducerMethods.setAllAssetsImages, payload: images });
  }

  useEffect(() => {
    if (allRoomTypes?.length === 0) {
      getAllRoomTypes();
    }

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

  // const allAssets = {
  //   1: [nonAcImage1, nonAcImage2, nonAcImage3],
  //   2: [deluxeImage1, deluxeImage2, deluxeImage3, deluxeImage4],
  //   3: [executiveImage1, executiveImage2, executiveImage3, executiveImage4],
  // };

  return (
    <>
      <Header />
      <main>
        <Banner />
        <section className="search">
          <div className="wrapper">
            <Search />
          </div>
        </section>
        <About />
        {/* <section className="about">
          <div className="wrapper">
            <div className="left_right_showcase">
              <div>
                <p>Who we are ?</p>
                <h2>hotel pride</h2>
                <p className="about__subheading">come live with us</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo ea pariatur vel, debitis in enim voluptatum. Aut
                  reiciendis dolorem voluptas?
                </p>
                <button onClick={() => routeChange("about")}>learn more</button>
              </div>
              <figure>
                <img
                  src="https://www.conradpune.com/wp-content/uploads/2022/07/2-4.png"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </section> */}
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
              range of room options ensures a comfortable and hassle free stay.
            </p>
            <div className="room_types__container">
              {/* {allRoomTypes?.map((type, i) => (
                <RoomCard
                  key={i}
                  roomType={type[0]}
                  roomDetails={roomDetails[i]}
                  roomNo={i}
                />
              ))} */}
              {allRoomTypes?.map((type, index) => (
                <>
                  <RoomCard
                    key={type.id}
                    roomType={type.typeName}
                    // roomDetails={[type.roomSizeInSquareFeet + " ft²"]}
                    roomDetails={[
                      allRoomTypes1[index].roomSizeInSquareFeet + " ft²",
                    ]}
                    roomId={type.id}
                    assets={type.assets}
                    // assets={allRoomTypes1[index].assets}
                    // assets={allAssets[index + 1]}
                    // amenities={type.amenities}
                    amenities={allRoomTypes1[index].amenities}
                  />
                </>
              ))}
            </div>
          </div>
        </section>
        <section className="services">
          <div className="wrapper">
            <div className="heading_container">
              {/* <hr /> */}
              <h2>amenities</h2>
            </div>
            <AmenityCard />
          </div>
        </section>
        <section className="gallery">
          <div className="wrapper">
            <div className="heading_container">
              {/* <hr /> */}
              <h2>gallery</h2>
            </div>
            <div className="gallery__container">
              {galleryImgs?.slice(0, 6)?.map((item, i) => (
                // {allAssetsImages?.slice(0, 6)?.map((item, i) => (
                <figure key={i}>
                  <img src={item[0]} alt={i} />
                </figure>
              ))}
            </div>
            <div className="see_more__container">
              <button onClick={() => routeChange("gallery")}>see more</button>
            </div>
          </div>
        </section>
        <section className="reviews">
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

        {/* <section className="reviews">
        <div className="wrapper">
          <ImageSlider
            slidesToShow={3}
            slidesToScroll={1}
            isCarousel={true}
            isImgAvailable={false}
            content={googleReviews}
          />
        </div>
      </section> */}
        {/* <section className="drinks_and_dining">
        <div className="wrapper">
          <h2>Drinks & Dining</h2>
          <ImageSlider
            slidesToShow={3}
            slidesToScroll={1}
            images={showcaseImgs}
            isCarousel={true}
          />
        </div>
      </section> */}
        {/* <section className="awards"></section>
      <section className="reviews"></section>
      <section className="map_and_address"></section> */}
      </main>
      <Footer />
    </>
  );
};

export default Home;
