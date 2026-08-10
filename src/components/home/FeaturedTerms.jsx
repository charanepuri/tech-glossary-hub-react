import { Link } from "react-router-dom";

import htmlData from "../../data/html.json";
import cssData from "../../data/css.json";
import javascriptData from "../../data/javascript.json";
import reactData from "../../data/react.json";
import typescriptData from "../../data/typescript.json";

import Container from "../common/Container";

import "./FeaturedTerms.css";

function FeaturedTerms() {
  const allTerms = [
    ...htmlData.terms,
    ...cssData.terms,
    ...javascriptData.terms,
    ...reactData.terms,
    ...typescriptData.terms,
  ];

  const featuredTerms = allTerms.slice(0, 6);

  return (
    <section className="featured-terms">
      <Container>
        <div className="section-heading">
          <div>
            <span>Discover</span>
            <h2>Featured Terms</h2>
          </div>

          <Link to="/glossary" className="view-all-link">
            View All
          </Link>
        </div>

        <div className="terms-grid">
          {featuredTerms.map((term) => (
            <Link
              to={`/term/${term.slug}`}
              className="term-card"
              key={`${term.categoryId}-${term.id}`}
            >
              <div className="term-card-header">
                <h3>{term.title}</h3>

                <span
                  className={`difficulty-badge ${term.difficulty
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {term.difficulty}
                </span>
              </div>

              <p>{term.definition}</p>

              <div className="term-card-footer">
                <span>{term.views} views</span>

                <span>Read More →</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FeaturedTerms;