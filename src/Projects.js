import * as React from 'react';
import './Project.css';
import Users from './Work/List.js';
import Info from './Work/Info.js';
// import img from ".images/quiz.png";
// import img from ".quiz.png";
export default function Projects() {
  return (
    <>
    
        <div className="head-project" id="pro ">
          Projects
        </div>
        <div className="project-main">
        {Users.map((e) => {
          return <Info name={e.name} rollNo={e.desc} />;
        })}
      </div>
    </>
  );
}
