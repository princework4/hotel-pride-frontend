import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import CommentIcon from "@mui/icons-material/Comment";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import mobileIcon from "../../assets/mobile.png";

import "./HotelDescription.css";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const HotelDescription = ({ scrollTo }) => {
  const [value, setValue] = React.useState(0);
  const [width, setWidth] = useState(
    window.innerWidth > 0 ? window.innerWidth : screen.width
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <section className="hotel_description">
      <div className="wrapper">
        {width > 768 ? (
          <ul>
            <li>
              <p
                class="stars"
                aria-label="Rating of this website is 4.5 out of 5."
              >
                4.5
              </p>
              <span onClick={scrollTo}>Read recent reviews</span>
            </li>
            <li>
              <a href="tel:+919876543210">
                <img src={mobileIcon} alt="mobile icon" />
                <span>+919876543210</span>
              </a>
            </li>
            <li>
              <h2>Hotel Pride</h2>
              <a
                href="https://maps.app.goo.gl/FzN5Mz9sAc6a33Q66"
                target="_blank"
              >
                Lbs Marg, Rs, Dreams Mall Rd, next to Icici Bank, Bhandup West,
                Mumbai
              </a>
            </li>
            <li>
              <p>Check-in 12:00 PM</p>
              <p>Check-out 11:00 AM</p>
            </li>
          </ul>
        ) : (
          <>
            <Box>
              <Box>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="icon label tabs example"
                  sx={{ borderBottom: "1px solid #f2f2f2" }}
                  className="test"
                >
                  <Tab
                    icon={<CommentIcon />}
                    label="Reviews"
                    {...a11yProps(0)}
                  />
                  <Tab icon={<PhoneIcon />} label="Call Us" {...a11yProps(1)} />
                  <Tab icon={<PlaceIcon />} label="Address" {...a11yProps(2)} />
                  <Tab
                    icon={<AccessTimeIcon />}
                    label="Arrival Time"
                    {...a11yProps(3)}
                  />
                </Tabs>
                <CustomTabPanel value={value} index={0}>
                  <p
                    class="stars"
                    aria-label="Rating of this website is 4.5 out of 5."
                  >
                    4.5
                  </p>
                  <p onClick={scrollTo}>Read recent reviews</p>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  <a href="tel:+919876543210">
                    <img src={mobileIcon} alt="mobile icon" />
                    <span>+919876543210</span>
                  </a>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                  <h2>Hotel Pride</h2>
                  <a
                    href="https://maps.app.goo.gl/FzN5Mz9sAc6a33Q66"
                    target="_blank"
                  >
                    Lbs Marg, Rs, Dreams Mall Rd, next to Icici Bank, Bhandup
                    West, Mumbai
                  </a>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                  <p>Check-in 12:00 PM</p>
                  <p>Check-out 11:00 AM</p>
                </CustomTabPanel>
              </Box>
            </Box>
          </>
        )}
      </div>
    </section>
  );
};

export default HotelDescription;
