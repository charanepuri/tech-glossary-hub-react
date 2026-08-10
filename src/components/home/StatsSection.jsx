import { HiOutlineBookOpen, HiOutlineFolder } from "react-icons/hi2";

import categoriesData from "../../data/categories.json";
import htmlData from "../../data/html.json";
import cssData from "../../data/css.json";
import javascriptData from "../../data/javascript.json";
import reactData from "../../data/react.json";
import typescriptData from "../../data/typescript.json";

import Container from "../common/Container";

import "./StatsSection.css";

function StatsSection() {
  const categoriesCount = categoriesData.categories.length;

  const termsCount =
    htmlData.terms.length +
    cssData.terms.length +
    javascriptData.terms.length +
    reactData.terms.length +
    typescriptData.terms.length;

  const statistics = [
    {
      id: 1,
      label: "Categories",
      value: categoriesCount,
      icon: HiOutlineFolder,
    },
    {
      id: 2,
      label: "Glossary Terms",
      value: termsCount,
      icon: HiOutlineBookOpen,
    },
  ];

  return (
    <section className="stats-section">
      <Container>
        <div className="stats-grid">
          {statistics.map((stat) => {
            const Icon = stat.icon;

            return (
              <div className="stat-card" key={stat.id}>
                <div className="stat-icon">
                  <Icon />
                </div>

                <div className="stat-info">
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default StatsSection;