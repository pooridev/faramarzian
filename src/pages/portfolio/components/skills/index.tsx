import { skills } from "./constants";

const Skills = () => (
  <section className="bg-gray-800 py-16 sm:py-20">
    <div className="container mx-auto px-4 sm:px-6">
      <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {skills.map((skillGroup) => (
          <div key={skillGroup.category} className="bg-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-600 px-3 py-1 rounded-full text-sm hover:bg-gray-500 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
