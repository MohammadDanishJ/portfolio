import React from "react";
import {
  ContactSection,
  FooterSection,
  LandingSection,
} from "../../components/";
import { projects } from "../../data";

const Home = () => {
  return (
    <main>
      {/* <!-- Under Construction --> */}
      <div
        className="pfx t0 pt-.5 pb-.5 pl-.5 pr-.5 p12"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(45deg, rgba(0, 14, 42, 0.6), rgba(41, 0, 29, 0.6))",
          borderRadius: "0 0 20px 0",
          boxShadow: "0 0 20px rgb(56,56,56)",
          cursor: "default",
        }}
      >
        We're Under Construction
      </div>
      {/* <!-- Under Construction --> */}

      {/* Previous version tag */}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://portfolio-discarded.netlify.app"
        className="pfx t0 r0 pt-.5 pb-.5 pl-.5 pr-.5 p12"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(45deg, rgba(0, 14, 42, 0.6), rgba(41, 0, 29, 0.6))",
          borderRadius: "0 0 0 20px",
          boxShadow: "0 0 20px rgb(56,56,56)",
        }}
      >
        Click to visit previous version
      </a>
      {/* Previous version tag */}

      <LandingSection />

      <section className="lhinit fl fl-c fl-d-cl">
        <p
          style={{
            fontSize: 18,
            color: "#999",
            letterSpacing: 2,
            paddingTop: 10,
            fontFamily: "monospace",
          }}
        >
          Project List below is just a sample. [Remember, We're Under
          Construction]
        </p>
        <div className="fl fl-c">
          {projects.map((project, index) => (
            <div
              className="lhinit fl fl-c fl-d-cl p12"
              key={index}
              id={project.id}
            >
              <div
                className="fl text-center"
                style={{
                  fontSize: 18,
                  paddingTop: 10,
                }}
              >
                {project.title}
              </div>
              <div
                className="fl text-center"
                style={{
                  fontSize: 16,
                  color: "#999",
                  paddingTop: 10,
                }}
              >
                {project.description}
              </div>
              <div
                className="fl fl-c text-center fl-ww"
                style={{
                  width: 200,
                  fontSize: 16,
                  color: "#999",
                  letterSpacing: 2,
                  paddingTop: 10,
                  fontFamily: "monospace",
                }}
              >
                {project.technologies.map((technology, index) => (
                  <div style={{ marginLeft: 2 }} key={index}>
                    {technology},{" "}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactSection />
      <FooterSection />
    </main>
  );
};

export default Home;
