import React from 'react';
import './Header.css';
export default function Header() {
  return (
    <>
      <header>
        <div className="head_container">
          <div className="logo-name">Sumit</div>
          <div className="menu" id="myTopnav">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="./index.html#About.js">About</a>
              </li>
              <li>
                <a href="./index.html#Projects.js">Projects</a>
              </li>
              <li>
                <a href="/Skills.js">Skills</a>
              </li>
              <li>
                <a href="/Contact.js">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
