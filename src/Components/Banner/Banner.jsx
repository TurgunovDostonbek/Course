// Styles
import "./Banner.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Rasmlar importi
import htmlImg from "../../assets/images/html.jpg";
import cssImg from "../../assets/images/css.jpg";
import jsImg from "../../assets/images/js.jpg";
import reactImg from "../../assets/images/react.jpg";

const Banner = () => {
  const settings = {
    dots: true, // pastda nuqtalar
    infinite: true, // cheksiz aylanish
    speed: 700, // o'tish tezligi
    slidesToShow: 1, // nechta slayd ko‘rsatilsin
    slidesToScroll: 1, // har safar nechta o‘tsin
    autoplay: true, // avtomatik aylanish
    autoplaySpeed: 2000, // 2.5 sekund
    arrows: true, // chap/o‘ng tugmalar
    pauseOnHover: true, // hover qilinganda to‘xtasin
    fade: true, // slaydlar sokin o‘tsin (slice effektga o‘xshash)
  };

  return (
    <div className="banner">
      <div className="banner__container container">
        <Slider {...settings}>
          <div className="banner__card">
            <img className="banner__card--img" src={htmlImg} alt="HTML" />
          </div>
          <div className="banner__card">
            <img className="banner__card--img" src={cssImg} alt="CSS" />
          </div>
          <div className="banner__card">
            <img className="banner__card--img" src={jsImg} alt="JavaScript" />
          </div>
          <div className="banner__card">
            <img className="banner__card--img" src={reactImg} alt="React" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
