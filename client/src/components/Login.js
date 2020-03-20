import React, { useState } from "react";
import { navigate } from "@reach/router";

const Login = props => {
  const { name, setName } = props;

  const onClick = () => {
    if (name.length > 0) {
      navigate("/dashboard");
    }
  };
  return (
    <div className="container">
      <h3>Please input your name!</h3>
      <input
        type="text"
        className="form-control form-control-sm w-50"
        onChange={e => setName(e.target.value)}
      />
      <button onClick={onClick} className="btn btn-primary">
        Login
      </button>
    </div>
  );
};

export default Login;
