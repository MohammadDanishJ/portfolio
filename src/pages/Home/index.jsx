import React from "react";
import {
  ContactSection,
  FooterSection,
  LandingSection,
  ProjectsSection,
} from "../../components/";

const Home = () => {
  return (
    <main>
      <LandingSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
};

export default Home;
