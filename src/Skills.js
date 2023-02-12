import React from 'react';
import './skills.css';

export default function Skills() {
  return (
    <>
      <div className="skill-main">
        <div className="skill-name">
          <div className="skills-list">
            {' '}
            <h1>Frontend Developer</h1>
            <h3>
              I like to code things from scratch,<br></br> and enjoy bringing
              ideas to life in the browser.
            </h3>
          
              <h1> Skills</h1>
              <div className="list">
              <button class="button-23">JS</button>
              <button>HTML</button>
              <button>CSS</button>
              <button>DATA STRUCTURE AND ALGORITHMS</button>
              <button>React JS </button>
              <button>JAVA </button>
             
            </div>
          </div>
        </div>
        <div className="skill">
          {/* <div className="skill"> */}
          <div class="scene">
            <div class="cube">
              <div class="side back"></div>
              <div class="side left"></div>
              <div class="side right"></div>
              <div class="side top"></div>
              <div class="side bottom"></div>
              <div class="side front"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
