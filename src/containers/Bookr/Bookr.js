import React, { Component } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Bookr.scss";
import BookPoster from "../../components/BookPoster/BookPoster";
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Banner/Banner'
import { connect } from "react-redux";
import { getAllBooksAction } from "../../store/actions/Actions";
class Bookr extends Component {

  componentWillMount() {
    this.props.getAllBooksAction()
  }

  render() {
    return (
      <div>
        <SearchBar />
        <Banner/>
        <BookPoster
          title={"My Favorite List"}
          data={this.props.books.slice(0, 5)}
        />
        <BookPoster
          title={" Suggested Title"}
          data={this.props.books.reverse().slice(0, 10)}
        />
        <Footer/>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    books: state.books
  };
};
export default connect(
  mapStateToProps,
  { getAllBooksAction }
)(Bookr);
