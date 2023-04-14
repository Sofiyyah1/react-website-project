import React from "react";
import Card from "react-bootstrap/Card";

const Cards = ({ props }) => {
  return (
    <>
      <div className="card">
        <div className="overflow">
          <Card.Img variant="top" src={props.img} />
        </div>
        <div className="card-body">
          <h5>{props.title}</h5>
          <p>{props.text}</p>
        </div>
      </div>
    </>
  );
};

export default Cards;
