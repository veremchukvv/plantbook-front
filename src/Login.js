// import React, { Component } from "react";
import "./style/style.css";
import React from "react";
import Input from "./Input";

  function Form({ onSubmit }) {
    //здешний onSubmit вызовет handleSubmit уровнем выше
    return (
      <div className="main">
        <h2 className="tittle">Войти в Plantbook</h2>
      <form onSubmit={onSubmit}>
        <Input type="text" name="firstname" placeholder="Имя" />
        <Input type="password" name="password" placeholder="Пароль" />
        <button>Войти</button>
      </form>
      </div>
    );
  }
export default Form;

