import React from 'react';
import './Main.css';

export default function Main() {
  return (
    <>
      <div className="main">
        <div className="main-content">
          <div className="welcome-section">
            <h1>  &nbsp;  &nbsp;   Hello !</h1>
            <p>
              Hi, <span class="wave">👋</span> I'm &nbsp;
              <span className="name">Sumit Bopate</span>
            </p>
            <p>I am in
            <span className="role"><div class="slider">
  <p>Web development</p>
  <p>Designing</p>
  <p>UI /UX</p>
</div> </span></p>
          </div>
        </div>
      </div>
    </>
  );
}
