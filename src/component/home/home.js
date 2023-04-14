import React from "react";
import video from "../../assets/video.mp4";
import team from "../../assets/team.jpeg";

import "./home.css";

const Home = () => {
  return (
    <div className="index">
      <div className="heading">
        <video src={video} autoPlay loop muted playsInline />

        <div className="content">
          <h1>The Parthenon</h1>
          <h5>Web3 Consultancy and Analytics</h5>
          <p>Consulting with purpose</p>
        </div>
      </div>
      <section className="work-with-us">
        <h2>Why Work with us?</h2>
        <div className="work-with-us__cards">
          <div className="work-with-us__card">
            <div className="work-with-us__icon">
              <i class="fas fa-cogs"></i>
            </div>
            <p>Proficiency & Excellence</p>
          </div>
          <div className="work-with-us__card">
            <div className="work-with-us__icon">
              <i class="fas fa-pencil-ruler"></i>
            </div>
            <p>Tailored & Curated Solutions</p>
          </div>
          <div className="work-with-us__card">
            <div className="work-with-us__icon">
              <i class="fas fa-user-tie"></i>
            </div>
            <p>Professionalism in Execution</p>
          </div>
        </div>
      </section>
      <section className="our-story">
        <h2>Our Story</h2>
        <h3>We aim to empower, and believe in what we build:</h3>
        <div className="our-story__team">
          <img src={team} alt="team-image" />
          <div className="our-story__paragraph">
            <p>
              The team comprises of Blockchain Consultants formed of their
              experiences as Full-Stack Developers, Data Analysts and Financial
              Analysts. We bring our full array of knowledge and deep expertise
              to every project and help our clients leverage the latest market
              tools and functionalities.
            </p>
            <p>
              Our full-immersion into the blockchain began with mining, and then
              with programming in Solidity, creating smart contracts that are
              mappable and upgradable. Since then, we have delivered the best-in
              class solutions for our clients, anchored in provided unparalleled
              user experience.{" "}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
