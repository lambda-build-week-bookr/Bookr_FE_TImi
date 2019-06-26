import React from "react";
import "./LoginForm.scss";

const LoginForm = () => {
  return (
    <div className="LoginForm_Container">
        <h2>Register on Bookr</h2>
      <form action="">
        <input type="text" placeholder="Name" /> <br />
        <input type="email" placeholder="Email" /> <br />
        <input type="password" placeholder="Password" /> <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
