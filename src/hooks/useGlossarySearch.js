import { useMemo, useState } from "react";

function useGlossarySearch(terms, initialQuery = "") {
  const [query, setQuery] = useState(initialQuery);

  const results = useMemo(() => {
    const searchTerm = query.trim().toLowerCase();

    if (!searchTerm) {
      return [];
    }

    return terms.filter((term) => {
      const title = term.title?.toLowerCase() || "";

      const definition =
        term.definition?.toLowerCase() || "";

      const explanation =
        term.explanation?.toLowerCase() || "";

      const tags = Array.isArray(term.tags)
        ? term.tags.join(" ").toLowerCase()
        : "";

      return (
        title.includes(searchTerm) ||
        definition.includes(searchTerm) ||
        explanation.includes(searchTerm) ||
        tags.includes(searchTerm)
      );
    });
  }, [terms, query]);

  return {
    query,
    setQuery,
    results,
  };
}

export default useGlossarySearch;