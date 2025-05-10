import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="https://web.facebook.com/cj.48041" target="_blank" rel="noopener noreferrer">
          <img src="/fb.png" alt="Facebook" className="glow-icon" />
        </a>
        <a href="https://www.instagram.com/unluckyman03/?fbclid=IwY2xjawJ_HYdleHRuA2FlbQIxMABicmlkETF3bkpYdnZKNzNheml4b1N2AR43lEWmcUZsIof_GztEE2DHe2chf2eakj2qzqUd8zk998uZNdnROd1aMrIL0Q_aem_gX5869a42tuAcW3hoy1adw" target="_blank" rel="noopener noreferrer">
          <img src="/ig.png" alt="Instagram" className="glow-icon" />
        </a>
        <a href="https://www.tiktok.com/@channy_g_a?_t=ZS-8vy4WBnIYQJ&_r=1" target="_blank" rel="noopener noreferrer">
          <img src="/tiktok.png" alt="TikTok" className="glow-icon" />
        </a>
        <a href="mailto:ostagacj@gmail.com">
          <img src="/email.png" alt="Email" className="glow-icon" />
        </a>
        <a href="https://github.com/CJNica" target="_blank" rel="noopener noreferrer">
          <img src="/git.png" alt="GitHub" className="glow-icon" />
        </a>
      </div>

      {/* Navigation Links */}
      <nav className="footer-nav">
        <ul>
          <li><Link to="/contact">FAQ</Link></li>
          <li><Link to="/Projects">Skills</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Copyright Section */}
      <p className="copyright">Christian Joseph Ostaga | ALL Rights Reserved 2024</p>
    </footer>
  );
};

export default Footer;
