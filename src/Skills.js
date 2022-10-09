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
            <div className="list">
              <h1>My Skills</h1>
              <span class="ONE">JS</span>
              <span class="ONE">HTML</span>
              <span class="ONE">CSS</span>
              <span class="ONE">DATA STRUCTURE AND ALGORITHMS</span>
              <span class="ONE">React JS </span>
              <span class="ONE">JAVA </span>
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
