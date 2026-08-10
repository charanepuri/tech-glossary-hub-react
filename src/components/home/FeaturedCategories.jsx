import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaCode,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { Link } from "react-router-dom";

import categoriesData from "../../data/categories.json";
import Container from "../common/Container";

import "./FeaturedCategories.css";

const iconMap = {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  SiTypescript,
};

function FeaturedCategories() {
  const featuredCategories = categoriesData.categories.slice(0, 5);

  return (
    <section className="featured-categories">
      <Container>
        <div className="section-heading">
          <div>
            <span>Explore</span>
            <h2>Featured Categories</h2>
          </div>

          <Link to="/categories" className="view-all-link">
            View All
          </Link>
        </div>

        <div className="categories-grid">
          {featuredCategories.map((category) => {
            const Icon = iconMap[category.icon] || FaCode;

            return (
              <Link
                to={`/category/${category.slug}`}
                className="category-card"
                key={category.id}
              >
                <div
                  className="category-icon"
                  style={{ color: category.color }}
                >
                  <Icon />
                </div>

                <h3>{category.name}</h3>

                <p>{category.description}</p>

                <span className="category-link">
                  Explore Category →
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default FeaturedCategories;