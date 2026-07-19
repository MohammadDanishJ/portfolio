import React, { useEffect } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import Aos from "aos";
import "./styles.css";
import { socialLinks } from "../../data";
import landingData from "../../data/landingData";
import resumeFile from "../../assets/doc/resume.pdf";


const fileMap = {
  resume: resumeFile,
};

const CtaButton = ({ item }) => {
  const Icon = item.icon;
  let href = "#";

  if (item.type === "mailto") {
    href = `mailto:${socialLinks.gmail}?subject=${encodeURIComponent(
      item.subject
    )}&body=${encodeURIComponent(item.body)}`;
  } else if (item.type === "file") {
    href = fileMap[item.id];
  } else if (item.type === "external") {
    href = item.href;
  }

  return (
    <a target="_blank" rel="noreferrer" href={href} download={item.type === "file" ? item.fileName : undefined} className={`fl fl-c ${item.id} cp`}>
      {item.iconPosition === "left" && Icon && (
        <Icon size={16} style={{ marginRight: 6 }} />
      )}
      {item.label}
      {item.iconPosition === "right" && Icon && (
        <Icon size={13} style={{ marginLeft: 6 }} />
      )}
    </a>
  );
};

const LandingSection = () => {
  const { underConstruction, name, roles, scrollAmount, aos, cta } = landingData;

  useEffect(() => {
    Aos.init({ duration: aos.duration });
  }, [aos.duration]);

  const scrollDown = () =>
    window.scrollBy({ top: scrollAmount, left: 0, behavior: "smooth" });

  return (
    <section id="home" className="main prel fl fl-c fl-d-cl h100vh">
      {underConstruction.show && (
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
          data-aos-duration={aos.fadeDownDuration}
        >
          {underConstruction.text}
        </p>
      )}
      <div
        className="container lhinit fl fl-c fl-d-cl"
        // below margin is temporary
        style={{ marginTop: 50 }}
      >
        <div
          className="fl text-center main-title"
          data-aos="zoom-out"
          data-aos-duration={aos.zoomOutDuration}
        >
          {name}
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
          {roles.join(" | ")}
        </div>
        <div className="fl fl-c resume-container">
          {cta.map((item) => (
            <CtaButton key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* scroll down */}
      <div className="fl fl-c fl-d-cl w100 scroll-icon cp" onClick={scrollDown}>
        <div className="fl fl-c fl-d-cl oscilate">
          <MdArrowBackIosNew style={{ transform: "rotate(-90deg)" }} size={24} />
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