import React from "react";
import ImageSlider from "../../components/Slider";
import "./Home.css";
import RoomCard from "../../components/RoomCard/RoomCard";
import { roomTypes, roomDetails, galleryImgs } from "../../Constants";

const Home = () => {
  return (
    <main>
      <section className="room_types">
        <div className="wrapper">
          <div className="heading_container">
            <hr />
            <h2 data-text="room types">room types</h2>
          </div>
          <div className="room_types__container">
            {roomTypes?.map((type, i) => (
              <RoomCard key={i} roomType={type} roomDetails={roomDetails[i]} />
            ))}
          </div>
        </div>
      </section>
      <section className="gallery">
        <div className="wrapper">
          <div className="heading_container">
            <hr />
            <h2 data-text="gallery">gallery</h2>
          </div>
          <div className="gallery__container">
            {galleryImgs?.slice(0, 6)?.map((item, i) => (
              <figure>
                <img src={item[0]} alt={i} />
              </figure>
            ))}
          </div>
          <div className="see_more__container">
            <button>See More</button>
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
  );
};

export default Home;
