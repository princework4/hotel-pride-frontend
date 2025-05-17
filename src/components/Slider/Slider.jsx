import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

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
  const settings = {
    infinite: true,
    dots: sliderEnabled ? showDots : !showDots,
    // fade: true,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    lazyLoad: true,
    autoplay: autoplay,
    autoplaySpeed: 2000,
    arrows: sliderEnabled ? true : false,
    pauseOnHover: false,
    // adaptiveHeight: true,
    // waitForAnimate: true,
  };

  return (
    <>
      <div className="imgSlider">
        <Slider {...settings}>
          {images.map((item) => (
            <div className="slider_div" key={item.id}>
              <img
                src={`${process.env.BASE_URL}${item.assetUrl}`}
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
