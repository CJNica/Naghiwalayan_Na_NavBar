import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import Footer from "../components/Footer";

const Projects = () => {
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

  
  const projects = [
    { id: 1, title: "Portfolio", github: "https://cjnica.github.io/Final-Hands-On-na-talaga/" },
    { id: 2, title: "Antigua Website", github: "https://cjnica.github.io/Antigua-Website/" },
    { id: 3, title: "Library", github: "https://wow-book.netlify.app/" },
    { id: 4, title: "Spinner", github: "https://spinner-koto.netlify.app/" },
    { id: 5, title: "Solo Leveling", github: "https://cjnica.github.io/Solo-Leveling/" }
  ];

  return (
    <div className="portfolio-container">
      <div className="image-section">
        <img src="/5.jpg" alt="Portfolio" className="portfolio-image" />
        <h2 className="typing-text">{currentText}</h2>
      </div>

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
          <h1 style={{ paddingTop: 80, fontSize: 50, fontWeight: "bold", color: "white", textAlign: "center" }}>
            My Recent Works
          </h1>

         
          <div className="projects-grid">
            {projects.map((project) => (
              <div className="project-box" key={project.id}>
                <h3>{project.title}</h3>
                <iframe
                  src={project.github}
                  width="100%"
                  height="250px"
                  style={{ borderRadius: "8px", border: "2px solid #ccc" }}
                  title={project.title}
                ></iframe>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <button>View Project</button>
                </a>
              </div>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Projects;
