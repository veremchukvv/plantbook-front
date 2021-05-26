// import React, { Component } from "react";
import "./style/style.css";
// eslint-disable-next-line no-unused-vars
import React, { SyntheticEvent, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [redirect, setRedirect] = useState(false);

  const submit = async () => {
    console.log({
      email,
      password,
    });
  };

  return (
    <div className="main">
      <form onSubmit={submit}>
        <h1 className="tittle">Войти в Plantbook</h1>
        <input
          type="email"
          placeholder="Email address"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
};

export default Login;
