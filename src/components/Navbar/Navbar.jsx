import React, { useEffect, useState } from "react";
import { Box, Modal } from "@mui/material";
import AuthForms from "../AuthForms";
import Search from "../Search";
import { Link, NavLink, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import {
  updateIsUserLoggedIn,
  updateLoggedInUser,
} from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.css";

// import Logo from "../../assets/Logo-Pride.jpg";
import Logo from "../../assets/Logo-Pride-removebg.png";
import LoginImg from "../../assets/login.png";
import WhiteLoginImg from "../../assets/login_white.png";

const Navbar = () => {
  const authRedux = useSelector((state) => state.authReducer);
  const roomRedux = useSelector((state) => state.roomReducer);
  const dispatch = useDispatch();
  const location = useLocation();
  const [showHam, setShowHam] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  const [open, setOpen] = React.useState(false);
  const [colorChange, setColorchange] = React.useState(false);
  const [revertHeader, setRevertHeader] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const handleSearchOpen = () => {
    setSearchOpen(true);
  };
  const handleSearchClose = () => {
    setSearchOpen(false);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (sessionStorage.getItem("userObj")) {
      const obj = JSON.parse(sessionStorage.getItem("userObj"));
      dispatch(
        updateLoggedInUser({
          id: obj.id,
          name: obj.name,
          email: obj.email,
          contactNumber: obj.contactNumber,
        })
      );
      dispatch(updateIsUserLoggedIn(obj.isLoggedIn));
    }
  }, []);

  function handleLogout() {
    dispatch(updateLoggedInUser({}));
    dispatch(updateIsUserLoggedIn(false));
    toast.success("Logged Out Successfully");
    sessionStorage.removeItem("userObj");
  }

  const style = {
    width: {
      xs: "315px",
      sm: "400px",
    },
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
    if (size.width > 997) {
      setShowHam(false);
      setMenuOpen(false);
    } else {
      setShowHam(true);
    }
  }, [size.width]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const changeNavbarColor = () => {
    if (window.location.pathname === "/") {
      if (window.scrollY >= 80) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
    }
  };

  React.useEffect(() => {
    if (location.pathname === "/") {
      window.addEventListener("scroll", changeNavbarColor);
      setRevertHeader(false);
    } else {
      setRevertHeader(true);
    }

    return () => {
      window.removeEventListener("scroll", () => changeNavbarColor);
    };
  }, [location]);

  return (
    <header
      className={
        revertHeader || colorChange
          ? "updated_header nav-container"
          : "nav-container"
      }
      style={roomRedux.isOfferAvailable ? { top: "60px" } : { top: 0 }}
    >
      <div className="wrapper">
        <div className="navbar">
          <h1 className="logo">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </h1>

          {showHam && (
            <>
              <button
                className="mobile__book-button"
                onClick={handleSearchOpen}
              >
                Book Now
              </button>
              <div
                className={`hamburger ${menuOpen ? "open" : ""}`}
                onClick={toggleMenu}
                style={
                  roomRedux.isOfferAvailable && menuOpen
                    ? { position: "relative", top: "-70px" }
                    : !roomRedux.isOfferAvailable && menuOpen
                    ? { position: "relative", top: "-5px" }
                    : {}
                }
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </>
          )}
          <nav className={`nav-items ${menuOpen ? "show" : ""}`}>
            <ul>
              <li>
                <NavLink to="/" activeclassname="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" activeclassname="active">
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink to="/location" activeclassname="active">
                  Location & Hotel Policies
                </NavLink>
              </li>
              <li>
                {authRedux.isUserLoggedIn ? (
                  <button className="login-btn" onClick={handleLogout}>
                    Logout
                  </button>
                ) : (
                  <button
                    className="login-btn login-btn-image"
                    onClick={handleOpen}
                  >
                    {!showHam && (colorChange || location.pathname !== "/") ? (
                      <img src={LoginImg} alt="login icon" />
                    ) : (
                      <img src={WhiteLoginImg} alt="login icon" />
                    )}{" "}
                    Sign In
                  </button>
                )}
              </li>
              <li className="desktop__book-button">
                <button onClick={handleSearchOpen}>Book Now</button>
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
          disableScrollLock={true}
        >
          <Box sx={style}>
            <AuthForms handleClose={handleClose} />
          </Box>
        </Modal>
        <Modal
          open={searchOpen}
          onClose={handleSearchClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="roomSearch"
        >
          <Box sx={style}>
            <Search handleClose={handleSearchClose} />
          </Box>
        </Modal>
      </div>
    </header>
  );
};

export default Navbar;
