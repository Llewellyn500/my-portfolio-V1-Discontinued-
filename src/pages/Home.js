import React from "react";
import "../css/Home.css";
import Typical from "react-typical";
import FadeIn from "react-fade-in";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import Photo from "../img/img1.jpg";
import Photo2 from "../img/img2.jpg";
import Photo3 from "../img/img3.jpg";

const properties = {
  duration: 3000,
  transitionDuration: 1000,
  infinite: true,
  indicators: false,
  arrows: false,
  autoplay: true,
  pauseOnHover: true,
};


const Home = () => {
  return (
    <div className="home">
      <div className="banner__image">
        <FadeIn>
          <Fade {...properties}>
            <div className="each-fade">
              <div>
                <img src={Photo} alt="img1" />
              </div>
            </div>
            <div className="each-fade">
              <div>
                <img src={Photo2} alt="img2" />
              </div>
            </div>
            <div className="each-fade">
              <div>
                <img src={Photo3} alt="img3" />
              </div>
            </div>
          </Fade>
        </FadeIn>
      </div>
      <div className="banner__text">
        <FadeIn>
          <div className="name">
            <h1>
              Hi, I'm <strong>Llewellyn Adonteng Paintsil</strong>
            </h1>
          </div>
          <div className="role">
            <p>
              I'm a{" "}
              <Typical
                className="typing"
                loop={Infinity}
                wrapper="b"
                steps={[
                  "Developer 💻",
                  1000,
                  "Youtuber 📼",
                  1000,
                  "Student 📓",
                  1000,
                  "Designer 💅",
                  1000,
                  "Gamer 🎮",
                  1000,
                  "Mobile Guru 📱",
                  1000,
                ]}
              />
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
export default Home;
