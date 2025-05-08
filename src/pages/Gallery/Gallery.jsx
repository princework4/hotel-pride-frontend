import React, { useEffect, useState } from "react";
import { allTabDetail, filterTabButtons } from "../../Constants";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CloseIconCircle from "../../components/CloseIconCircle";
import { Box, Modal } from "@mui/material";
import { fetchAllRoomTypes } from "../../services/Rooms";

import nonAcImage1 from "../../assets/Non_Ac/non_ac_img_1.jpeg";
import nonAcImage2 from "../../assets//Non_Ac/non_ac_img_2_1.jpg";
import nonAcImage3 from "../../assets//Non_Ac/non_ac_img_3_1.jpg";
import deluxeImage1 from "../../assets//Deluxe/deluxe_room_1.jpeg";
import deluxeImage2 from "../../assets//Deluxe/deluxe_room_2.jpeg";
import deluxeImage3 from "../../assets//Deluxe/deluxe_room_3_1.jpg";
import deluxeImage4 from "../../assets//Deluxe/deluxe_room_4_1.jpg";
import executiveImage1 from "../../assets//Executive/executive_room_1.jpeg";
import executiveImage2 from "../../assets//Executive/executive_room_2.jpeg";
import executiveImage3 from "../../assets//Executive/executive_room_3_1.jpg";
import executiveImage4 from "../../assets//Executive/executive_room_4_1.jpg";

import { updateShouldShowCallback } from "../../features/nonFunctional/nonFunctionalSlice";
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

const allAssetsImages = [
  {
    original: nonAcImage1,
    thumbnail: nonAcImage1,
    caption: "Non AC Image 1",
    category: "cat1",
  },
  {
    original: nonAcImage2,
    thumbnail: nonAcImage2,
    caption: "Non AC Image 2",
    category: "cat1",
  },
  {
    original: nonAcImage3,
    thumbnail: nonAcImage3,
    caption: "Non AC Image 3",
    category: "cat1",
  },
  {
    original: deluxeImage1,
    thumbnail: deluxeImage1,
    caption: "Deluxe Image 1",
    category: "cat2",
  },
  {
    original: deluxeImage2,
    thumbnail: deluxeImage2,
    caption: "Deluxe Image 2",
    category: "cat2",
  },
  {
    original: deluxeImage3,
    thumbnail: deluxeImage3,
    caption: "Deluxe Image 3",
    category: "cat2",
  },
  {
    original: deluxeImage4,
    thumbnail: deluxeImage4,
    caption: "Deluxe Image 4",
    category: "cat2",
  },
  {
    original: executiveImage1,
    thumbnail: executiveImage1,
    caption: "Executive Image 1",
    category: "cat3",
  },
  {
    original: executiveImage2,
    thumbnail: executiveImage2,
    caption: "Executive Image 2",
    category: "cat3",
  },
  {
    original: executiveImage3,
    thumbnail: executiveImage3,
    caption: "Executive Image 3",
    category: "cat3",
  },
  {
    original: executiveImage4,
    thumbnail: executiveImage4,
    caption: "Executive Image 4",
    category: "cat3",
  },
];

const GallerySlider = ({ images, active }) => {
  return (
    <ImageGallery items={images} startIndex={active} slideInterval={1000} />
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
  const dispatch = useDispatch();
  const [galleryImages, setGalleryImages] = useState(allAssetsImages);
  const [trackActiveButton, setTrackActiveButton] = useState("cat-1");
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
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(updateShouldShowCallback(true));

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
  }, []);

  const handleClick = (selectedCategory) => {
    setTrackActiveButton(selectedCategory);
    if (selectedCategory == "cat-1") {
      setGalleryImages(allAssetsImages);
    } else {
      const allImages = JSON.parse(JSON.stringify(allAssetsImages));
      const temp = allImages.filter(
        (items) => items.category === selectedCategory
      );
      setGalleryImages(temp);
    }
  };

  return (
    <>
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
      <section className="gallery_page">
        <div className="wrapper">
          <div className="heading_container">
            {/* <hr /> */}
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
            {roomRedux.allRoomTypesName?.map((buttonText, i) => (
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
            {galleryImages?.map((item, i) => (
              <li key={i} onClick={() => handleImageClick(i)}>
                <img src={item.original} alt={i} />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Gallery;
