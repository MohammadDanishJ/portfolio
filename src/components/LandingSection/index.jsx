import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./styles.css";

const LandingSection = () => {
  return (
    <section id="home" className="main prel fl fl-c fl-d-cl h100vh">
      <p
        className="text-center pabs t0"
        style={{
          marginTop: "8rem",
          fontSize: 18,
          color: "#999",
          letterSpacing: 2,
          fontFamily: "monospace",
        }}
      >
        We're Under Construction
      </p>
      <div
        className="container lhinit fl fl-c fl-d-cl"
        // below margin is temporary
        style={{ marginTop: 50 }}
      >
        <div
          className="fl text-center"
          style={{ fontSize: 102, fontWeight: 700 }}
        >
          Mohammad Danish
        </div>
        <div
          className="fl text-center"
          style={{
            fontSize: 18,
            color: "#999",
            letterSpacing: 2,
            paddingTop: 10,
            fontFamily: "monospace",
          }}
        >
          Web Developer | Software Engineer | React Developer
        </div>
        <div className="fl fl-c fl-d-cl resume-container">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.canva.com/design/DAFG27PZYwA/khr6booLHNpaUWIh7IJoeA/view"
            className="fl fl-c resume cp"
          >
            Resume <FaExternalLinkAlt size={13} style={{ marginLeft: 6 }} />
          </a>
        </div>
      </div>
      <div
        className="fl fl-c fl-d-cl w100"
        // below translation should be 90px as the margin of the container is removed which is now 50px
        style={{ fontSize: 24, color: "#666", transform: "translateY(20px)" }}
      >
        <div className="fl fl-c fl-d-cl oscilate">
          <div>Scroll Down</div>
          <MdArrowBackIosNew
            style={{ transform: "rotate(-90deg)" }}
            size={24}
          />
          <MdArrowBackIosNew
            style={{ transform: "rotate(-90deg) translateX(14px)" }}
            size={24}
          />
        </div>
      </div>
    </section>
  );
};

export default LandingSection;