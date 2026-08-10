import Hero from "../components/home/Hero";
import SearchSection from "../components/home/SearchSection";
import StatsSection from "../components/home/StatsSection";
import FeaturedCategories from "../components/home/FeaturedCategories";
import FeaturedTerms from "../components/home/FeaturedTerms";
import CallToAction from "../components/home/CallToAction";








function Home() {
  return (
    <>
      <Hero />
      <SearchSection />
      <StatsSection />
      <FeaturedCategories />
      <FeaturedTerms />
      <CallToAction />
    </>
  );
}

export default Home;