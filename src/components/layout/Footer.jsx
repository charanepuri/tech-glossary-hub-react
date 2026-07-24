import Container from "../common/Container";
import Logo from "./Logo";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-top">

          {/* Left */}

          <div className="footer-column">
            <h3>About</h3>

            <p>© 2026 Built by Epuri Charan Teja</p>

            <p>
              Developed using React, Vite, JavaScript, CSS3, React Router,
              React Icons, and JSON.
            </p>
          </div>

          {/* Center */}

          <div className="footer-center">
            <Logo />

            <p className="footer-tagline">
              Learn Programming Concepts with Confidence
            </p>
          </div>

          {/* Middle */}

          <div className="footer-column">
            <h3>Project</h3>

            <a
              href="https://github.com/charanepuri/tech-glossary-hub-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>

            <a href="#">Documentation</a>
          </div>

          {/* Right */}

          <div className="footer-column">
            <h3>Connect</h3>

            <a
              href="https://github.com/charanepuri"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/charan-teja-972aa9231"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <h3 className="portfolio-title">Explore Portfolios</h3>

            <a
              href="https://portfolio-site-django.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Django
            </a>

            <a
              href="https://charan-react-portfolio.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>

            <a
              href="https://flask-developer-dashboard-portfolio.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flask
            </a>

            <a
              href="https://angular-portfolio-sigma-eight.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Angular
            </a>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            Made with 💕 by <strong>Epuri Charan Teja</strong>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;