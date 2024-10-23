import { ExternalLink } from "@icons";
import { projects } from "./constants";

const Projects = () => {
  return (
    <section className="bg-gray-800 py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Open-Sourced Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors duration-300"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                View Project <ExternalLink />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
