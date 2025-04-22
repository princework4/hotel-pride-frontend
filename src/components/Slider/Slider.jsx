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
}) => {
  const settings = {
    infinite: true,
    dots: false,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    lazyLoad: true,
    autoplay: autoplay,
    autoplaySpeed: 2000,
    arrows: true,
    pauseOnHover: false,
  };

  return (
    <>
      <div
        className={
          isBanner
            ? "banner imgslider"
            : isCarousel
            ? "isCarousel imgslider"
            : "imgSlider"
        }
      >
        {!isBanner ? (
          <Slider {...settings}>
            {images.map((item) => (
              <div className="slider_div" key={item.id}>
                <img
                  src={`${process.env.BASE_URL}${item.assetUrl}`}
                  alt={`room_type_${item.id}`}
                />
              </div>
            ))}
          </Slider>
        ) : (
          <Slider {...settings}>
            {images.map((item, index) => (
              <div className="slider_div" key={index}>
                <img src={item} alt={`banner_img_${index}`} />
              </div>
            ))}
          </Slider>
        )}
      </div>
    </>
  );
};

export default ImageSlider;
