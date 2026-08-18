import "./TermHeader.css";

function TermHeader({ term, categoryName }) {
  return (
    <header className="term-header">
      <div className="term-header-category">
        {categoryName}
      </div>

      <h1>{term.title}</h1>

      <div className="term-header-meta">
        <span
          className={`term-difficulty ${term.difficulty
            .toLowerCase()
            .replace(" ", "-")}`}
        >
          {term.difficulty}
        </span>

        <span>{term.views} views</span>
      </div>
    </header>
  );
}

export default TermHeader;