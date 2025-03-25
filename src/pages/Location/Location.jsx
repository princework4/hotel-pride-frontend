import React, { useContext, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Location.css";
import { AppContext } from "../../context/AppContext";
import { reducerMethods } from "../../context/reducerMethods";

const Location = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch({ type: reducerMethods.setShouldShowCallback, payload: true });
  }, []);

  return (
    <>
      <Header />
      <section className="location">
        <div className="wrapper">
          <div className="heading_container">
            <hr />
            <h2>location and transportation</h2>
          </div>
          <p className="location__first_para">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
            accusantium minus quidem nulla, officia obcaecati enim? Aspernatur
            dicta similique ipsa itaque culpa tempora maxime rerum nam officia,
            eius, iusto corporis doloribus fugit! Itaque, harum, dolores
            doloribus ex nihil assumenda delectus tempora adipisci non
            voluptatem ipsam temporibus vitae recusandae nostrum provident.
          </p>
          <p className="location__second_para">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
            accusantium minus quidem nulla, officia obcaecati enim? Aspernatur
            dicta similique ipsa itaque culpa tempora maxime rerum nam officia,
            eius, iusto corporis doloribus fugit! Itaque, harum, dolores
            doloribus ex nihil assumenda delectus tempora adipisci non
            voluptatem ipsam temporibus vitae recusandae nostrum provident.
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
              <h1>Logo</h1>
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
                <li>
                  <span className="location__subdetails-heading">covered</span>
                  <span>:</span>
                  <span className="location__subdetails-description">
                    available
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <h3>transportation</h3>
              <ul className="location__subdetails">
                <li>
                  <span className="location__subdetails-heading">
                    airport transport
                  </span>
                  <span>:</span>
                  <span className="location__subdetails-description">
                    available
                  </span>
                </li>
                <li>
                  <span className="location__subdetails-heading">
                    nearest railway <br />
                    station
                  </span>
                  <span>:</span>
                  <span className="location__subdetails-description">
                    1.1 km
                  </span>
                </li>
                <li>
                  <span className="location__subdetails-heading">
                    chhatrapati shivaji
                    <br /> international airport
                  </span>
                  <span>:</span>
                  <span className="location__subdetails-description">
                    11.9 km
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <h3>what's nearby</h3>
              <ul className="location__subdetails">
                <li>
                  <span className="location__subdetails-heading">
                    city center
                  </span>
                  <span>:</span>
                  <span className="location__subdetails-description">1 km</span>
                </li>
                <li>
                  <span className="location__subdetails-heading">
                    aga khan palace
                  </span>
                  <span>:</span>
                  <span className="location__subdetails-description">4 km</span>
                </li>
                <li>
                  <span className="location__subdetails-heading">
                    shaniwar wada
                  </span>
                  <span>:</span>
                  <span className="location__subdetails-description">4 km</span>
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
