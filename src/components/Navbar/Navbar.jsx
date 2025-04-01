import React, { useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { reducerMethods } from "../../context/reducerMethods";
import { Box, Modal } from "@mui/material";
import AuthForms from "../AuthForms";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import { toast } from "react-toastify";

const Navbar = () => {
  const location = useLocation();
  const { state, dispatch } = React.useContext(AppContext);
  // const { showHam, menuOpen, size, open, colorChange, revertHeader } = state;
  const [showHam, setShowHam] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  const [open, setOpen] = React.useState(false);
  const [colorChange, setColorchange] = React.useState(false);
  const [revertHeader, setRevertHeader] = React.useState(false);

  const handleOpen = () => setOpen(true);
  // const handleOpen = () =>
  // dispatch({ type: reducerMethods.setOpen, payload: true });
  const handleClose = () => setOpen(false);
  // const handleClose = () =>
  //   dispatch({ type: reducerMethods.setOpen, payload: false });

  function handleLogout() {
    dispatch({
      type: reducerMethods.setIsUserLoggedIn,
      payload: false,
    });
    toast.success("Logged Out Successfully");
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
    // maxWidth: 400,
    // minWidth: 300,
    // p: 4,
  };

  useEffect(() => {
    const handleResize = () => {
      // dispatch({
      //   type: reducerMethods.setSize,
      //   payload: { width: window.innerWidth, height: window.innerHeight },
      // });
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
      // dispatch({ type: reducerMethods.showHam, payload: false });
      // dispatch({ type: reducerMethods.setMenuOpen, payload: false });
      setShowHam(false);
      setMenuOpen(false);
    } else {
      // dispatch({ type: reducerMethods.setShowHam, payload: true });
      setShowHam(true);
    }
  }, [size.width]);

  const toggleMenu = () => {
    // dispatch({ type: reducerMethods.setMenuOpen, payload: !menuOpen });
    setMenuOpen(!menuOpen);
  };

  const changeNavbarColor = () => {
    if (window.location.pathname === "/") {
      if (window.scrollY >= 80) {
        // dispatch({ type: reducerMethods.setColorchange, payload: true });
        setColorchange(true);
      } else {
        // dispatch({ type: reducerMethods.setColorchange, payload: false });
        setColorchange(false);
      }
    }
  };

  React.useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/about") {
      window.addEventListener("scroll", changeNavbarColor);
      // dispatch({ type: reducerMethods.setRevertHeader, payload: false });
      setRevertHeader(false);
    } else {
      // dispatch({ type: reducerMethods.setRevertHeader, payload: true });
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
    >
      <div className="wrapper">
        <div className="navbar">
          <h1 className="logo">
            <Link to="/">MyLogo</Link>
          </h1>

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
                  Location
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/rooms" activeclassname="active">
                  Rooms
                </NavLink>
              </li> */}
              <li>
                {state.isUserLoggedIn ? (
                  <button className="login-btn" onClick={handleLogout}>
                    Logout
                  </button>
                ) : (
                  <button className="login-btn" onClick={handleOpen}>
                    Login / Register
                  </button>
                )}
                {/* <button className="login-btn" onClick={handleOpen}>
                  Login / Register
                </button> */}
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
      </div>
    </header>
  );
};

export default Navbar;
