import React, { Component } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Bookr.scss";
import { Books as Data } from "../../dummyData";
import BookPoster from "../../components/BookPoster/BookPoster";
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Banner/Banner'
import { connect } from "react-redux";
import { getAllBooksAction } from "../../store/actions/Actions";
class Bookr extends Component {

  componentDidMount() {
    this.props.getAllBooksAction()
  }

  render() {
    return (
      <div>
        <SearchBar />
        <Banner/>
        <BookPoster
          title={"My Favorite List"}
          data={Data}
        />
        <BookPoster
          title={"Suggested Title"}
          data={Data}
        />
        <Footer/>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    failure: state.failure,
    success: state.success
  };
};
export default connect(
  mapStateToProps,
  { getAllBooksAction }
)(Bookr);
