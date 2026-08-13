import { Link } from "react-router-dom";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaCode,
} from "react-icons/fa";

import { SiTypescript } from "react-icons/si";

import "./CategoryCard.css";

const iconMap = {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  SiTypescript,
};

function CategoryCard({ category }) {
  const Icon = iconMap[category.icon] || FaCode;

  return (
    <Link
      to={`/category/${category.slug}`}
      className="category-card"
    >
      <div
        className="category-card-icon"
        style={{ color: category.color }}
      >
        <Icon />
      </div>

      <div className="category-card-content">
        <h3>{category.name}</h3>

        <p>{category.description}</p>
      </div>

      <span className="category-card-link">
        Explore Category →
      </span>
    </Link>
  );
}

export default CategoryCard;