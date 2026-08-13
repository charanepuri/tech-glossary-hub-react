import { useParams, Navigate } from "react-router-dom";

import categoriesData from "../data/categories.json";
import htmlData from "../data/html.json";
import cssData from "../data/css.json";
import javascriptData from "../data/javascript.json";
import reactData from "../data/react.json";
import typescriptData from "../data/typescript.json";

import Container from "../components/common/Container";
import CategoryHeader from "../components/category/CategoryHeader";
import CategoryTermCard from "../components/category/CategoryTermCard";

import "./CategoryDetails.css";

const glossaryData = [
  htmlData,
  cssData,
  javascriptData,
  reactData,
  typescriptData,
];

function CategoryDetails() {
  const { slug } = useParams();

  const category = categoriesData.categories.find(
    (item) => item.slug === slug
  );

  if (!category) {
    return <Navigate to="/categories" replace />;
  }

  const categoryTerms = glossaryData
    .flatMap((data) => data.terms)
    .filter((term) => term.categoryId === category.id);

  return (
    <section className="category-details-page">
      <Container>
        <CategoryHeader
          category={category}
          termCount={categoryTerms.length}
        />

        <div className="category-details-heading">
          <div>
            <span>Glossary</span>

            <h2>{category.name} Terms</h2>
          </div>
        </div>

        {categoryTerms.length > 0 ? (
          <div className="category-terms-grid">
            {categoryTerms.map((term) => (
              <CategoryTermCard
                key={term.id}
                term={term}
              />
            ))}
          </div>
        ) : (
          <div className="category-empty-state">
            <h3>No terms available</h3>

            <p>
              There are currently no glossary terms available
              for this category.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}

export default CategoryDetails;