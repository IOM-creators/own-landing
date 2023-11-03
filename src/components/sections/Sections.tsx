import React from "react";
import AboutUs from "../section/about-us";
import ServicesOffered from "../section/services-offered";
import WhyChooseUS from "../section/why-choose-us";
import OurProcess from "../section/our-process";
import Portfolio from "../section/portfolio";
import Feedback from "../section/feedback";
import ContactForm from "../section/contact-form";

const Sections = () => {
  return (
    <>
      <AboutUs className="section my-20 md:my-40 container mx-lg" />
      <ServicesOffered className="section my-20 md:my-40 container mx-lg" />
      <WhyChooseUS className="section my-20 md:my-40 container mx-lg" />
      <OurProcess className="section my-20 md:my-40 container mx-lg" />
      <Portfolio className="section my-20 md:my-40 pt-20 pb-28 md:py-40 container mx-lg" />
      <Feedback className="section my-20 md:my-40 container mx-lg" />
      <ContactForm className="section my-20 md:my-40 sm:container sm:mx-lg" />
    </>
  );
};

export default Sections;
