import htmlData from "../data/html.json";
import cssData from "../data/css.json";
import javascriptData from "../data/javascript.json";
import reactData from "../data/react.json";
import typescriptData from "../data/typescript.json";
import categoriesData from "../data/categories.json";

import Container from "../components/common/Container";
import SearchBar from "../components/search/SearchBar";
import SearchResults from "../components/search/SearchResults";

import useGlossarySearch from "../hooks/useGlossarySearch";

import { useSearchParams } from "react-router-dom";

import "./Search.css";

const glossaryData = [
  htmlData,
  cssData,
  javascriptData,
  reactData,
  typescriptData,
];

function Search() {
  const allTerms = glossaryData.flatMap(
    (data) => data.terms
  );

  const [searchParams] = useSearchParams();
  
  const initialQuery = searchParams.get("q") || "";

  const categories = categoriesData.categories;

  const getCategoryName = (categoryId) => {
    const category = categories.find(
      (item) => item.id === categoryId
    );

    return category?.name || "Unknown";
  };

  const {
    query,
    setQuery,
    results,
  } = useGlossarySearch(allTerms, initialQuery);

  return (
    <section className="search-page">
      <Container>
        <div className="search-page-header">
          <span>Search</span>

          <h1>Search the Glossary</h1>

          <p>
            Find programming terms and concepts across
            the available technologies.
          </p>
        </div>

        <div className="search-page-bar">
          <SearchBar
            query={query}
            onQueryChange={setQuery}
            placeholder="Search terms, definitions, concepts..."
          />
        </div>

        {query.trim() && (
          <div className="search-result-info">
            <p>
              {results.length} result
              {results.length !== 1 ? "s" : ""} found
              for <strong>"{query}"</strong>
            </p>
          </div>
        )}

        {query.trim() && (
          <SearchResults
            results={results}
            getCategoryName={getCategoryName}
          />
        )}
      </Container>
    </section>
  );
}

export default Search;