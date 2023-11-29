import React from "react";
import Section from "../../section";

import InfoWithList from "../../info-with-list";
import { ISectionCommon } from "../../../helpers/commonInterfaces";
import { useGetServicesOffered } from "../../../graphql/";

const ServicesOffered: React.FC<ISectionCommon> = ({ className, id }) => {
  const { section } = useGetServicesOffered(id);

  return (
    <Section id="ServicesOffered" className={className}>
      <InfoWithList
        icon="services_offered"
        image={section.image}
        card={section}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
      />
    </Section>
  );
};

export default ServicesOffered;
