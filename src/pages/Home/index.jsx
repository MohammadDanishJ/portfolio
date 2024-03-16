import React from "react";
import {
  ContactSection,
  ExperienceSection,
  FooterSection,
  LandingSection,
  ProjectsSection,
  SkillsSection,
} from "../../components/";

const Home = () => {
  return (
    <main>
      <LandingSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
};

export default Home;
