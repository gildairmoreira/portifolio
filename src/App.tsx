import { Analytics } from "@vercel/analytics/react";
import Formacao from "./sections/Formacao";
import Footer from "./sections/Footer";
import Contact from "./components/Contact";
import TechStack from "./sections/TechStack";
import AboutMe from "./sections/AboutMe";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <ShowcaseSection />
    <LogoShowcase />
    <FeatureCards />
    <Experience />
    <TechStack />
    <AboutMe />
    <Formacao />
    <Contact />
    <Footer />
    <Analytics />
  </>
);

export default App;
