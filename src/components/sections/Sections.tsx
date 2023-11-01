import React from "react";
import ServiceSection from "../service";
import ExperienceSection from "../experience";
import ProjectsSection from "../projects";
import OurTeamSection from "../our-team";
import Feedback from "../feedback";
import ContactForm from "../contact-form";

const Sections = () => {
  return (
    <>
      <ServiceSection className="section mb-10 mt-10 md:mt-20 container mx-lg" />
      <ExperienceSection className="section my-20 md:my-40 container mx-lg" />
      <ProjectsSection className="section my-20 md:my-40 pt-20 pb-28 md:py-40 container mx-lg" />
      <OurTeamSection className="section my-20 md:my-40 container mx-lg" />
      <Feedback className="section my-20 md:my-40 container mx-lg" />
      <ContactForm className="section my-20 md:my-40 container mx-lg" />
    </>
  );
};

export default Sections;
