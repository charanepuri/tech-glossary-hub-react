import Container from "../common/Container";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <Container>
        <div className="hero-content">
          <span className="hero-badge">
            Learn • Explore • Master
          </span>

          <h1>
            Tech Glossary Hub
          </h1>

          <p>
            Discover programming concepts through organized categories,
            clear definitions, practical explanations, and real-world examples.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Hero;