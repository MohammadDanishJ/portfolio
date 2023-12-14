import React, { useEffect } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BsFillChatFill } from "react-icons/bs";
import "./styles.css";
import Aos from "aos";
import { socialLinks } from "../../data";

const LandingSection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

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
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        We're Under Construction
      </p>
      <div
        className="container lhinit fl fl-c fl-d-cl"
        // below margin is temporary
        style={{ marginTop: 50 }}
      >
        <div
          className="fl text-center main-title"
          data-aos="zoom-out"
          data-aos-duration="1000"
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
        <div className="fl fl-c resume-container">
          <a
            target="_blank"
            rel="noreferrer"
            href={`mailto:${socialLinks.gmail}?subject=Want to Hire. Source: Portfolio&body=Hey Mohd Danish, I reached you from your Portfolio.`}
            className="fl fl-c contact cp"
          >
            <BsFillChatFill size={16} style={{ marginRight: 6 }} />
            Contact
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            // href="https://www.canva.com/design/DAFG27PZYwA/khr6booLHNpaUWIh7IJoeA/view"
            href={require("../../assets/doc/Resume-Mohd_Danish.pdf")}
            className="fl fl-c resume cp"
          >
            Resume <FaExternalLinkAlt size={13} style={{ marginLeft: 6 }} />
          </a>
        </div>
      </div>
      <div className="fl fl-c fl-d-cl w100 scroll-icon">
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
