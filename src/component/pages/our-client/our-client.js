import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "../../card/data";
import Cards from "../../card/card";
import "./our-client.css";

const Our_client = () => {
  return (
    <div className="our-client">
      <h1>Our Clients</h1>
      <p className="paragraph">
        The mavericks - shaping the Web3 & NFT space today.
      </p>
      <div className="column">
        {Data.map((props, index) => {
          return <Cards key={index} props={props} />;
        })}
      </div>
    </div>
  );
};

export default Our_client;
