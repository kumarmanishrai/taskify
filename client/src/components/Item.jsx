import React, { useState } from "react";
import "../App.css";
const Item = ({ heading, text, remove, currStatus, changeStatus }) => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3>{heading}</h3>
        </div>
        <div className="card-body">
          <p>{text}</p>
        </div>
        <div className="card-footer">
          <button className="button" id={currStatus} onClick={changeStatus}>
            {currStatus}
          </button>
          <button className="button delete" onClick={remove}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Item;
