import axios from "axios";
import { React, useState, useEffect } from "react";
import loupe from "../assets/magnifying-glass.png";
const Portfolio = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/portfolio.json").then((res) => setData(res.data));
  }, []);
  return (
    <div className="portfolio-container">
      <h2>Portfolio</h2>
      <div className="portfolio">
        {data.map((x) => (
          <div key={x.id} className="portfolio-box">
            <div className="overlay-image">
              <img src={x.img} alt={x.name} />

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
      </div>
    </div>
  );
};

export default Portfolio;
