import React from "react";
import "./Home.css";
import Typical from "react-typical";
import FadeIn from "react-fade-in";
import Photo from "./pics/img1.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <FadeIn>
          <img className="profile__photo" src={Photo} alt=""/>
        </FadeIn> 
          <FadeIn>
          <div>
        <h1>
          Hi, I'm <strong>Llewellyn Adonteng Paintsil</strong>
      </h1>
      </div>
      <div>
        <p>
        I'm a{" "}
        <Typical className="typing"
          loop={Infinity}
          wrapper="b"
          steps={[
            "Developer 💻", 1000, 
          "Youtuber 📼", 1000,
           "Student 📓", 1000, 
           "Designer 💅", 1000,
           "Gamer 🎮", 1000,
           "Mobile Guru 📱", 1000,]}
        />
      </p>
      </div>
      </FadeIn>
    </div>
    </div>
  );
          }
export default Home;
