import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaCode,
} from "react-icons/fa";

import { SiTypescript } from "react-icons/si";

import "./CategoryHeader.css";

const iconMap = {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  SiTypescript,
};

function CategoryHeader({ category, termCount }) {
  const Icon = iconMap[category.icon] || FaCode;

  return (
    <div className="category-header">
      <div
        className="category-header-icon"
        style={{ color: category.color }}
      >
        <Icon />
      </div>

      <div className="category-header-content">
        <span>Technology Category</span>

        <h1>{category.name}</h1>

        <p>{category.description}</p>

        <div className="category-term-count">
          {termCount} Terms
        </div>
      </div>
    </div>
  );
}

export default CategoryHeader;