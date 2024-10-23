import snappfoodLogo from "@assets/logos/snappfood.png";
import bluLogo from "@assets/logos/blu.webp";
import digikalaLogo from "@assets/logos/digikala.jpeg";
import calistuLogo from "@assets/logos/calistu.jpeg";

export const experiences = [
  {
    company: "Blu Bank",
    location: "Tehran, Iran (Hybrid)",
    logo: bluLogo,
    role: "Senior Frontend Engineer",
    period: "Aug 2024 - present",
    achievements: [
      "Utilized Protobuf for efficient data serialization and communication in the client, ensuring seamless integration with backend services",
      "Authored documentation that improved onboarding processes, reducing ramp-up time for new team members by 30%, and increasing overall team efficiency by 20%.",
    ],
  },
  {
    company: "Snappfood",
    location: "Tehran, Iran (Hybrid)",
    logo: snappfoodLogo,
    role: "Senior Frontend Engineer",
    period: "Mar 2024 - Aug 2024",
    achievements: [
      "Trained a frontend trainee in advanced JavaScript, performance optimization, and accessibility best practices over 3 months",
      "Improved Test CI pipeline speed by utilizing previously pushed Docker images, reducing build time by 40%",
      "Collaborated with 3 senior engineers to establish a robust testing culture, writing test examples and documentation that streamlined processes and improved development efficiency",
    ],
  },
  {
    company: "Snappfood",
    location: "Tehran, Iran (Hybrid)",
    logo: snappfoodLogo,
    role: "Frontend Engineer",
    period: "Sep 2022 - Mar 2024",
    achievements: [
      "Designed a Feature Flipping System enabled incremental feature rollouts, reducing rollout issues by 30%",
      "Architected a new API layer with React Query and TypeScript, boosting performance by 20%",
      "Improved LCP by 40% through optimizing micro-frontend app bundle sizes, resulting in faster page loads",
      "Removed sensitive environment variables from code-base and implemented a CI pipeline solution, reducing credential exposure risk",
      "Improved the developer experience by refining ESLint rules, reducing linting errors by 50%",
      "Reviewed over 60 merge requests, enhancing code quality and promoting knowledge sharing",
      "Engineered a cross-platform, router-based modal management system to improve user experience",
    ],
  },
  {
    company: "Digikala",
    location: "Tehran, Iran (Remote)",
    role: "Frontend Developer",
    logo: digikalaLogo,
    period: "Feb 2022 - Mar 2022",
    achievements: [
      "Hands on developing a product from scratch, used internally by senior managers and co-founders at Digikala.com.",
    ],
  },
  {
    company: "Calistu",
    location: "Dubai, UAE (Remote)",
    role: "Frontend Developer",
    logo: calistuLogo,
    period: "May 2021 - Sep 2022",
    achievements: [
      "Successfully integrated two e-commerce websites with the backend using React Query, Axios, and Redux",
      "Led 1 trainee through knowledge sharing, resulting in faster task delivery",
      "Containerize Frontend applications using Docker",
      "Onboard new team members on team culture, technical tools, and best practices",
    ],
  },
];
