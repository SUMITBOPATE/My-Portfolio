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
                <a href="/About">About</a>
              </li>
              <li>
                <a href="/Projects">Projects</a>
              </li>
              <li>
                <a href="/Skills">Skills</a>
              </li>
              <li>
                <a href="#">Contact me</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
