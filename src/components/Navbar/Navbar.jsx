import React, { useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { reducerMethods } from "../../context/reducerMethods";
import { Box, Modal } from "@mui/material";
import AuthForms from "../AuthForms";
import { Link, NavLink, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const { state, dispatch } = React.useContext(AppContext);
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
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (localStorage.getItem("userObj")) {
      const obj = JSON.parse(localStorage.getItem("userObj"));
      dispatch({
        type: reducerMethods.setLoggedInUser,
        payload: {
          id: obj.id,
          name: obj.name,
          email: obj.email,
          contactNumber: obj.contactNumber,
        },
      });
      dispatch({
        type: reducerMethods.setIsUserLoggedIn,
        payload: obj.isLoggedIn,
      });
    }
  }, []);

  function handleLogout() {
    dispatch({
      type: reducerMethods.setIsUserLoggedIn,
      payload: false,
    });
    toast.success("Logged Out Successfully");
    localStorage.removeItem("userObj");
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
    if (location.pathname === "/" || location.pathname === "/about") {
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
      </div>
    </header>
  );
};

export default Navbar;
