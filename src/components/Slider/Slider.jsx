import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

const ImageSlider = ({ slidesToShow, slidesToScroll, images, isCarousel }) => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    lazyLoad: true,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <>
      <div className={isCarousel ? "isCarousel imgslider" : "imgSlider"}>
        <Slider {...settings}>
          {images.map((item, index) => (
            <div className="slider_div" key={index}>
              <img src={item[0]} alt={item[1]} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ImageSlider;
