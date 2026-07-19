import React, { useMemo } from "react";
import skillsData from "../../data/SkilldData";
import "./styles.css";

const SkillTrack = ({ skills, count, reverse }) => (
  <div
    className={`qualifications-container slide-track${reverse ? " slide-reverse" : ""}`}
    style={{ "--skill-count": count }}
  >
    {skills.map((skill, index) => (
      <div className="qualification slide" key={`${skill.id}-${index}`}>
        <div
          className="content"
          style={{ backgroundImage: `url(${skill.icon})` }}
        />
        <h1>{skill.name}</h1>
      </div>
    ))}
  </div>
);

const SkillsSection = () => {
  // Duplicate once for a seamless loop; memoized so it isn't rebuilt every render
  const duplicatedSkills = useMemo(() => [...skillsData, ...skillsData], []);
  const count = skillsData.length;

  return (
    <section id="skills" className="main prel fl fl-c fl-d-cl">
      <div
        className="prel w100 lhinit fl fl-c fl-d-cl"
        style={{ marginRight: -15, marginLeft: -15 }}
      >
        <div className="slider">
          <SkillTrack skills={duplicatedSkills} count={count} />
        </div>
        <div className="slider">
          <SkillTrack skills={duplicatedSkills} count={count} reverse />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;