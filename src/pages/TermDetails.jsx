import { useParams, Navigate } from "react-router-dom";

import categoriesData from "../data/categories.json";
import htmlData from "../data/html.json";
import cssData from "../data/css.json";
import javascriptData from "../data/javascript.json";
import reactData from "../data/react.json";
import typescriptData from "../data/typescript.json";

import Container from "../components/common/Container";
import TermHeader from "../components/glossary/TermHeader";
import TermContent from "../components/glossary/TermContent";
import TermTags from "../components/glossary/TermTags";
import RelatedTerms from "../components/glossary/RelatedTerms";

import "./TermDetails.css";

const glossaryData = [
  htmlData,
  cssData,
  javascriptData,
  reactData,
  typescriptData,
];

function TermDetails() {
  const { slug } = useParams();

  const allTerms = glossaryData.flatMap(
    (data) => data.terms
  );

  const term = allTerms.find(
    (item) => item.slug === slug
  );

  if (!term) {
    return <Navigate to="/glossary" replace />;
  }

  const category = categoriesData.categories.find(
    (item) => item.id === term.categoryId
  );

  const relatedTerms = allTerms.filter((item) =>
    term.relatedTerms.includes(item.id)
  );

  return (
    <section className="term-details-page">
      <Container>
        <TermHeader
          term={term}
          categoryName={category?.name || "Unknown"}
        />

        <TermContent term={term} />

        <TermTags tags={term.tags} />

        <RelatedTerms terms={relatedTerms} />
      </Container>
    </section>
  );
}

export default TermDetails;