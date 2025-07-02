import React from "react";
import "./Quiz.css";

function Quiz() {
  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      <h2>
        1. Which of the following is a type of supervised learning algorithm?
      </h2>
      <ul>
        <li>K-Means Clustering</li>
        <li>Principal Component Analysis</li>
        <li>Decision Tree</li>
        <li>Apriori Algorithm</li>
      </ul>
      <button>Next</button>
      <div className="index">1 of 5 questions</div>
    </div>
  );
}

export default Quiz;
