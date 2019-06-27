import React, { Component } from "react";
import "./BookrDetail.scss";
import Star from "../../components/BookPoster/Stars";
import Footer from "../../components/Footer/Footer";
import Reviews from '../../components/Reviews/Reviews' 
import {getOneBooksAction} from '../../store/actions/Actions'
import { connect } from "react-redux";
class BookrDetail extends Component {
  state = {
    rateValue: 0,
    rated: false
  };
  handleRating = event => {
    const rateValue = Number(event.target.id);
    this.setState({ rateValue, rated: true });
    localStorage.setItem("rated", rateValue);
  };
  componentDidMount(){
    console.log(this.props.match.params.id)
    this.props.getOneBooksAction(this.props.match.params.id)
  }
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
              src={this.props.book.cover}
              alt=""
            />
          </div>
          <div>
            <h1>False Step </h1>
            <h4>by {this.props.book.authors}</h4>
            <p>
              {String(this.props.book.description).substring(0,655)+'...'}
            </p>
          </div>
          <div>
            <p>
              Editor Published: <small>{this.props.book.publisher}</small> 
            </p>
            <p>
              ISBN: <small>{this.props.book.isbn}</small>
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
            <Star star={this.props.book.averageRating} />
            <span>{this.props.book.totalReviews} Reviews </span>
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
            <Reviews data={this.props.book.reviews || []}/>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    book: state.book
  };
};
export default connect(
  mapStateToProps,
  { getOneBooksAction }
)(BookrDetail);


// authors: ["Reuben Hersh"]
// averageRating: null
// cover: "https://books.google.com/books/content?id=R-qgdx2A5b0C&printsec=frontcover&img=1&zoom=3"
// description: "Reflecting an insider's view of mathematical life, the author argues that mathematics must be historically evolved, and intelligible only in a social context."
// id: 8
// isbn: "9780195130874"
// publisher: "Oxford University Press, USA"
// reviews: []
// thumbnail: "https://books.google.com/books/content?id=R-qgdx2A5b0C&printsec=frontcover&img=1&zoom=2"
// title: "What is Mathematics, Really?"
// totalReviews: 0
