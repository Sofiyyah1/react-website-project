import React from "react";
import CarrerImg from "../../../assets/carrers.svg";
import "./carrers.css";

const Carrers = () => {
  return (
    <>
      <div className="carrers">
        <div className="carrer-heading">
          <h1>Careers</h1>
          <p>
            Interested in working with us? Send us an{" "}
            <a href="mailto:admin@thepartheon.info">email!</a>{" "}
          </p>
        </div>
        <div className="carrer-body">
          <div className="carrer-image">
            <img src={CarrerImg} alt="" />
          </div>
          <p>
            We are constantly looking for like-minded, talented, and interesting
            people who are passionate about working in the blockchain space. The
            Parthenon offers a multitude of services, ranging from smart
            contract creation and auditing to bot development, as well as
            providing insightful analytics to clients. In addition to
            challenging and meaningful work, you will have the opportunity to be
            part of a new future as we endeavor into the world of Web3 together.
          </p>
        </div>
      </div>
    </>
  );
};

export default Carrers;
