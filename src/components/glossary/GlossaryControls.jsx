import "./GlossaryControls.css";

function GlossaryControls({
  category,
  setCategory,
  difficulty,
  setDifficulty,
  sortOrder,
  setSortOrder,
  categories,
  resultCount,
  resetFilters,
}) {
  return (
    <div className="glossary-controls">
      <div className="glossary-filter-group">
        <label htmlFor="category-filter">
          Category
        </label>

        <select
          id="category-filter"
          value={category}
          onChange={(event) =>
            setCategory(event.target.value)
          }
        >
          <option value="all">
            All Categories
          </option>

          {categories.map((item) => (
            <option
              key={item.id}
              value={item.id}
            >
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="glossary-filter-group">
        <label htmlFor="difficulty-filter">
          Difficulty
        </label>

        <select
          id="difficulty-filter"
          value={difficulty}
          onChange={(event) =>
            setDifficulty(event.target.value)
          }
        >
          <option value="all">
            All Levels
          </option>

          <option value="Beginner">
            Beginner
          </option>

          <option value="Intermediate">
            Intermediate
          </option>

          <option value="Advanced">
            Advanced
          </option>
        </select>
      </div>

      <div className="glossary-filter-group">
        <label htmlFor="sort-filter">
          Sort
        </label>

        <select
          id="sort-filter"
          value={sortOrder}
          onChange={(event) =>
            setSortOrder(event.target.value)
          }
        >
          <option value="default">
            Default
          </option>

          <option value="az">
            Alphabetical: A → Z
          </option>

          <option value="za">
            Alphabetical: Z → A
          </option>
        </select>
      </div>

      <button
        type="button"
        className="reset-filters"
        onClick={resetFilters}
      >
        Reset
      </button>

      <div className="glossary-result-count">
        {resultCount} terms
      </div>
    </div>
  );
}

export default GlossaryControls;