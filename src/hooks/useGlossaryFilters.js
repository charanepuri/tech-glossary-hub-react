import { useMemo, useState } from "react";

function useGlossaryFilters(terms) {
  const [category, setCategory] = useState("all");
  const [difficulty, setDifficulty] = useState("all");
  const [sortOrder, setSortOrder] = useState("default");

  const filteredTerms = useMemo(() => {
    let result = [...terms];

    if (category !== "all") {
      result = result.filter(
        (term) => String(term.categoryId) === String(category)
      );
    }

    if (difficulty !== "all") {
      result = result.filter(
        (term) => term.difficulty === difficulty
      );
    }

    if (sortOrder === "az") {
      result.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }

    if (sortOrder === "za") {
      result.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
    }

    return result;
  }, [terms, category, difficulty, sortOrder]);

  const resetFilters = () => {
    setCategory("all");
    setDifficulty("all");
    setSortOrder("default");
  };

  return {
    category,
    setCategory,
    difficulty,
    setDifficulty,
    sortOrder,
    setSortOrder,
    filteredTerms,
    resetFilters,
  };
}

export default useGlossaryFilters;