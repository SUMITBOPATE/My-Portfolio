import * as React from 'react';
import './Project.css';
import img from ".images/quiz.png";
// import img from ".quiz.png";
export default function Projects() {
  return (
    <>
      <div className="project-main">
        
        <div className="head-project">Projects</div>
                   <div className="project-item">
                           <div className="calculator">Calculator</div>
                            <div className="quiz">Quiz-Game
                            <img src={img} alt="quiz-img"/></div>
                            <div className="E-commerce">E-commerce</div> 
                     </div>
      </div>
    </>
  );
}
