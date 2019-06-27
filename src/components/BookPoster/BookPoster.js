import React from "react";
import "./BookPoster.scss";
import Star from './Stars'
const bookPoster = props => {
  return (
    <div className='Section_container'>
      <h2>{props.title}</h2>
      <div className='Section_Trending'>
        {props.data.map(elem => (
          <div key={elem.id}>
            <div className='book_img'>
              <img src={elem.thumbnail} alt='' />
            </div>
            <div className='book_details'>
              <p>{elem.title}</p>
              <p>{elem.isbn}</p>
              <Star star={elem.averageRating}></Star> <span>{elem.totalReviews}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default bookPoster;
