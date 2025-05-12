import React from "react";
import HotelBuilding from "../../assets/Location/location_1.jpeg";
import HotelBuilding2 from "../../assets/Location/location_2.jpeg";
import "./About.css";

const About = () => {
  const [readMore, setReadMore] = React.useState(false);

  return (
    <>
      <section className="left_right_showcase">
        <div className="wrapper">
          <div className="left_right_showcase__first">
            <div>
              <h2>hotel pride</h2>
              <p className="about__subheading">
                comfort and convenience in mumbai's thriving business hub
              </p>
              <p style={{ lineHeight: "24px" }}>
                <strong>At Hotel Pride,</strong> we offer a seamless stay with{" "}
                <strong>33 well-appointed rooms,</strong> modern amenities, and
                warm hospitality. Designed for business and leisure travelers
                alike, our hotel provides everything you need for a productive
                and relaxing experience. Enjoy thoughtfully designed spaces,
                reliable service, and a hassle-free stay with amenities that
                cater to your comfort. Whether it's a short visit or an extended
                trip, <strong>Hotel Pride</strong> ensures a smooth and
                comfortable experience at an affordable price.
              </p>
            </div>
            <figure>
              <img src={HotelBuilding} alt="Hotel Building" />
            </figure>
          </div>
          {readMore && (
            <div className="left_right_showcase__second">
              <figure>
                <img src={HotelBuilding2} alt="Reception" />
              </figure>
              <div>
                <h2>why stay with us ?</h2>
                <p>
                  Here's why <strong>Hotel Pride</strong> is the smart choice
                  for your next stay:
                </p>
                <br />
                <p style={{ lineHeight: "24px" }}>
                  <strong>Budget-Friendly Comfort - </strong> Enjoy a
                  comfortable and well-equipped stay without the high price tag
                  - perfect for business and leisure travelers alike.
                </p>
                <p style={{ lineHeight: "24px" }}>
                  <strong>Centrally Located - </strong> Just{" "}
                  <strong>10 minutes</strong> from Powai's business district, a{" "}
                  <strong>20-minute drive</strong> from the airports, and within{" "}
                  <strong>walking distance</strong> of Bhandup Railway Station,
                  ensuring easy access to Mumbai's key hubs.
                </p>
                <p style={{ lineHeight: "24px" }}>
                  <strong>Friendly, Attentive Service - </strong> Our staff is
                  dedicated to making your stay smooth and enjoyable - from
                  quick check-ins to helpful local recommendations.
                </p>
                <p style={{ lineHeight: "24px" }}>
                  <strong>Perfect for Business and Family Stays - </strong>
                  Whether you're traveling solo or with family, our versatile
                  room options and thoughtful amenities cater to every need.{" "}
                </p>
                <p style={{ lineHeight: "24px" }}>
                  <strong>Unbeatable Value - </strong> Clean, secure, and
                  well-maintained - experience comfort and convenience without
                  stretching your budget.
                </p>
              </div>
            </div>
          )}
          <div className="read_more_button__container">
            <button onClick={() => setReadMore(!readMore)}>
              {!readMore ? "Read More" : "Read Less"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
