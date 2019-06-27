import React, { Component } from "react";
import "./BookrDetail.scss";
import Star from "../../components/BookPoster/Stars";
import Footer from "../../components/Footer/Footer";
import Reviews from '../../components/Reviews/Reviews' 
export default class BookrDetail extends Component {
  state = {
    rateValue: 0,
    rated: false
  };
  handleRating = event => {
    const rateValue = Number(event.target.id);
    this.setState({ rateValue, rated: true });
    localStorage.setItem("rated", rateValue);
  };
  render() {
    const { rateValue } = this.state;
    // const rateValue = 1;
    const rating = Array(5)
      .fill(undefined)
      .map((star, index) => {
        const value = index + 1;
        const filled = value <= rateValue ? "filled" : "";
        console.log(value, rateValue);
        return (
          <i
            className={`far fa-star star ${filled}`}
            onClick={this.handleRating}
            id={value}
            key={value}
          />
        );
      })
      .reverse();
    return (
      <div className="BookrDetail">
        <div className="BookrDetail_Banner">
          <img src="https://i.stack.imgur.com/miPgq.jpg" alt="" />{" "}
        </div>
        <div className="BookrDetail_Section_1">
          <div>
            <img
              src="https://media-assets.bookbub.com/wp-content/uploads/2016/01/81oKn3X59mL.jpg"
              alt=""
            />
          </div>
          <div>
            <h2>False Step </h2>
            <p>by Victoria Helen</p>
            <br />
            <br />
            <br />
            <br />
            <p>
              For days, all of Denver, Colorado, has worried over the fate of a
              missing child, little Tanner Holcomb. Then, a miracle: handsome,
              athletic Johnny Bradley finds him, frightened but unharmed, on a
              hiking trail miles from his wealthy family’s mountain home. In a
              heartbeat, his rescuer goes from financially strapped fitness
              trainer to celebrated hero. The heat of the spotlight may prove
              too much for Johnny’s picture-perfect family, however. His wife,
              Veronica, despises the pressure of the sudden fame, afraid that
              secrets and bitter resentments of her marriage may come to light.
              And she’s willing to do anything to keep them hidden. But when a
              shocking revelation exposes an even darker side to Tanner’s
              disappearance, Veronica realizes that nothing in her life can be
              trusted. And everything should be feared.
            </p>
          </div>
          <div>
            <p>
              Editor Published: <small> Lorem ipsum dolor sit amet.</small>
            </p>
            <p>
              ISBN: <small> Lorem ipsum dolor sit amet.</small>
            </p>
            <p>
              Editorial Language: <small> Lorem ipsum dolor sit amet.</small>
            </p>
          </div>
        </div>
        <section className="reviews">
          <h1>Reviews</h1>
          <div className="total_stars">
            <hr />
            <Star star="1.5" />
            <span>234 Reviews </span>
            <hr />
          </div>
          <div className="review_Form">
            <form action="">
              <h2>Add a Review</h2>
              <p>Give Overall Rating</p>
              <div className="ratings">{rating}</div>
              <p>Write a Review</p>
              <textarea
                name=""
                id=""
                placeholder="Write your detailed review here."
              />{" "}
              <br />
              <button>Submit</button>
            </form>
          </div>
          <hr />
          <div className="community_reviews_container">
            <h2>COMMUNITY REVIEWS</h2>
            <Reviews/>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

// {/* <div className="ratings">
//           <hr /> <span> Reviews 234</span>
//           {rating}{" "}
//         </div> */}
