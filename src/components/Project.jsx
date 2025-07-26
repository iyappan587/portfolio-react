import React from "react";

function Project() {
  const projects = [
    {
      projectImages: "personalportfoliopjt",
      projectName: "portfolio",
      aboutProject:
        "A web application created to manage the registration process for our college event. It was developed collaboratively with my friends, marking my initial experience in team-based project development.",
      projectLink: "",
    },
    {
      projectImages: "caretechfest2024pjt",
      projectName: "CARE TECH FEST 2k24",
      aboutProject:
        "A web application created to manage the registration process for our college event. It was developed collaboratively with my friends, marking my initial experience in team-based project development.",
      projectLink: "",
    },
  ];

  return (
    <div
      id="projects"
      className="autoshow px-14 py-2 grid grid-cols-1 grid-rows-auto sm:grid-cols-2 md:grid-cols-3 gap-6"
    >
      <h2 className="text-4xl font-bold mb-4 text-[var(--primary-color)] sm:col-span-2 md:col-span-3">
        Projects
      </h2>
      {projects.map((project) => (
        <div
          key={project.projectName}
          className="bg-[var(--secondbg-color)] grid shadow-md rounded-lg p-4 mb-6"
        >
          <ul className="list-none flex flex-col items-start gap-3">
            <li>
              <img
                src={`./images/pjt-img/${project.projectImages}.png`}
                alt={project.projectName}
                className=" object-contain rounded-md"
              />
            </li>
            <li className="md:text-md font-medium sm:text-md">
              {project.projectName}
            </li>
            <li className="">{project.aboutProject}</li>
            {project.projectLink && (
              <li>
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  View Project
                </a>
              </li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Project;
