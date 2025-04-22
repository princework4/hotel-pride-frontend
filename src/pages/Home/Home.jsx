import React, { useContext, useEffect } from "react";
import RoomCard from "../../components/RoomCard";
import { galleryImgs, guestsReviews, allTabDetail } from "../../Constants";
import { useLocation, useNavigate, useNavigationType } from "react-router-dom";
import Reviews from "../../components/Reviews/Reviews";
import Banner from "../../components/Banner";
import Search from "../../components/Search";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import About from "../../components/About";
import AmenityCard from "../../components/AmenityCard";
import { AppContext } from "../../context/AppContext";
import { reducerMethods } from "../../context/reducerMethods";
import { fetchAllRoomTypes } from "../../services/Rooms";
import "./Home.css";

const Home = () => {
  const { state, dispatch } = useContext(AppContext);
  const { allRoomTypes, allRoomTypes1 } = state;
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

    const roomTypeNames = [allTabDetail];
    const offersObj = {};
    for (let i = 0; i < data.length; i++) {
      roomTypeNames.push([data[i].typeName, `cat${data[i].id}`]);
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
              {allRoomTypes?.map((type, index) => (
                <>
                  <RoomCard
                    key={type.id}
                    roomType={type.typeName}
                    roomDetails={[
                      allRoomTypes1[index].roomSizeInSquareFeet + " ft²",
                    ]}
                    roomId={type.id}
                    assets={type.assets}
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
      </main>
      <Footer />
    </>
  );
};

export default Home;
