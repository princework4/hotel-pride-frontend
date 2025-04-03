import React, { useEffect } from "react";
import { showcaseImgs } from "../../Constants";
import ImageSlider from "../Slider";
import Header from "../Header";
import Footer from "../Footer";
import "./About.css";

const About = () => {
  const [readMore, setReadMore] = React.useState(false);

  return (
    <>
      {/* <section className="showcase">
        <div className="wrapper">
          <ImageSlider
            slidesToShow={1}
            slidesToScroll={1}
            images={showcaseImgs}
            isCarousel={false}
            autoplay={true}
            isBanner={true}
          />
        </div>
      </section> */}
      <section className="left_right_showcase">
        <div className="wrapper">
          <div className="left_right_showcase__first">
            <div>
              {/* <p>Who we are ?</p> */}
              <h2>hotel pride</h2>
              {/* <p className="about__subheading">come live with us</p> */}
              <p className="about__subheading">
                comfort and convenience in mumbai's thriving business hub
              </p>
              <p>
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
              {/* <p>
                <strong>A trusted name in hospitality for over 20 years</strong>{" "}
                - Hotel Pride combines the warmth of a family-run business with
                the efficiency of a business hotel. Nestled in the heart of{" "}
                <strong>Bhandup,</strong> we offer{" "}
                <strong>33 well-appointed rooms</strong> designed for both
                business and leisure travelers.
              </p>
              <p>
                Just <strong>10 minutes</strong> from the business district of{" "}
                <strong>Powai</strong> and a <strong>20-minute drive</strong>{" "}
                from both domestic and international airports, our location
                ensures seamless connectivity. We're within{" "}
                <strong>walking distance</strong> of the{" "}
                <strong>Bhandup Railway Station</strong> and just{" "}
                <strong>a kilometer</strong>
                from the <strong>Eastern Express Highway</strong> - making it
                easy to get around the city.{" "}
              </p>
              <p>
                We've built a reputation for friendly service, thoughtful
                amenities, and a welcoming environment. Whether you're visiting
                for business or a family trip, <strong>Hotel Pride</strong> is
                your go-to destination for affordable comfort in Mumbai.
              </p> */}
            </div>
            <figure>
              <img
                src="https://www.conradpune.com/wp-content/uploads/2022/07/2-4.png"
                alt=""
              />
            </figure>
          </div>
          {readMore && (
            <div className="left_right_showcase__second">
              <figure>
                <img
                  src="https://www.conradpune.com/wp-content/uploads/2022/07/1-4.png"
                  alt=""
                />
              </figure>
              <div>
                <h2>why stay with us ?</h2>
                <p>
                  Here's why <strong>Hotel Pride</strong> is the smart choice
                  for your next stay:
                </p>
                <br />
                <p>
                  <strong>Budget-Friendly Comfort - </strong> Enjoy a
                  comfortable and well-equipped stay without the high price tag
                  - perfect for business and leisure travelers alike.
                </p>
                <p>
                  <strong>Centrally Located - </strong> Just{" "}
                  <strong>10 minutes</strong> from Powai's business district, a{" "}
                  <strong>20-minute drive</strong> from the airports, and within{" "}
                  <strong>walking distance</strong> of Bhandup Railway Station,
                  ensuring easy access to Mumbai's key hubs.
                </p>
                <p>
                  <strong>Friendly, Attentive Service - </strong> Our staff is
                  dedicated to making your stay smooth and enjoyable - from
                  quick check-ins to helpful local recommendations.
                </p>
                <p>
                  <strong>Perfect for Business and Family Stays - </strong>
                  Whether you're traveling solo or with family, our versatile
                  room options and thoughtful amenities cater to every need.{" "}
                </p>
                <p>
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
      {/* <section className="contact_us">
        <div className="wrapper">
          <div className="contact_us__container">
            <div className="map_container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.0768406872535!2d72.93531957337089!3d19.14811344970818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b86e528cb077%3A0x1f221447c0a2ee0a!2sHotel%20Pride!5e0!3m2!1sen!2sin!4v1741511073152!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="address_container">
              <h2>hotel pride</h2>
              <ul>
                <li>
                  <span className="address_container__heading">Address</span>
                  <span>:</span>
                  <span className="address_container__description">
                    Hotel Pride, Lbs Marg, Rs, Dreams Mall Rd, next to Icici
                    Bank, Bhandup West, Mumbai, Maharashtra 400078
                  </span>
                </li>
                <li>
                  <span className="address_container__heading">Email</span>
                  <span>:</span>
                  <a href="mailto:demo@gmail.com">demo@gmail.com</a>
                </li>
                <li>
                  <span className="address_container__heading">Telephone</span>
                  <span>:</span>
                  <a href="tel:9876543210">9876543210</a>
                </li>
              </ul>
              <div className="address__nearby">
                <div className="address__nearby-walk-container">
                  <span className="address__nearby-walk"></span>
                </div>
                <ul>
                  <li>
                    <span>Nearest International Airport</span>&nbsp;11.9 km away
                  </li>
                  <li>
                    <span>Nearest Railway Station</span>&nbsp;1.1 km away
                  </li>
                  <li>
                    <span>Nearest Tourist Attractions</span>&nbsp;6.5 km away
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default About;
