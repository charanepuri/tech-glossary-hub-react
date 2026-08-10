import { Link } from "react-router-dom";

import Container from "../common/Container";

import "./CallToAction.css";

function CallToAction() {
  return (
    <section className="call-to-action">
      <Container>
        <div className="cta-content">
          <span className="cta-label">Keep Learning</span>

          <h2>
            Explore the World of Technology
          </h2>

          <p>
            Discover programming terms, understand technical concepts,
            and strengthen your development knowledge.
          </p>

          <Link to="/glossary" className="cta-button">
            Explore Glossary
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default CallToAction;