import React from "react";
import { connect } from "react-redux";
import "./ErrorMessage.scss";
const errorMessage = props => {
  let message;
  if (props.success !== null) {
    message = <p style={{ color: "#2ecc71" }}>{props.success}</p>;
  } else {
    message = <p style={{ color: "#e74c3c" }}>{props.failure}</p>;
  }

  return (
    <div hidden={props.show} className="Error_Success">
      {message}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    failure: state.failure,
    success: state.success,
    show: state.show
  };
};
export default connect(
  mapStateToProps,
  {}
)(errorMessage);
