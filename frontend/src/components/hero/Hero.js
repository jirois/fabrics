import React from "react";
import { data } from "../../data";
import "./hero.scss";

function Hero(props) {
  return (
    <div className="banner">
      <div className="slider">
        <div className="mask">
          <ul>
            <li key={data[0].id} id="first" className="firstanimation">
              <a href="#">
                <img src={data[0].image} alt={data[0].heading} />
              </a>
              <div className="tooltip">
                <h1>{data[0].heading}</h1>
                <p>{data[0].description}</p>
                <a href="#" className="btn btn-primary">
                  Explore
                </a>
              </div>
            </li>
            <li key={data[1].id} id="first" className="secondanimation">
              <a href="#">
                <img src={data[1].image} alt={data[1].heading} />
              </a>
              <div className="tooltip">
                <h1>{data[1].heading}</h1>
                <p>{data[1].description}</p>
                <a href="#" className="btn btn-primary">
                  Explore
                </a>
              </div>
            </li>
            <li key={data[2].id} id="first" className="thirdanimation">
              <a href="#">
                <img src={data[2].image} alt={data[2].heading} />
              </a>
              <div className="tooltip">
                <h1>{data[2].heading}</h1>
                <p>{data[2].description}</p>
                <a href="#" className="btn btn-primary">
                  Explore
                </a>
              </div>
            </li>
            <li key={data[3].id} id="four" className="fourthanimation">
              <a href="#">
                <img src={data[3].image} alt={data[3].heading} />
              </a>
              <div className="tooltip">
                <h1>{data[3].heading}</h1>
                <p>{data[3].description}</p>
                <a href="#" className="btn btn-primary">
                  Explore
                </a>
              </div>
            </li>
            <li key={data[4].id} id="five" className="fifthanimation">
              <a href="#">
                <img src={data[4].image} alt={data[4].heading} />
              </a>
              <div className="tooltip">
                <h1>{data[4].heading}</h1>
                <p>{data[4].description}</p>
                <a href="#" className="btn btn-primary">
                  Explore
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="progress-bar"></div>
      </div>
    </div>
  );
}

export default Hero;
