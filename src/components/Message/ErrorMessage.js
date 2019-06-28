import React from "react";
import { connect } from "react-redux";
import "./ErrorMessage.scss";
const errorMessage = props => {
  let message;
  if (props.success !== null) {
    message = (
      <div hidden={props.show} className="Error_Success">
        <p>{props.success}</p>{" "}
      </div>
    );
  } else if (props.failure !== null) {
    message = (
      <div hidden={props.show} className="Error_Failure">
        <p>{props.failure}</p>{" "}
      </div>
    );
  }

  return <>{message}</>;
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
