import React from "react";
import Section from "../../section";
import TitleSection from "../../title-section";
import { ISectionCommon } from "../../../helpers/commonInterfaces";
import ContactForm from "../../contact-from";
import { useGetContactUs } from "../../../graphql/";

const ContactUs: React.FC<ISectionCommon> = ({ className, id }) => {
  const { section } = useGetContactUs(id);

  return (
    <Section id="ContactUs" className={className}>
      <div className="bg-dark-blue py-20 px-10 md:px-40 sm:rounded-2xl bg-contain bg-ellipse bg-right-top bg-no-repeat">
        <TitleSection
          tag="h2"
          fontSize="text-4xl md:text-5xl"
          className="text-center mb-10 max-w-lap mx-auto text-white"
        >
          {section.title}
        </TitleSection>
        <ContactForm
          fields={section.formFields}
          successMessage={section.successMessage}
          buttonText={section.buttonText}
        />
      </div>
    </Section>
  );
};

export default ContactUs;
