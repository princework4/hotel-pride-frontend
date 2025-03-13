import React, { useState } from "react";
import { filterTabButtons, galleryImgs } from "../../Constants";
import "./Gallery.css";

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState(galleryImgs);
  const [trackActiveButton, setTrackActiveButton] = useState(0);

  const handleClick = (selectedCategory) => {
    setTrackActiveButton(Number(selectedCategory));
    selectedCategory = "cat" + selectedCategory;
    if (selectedCategory == "cat0") {
      setGalleryImages(galleryImgs);
    } else {
      const allImages = JSON.parse(JSON.stringify(galleryImgs));
      console.log(allImages);
      const temp = allImages.filter((items) => items[1] === selectedCategory);
      console.log(temp);
      setGalleryImages(temp);
    }
  };

  return (
    <section className="gallery">
      <div className="wrapper">
        <div className="heading_container">
          <hr />
          <h2 data-text="gallery">gallery</h2>
        </div>
        <div className="filter_buttons">
          {filterTabButtons?.map((buttonText, i) => (
            <button
              className={`${
                i == trackActiveButton ? "is_active button" : "button"
              }`}
              onClick={() => handleClick(i)}
              key={i}
            >
              {buttonText}
            </button>
          ))}
        </div>
        <ul className="grid">
          {galleryImages?.map((item, i) => (
            <li key={i}>
              {/* <div className="overlay"></div> */}
              <img src={item[0]} alt={i} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Gallery;
