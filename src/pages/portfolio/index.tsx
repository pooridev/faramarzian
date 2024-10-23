import Experience from "./components/experience";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Summary from "./components/summary";
import Footer from "./components/footer";

const Portfolio = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <Summary />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
};

export default Portfolio;
