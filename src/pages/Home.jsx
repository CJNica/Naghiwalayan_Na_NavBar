import React, { useEffect, useState, useRef } from "react";
import { Link ,useNavigate} from "react-router-dom";
import "../styles/home.css";
import Footer from "../components/Footer";


const Home = () => {
  const navigate = useNavigate();
  const messagesRef = useRef([
    "Hi there! I am Christian Joseph Ostaga",
    "A passionate IT student & developer",
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
      {/* Left Sectionssss*/}
      <div className="image-section">
        <img src="/3.jpg" alt="Portfolio" className="portfolio-image" />
        <h2 className="typing-text">{currentText}</h2>
      </div>

      {/* Right Sectionsssssss */}
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
          
          <p style={{paddingTop:120 , fontSize:25, fontWeight:"bold" , color:"white" , textAlign:"start"}}>
          I am CJ, a passionate and dedicated Bachelor of Science in Information Technology student with a strong enthusiasm for learning and creativity. My skill set spans a diverse range of abilities, including coding, designing, and creating compelling digital artwork that merges innovation with aesthetic appeal. I also have a talent for drawing, where I bring my imagination to life through detailed illustrations, blending traditional techniques with modern digital tools. Whether it's crafting functional code, designing visually stunning user interfaces, or producing artistic masterpieces, I constantly strive to push boundaries and improve my craft.

        <p style={{paddingTop:10 , fontSize:25, fontWeight:"bold" , color:"white" , textAlign:"start",paddingRight:175}}>Beyond academics, I am an avid gamer who finds inspiration in the immersive worlds of gaming, and I channel my artistic eye into photography, capturing moments that tell stories and evoke emotions. My goal is to continuously expand my skill set, refine my artistry, and make a meaningful impact in the fields of technology, art, and beyond.</p>
          </p>

          <div className="button-container">
            <button onClick={() => navigate("/contact")}>Hire Me</button>
            <button onClick={() => navigate("/contact")}>Contact Me</button>
          </div>
        </main>
      </div>

      
      <Footer />
    </div>
  );
};

export default Home;
