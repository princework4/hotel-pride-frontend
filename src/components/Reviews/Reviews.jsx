import React from "react";
import { Avatar, Rating } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Reviews.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
};

const Reviews = ({ guestsReviews }) => {
  // console.log(guestsReviews);
  return (
    <Slider {...settings} className="reviews">
      {guestsReviews.map((review, index) => (
        <div key={index} className="review-card">
          <div className="review-content">
            <Avatar
              alt={review.name}
              src={review.avatar}
              sx={{ width: 56, height: 56 }}
              className="review-avatar"
            />
            <h3 className="review-name">{review.name}</h3>
            <Rating value={review.rating} readOnly className="review-rating" />
            <p className="review-text">"{review.text}"</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Reviews;
