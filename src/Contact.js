import React from 'react';
import './Contact.css';
export default function Contact() {
  return (
    <>
      <footer class="footer-distributed">
        <div class="footer-left">
          {/* <img src="" a="" WIDTH=150 HEIGHT=100> */}

          <p class="footer-links">
            <a href="#">Home</a> ·<a href="#">About</a> ·
            <a href="#">Projects</a> · ·<a href="#">Skills</a> ·
            <a href="#">Contact</a>
          </p>

          <p class="footer-company-name"> I love what I do</p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>Nagpur</span> India
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>+91 9890818064</p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">sb.com</a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span className="name">Sumit Bopate</span> An aspiring Frontend Dveloper creating Frontend of Websites.
          </p>

          <div class="footer-icons">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fa fa-github"></i>
            </a>
          </div>

        </div>
        <hr className="line"></hr>
        <p class="footer-company-name">sb &copy; 2023</p>
      </footer>
    </>
  );
}
