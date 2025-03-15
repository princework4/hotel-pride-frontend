import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="video-background">
      <video
        id="background-video"
        autoPlay
        playsInline
        muted
        loop
        preload="auto"
      >
        <source
          src="https://assets-cug1-825v2.tajhotels.com/video/TAJ%20WEBSITE%20FILM_1920%20X%20930_148mb.mp4?Impolicy=Medium_High"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Banner;
