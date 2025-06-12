import React, { useState } from "react";
import "./Banner.css";

const Banner = () => {
  const [width, setWidth] = useState(
    window.innerWidth > 0 ? window.innerWidth : screen.width
  );

  const desktopVideo = import.meta.env.VITE_DESKTOP_VIDEO;
  const mobileVideo = import.meta.env.VITE_MOBILE_VIDEO;

  return (
    <div className="video-background">
      <video
        id="background-video"
        autoPlay
        playsInline
        muted
        loop
        preload="auto"
        src={width > 768 ? desktopVideo : mobileVideo}
        typeof="video/mp4"
      />
    </div>
  );
};

export default Banner;
