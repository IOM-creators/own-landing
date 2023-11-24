import React from "react";
import Section from "../../section";
import TitleSection from "../../title-section";
import { ISectionCommon } from "../../../helpers/commonInterfaces";
import ContactForm from "../../contact-from";

import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

const GET_CONTACT_US_ENTRY = gql`
  query iomLandingEntryQuery {
    contactUs(id: "6POxLTGZS7MVs4Uv2yPLgk") {
      title
      form {
        ... on ContactForm {
          fieldsCollection {
            items {
              ... on FormItem {
                typeField
                placeholder
                required
                errorMessage
              }
            }
          }
          buttonText
          successMessage
        }
      }
    }
  }
`;

const ContactUs: React.FC<ISectionCommon> = ({ className }) => {
  const { data } = useQuery(GET_CONTACT_US_ENTRY);
  const section = data?.contactUs || {};
  const formFields = data?.contactUs?.form?.fieldsCollection?.items || [];
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
          fields={formFields}
          successMessage={section.form?.successMessage}
          buttonText={section.form?.buttonText}
        />
      </div>
    </Section>
  );
};

export default ContactUs;
