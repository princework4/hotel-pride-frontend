import React, { useEffect, useState } from "react";
import { Box, Modal } from "@mui/material";
import AuthForms from "../AuthForms";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [showHam, setShowHam] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    width: "400px",
    height: "auto",
    padding: "0",
    border: "none",
    borderRadius: "20px",
    position: "absolute",
    top: "50%",
    left: "50%",
    bgcolor: "background.paper",
    boxShadow: 24,
    overflow: "auto",
    transform: "translate(-50%, -50%)",
    // maxWidth: 400,
    // minWidth: 300,
    // p: 4,
  };

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [size.width]);

  useEffect(() => {
    if (size.width > 768) {
      setShowHam(false);
      setMenuOpen(false);
    } else {
      setShowHam(true);
    }
  }, [size.width]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="nav-container">
      <div className="video-background">
        <video
          id="background-video"
          autoPlay
          playsinline
          muted
          loop
          preload="auto"
        >
          <source
            src="https://assets-cug1-825v2.tajhotels.com/video/TAJ%20WEBSITE%20FILM_1920%20X%20930_148mb.mp4?Impolicy=Medium_High"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="navbar wrapper">
        <h1 className="logo">MyLogo</h1>

        {showHam && (
          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
        <nav className={`nav-items ${menuOpen ? "show" : ""}`}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#contact">Offers</a>
            </li>
            <li>
              <button className="login-btn" onClick={handleOpen}>
                Login / Register
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="login_signup"
      >
        <Box sx={style}>
          {/* <Box className="close_icon_wrapper">
              <CloseIconCircle handleClose={handleClose} />
            </Box> */}
          <AuthForms handleClose={handleClose} />
        </Box>
      </Modal>
    </header>
  );
};

export default Navbar;
