import React from "react";
import {
  ContactSection,
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
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
};

export default Home;
