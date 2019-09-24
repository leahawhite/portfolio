import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer role="contentinfo" id="footer">
      <div className="contact">
        <h2>Contact Me</h2>
        <div className="link-container">
          <a className="" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/leahandreawhite">
            LinkedIn
          </a>
          <a className="" target="_blank" rel="noopener noreferrer" href="https://github.com/leahawhite">
            GitHub
          </a>
          <a className="" target="_blank" rel="noopener noreferrer" href="mailto:leahawhite@gmail.com">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}