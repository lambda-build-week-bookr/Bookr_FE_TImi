import React from "react";
import Star from "../../components/BookPoster/Stars";
import './Reviews.scss'
const Reviews = (props) => {
  return (
    <div className="list_of_community_reviews">
      <div>
        <img
          src="https://images.gr-assets.com/users/1310159877p2/4800103.jpg"
          alt=""
        />
      </div>
      <div>
        <p>Melankalia rated it</p> <Star star="1.5" />
        <p>
          I cannot understand what everyone sees in this book. I was expecting
          'Thelma & Louise' plus zombies, and that's...sorta...where it started,
          but it just got worse and worse as it went along. To begin with, the
          (somewhat) interesting action scenes did not in any way make up for
          having to hear
        </p>
        <div />
      </div>
    </div>
  );
};

export default Reviews;
