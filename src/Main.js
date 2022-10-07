import React from 'react';
import './Main.css';

export default function Main() {
  return (
    <>
      <div className="main">
        <div className="main-content">
          <div className="welcome-section">
            <h1 className="h1">
              {' '}
              &nbsp; &nbsp; <span class="letter">H</span>
              <span class="letter">e</span>
              <span class="letter">l</span>
              <span class="letter">l</span>
              <span class="letter">o</span>
              <span class="letter">,</span>
              <span class="space"> </span>
            </h1>
            <p>
              Hi, <span class="wave">👋</span> I'm &nbsp;
              <span className="name">Sumit Bopate</span>
            </p>

            <span className="role">
              I'm into
              <span className="typing-slider">
                <p> &nbsp; Web development</p>
                <p> &nbsp;Designing</p>
                <p> &nbsp; UI /UX</p>
              </span>{' '}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
