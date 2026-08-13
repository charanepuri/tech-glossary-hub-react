import categoriesData from "../data/categories.json";

import Container from "../components/common/Container";
import CategoryCard from "../components/category/CategoryCard";

import "./Categories.css";

function Categories() {
  const categories = categoriesData.categories;

  return (
    <section className="categories-page">
      <Container>
        <div className="categories-header">
          <span>Explore</span>

          <h1>Technology Categories</h1>

          <p>
            Explore programming concepts organized by technology
            and development ecosystem.
          </p>
        </div>

        <div className="categories-page-grid">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Categories;