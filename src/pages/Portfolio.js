import axios from "axios";
import { React, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Portfolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1888,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/portfolio.json").then((res) => setData(res.data));
  }, []);
  return (
    <div className="portfolio-container">
      <h2>Portfolio</h2>
      <div className="portfolio">
        <Slider {...settings}>
          {data.map((x) => (
            <div key={x.id} className="portfolio-box">
              <div className="overlay-image">
                <div className="block">
                  <img src={x.img} alt="" />
                </div>
                <div className="hover">
                  <div className="tags-container">
                    {x.tags.map((tag, i) => (
                      <span className="tags" key={i}>{`#${tag}`}</span>
                    ))}
                  </div>

                  <h3>{x.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Portfolio;
