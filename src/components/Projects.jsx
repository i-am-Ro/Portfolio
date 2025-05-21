import React from "react";
import { ExternalLink } from "lucide-react";

const Projects = ({ islightmode }) => {
  const projects = [
    {
      title: "Wanderlust",
      description:
        "An online marketplace that connects travelers with property owners who want to rent out their accommodations.",
      tech: ["HTML", "CSS", "Bootstrap", "Node.js", "Express.js", "MongoDB"],
      link: "https://majorproject-vp2d.onrender.com/listings",
      image: "/images/wandurlust.png",
    },
    {
      title: "Resonance",
      description:
        "A modern online shopping platform inspired by Myntra, built to deliver a smooth user experience for browsing and purchasing fashion and lifestyle products.",
      tech: ["React.js", "Html", "CSS", "JavaScript"],
      link: "https://resonanceapp19.netlify.app/",
      image: "/images/resonance.png",
    },
    {
      title: "BuzzChat",
      description:
        "A modern online shopping platform inspired by Myntra, built to deliver a smooth user experience for browsing and purchasing fashion and lifestyle products.",
      tech: ["Node.js", "Express.js", "HTML", "CSS", "Socket.io"],
      link: "https://chatapp-5fh8.onrender.com/",
      image: "/images/buzzchat.png",
    },
  ];

  return (
    <div
      id="projects"
      className={`transition-colors ease-linear duration-700 min-h-screen py-10 px-6 md:px-20 ${
        islightmode ? "text-black bg-gray-200" : "text-white bg-black"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-4xl font-semibold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x">
          Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-2xl shadow-xl flex flex-col overflow-hidden transition-all duration-700 transform hover:scale-[1.03] hover:shadow-2xl ${
                islightmode
                  ? "bg-gray-200 text-gray-800"
                  : "bg-neutral-800 text-gray-200"
              }`}
            >
              {/* Project Image */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-48 object-contain object-top"
                />
              )}

              {/* Project Details */}
              <div className="flex flex-col justify-between flex-1 p-5 space-y-4">
                <div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm mt-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3 text-xs">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-2 py-1 transition-colors ease-linear duration-700 rounded-full ${
                          islightmode ? "bg-gray-300" : "bg-gray-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Link */}
                {project.link && (
                  <div className="mt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-blue-500 hover:text-blue-800"
                    >
                      View Project <ExternalLink size={14} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
