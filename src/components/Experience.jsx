import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = ({ islightmode }) => {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Cron Labs Solution Private Limited",
      duration: "Sept 2025 - Present",
      location: "Bengaluru, Karnataka",
      description: [
        "Optimized Marico’s sales workflow by fixing Region, ASM, Distributor, Channel, and Brand filtering logic, improving data accuracy and reducing selection errors.",
        "Architected role-based access control (RBAC) with custom user and application-level permissions, enhancing system security.",
        "Eliminated surrogate SKU mapping, dropdown validation, and browser navigation issues, improving data consistency and user experience.",
        "Engineered and integrated processing states, scheduled-status animations, and automated notifications, improving system transparency.",
        "Strengthened system stability by validating chemist data, optimizing outlet selection logic, and fixing migration and configuration issues.",
        "Improved code quality, system performance, and application maintainability by adhering to clean coding standards and refactoring complex modules.",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "Tailwind CSS"],
    },
  ];

  return (
    <div
      id="experience"
      className={`transition-colors ease-linear duration-700 py-16 px-6 md:px-20 min-h-screen ${
        islightmode ? "text-black bg-gray-200" : "text-white bg-black"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <h2 className="text-4xl font-semibold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x">
          Work Experience
        </h2>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-dashed border-gray-400 dark:border-neutral-700 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline dot */}
              <div
                className={`absolute -left-[45px] md:-left-[61px] top-1.5 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 border-2 ${
                  islightmode
                    ? "bg-gray-100 border-blue-500 text-blue-500 group-hover:bg-blue-500 group-hover:text-white"
                    : "bg-neutral-900 border-purple-500 text-purple-400 group-hover:bg-purple-500 group-hover:text-white"
                }`}
              >
                <Briefcase size={16} />
              </div>

              {/* Experience Card */}
              <div
                className={`rounded-2xl border p-6 md:p-8 shadow-xl transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl ${
                  islightmode
                    ? "bg-gray-100 border-gray-300 text-gray-700 hover:border-blue-500/50"
                    : "bg-neutral-900 border-neutral-800 text-gray-300 hover:border-purple-500/50"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3
                      className={`text-xl md:text-2xl font-bold transition-colors duration-500 ${
                        islightmode ? "text-gray-900" : "text-white"
                      }`}
                    >
                      {exp.role}
                    </h3>
                    <p className="text-md font-semibold text-blue-500 dark:text-purple-400 mt-1">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-gray-400" />
                      {exp.duration}
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-gray-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description bullet points */}
                <ul className="list-disc list-outside ml-5 space-y-2.5 text-sm md:text-base text-gray-600 dark:text-gray-400 text-justify">
                  {exp.description.map((bullet, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {exp.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-2.5 py-1 text-xs font-medium rounded-full transition-all duration-500 ${
                        islightmode
                          ? "bg-gray-300 text-gray-800"
                          : "bg-neutral-800 text-gray-300 group-hover:bg-purple-950/40"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
