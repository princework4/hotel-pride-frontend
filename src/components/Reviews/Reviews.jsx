import React from "react";
import { Avatar, Box, Modal, Rating } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Reviews.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  adaptiveHeight: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 997,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const style = {
  width: {
    xs: "330px",
    sm: "500px",
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

const ReviewsContent = ({ review, modalView = true }) => {
  return (
    <div
      className="review-content"
      style={
        modalView
          ? { padding: "10px 20px", margin: "0 auto" }
          : { padding: "20px", margin: "20 auto" }
      }
    >
      <Avatar
        alt={review.name}
        src={review.avatar}
        sx={{ width: 56, height: 56 }}
        className="review-avatar"
      />
      <h3
        className="review-name"
        style={modalView ? { textAlign: "center" } : {}}
      >
        {review.name}
      </h3>
      <div style={modalView ? { textAlign: "center" } : {}}>
        <Rating value={review.rating} readOnly className="review-rating" />
      </div>
      <p className="review-text">
        {!modalView ? review.text.slice(0, 100) + "...." : review.text}
      </p>
    </div>
  );
};

const Reviews = ({ guestsReviews }) => {
  const [open, setOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleClick(index) {
    setActiveIndex(index);
    handleOpen();
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="gallery-modal"
        aria-describedby="gallery-modal"
      >
        <Box sx={style}>
          <ReviewsContent review={guestsReviews[activeIndex]} />
        </Box>
      </Modal>
      <Slider {...settings} className="reviews">
        {guestsReviews.map((review, index) => (
          <div
            key={index}
            className="review-card"
            onClick={() => handleClick(index)}
          >
            <ReviewsContent review={review} modalView={false} />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Reviews;
