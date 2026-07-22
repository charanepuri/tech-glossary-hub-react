import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Categories from "../pages/Categories";
import CategoryDetails from "../pages/CategoryDetails";
import Glossary from "../pages/Glossary";
import TermDetails from "../pages/TermDetails";
import Favorites from "../pages/Favorites";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/category/:slug" element={<CategoryDetails />} />
      <Route path="/glossary" element={<Glossary />} />
      <Route path="/term/:slug" element={<TermDetails />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;