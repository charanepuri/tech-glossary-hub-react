import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

import Container from "../common/Container";

import "./SearchSection.css";

function SearchSection() {
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();

    const query = event.currentTarget.elements.search.value.trim();

    if (!query) {
      navigate("/search");
      return;
    }

    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

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

          <form
            className="search-box"
            onSubmit={handleSearch}
          >
            <HiOutlineMagnifyingGlass className="search-icon" />

            <input
              type="text"
              name="search"
              placeholder="Search technical terms..."
              aria-label="Search technical terms"
            />

            <button type="submit">
              Search
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}

export default SearchSection;