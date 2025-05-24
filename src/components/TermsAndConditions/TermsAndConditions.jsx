import React from "react";
import { Box, Modal } from "@mui/material";
import Logo from "../../assets/Logo-Pride-removebg.png";
import "./TermsAndConditions.css";
import CloseIconCircle from "../CloseIconCircle";

const TermsAndConditions = ({ open, handleClose }) => {
  const style = {
    width: "80%",
    height: "80%",
    padding: {
      xs: "20px 15px",
      sm: "20px",
    },
    border: "none",
    position: "absolute",
    top: "50%",
    left: "50%",
    bgcolor: "background.paper",
    boxShadow: 24,
    overflowY: "scroll",
    transform: "translate(-50%, -50%)",
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="terms_and_conditions"
    >
      <Box sx={style}>
        <Box className="terms_header">
          <h1>
            <img src={Logo} alt="logo" />
          </h1>
          <p>
            L.B.S Marg, Opp. R.R. Paints Co., Bhandup (W), Mumbai - 400 078,
            Mumbai
          </p>
          <ul>
            <li>
              <p>Tel.: 6127 7302, 6127 7303, 6755 0868, 6755 4200</p>
            </li>
            <li>
              <p>Email: hotelpride05@gmail.com</p>
            </li>
            <li>
              <p>www.hotelpride.com</p>
            </li>
          </ul>
          <CloseIconCircle handleClose={handleClose} />
        </Box>
        <h3 className="terms_heading">Terms & Conditions</h3>
        <p className="terms_subheading">
          Welcome to Hotel Pride. By booking a room or staying at our property,
          you agree to abide by the following terms and conditions :
        </p>
        <ul>
          <li>
            <h3>Booking & payment</h3>
            <ul className="terms_sublist">
              <li>
                <span>■</span>
                <p>Walk-in guests are welcome, subject to room availability.</p>
              </li>
              <li>
                <span>■</span>
                <p>
                  We accept payments via cash, UPI, and all major debit/credit
                  cards.
                </p>
              </li>
              <li>
                <span>■</span>
                <p>Full payment must be made at the time of check-in.</p>
              </li>
            </ul>
          </li>
          <li>
            <h3>Check-in & Check-out</h3>
            <ul className="terms_sublist">
              <li>
                <span>■</span>
                <p>Standard check-in time : 12:00 PM</p>
              </li>
              <li>
                <span>■</span>
                <p>Standard check-out time : 11:00 AM</p>
              </li>
              <li>
                <span>■</span>
                <p>
                  For early check-in or late check-out requests, please contact
                  the hotel in advance. Approval is subject to availability and
                  may incur additional charges.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <h3>Identification & Age Policy</h3>
            <ul className="terms_sublist">
              <li>
                <span>■</span>
                <p>
                  A valid goverment-issued phodo ID (Aadhar Card or Driving
                  License) is required at the time of check-in.
                </p>
              </li>
              <li>
                <span>■</span>
                <p>
                  Foreign nationals / NRI to produce their passport at the time
                  of check-in.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <h3>Child / Extra person policy</h3>
            <ul className="terms_sublist">
              <li>
                <span>■</span>
                <p>Children below age of 6 will not be charged.</p>
              </li>
              <li>
                <span>■</span>
                <p>
                  Child between 6-11 years will be charged at applicable extra
                  rate.
                </p>
              </li>
              <li>
                <span>■</span>
                <p>
                  Child above the age of 11 will be considered as an adult and
                  extra adult charges will be applicable.
                </p>
              </li>
              <li>
                <span>■</span>
                <p>Charges for an extra guest : &#8377;700 per night.</p>
              </li>
              <li>
                <span>■</span>
                <p>Pets are not allowed on the property.</p>
              </li>
            </ul>
          </li>
          <li>
            <h3>Cancellation Policy</h3>
            <ul className="terms_sublist">
              <li>
                <span>■</span>
                <p>
                  For all the cancellations, guests are requested to contact the
                  hotel directly. We will do our best to accomodate your
                  request.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <h3>Damage to Property</h3>
            <ul className="terms_sublist">
              <li>
                <span>■</span>
                <p>
                  Guests will be held responsible for any damage caused to the
                  hotel property. Charges will apply based on the extent of
                  damage.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <h3>Smoking Policy</h3>
            <ul className="terms_sublist">
              <li>
                <span>■</span>
                <p>
                  Smoking rooms are available upon request. Please inform the
                  front desk during booking or check-in.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <h3>Guest Conduct</h3>
            <ul className="terms_sublist">
              <li>
                <span>■</span>
                <p>
                  Guests are expected to behave respectfully and responsibly
                  during their stay.
                </p>
              </li>
              <li>
                <span>■</span>
                <p>
                  The hotel reserves the right to refuse service or evict guests
                  engaging in misconduct, illegal activities, or causing
                  disturbance.
                </p>
              </li>
              <li>
                <span>■</span>
                <p>
                  Consumption or sale of alcohol on the property is strictly
                  prohibited.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <h3>Amenities</h3>
            <ul className="terms_sublist">
              <li>
                <span>■</span>
                <p>
                  Complimentary high speed Wi-Fi is available in all rooms and
                  common areas.
                </p>
              </li>
              <li>
                <span>■</span>
                <p>Basic toiletries are provided free of charge.</p>
              </li>
            </ul>
          </li>
          <li>
            <h3>General Disclaimer</h3>
            <ul className="terms_sublist">
              <li>
                <span>■</span>
                <p>
                  Whether booked directly or through third-party OTAs, all
                  guests are subject to the same terms and conditions.
                </p>
              </li>
              <li>
                <span>■</span>
                <p>
                  Hotel Pride reserves the right to amend these policies at any
                  time without prior notice.
                </p>
              </li>
            </ul>
          </li>
        </ul>
        <h3 className="terms_thankyou">
          Thank you for choosing Hotel Pride. We look forward to hosting you!
        </h3>
      </Box>
    </Modal>
  );
};

export default TermsAndConditions;
