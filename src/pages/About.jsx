import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import Footer from "../components/Footer";

const About = () => {
  
  const messagesRef = useRef([
    "Hi there! I am Christian Joseph Ostaga",
    "I am an IT Student and also an Artist",
    "Nice to meet you!"
  ]);

  const [currentText, setCurrentText] = useState(messagesRef.current[0]);
  const indexRef = useRef(0); 
  useEffect(() => {
    const interval = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % messagesRef.current.length;
      setCurrentText(messagesRef.current[indexRef.current]);
    }, 2000); 

    return () => clearInterval(interval);
  }, []); 

  return (
    <div className="portfolio-container">
      {/* Left Sectionsssss */}
      <div className="image-section">
        <img src="/5.jpg" alt="Portfolio" className="portfolio-image" />
        <h2 className="typing-text">{currentText}</h2>
      </div>

      {/* Right Sectionsss */}
      <div className="content-section">
        <header className="header">
          <nav className="nav-container">
          <img src="/logo.png" alt="CJ's Logo" className="nav-logo" />
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <main className="main-content">
          <h1 style={{paddingTop:120 , fontSize:65, fontWeight:"bold" , color:"white" , textAlign:"center"}}> ABOUT ME</h1>
          <p style={{paddingTop:40 , fontSize:25, fontWeight:"bold" , color:"white" , textAlign:"start"}}>
          Hello! I am Christian Joseph Ostaga, an aspiring tech enthusiast and digital artist. My journey in technology and art is driven by my desire to create and innovate. Whether it’s through programming, designing interfaces, or drawing, I aim to make a positive impact on the world by combining my skills in technology and creativity. In addition to my academic pursuits, I enjoy gaming and photography, which provide me with both relaxation and inspiration for my projects.
          </p>
          <div className="button-container">
            <button>Hire Me</button>
            <button>Contact Me</button>
          </div>
        </main>

        <Footer />

      </div>
    </div>
  );
};

export default About;
