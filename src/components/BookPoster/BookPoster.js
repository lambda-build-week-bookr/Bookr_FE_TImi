import React from "react";
import "./BookPoster.scss";
import Star from './Stars'
const bookPoster = props => {
  return (
    <div className='Section_container'>
      <h4>{props.title}</h4>
      <div className='Section_Trending'>
        {props.data.map(elem => (
          <div key={elem.id}>
            <div className='book_img'>
              <img src={elem.image} alt='' />
            </div>
            <div className='book_details'>
              <p>{elem.Author}</p>
              <p>{elem.Edition}</p>
              <Star star={elem.Stars}></Star> <span>{elem.No_Of_Reviews}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default bookPoster;
