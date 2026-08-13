import { Link } from "react-router-dom";

import "./CategoryTermCard.css";

function CategoryTermCard({ term }) {
  return (
    <Link
      to={`/term/${term.slug}`}
      className="category-term-card"
    >
      <div className="category-term-card-header">
        <h3>{term.title}</h3>

        <span
          className={`category-term-difficulty ${term.difficulty
            .toLowerCase()
            .replace(" ", "-")}`}
        >
          {term.difficulty}
        </span>
      </div>

      <p>{term.definition}</p>

      <div className="category-term-card-footer">
        <span>{term.views} views</span>

        <span>Read More →</span>
      </div>
    </Link>
  );
}

export default CategoryTermCard;