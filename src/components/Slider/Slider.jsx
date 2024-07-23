import ImageGallery from "react-image-gallery";
import slide1 from "../../images2/slide1.jpg";
import slide2 from "../../images2/slide2.jpg";
import slide3 from "../../images2/slide3.jpg";
import slide4 from "../../images2/slide4.jpg";
import slide5 from "../../images2/slide5.png";
import banner1 from "../../images2/banner-1.jpg";
import banner2 from "../../images2/banner-2.jpg";
import banner3 from "../../images2/banner-3.jpg";
import "./Slider.css";
const images = [
  {
    original: slide1,
    thumbnail: slide1,
  },
  {
    original: slide2,
    thumbnail: slide2,
  },
  {
    original: slide3,
    thumbnail: slide3,
  },
  {
    original: slide4,
    thumbnail: slide4,
  },
  {
    original: slide5,
    thumbnail: slide5,
  },
];

const Slider = () => {
  return (
    <div className="slider-parent">
      <div className="Slider">
        <ImageGallery
          items={images}
          autoPlay={true}
          thumbnailPosition={"left"}
          lazyLoad={true}
          showFullscreenButton={false}
          showPlayButton={false}
        />
      </div>
      <div className="slider-images">
        <img src={banner1} alt="" />
        <img src={banner2} alt="" />
        <img src={banner3} alt="" />
      </div>
    </div>
  );
};
export default Slider;
