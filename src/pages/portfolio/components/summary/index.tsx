import { Github, LinkedIn, Mail } from "@icons";

const Headline = () => (
  <header className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">
        Pooria Faramarzian
      </h1>
      <h2 className="text-xl sm:text-2xl text-gray-400 mb-6">
        Front-End Engineer
      </h2>
      <p className="text-lg sm:text-xl text-gray-300 mb-8">
        Pooria is a dynamic Front-End Engineer with over 4 years of expertise in
        JavaScript, TypeScript, and React.js, dedicated to continuous personal
        and professional growth. He has a proven track record of building
        secure, high-performance web applications using modern frameworks.
        Passionate about mentoring junior engineers, he actively contributes to
        team success through effective collaboration and communication.
      </p>
      <div className="flex space-x-6">
        <a
          href="https://github.com/pooridev"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          <Github />
        </a>
        <a
          href="https://linkedin.com/in/pooria-faramarzian"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          <LinkedIn />
        </a>
        <a
          href="mailto:PooriaFaramarzian@gmail.com"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          <Mail />
        </a>
      </div>
    </div>
  </header>
);

export default Headline;
