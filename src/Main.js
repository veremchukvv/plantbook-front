import React, { Component } from "react";
import "./style/style.css";
import Input from "./Input";

  function Form({ onSubmit }) {
    //здешний onSubmit вызовет handleSubmit уровнем выше
    return (
      <div className="main">
        <h2 className="tittle">Plantbook, plants social network.</h2>
        <p>Plantbook is an online service that intended for the plant owners and gardeners who look for a tool that would allow them to take care about their plants better. Every plant can optionally have a name and eventually a blog about its life, that can contain photos, some sad or happy stories.</p>

      </div>
    );
  }
export default Form;