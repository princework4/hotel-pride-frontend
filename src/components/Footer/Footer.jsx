import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./Footer.css";

import Logo from "../../assets/Logo-Pride.jpg";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="wrapper">
          <div className="footer-container">
            <div className="footer_hotel_description">
              <h1 className="logo">
                <Link to="/">
                  <img src={Logo} alt="logo" />
                </Link>
              </h1>
              <hr />
              <div>
                <Typography
                  variant="h2"
                  sx={{
                    marginBottom: {
                      xs: 1,
                      sm: 1,
                      md: 2,
                    },
                    fontSize: {
                      xs: "25px",
                      sm: "25px",
                      md: "40px",
                    },
                    fontFamily: '"Helvetica Neue", sans-serif',
                  }}
                >
                  contact us
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    marginBottom: 1,
                    fontFamily: '"Helvetica Neue", sans-serif',
                  }}
                >
                  <a href="tel:+919876543210">+919876543210</a>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: '"Helvetica Neue", sans-serif',
                    lineHeight: {
                      xs: "1rem",
                      sm: "1rem",
                      md: "1.5rem",
                    },
                  }}
                >
                  <a
                    href="https://maps.app.goo.gl/FzN5Mz9sAc6a33Q66"
                    target="_blank"
                  >
                    Lbs Marg, Rs, Dreams Mall Rd, next to Icici Bank, Bhandup
                    West, Mumbai
                  </a>
                </Typography>
              </div>
            </div>

            <div>
              <Typography
                variant="h5"
                className="section-title"
                sx={{ fontFamily: '"Helvetica Neue", sans-serif' }}
              >
                Quick Links
              </Typography>
              <div>
                <Link to="/" className="footer-link">
                  Home
                </Link>
                <Link to="/gallery" className="footer-link">
                  Gallery
                </Link>
                <Link to="/location" className="footer-link">
                  Location & Hotel Policies
                </Link>
              </div>
            </div>

            <div>
              <Typography variant="h5" className="section-title">
                Follow Us
              </Typography>
              <Box className="social-links">
                <Link href="#" className="footer-link">
                  Facebook
                </Link>
                <Link href="#" className="footer-link">
                  Twitter
                </Link>
                <Link href="#" className="footer-link">
                  Instagram
                </Link>
              </Box>
            </div>
          </div>
          <hr />
          <Box className="corporate-footer">
            <p>© 2025 Hotel Pride. All Rights Reserved.</p>
            <p>Developed By HCS Technologies</p>
          </Box>
        </div>
      </footer>
    </>
  );
};

export default Footer;
