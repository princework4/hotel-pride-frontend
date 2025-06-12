import React, { useState } from "react";
import "./Banner.css";

const Banner = () => {
  const [width, setWidth] = useState(
    window.innerWidth > 0 ? window.innerWidth : screen.width
  );
  return (
    <div className="video-background">
      <video
        id="background-video"
        autoPlay
        playsInline
        muted
        loop
        preload="auto"
        src={
          width > 768
            ? "https://hotel-pride-video.s3.ap-south-1.amazonaws.com/Hotel+Pride+Desktop+Video.mp4"
            : "https://hotel-pride-video.s3.ap-south-1.amazonaws.com/Hotel+Pride+Mobile+Video.mp4"
        }
        typeof="video/mp4"
      />
    </div>
  );
};

export default Banner;
