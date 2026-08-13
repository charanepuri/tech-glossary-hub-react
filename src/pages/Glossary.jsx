import htmlData from "../data/html.json";
import cssData from "../data/css.json";
import javascriptData from "../data/javascript.json";
import reactData from "../data/react.json";
import typescriptData from "../data/typescript.json";
import categoriesData from "../data/categories.json";

import Container from "../components/common/Container";
import GlossaryCard from "../components/glossary/GlossaryCard";

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

  const getCategoryName = (categoryId) => {
    const category = categories.find(
      (item) => item.id === categoryId
    );

    return category?.name || "Unknown";
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

        <div className="glossary-grid">
          {allTerms.map((term) => (
            <GlossaryCard
              key={`${term.categoryId}-${term.id}`}
              term={term}
              categoryName={getCategoryName(term.categoryId)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Glossary;