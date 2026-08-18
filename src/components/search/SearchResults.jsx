import GlossaryCard from "../glossary/GlossaryCard";

import "./SearchResults.css";

function SearchResults({ results, getCategoryName }) {
  if (!results.length) {
    return (
      <div className="search-empty-state">
        <h3>No results found</h3>

        <p>
          Try searching for another programming term,
          technology, or concept.
        </p>
      </div>
    );
  }

  return (
    <div className="search-results-grid">
      {results.map((term) => (
        <GlossaryCard
          key={`${term.categoryId}-${term.id}`}
          term={term}
          categoryName={getCategoryName(term.categoryId)}
        />
      ))}
    </div>
  );
}

export default SearchResults;