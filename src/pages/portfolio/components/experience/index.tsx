import BlobEffectCard from "@components/blob-effect-card";
import { experiences } from "./constants";

const Experience = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Work Experience
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((experience) => (
            <BlobEffectCard className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 transition-colors z-10 duration-300">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
                <div>
                  <div className="flex items-start gap-4 mb-2">
                    <a
                      className="w-20"
                      target="_blank"
                      href={experience.company.linkedInProfile}
                    >
                      <img src={experience.logo} />
                    </a>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">{experience.role}</h3>
                      <a
                        className="text-gray-400"
                        target="_blank"
                        href={experience.company.linkedInProfile}
                      >
                        {experience.company.name}
                      </a>
                      <p className="text-gray-500">{experience.location}</p>
                    </div>
                  </div>
                </div>
                <span className="text-gray-400 mt-2 sm:mt-0">
                  {experience.period}
                </span>
              </div>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </BlobEffectCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
