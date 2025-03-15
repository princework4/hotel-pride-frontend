import React from "react";
import { Box, Button, Modal } from "@mui/material";
import CloseIconCircle from "../CloseIconCircle";
import AuthForms from "../AuthForms";
import "./Navbar.css";

const Navbar = () => {
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

  return (
    <div className="navbar-container">
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
        <div className="logo">
          <h1>MyLogo</h1>
        </div>
        <div className="nav-items">
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
          </ul>
        </div>
        <div className="auth-buttons">
          <button className="login-btn" onClick={handleOpen}>
            Login
          </button>
          <button className="register-btn">Register</button>
          <button className="book-btn">BOOK YOUR STAY</button>
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

        {/* <div className="mobile-nav-toggle">
                    <button className='hamburger'>Menu</button>
                </div> */}
      </div>
    </div>
  );
};

export default Navbar;
