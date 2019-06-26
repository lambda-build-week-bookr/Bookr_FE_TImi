import React from "react";
import "./BookPoster.scss";

const stars = props => {
  const starPercentage = (props.star / 5) * 100;
  const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
  return (
    <div className="stars-outer">
      <div style={{ width: starPercentageRounded }} className="stars-inner" />
    </div>
  );
};

export default stars;
