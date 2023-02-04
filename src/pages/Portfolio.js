import axios from "axios";
import { React, useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useInView } from "react-intersection-observer";
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
  const [isVisiblePortfolio, setIsVisiblePortfolio] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const [data, setData] = useState([]);
  AOS.init();
  useEffect(() => {
    axios.get("/portfolio.json").then((res) => setData(res.data));
  }, []);
  useEffect(() => {
    setIsVisiblePortfolio(inView);
  }, [inView]);

  const [portfolioIsActive, setPortfolioIsActive] = useState(false);
  const [selectedData, setSelectedData] = useState(false);
  const [horizontalScroll, setHorizontalScroll] = useState(false);
  horizontalScroll
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  return (
    <div>
      <div
        className={`selected-data-container ${
          selectedData && portfolioIsActive ? "active" : "closed"
        }`}
      >
        <div className="container-portfolio-infos">
          <div className="container-titre-infos">
            <FaTimes
              className="closed-portfolio"
              onClick={() => {
                setPortfolioIsActive(!portfolioIsActive);
              }}
            />

            <h5 className="title-portfolio">{selectedData.name}</h5>
          </div>
          <img src={selectedData.img} className="image-infos-portfolio" />
          <div className="container-portfolio-description">
            {selectedData &&
              selectedData.tags.map((tag, i) => (
                <span className="tags" key={i}>{`#${tag}`}</span>
              ))}
            <div className="description-portfolio">
              <h5>Description:</h5>
            </div>
            <div className="description-box">
              <p>{selectedData.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-container">
        <div id="target-portfolio"></div>
        <h3>Portfolio</h3>
        <div className="portfolio">
          <div ref={ref}>
            {isVisiblePortfolio && (
              <div
                data-aos="zoom-in"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                data-aos-duration="700"
              >
                <Slider {...settings}>
                  {data.map((x) => (
                    <div key={x.id} className="portfolio-box">
                      <div className="overlay-image">
                        <div className="block">
                          <img src={x.img} alt="" />
                        </div>
                        <div
                          className="hover"
                          onClick={() => {
                            setPortfolioIsActive(!portfolioIsActive);
                            setHorizontalScroll(!horizontalScroll);
                            setSelectedData(x);
                          }}
                        >
                          <div className="tags-container">
                            {x.tags.map((tag, i) => (
                              <span className="tags" key={i}>{`#${tag}`}</span>
                            ))}
                          </div>

                          <h5>{x.name}</h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
