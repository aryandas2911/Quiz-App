import React from "react";
import "./Quiz.css";

function Quiz() {
  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      <h2>
        1. What type of algorithm is used when the data has input-output pairs?
      </h2>
      <ul>
        <li>Unsupervised</li>
        <li>Reinforcement</li>
        <li>Supervised</li>
        <li>Clustering</li>
      </ul>
      <button>Next</button>
      <div className="index">1 of 5 questions</div>
    </div>
  );
}

export default Quiz;
