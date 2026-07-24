import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

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
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />

      <Route
        path="/categories"
        element={
          <Layout>
            <Categories />
          </Layout>
        }
      />

      <Route
        path="/category/:slug"
        element={
          <Layout>
            <CategoryDetails />
          </Layout>
        }
      />

      <Route
        path="/glossary"
        element={
          <Layout>
            <Glossary />
          </Layout>
        }
      />

      <Route
        path="/term/:slug"
        element={
          <Layout>
            <TermDetails />
          </Layout>
        }
      />

      <Route
        path="/favorites"
        element={
          <Layout>
            <Favorites />
          </Layout>
        }
      />

      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />

      <Route
        path="/contact"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />

      <Route
        path="*"
        element={
          <Layout>
            <NotFound />
          </Layout>
        }
      />
    </Routes>
  );
}

export default AppRouter;