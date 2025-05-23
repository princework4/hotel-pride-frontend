import React, { useEffect, lazy, Suspense } from "react";
const Footer = lazy(() => import("../../components/Footer"));
const Header = lazy(() => import("../../components/Header"));
import Loader from "../../components/Loader";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateShouldShowCallback } from "../../features/nonFunctional/nonFunctionalSlice";
import {
  updateIsUserLoggedIn,
  updateLoggedInUser,
} from "../../features/auth/authSlice";
import { Link } from "react-router-dom";
import "./Location.css";

import Logo from "../../assets/Logo-Pride.jpg";
import OfferHeader from "../../components/OfferHeader/OfferHeader";

const Location = () => {
  const roomRedux = useSelector((state) => state.roomReducer);
  const nonFunctionalRedux = useSelector((state) => state.nonFunctionalReducer);
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
      {roomRedux.isOfferAvailable &&
        nonFunctionalRedux.shouldShowOfferHeader && <OfferHeader />}
      <Suspense fallback={<Loader />}>
        <Header />
      </Suspense>
      <section className="location">
        <div className="wrapper">
          <div className="heading_container">
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
          <div className="hotel_policies">
            <h2>hotel policies</h2>
            <Accordion
              className="accordion"
              sx={{
                "&.Mui-expanded": {
                  color: "var(--sage)",
                  margin: "0",
                  "& button#panel2-header": {
                    borderBottom: "1px solid var(--sage)",
                  },
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography component="span">Pets</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {" "}
                <p style={{ color: "#000" }}>Pets Allowed : No</p>{" "}
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="accordion"
              sx={{
                "&.Mui-expanded": {
                  color: "var(--sage)",
                  margin: "0",
                  "& button#panel3-header": {
                    borderBottom: "1px solid var(--sage)",
                  },
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography component="span">WiFi</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p style={{ color: "#000" }}>
                  Free standard in-room and lobby WiFi.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="accordion"
              sx={{
                "&.Mui-expanded": {
                  color: "var(--sage)",
                  margin: "0",
                  "& button#panel4-header": {
                    borderBottom: "1px solid var(--sage)",
                  },
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4-content"
                id="panel4-header"
              >
                <Typography component="span">Cancellation</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p style={{ color: "#000" }}>
                  Cancellation policies may vary depending on the rate or dates
                  of your reservation. If you need further assistance, call the
                  hotel directly.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="accordion"
              sx={{
                "&.Mui-expanded": {
                  color: "var(--sage)",
                  margin: "0",
                  "& button#panel5-header": {
                    borderBottom: "1px solid var(--sage)",
                  },
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5-content"
                id="panel5-header"
              >
                <Typography component="span">Check-in / Checkout</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="check_in_out">
                  <ul style={{ color: "#000" }}>
                    <li>
                      <p>Check-in</p>
                    </li>
                    <li>
                      <p>Check-out</p>
                    </li>
                    <li>
                      <p>Minimum age to Register</p>
                    </li>
                  </ul>
                  <ul style={{ color: "#000" }}>
                    <li>
                      <p>12:00 PM</p>
                    </li>
                    <li>
                      <p>11:00 AM</p>
                    </li>
                    <li>
                      <p>18</p>
                    </li>
                  </ul>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="accordion"
              sx={{
                "&.Mui-expanded": {
                  color: "var(--sage)",
                  margin: "0",
                  "& button#panel6-header": {
                    borderBottom: "1px solid var(--sage)",
                  },
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel6-content"
                id="panel6-header"
              >
                <Typography component="span">Payment</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p style={{ color: "#000" }}>
                  Cash, UPI, all major cards accepted.
                </p>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </section>
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Location;
