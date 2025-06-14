import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import { Box, Modal } from "@mui/material";
import CloseIconCircle from "../CloseIconCircle";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const baseUrl = import.meta.env.VITE_BASE_URL;

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

const GallerySlider = ({ images, active }) => {
  const allImages = [];

  for (let i = 0; i < images?.length; i++) {
    allImages.push({
      original: `${baseUrl}/${images[i].assetUrl}`,
      thumbnail: `${baseUrl}/${images[i].assetUrl}`,
      caption: `Room Image ${i}`,
    });
  }

  return (
    <ImageGallery
      items={allImages}
      startIndex={active}
      slideInterval={2000}
      showFullscreenButton={false}
      showPlayButton={false}
    />
  );
};

const ImageSlider = ({
  slidesToShow,
  slidesToScroll,
  images,
  isCarousel,
  autoplay = false,
  isBanner = false,
  showDots = false,
  sliderEnabled = false,
}) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const settings = {
    infinite: true,
    dots: sliderEnabled ? showDots : !showDots,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    lazyLoad: true,
    autoplay: autoplay,
    autoplaySpeed: 2000,
    arrows: sliderEnabled ? true : false,
    pauseOnHover: false,
  };

  const handleImageClick = (index) => {
    setActive(index);
    handleOpen();
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="gallery-modal"
        aria-describedby="gallery-modal"
      >
        <Box sx={style}>
          <GallerySlider images={images} active={active} />
          <CloseIconCircle handleClose={handleClose} />
        </Box>
      </Modal>
      <div className="imgSlider">
        <Slider {...settings}>
          {images.map((item, i) => (
            <div
              className="slider_div"
              key={item.id}
              onClick={() => handleImageClick(i)}
            >
              <img
                src={`${baseUrl}/${item.assetUrl}`}
                alt={`room_type_${item.id}`}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ImageSlider;
