import React from "react";
import './Footer.scss'

const footer = () => {
  return (
    <div className='Footer'>
      <div>
        <i className="fab fa-twitter    " />
        <i className="fab fa-instagram    " />
        <i className="fab fa-facebook    " />
      </div>
      <div>
        <p>2019 Bookr</p>
      </div>
      <div>
        <p>
          Terms and Service Privacy Policies
        </p>
      </div>
    </div>
  );
};

export default footer;
