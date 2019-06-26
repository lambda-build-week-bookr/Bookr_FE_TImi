import React, { Component } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Bookr.scss";
import { Books as Data } from "../../dummyData";
import BookPoster from "../../components/BookPoster/BookPoster";
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Banner/Banner'
class Bookr extends Component {
  state = {
    rateValue: 0
  };
  myRef = React.createRef();
  componentDidMount() {
    const rateValue = localStorage.getItem("rated") || 0;
    this.setState({ rateValue });
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

export default Bookr;
