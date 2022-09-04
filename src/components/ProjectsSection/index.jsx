import React from "react";
import { projects } from "../../data";
import "./styles.css";

const ProjectsSection = () => {
  return (
    <section id="projects" className="main prel fl fl-c fl-d-cl">
      <p
        style={{
          fontSize: 18,
          color: "#999",
          letterSpacing: 2,
          fontFamily: "monospace",
          paddingBottom: 40,
        }}
      >
        Project List below may not be accurate. [Remember, We're Under
        Construction]
      </p>
      <div
        className="container lhinit fl fl-c fl-d-cl"
        style={{ marginRight: -15, marginLeft: -15 }}
      >
        <div className="fl fl-ww fl-c">
          {projects.map((project, index) => (
            <div key={index} className="project">
              <div className="top">
                <a href={project.url}>
                  <img
                    className="w100"
                    src="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                    alt=""
                  />
                </a>
              </div>
              <div className="bottom text-center">
                <p>{project.type}</p>
                <h4>{project.title}</h4>
                <p className="technologies">
                  {project.technologies.join(", ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
