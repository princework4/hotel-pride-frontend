import React, { useState } from "react";
import Slider from "../Slider";
import "./Banner.css";

import MobileVideo from "../../assets/Hotel+Pride_Mobile.mp4";

// import BannerImg1 from "../../assets/Gallery/building_backside.jpeg";
// import BannerImg2 from "../../assets/Gallery/hotel_img_1.jpeg";
// import BannerImg3 from "../../assets/Gallery/hotel_img_2.jpeg";
// import BannerImg4 from "../../assets/Gallery/hotel_img_3.jpeg";
// import BannerImg5 from "../../assets/Gallery/hotel_img_4.jpeg";

const Banner = () => {
  const [width, setWidth] = useState(
    window.innerWidth > 0 ? window.innerWidth : screen.width
  );
  // const [allBannerImages, setAllBannerImages] = useState([
  //   BannerImg1,
  //   BannerImg2,
  //   BannerImg3,
  //   BannerImg4,
  //   BannerImg5,
  // ]);
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
            : MobileVideo
        }
        typeof="video/mp4"
      />
      {/* <source
          // src="https://assets-cug1-825v2.tajhotels.com/video/TAJ%20WEBSITE%20FILM_1920%20X%20930_148mb.mp4?Impolicy=Medium_High"
          src={
            width > 768
              ? "https://priyhotel-storage.s3.us-east-1.amazonaws.com/Hotel+Pride.mp4"
              : MobileVideo
          }
          type="video/mp4"
        /> */}
      {/* </video> */}
      {/* <Slider
        slidesToShow={1}
        slidesToScroll={1}
        images={allBannerImages}
        isCarousel={false}
        autoplay={true}
        isBanner={true}
      /> */}
    </div>
  );
};

export default Banner;
