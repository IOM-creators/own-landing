import React from "react";
import AboutUs from "./about-us";
import ServicesOffered from "./services-offered";
import WhyChooseUS from "./why-choose-us";
import OurProcess from "./our-process";
import Portfolio from "./portfolio";
import Feedbacks from "./feedbacks";
import ContactForm from "./contact-us";
import Technologies from "./technologies";

const Sections = () => {
  return (
    <>
      <AboutUs className="section py-10 my-10 md:py-16 md:my-16 container mx-lg" />
      <ServicesOffered className="section py-10 my-10 md:py-16 md:my-16 container mx-lg" />
      <Technologies className="section py-10 my-10 md:py-16 md:my-16 container mx-lg" />
      <WhyChooseUS className="section py-10 my-10 md:py-16 md:my-16 container mx-lg" />
      <Portfolio className="section py-10 my-10 md:my-16 pt-20 pb-28 md:py-40 container mx-lg" />
      <OurProcess className="section py-10 my-10 md:py-16 md:my-16 container mx-lg" />
      <Feedbacks className="section py-10 my-10 md:py-16 md:my-16 container mx-lg" />
      <ContactForm className="section py-10 my-10 md:py-16 md:my-16 sm:container sm:mx-lg" />
    </>
  );
};

export default Sections;
