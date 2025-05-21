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
            ? "https://priyhotel-storage.s3.us-east-1.amazonaws.com/Hotel+Pride.mp4"
            : "https://priyhotel-storage.s3.us-east-1.amazonaws.com/hotel+pride+mobile+video.mp4"
        }
        typeof="video/mp4"
      />
    </div>
  );
};

export default Banner;
