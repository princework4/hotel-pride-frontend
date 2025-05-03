import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useDispatch } from "react-redux";
import { updateShouldShowCallback } from "../../features/nonFunctional/nonFunctionalSlice";
import {
  updateIsUserLoggedIn,
  updateLoggedInUser,
} from "../../features/auth/authSlice";
import { Link } from "react-router-dom";
import "./Location.css";

import Logo from "../../assets/Logo-Pride.jpg";

const Location = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(updateShouldShowCallback(true));

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
  }, []);

  return (
    <>
      <Header />
      <section className="location">
        <div className="wrapper">
          <div className="heading_container">
            {/* <hr /> */}
            <h2>location and transportation</h2>
          </div>
          <p className="location__first_para">
            Located in <strong>LBS Road</strong> in{" "}
            <strong>Bhandup, Hotel Pride</strong> offers direct access to
            Mumbai's business and travel hubs. With <strong>Powai</strong> just{" "}
            <strong>10 minutes</strong> away and both airports within a{" "}
            <strong>20-minute drive,</strong> commuting is quick and easy. The
            nearby <strong>Eastern Express Highway</strong> and{" "}
            <strong>Bhandup Railway Station</strong> make exploring the city
            effortless.
          </p>
          <p className="location__second_para">
            Explore the best of Mumbai with nearby attractions like{" "}
            <strong>Powai Lake, R City Mall</strong> and{" "}
            <strong>Hiranandani Gardens.</strong> Whether you're travelling for
            business or pleasure, you'll find everything you need close by.
          </p>
          <div className="location__map_contact-container">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.0768406872535!2d72.93531957337089!3d19.14811344970818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b86e528cb077%3A0x1f221447c0a2ee0a!2sHotel%20Pride!5e0!3m2!1sen!2sin!4v1741511073152!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div>
              <h1>
                <Link to="/">
                  <img src={Logo} alt="logo" />
                </Link>
              </h1>
              <h2>hotel pride</h2>
              <ul>
                <li>
                  <span className="location__map_contact-container__heading">
                    Address
                  </span>
                  <span>:</span>
                  <span className="location__map_contact-container__description">
                    Hotel Pride, Lbs Marg, Rs, Dreams Mall Rd, next to Icici
                    Bank, Bhandup West, Mumbai, Maharashtra 400078
                  </span>
                </li>
                <li>
                  <span className="location__map_contact-container__heading">
                    Email
                  </span>
                  <span>:</span>
                  <a href="mailto:demo@gmail.com">demo@gmail.com</a>
                </li>
                <li>
                  <span className="location__map_contact-container__heading">
                    Telephone
                  </span>
                  <span>:</span>
                  <a href="tel:9876543210">9876543210</a>
                </li>
              </ul>
            </div>
          </div>
          <ul className="location__details">
            <li>
              <h3>parking</h3>
              <ul className="location__subdetails">
                <li>
                  <span className="location__subdetails-heading">
                    self parking
                  </span>
                  <span>:</span>
                  <span className="location__subdetails-description">
                    complementary
                  </span>
                </li>
                <li>
                  <span className="location__subdetails-heading">
                    valet parking
                  </span>
                  <span>:</span>
                  <span className="location__subdetails-description">
                    complementary
                  </span>
                </li>
                <li>
                  <span className="location__subdetails-heading">
                    EV charging
                  </span>
                  <span>:</span>
                  <span className="location__subdetails-description">
                    nearby
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <h3>what's nearby</h3>
              <ul className="location__subdetails">
                <li>
                  <span className="location__subdetails-heading">powai</span>
                  <span>:</span>
                  <span className="location__subdetails-description">6 km</span>
                </li>
                <li>
                  <span className="location__subdetails-heading">BKC</span>
                  <span>:</span>
                  <span className="location__subdetails-description">
                    17 km
                  </span>
                </li>
                <li>
                  <span className="location__subdetails-heading">thane</span>
                  <span>:</span>
                  <span className="location__subdetails-description">
                    10 km
                  </span>
                </li>
                <li>
                  <span className="location__subdetails-heading">
                    domestic airport
                  </span>
                  <span>:</span>
                  <span className="location__subdetails-description">
                    15 km
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Location;
