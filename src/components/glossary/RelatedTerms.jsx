import { Link } from "react-router-dom";

import "./RelatedTerms.css";

function RelatedTerms({ terms }) {
  if (!terms.length) {
    return null;
  }

  return (
    <section className="related-terms">
      <div className="related-terms-heading">
        <span>Explore More</span>

        <h2>Related Terms</h2>
      </div>

      <div className="related-terms-grid">
        {terms.map((term) => (
          <Link
            to={`/term/${term.slug}`}
            className="related-term-card"
            key={`${term.categoryId}-${term.id}`}
          >
            <h3>{term.title}</h3>

            <p>{term.definition}</p>

            <span>
              View Term →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default RelatedTerms;