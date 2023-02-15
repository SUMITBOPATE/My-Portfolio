import * as React from 'react';
import './Project.css';
// import img from ".images/quiz.png";
// import img from ".quiz.png";
export default function Projects() {
  return (
    <>
      <div className="project-main">
         <div className="head-project" id="pro ">Projects</div>
        {/* <div className="project-item">
          <div className="calculator">Calculator
          <div className="p-info" id="info"> An Simple Calculator to learn some basics concepts of React with beutiful UI</div></div>
          <div className="calculator">
            Quiz-Game
           
          </div>
          <div className="calculator">E-commerce</div>
          <img src="./waves.png" />
          
        </div> */} 
        <div class="card">
  <div class="card-details">
    <p class="text-title">Calculator</p>
    <p class="text-body">An Simple Calculator to learn some basics concepts of React with beutiful UI</p>
  </div>
  <button class="card-button">More info</button>
</div>
      </div>
    </>
  );
}
