import React from "react";
import Section from "../../section";

import InfoWithList from "../../info-with-list";
import { ISectionCommon } from "../../../helpers/commonInterfaces";
import { useGetAboutUs } from "../../../graphql/";

const AboutUs: React.FC<ISectionCommon> = ({ className, id }) => {
  const { section } = useGetAboutUs(id);

  return (
    <Section id="AboutUs" sectionRef="AboutUs" className={className}>
      <InfoWithList
        icon="about_us"
        image={section.image}
        card={section}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
      />
    </Section>
  );
};

export default AboutUs;
