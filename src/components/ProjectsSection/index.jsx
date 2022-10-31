import React from "react";
import { projects } from "../../data";
import "./styles.css";

const ProjectsSection = () => {
  return (
    <section id="projects" className="main prel fl fl-c fl-d-cl">
      <div className="header">
        <div
          className="header-title text-center"
          style={{ fontWeight: 700, letterSpacing: 2 }}
          data-aos="zoom-out"
          data-aos-duration="1000"
        >
          Projects
        </div>
      </div>

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
                    src={
                      project.image
                        ? require(`../../assets/images/projects/${project.image}`)
                        : `https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8`
                    }
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

                <div className="fl w100 url">
                  {project.url && (
                    <a className="w100 fl fl-c live" href={project.url}>
                      Live
                    </a>
                  )}
                  {project.github && (
                    <a className="w100 fl fl-c github" href={project.github}>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
