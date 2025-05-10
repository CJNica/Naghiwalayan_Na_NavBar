import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com"; 
import "../styles/home.css";
import Footer from "../components/Footer";

const Contact = () => {
  
  const messagesRef = useRef([
    "Hi there! I am Christian Joseph Ostaga",
    "You can call me CJ",
    "Connect with me",
    "Through Github", 
    "Facebook, Instagram", 
    "TikTok, and Email",
    "Thank You!!!",
  ]);

  const [currentText, setCurrentText] = useState(messagesRef.current[0]);
  const indexRef = useRef(0); 
  const formRef = useRef(null);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % messagesRef.current.length;
      setCurrentText(messagesRef.current[indexRef.current]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_3k09qhl", 
      "template_u3zvhmr", 
      formRef.current,
      "xlf53Hrb_kBN39sA7" 
    )
    .then(
      () => setStatusMessage("Message sent successfully!"),
      () => setStatusMessage("Failed to send message. Please try again.")
    );
  };

  return (
    <div className="portfolio-container">
      {/* Left Sectionsssss */}
      <div className="image-section">
        <img src="/cont.jpg" alt="Portfolio" className="portfolio-image" />
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
          <div className="contact-container">
            <form ref={formRef} onSubmit={sendEmail} style={{ paddingTop: 100 }}>
              <input type="email" name="email" placeholder="Email" required />
              <input type="text" name="fullName" placeholder="Full Name" required />
              <textarea name="message" placeholder="Your message" rows="5" required></textarea>
              <button type="submit">Submit</button>
            </form>
            {statusMessage && <p>{statusMessage}</p>}
          </div>

          <div className="cont">
            <h1 style={{ color: "white", marginTop: 150 }}>Contact Me On:</h1>
            <div className="social-icons" style={{ paddingTop: 30 }}>
              <a href="https://web.facebook.com/cj.48041" target="_blank" rel="noopener noreferrer">
                <img style={{ width: 60, height: 60 }} src="/fb.png" alt="Facebook" className="glow-icon" />
              </a>
              <a href="https://www.instagram.com/unluckyman03/" target="_blank" rel="noopener noreferrer">
                <img style={{ width: 60, height: 60 }} src="/ig.png" alt="Instagram" className="glow-icon" />
              </a>
              <a href="https://www.tiktok.com/@channy_g_a" target="_blank" rel="noopener noreferrer">
                <img style={{ width: 60, height: 60 }} src="/tiktok.png" alt="TikTok" className="glow-icon" />
              </a>
              <a href="mailto:ostagacj@gmail.com">
                <img style={{ width: 60, height: 60 }} src="/email.png" alt="Email" className="glow-icon" />
              </a>
              <a href="https://github.com/CJNica" target="_blank" rel="noopener noreferrer">
                <img style={{ width: 60, height: 60 }} src="/git.png" alt="GitHub" className="glow-icon" />
              </a>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Contact;
