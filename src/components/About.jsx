import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { GraduationCap, MapPin } from "lucide-react";

const About = ({ islightmode }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll animation visibility using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const card = document.querySelector("#college-card");
    if (card) observer.observe(card);

    return () => {
      if (card) observer.unobserve(card);
    };
  }, []);

  const techStack = [
    { src: "/icons/html.png", alt: "HTML" },
    { src: "/icons/css.png", alt: "css" },
    { src: "/icons/JavaScript.png", alt: "JavaScript" },
    { src: "/icons/js.png", alt: "JavaScript" },
    { src: "/icons/java.png", alt: "Java" },
    { src: "/icons/react.png", alt: "React" },
    { src: "/icons/node.png", alt: "Node.js" },
    { src: "/icons/express.png", alt: "Express" },
    { src: "/icons/mongodb.png", alt: "MongoDB" },
    { src: "/icons/socket.png", alt: "Socket.io" },
    { src: "/icons/tailwindcss.png", alt: "Tailwind CSS" },
    { src: "/icons/BootStrap.png", alt: "BootStrap" },
    { src: "/icons/vscode.png", alt: "vscode" },
    { src: "/icons/sql.png", alt: "sql" },
  ];

  return (
    <div
      id="about"
      className={`transition-colors ease-linear duration-700 min-h-screen py-10 px-6 md:px-20 ${
        islightmode ? "text-black bg-gray-200" : "text-white bg-black"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-4xl font-semibold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x">
          About Me
        </h2>

        {/* About Text + College Card */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* About Text */}
          <div className=" lg:w-2/3 space-y-6  text-base sm:text-md md:text-lg leading-relaxed tracking-wide text-justify transition-colors ease-linear duration-700 text-gray-600 dark:text-gray-500">
            <p>
              Hi, I'm <strong>Rohit Mondal</strong>, a passionate Full Stack
              Developer dedicated to building efficient and scalable web
              applications. I have expertise in both front-end and back-end
              development, focusing on delivering smooth and intuitive user
              experiences.
              <br />
              My skill set includes <strong>React.js</strong>,{" "}
              <strong>JavaScript</strong>, <strong>Node.js</strong>, and other
              modern technologies. I’m committed to continuous learning and
              applying best practices to optimize performance and
              maintainability.
              <br />
              Outside of development, I enjoy collaborating with fellow
              developers, mentoring aspiring programmers, and actively
              contributing to open-source projects to support the tech
              community.
            </p>
          </div>

          {/* College Card */}
          <div className="lg:w-1/3 flex justify-center self-start  mx-auto">
            <div
              id="college-card"
              className={`border rounded-2xl shadow-xl p-6 w-full max-w-sm
    transition-colors ease-linear duration-700 
    ${
      islightmode
        ? "bg-gray-100 border-gray-300 text-gray-600"
        : "bg-neutral-900 border-neutral-700 text-gray-300"
    }
    ${isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}
  `}
            >
              <div className="flex  items-center gap-3 mb-4">
                <GraduationCap size={28} className="text-blue-500" />
                <h3 className="text-2xl font-semibold">My College</h3>
              </div>
              <p className="mb-2">
                <strong>College of Engineering & Management, Kolaghat</strong>
              </p>
              <p className="text-sm mb-2">
                Bachelor of Technology (B.Tech) in Information Technology
                <br />
                <span className="text-gray-500 dark:text-gray-400">
                  2020 – 2024
                </span>
              </p>
              <div className="flex items-center gap-2 mt-2 text-sm text-gray-600 dark:text-gray-400">
                <MapPin size={16} />
                Purba Medinipur, Kolaghat
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Marquee */}
        <div className="relative transition-colors ease-linear duration-700 overflow-hidden mt-16">
          <Marquee
            speed={50}
            gradient={true}
            gradientWidth={60}
            gradientColor={islightmode ? [226, 232, 240] : [23, 23, 23]}
            className="no-scrollbar pointer-events-none"
          >
            {techStack.map((icon, index) => (
              <div
                key={index}
                className={`mx-4 p-4 rounded-xl flex items-center justify-center w-24 h-24 transition-all duration-700 ease-in-out hover:scale-110 pointer-events-auto ${
                  islightmode
                    ? "bg-gray-100 hover:bg-gray-300"
                    : "bg-neutral-800 hover:bg-neutral-700"
                }`}
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="h-12 w-12 object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default About;
