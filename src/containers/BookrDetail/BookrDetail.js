import React, { Component } from "react";
import "./BookrDetail.scss";
import Star from "../../components/BookPoster/Stars";
import Footer from "../../components/Footer/Footer";
import Reviews from "../../components/Reviews/Reviews";
import {
  getOneBooksAction,
  addReviewAction
} from "../../store/actions/Actions";
import { connect } from "react-redux";
class BookrDetail extends Component {
  state = {
    rateValue: 0,
    rated: false,
    hideNav: null
  };

  handleRating = event => {
    const rateValue = Number(event.target.id);
    this.setState({ rateValue, rated: true });
    localStorage.setItem("rated", rateValue);
  };
  componentDidMount() {
    this.props.getOneBooksAction(this.props.match.params.id);
    window.addEventListener("resize", this.resize);
    this.resize();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }
  resize = () => {
    if (window.innerWidth <= 500) {
      this.setState({ hideNav: window.innerWidth });
      console.log(window.innerWidth);
    } else {
      this.setState({ hideNav: null });
    }
  };
  addReviewHandler = e => {
    e.preventDefault();
    const data = {
      rating: this.state.rateValue || 1,
      review: e.currentTarget[0].value
    };
    this.props.addReviewAction(data, this.props.match.params.id);
    e.currentTarget.reset();
    this.setState({ rated: false, rateValue: 0 });
  };
  render() {
    const { rateValue } = this.state;
    const rating = Array(5)
      .fill(undefined)
      .map((star, index) => {
        const value = index + 1;
        const filled = value <= rateValue ? "filled" : "";
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
            <img src={this.props.book.cover} alt="" />
          </div>
          <div>
            <h1>{this.props.book.title}</h1>
            <h4>
              by{" "}
              {this.props.book.authors ? this.props.book.authors[0].name : ""}
            </h4>
            <p>
              {String(this.props.book.description).substring(0, this.state.resize ? 625 : 150) + "..."}
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
            <form action="" onSubmit={this.addReviewHandler}>
              <h2>Add a Review</h2>
              <p>Give Overall Rating</p>
              <div className="ratings">
                <span>Required</span>
                {rating}{" "}
              </div>
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
            <Reviews data={this.props.review || []} />
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    book: state.book,
    review: state.review
  };
};
export default connect(
  mapStateToProps,
  { getOneBooksAction, addReviewAction }
)(BookrDetail);
