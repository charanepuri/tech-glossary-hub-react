import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

import Container from "../common/Container";

import "./SearchSection.css";

function SearchSection() {
  return (
    <section className="search-section">
      <Container>
        <div className="search-section-content">
          <div className="search-section-heading">
            <h2>Explore the Glossary</h2>

            <p>
              Search for programming terms, technologies, and concepts.
            </p>
          </div>

          <div className="search-box">
            <HiOutlineMagnifyingGlass className="search-icon" />

            <input
              type="text"
              placeholder="Search technical terms..."
              aria-label="Search technical terms"
            />

            <button type="button">Search</button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SearchSection;