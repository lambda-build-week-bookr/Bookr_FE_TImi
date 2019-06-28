import React from "react";
import Star from "../../components/BookPoster/Stars";
import "./Reviews.scss";
const Reviews = props => {
  let output;
  if (props.data.length < 1) {
    output = <p>Be the first to give a review</p>;
  } else {
    output = props.data.map(elem => (
      <div className="list_of_community_reviews" key={elem.id}>
        <div>
          <img
            src="https://images.gr-assets.com/users/1310159877p2/4800103.jpg"
            alt=""
          />
        </div>
        <div>
          <p>{elem.username}</p> <Star star={elem.rating} />
          <p>{elem.review || elem.content }</p>
          <i className="fas fa-edit" ></i>
          <i className="fas fa-trash" onClick={()=>props.delete(elem.id, elem.username)}></i>
          <div />
        </div>
      </div>
    ));
  }
  return <>{output}</>;
};

export default Reviews;
