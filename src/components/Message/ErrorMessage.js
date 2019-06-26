import React from "react";
import { connect } from "react-redux";
import './ErrorMessage.scss'
const errorMessage = (props) => {
  const message =
    props.success !== null ? (
      <p style={{color: '#2ecc71'}}>{props.success}</p>
    ) : (
      <p style={{color: '#e74c3c'}}>{props.failure}</p>
    );
  return <div className='Error_Success'>{message}</div>;
};

const mapStateToProps = state => {
  return {
    failure: state.failure,
    success: state.success
  };
};
export default connect(
  mapStateToProps,
  {}
)(errorMessage);
