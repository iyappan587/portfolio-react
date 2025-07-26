import React from "react";

function Skills() {
  const Skill = [
    { image: "html5", animate: "animate-logo-puls", imageName: "HTML" },
    { image: "css3", animate: "animate-logo-puls", imageName: "CSS" },
    {
      image: "javascript",
      animate: "animate-logo-puls",
      imageName: "JavaScript",
    },
    { image: "react", animate: "animate-spin-slow", imageName: "React" },
    { image: "tailwind", animate: "animate-logo-puls", imageName: "Tailwind" },
  ];

  const tool = [
    { image: "vscode", animate: "animate-logo-puls", imageName: "VSCode" },
    { image: "github", animate: "animate-logo-puls", imageName: "Git" },
    { image: "npm", animate: "animate-logo-puls", imageName: "NPM" },
    { image: "webpack", animate: "animate-logo-puls", imageName: "" },
    { image: "babel", animate: "animate-logo-puls", imageName: "" },
  ];

  return (
    <div id="skills" className="text-[var(--primary-color) ]">
      <div className=" autoshow px-8 py-2 md:px-14">
        <h2 className="text-[var(--primary-color)] text-2xl font-bold mb-4 md:text-4xl">
          Skills
        </h2>
        <div className=" bg-[var(--secondbg-color)] flex-wrap  flex justify-around gap-8 p-8 rounded-lg">
          {Skill.map((skill) => (
            <div key={skill.imageName}>
              <img
                className={`w-10 object-contain ${skill.animate} md:w-24`}
                src={`./images/logo/${skill.image}-logo.png`}
                alt={skill.imageName}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="autoshow px-8 py-2 md:px-14">
        <h2 className="text-[var(--primary-color)] text-2xl font-bold mb-4 md:text-4xl">
          Tool
        </h2>
        <div className="bg-[var(--secondbg-color)]  flex-wrap flex justify-around gap-8 p-8 rounded-lg">
          {tool.map((tool) => (
            <div key={tool.imageName}>
              <img
                className={`w-10 object-contain ${tool.animate} md:w-24`}
                src={`./images/logo/${tool.image}-logo.png`}
                alt={tool.imageName}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
