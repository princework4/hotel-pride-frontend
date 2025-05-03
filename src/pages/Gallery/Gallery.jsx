import React, { useEffect, useState } from "react";
import { allTabDetail } from "../../Constants";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
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
import "./Gallery.css";

const allAssetsImages = [
  [nonAcImage1, "cat1"],
  [nonAcImage2, "cat1"],
  [nonAcImage3, "cat1"],
  [deluxeImage1, "cat2"],
  [deluxeImage2, "cat2"],
  [deluxeImage3, "cat2"],
  [deluxeImage4, "cat2"],
  [executiveImage1, "cat3"],
  [executiveImage2, "cat3"],
  [executiveImage3, "cat3"],
  [executiveImage4, "cat3"],
];

const Gallery = () => {
  const roomRedux = useSelector((state) => state.roomReducer);
  const dispatch = useDispatch();
  const [galleryImages, setGalleryImages] = useState(allAssetsImages);
  const [trackActiveButton, setTrackActiveButton] = useState("cat-1");

  async function getAllRoomTypes() {
    const data = await fetchAllRoomTypes();
    const roomTypeNames = [allTabDetail];
    for (let i = 0; i < data.length; i++) {
      roomTypeNames.push([data[i].typeName, `cat${data[i].id}`]);
    }

    dispatch(updateAllRoomTypesName(roomTypeNames));
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(updateShouldShowCallback(true));

    if (roomRedux.allRoomTypesName?.length === 0) {
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
      const temp = allImages.filter((items) => items[1] === selectedCategory);
      setGalleryImages(temp);
    }
  };

  return (
    <>
      <Header />
      <section className="gallery">
        <div className="wrapper">
          <div className="heading_container">
            <hr />
            <h2>gallery</h2>
          </div>
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
              <li key={i}>
                <img src={item[0]} alt={i} />
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
