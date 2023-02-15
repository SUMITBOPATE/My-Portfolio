import React from 'react';
import './About.css';

export default function About() {
  return (
    <>
      <div className="About">
        <div className="column">
          <div className="about-button">Hi, I’m Sumit. Nice to meet you.</div>
          <div className="about-section">
            <section className="section">
              I am a FrontEnd Developer and a curious person who loves to know
              how different things work together. I love to build stuff and
              connect with people smarter than me!
              <br></br>
              When I am not smashing the keyboard, you will find me playing
              cricket, reading or watching You-Tube.
            </section>
            <button className="btn">Hire me</button>
            <span className="btn-2">
            <button className="btn">Download my Resume </button>
            </span>
          </div>
        </div>

        <div className="column">
          <img src="https://mattfarley.ca/img/mf-avatar.svg" alt="my" className="img"></img>
        </div>
      </div>
    </>
  );
}
