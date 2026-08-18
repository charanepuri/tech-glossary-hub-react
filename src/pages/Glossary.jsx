import htmlData from "../data/html.json";
import cssData from "../data/css.json";
import javascriptData from "../data/javascript.json";
import reactData from "../data/react.json";
import typescriptData from "../data/typescript.json";
import categoriesData from "../data/categories.json";

import Container from "../components/common/Container";
import GlossaryCard from "../components/glossary/GlossaryCard";
import GlossaryControls from "../components/glossary/GlossaryControls";

import useGlossaryFilters from "../hooks/useGlossaryFilters";

import "./Glossary.css";

const glossaryData = [
  htmlData,
  cssData,
  javascriptData,
  reactData,
  typescriptData,
];

function Glossary() {
  const categories = categoriesData.categories;

  const allTerms = glossaryData.flatMap(
    (data) => data.terms
  );

  const {
    category,
    setCategory,
    difficulty,
    setDifficulty,
    sortOrder,
    setSortOrder,
    filteredTerms,
    resetFilters,
  } = useGlossaryFilters(allTerms);

  const getCategoryName = (categoryId) => {
    const categoryItem = categories.find(
      (item) => item.id === categoryId
    );

    return categoryItem?.name || "Unknown";
  };

  return (
    <section className="glossary-page">
      <Container>
        <div className="glossary-header">
          <span>Explore</span>

          <h1>Programming Glossary</h1>

          <p>
            Explore programming terms and concepts across
            multiple technologies.
          </p>
        </div>

        <GlossaryControls
          category={category}
          setCategory={setCategory}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          categories={categories}
          resultCount={filteredTerms.length}
          resetFilters={resetFilters}
        />

        {filteredTerms.length > 0 ? (
          <div className="glossary-grid">
            {filteredTerms.map((term) => (
              <GlossaryCard
                key={`${term.categoryId}-${term.id}`}
                term={term}
                categoryName={getCategoryName(
                  term.categoryId
                )}
              />
            ))}
          </div>
        ) : (
          <div className="glossary-empty-state">
            <h3>No terms found</h3>

            <p>
              No glossary terms match the selected
              filters.
            </p>

            <button
              type="button"
              onClick={resetFilters}
            >
              Reset Filters
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}

export default Glossary;