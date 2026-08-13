import { Link } from "react-router-dom";

import "./GlossaryCard.css";

function GlossaryCard({ term, categoryName }) {
  return (
    <Link
      to={`/term/${term.slug}`}
      className="glossary-card"
    >
      <div className="glossary-card-top">
        <span className="glossary-category">
          {categoryName}
        </span>

        <span
          className={`glossary-difficulty ${term.difficulty
            .toLowerCase()
            .replace(" ", "-")}`}
        >
          {term.difficulty}
        </span>
      </div>

      <h3>{term.title}</h3>

      <p className="glossary-definition">
        {term.definition}
      </p>

      <div className="glossary-tags">
        {term.tags.slice(0, 3).map((tag) => (
          <span key={tag}>
            #{tag}
          </span>
        ))}
      </div>

      <div className="glossary-card-footer">
        <span>{term.views} views</span>

        <span>View Term →</span>
      </div>
    </Link>
  );
}

export default GlossaryCard;