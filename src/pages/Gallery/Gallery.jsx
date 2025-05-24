import React, { useEffect, useState } from "react";
import { allTabDetail, filterTabButtons } from "../../Constants";
import { allAssetsImages } from "./GalleryImports";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CloseIconCircle from "../../components/CloseIconCircle";
import { Box, Modal } from "@mui/material";
import { fetchAllRoomTypes } from "../../services/Rooms";

import {
  updateShouldShowCallback,
  updateShouldShowWhatsapp,
} from "../../features/nonFunctional/nonFunctionalSlice";
import {
  updateIsUserLoggedIn,
  updateLoggedInUser,
} from "../../features/auth/authSlice";
import { updateAllRoomTypesName } from "../../features/room/roomSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "./Gallery.css";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { LazyLoadImage } from "react-lazy-load-image-component";
import OfferHeader from "../../components/OfferHeader/OfferHeader";

import AOS from "aos";
import "aos/dist/aos.css";

const GallerySlider = ({ images, active }) => {
  return (
    <ImageGallery items={images} startIndex={active} slideInterval={2000} />
  );
};

const style = {
  width: {
    xs: "330px",
    sm: "500px",
    md: "550px",
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
  overflow: "hidden",
  transform: "translate(-50%, -50%)",
};

const Gallery = () => {
  const roomRedux = useSelector((state) => state.roomReducer);
  const nonFunctionalRedux = useSelector((state) => state.nonFunctionalReducer);
  const dispatch = useDispatch();
  const [galleryImages, setGalleryImages] = useState(allAssetsImages);
  const [allRoomTypeNames, setAllRoomTypeNames] = useState([
    allTabDetail,
    ...filterTabButtons,
  ]);
  const [trackActiveButton, setTrackActiveButton] = useState("cat0");
  const [active, setActive] = useState(0);
  const [open, setOpen] = React.useState(false);
  const [width, setWidth] = useState(
    window.innerWidth > 0 ? window.innerWidth : screen.width
  );
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleImageClick = (index) => {
    setActive(index);
    handleOpen();
  };

  async function getAllRoomTypes() {
    const data = await fetchAllRoomTypes();
    const roomTypeNames = [allTabDetail];
    if (data) {
      for (let i = 0; i < data.length; i++) {
        roomTypeNames.push([data[i].typeName, `cat${data[i].id}`]);
      }
    } else {
      roomTypeNames.push(...filterTabButtons);
      toast.error("Something went wrong while fetching room types.");
    }
    dispatch(updateAllRoomTypesName(roomTypeNames));
    setAllRoomTypeNames(roomTypeNames);
  }

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    window.scrollTo(0, 0);
    dispatch(updateShouldShowCallback(true));
    dispatch(updateShouldShowWhatsapp(true));

    if (roomRedux?.allRoomTypesName?.length === 0) {
      getAllRoomTypes();
    }

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

    const allImages = JSON.parse(JSON.stringify(allAssetsImages));
    const temp = allImages.filter(
      (items) => items.category === trackActiveButton
    );
    setGalleryImages(temp);
  }, []);

  const handleClick = (selectedCategory) => {
    setTrackActiveButton(selectedCategory);
    const allImages = JSON.parse(JSON.stringify(allAssetsImages));
    const temp = allImages.filter(
      (items) => items.category === selectedCategory
    );
    setGalleryImages(temp);
  };

  return (
    <>
      {roomRedux.isOfferAvailable &&
        nonFunctionalRedux.shouldShowOfferHeader && <OfferHeader />}
      <Header />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="gallery-modal"
        aria-describedby="gallery-modal"
      >
        <Box sx={style}>
          <GallerySlider images={galleryImages} active={active} />
          <CloseIconCircle handleClose={handleClose} />
        </Box>
      </Modal>
      <section
        className="gallery_page"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="wrapper">
          <div className="heading_container">
            <h2>gallery</h2>
          </div>
          {width <= 768 && (
            <p>
              Take a look around <strong>Hotel Pride - </strong> clean rooms,
              practical amenities, and everything you need for a comfortable and
              affordable stay in Mumbai. Browse Photos of our rooms, common
              areas, and the conveniences that make us a guest favourite.
            </p>
          )}
          <div className="filter_buttons">
            {allRoomTypeNames?.map((buttonText, i) => (
              <button
                className={`${
                  buttonText[1] == trackActiveButton
                    ? "is_active button"
                    : "button"
                }`}
                onClick={() => handleClick(buttonText[1])}
                key={i}
              >
                {buttonText[0]}
              </button>
            ))}
          </div>
          <ul className="grid">
            <ResponsiveMasonry
              style={{ width: "100%" }}
              columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}
            >
              <Masonry gutter="10px">
                {galleryImages?.map((item, i) => (
                  <li key={i} onClick={() => handleImageClick(i)}>
                    <LazyLoadImage
                      alt={item.caption}
                      src={item.original}
                      effect="opacity"
                      wrapperProps={{
                        style: { transitionDelay: "1s" },
                      }}
                    />
                  </li>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Gallery;
