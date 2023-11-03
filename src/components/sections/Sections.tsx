import React from "react";
import AboutUs from "./about-us";
import ServicesOffered from "./services-offered";
import WhyChooseUS from "./why-choose-us";
import OurProcess from "./our-process";
import Portfolio from "./portfolio";
import Feedback from "./feedback";
import ContactForm from "./contact-form";

const Sections = () => {
  return (
    <>
      <AboutUs className="section py-10 my-10 md:py-20 md:my-20 container mx-lg" />
      <ServicesOffered className="section py-10 my-10 md:py-20 md:my-20 container mx-lg" />
      <WhyChooseUS className="section py-10 my-10 md:py-20 md:my-20 container mx-lg" />
      <OurProcess className="section py-10 my-10 md:py-20 md:my-20 container mx-lg" />
      <Portfolio className="section py-10 my-10 md:py-20 md:my-20 pt-20 pb-28 md:py-40 container mx-lg" />
      <Feedback className="section py-10 my-10 md:py-20 md:my-20 container mx-lg" />
      <ContactForm className="section py-10 my-10 md:py-20 md:my-20 sm:container sm:mx-lg" />
    </>
  );
};

export default Sections;
