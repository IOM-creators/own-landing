import React from "react";
import Section from "../../section";

import InfoWithList from "../../info-with-list";
import { ISectionCommon } from "../../../helpers/commonInterfaces";
import { useGetServicesOffered } from "../../../graphql/";

const ServicesOffered: React.FC<ISectionCommon> = ({ className, id }) => {
  const { section } = useGetServicesOffered(id);

  return (
    <div id="ServicesOffered" className={className}>
      <InfoWithList
        icon="services_offered"
        image={section.image}
        card={section}
        className="flex flex-col"
      />
    </div>
  );
};

export default ServicesOffered;
