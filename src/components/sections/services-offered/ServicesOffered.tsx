import React from "react";
import Section from "../../section";

import InfoWithList from "../../info-with-list";
import { useTranslation } from "react-i18next";
import { ISectionCommon } from "../../../helpers/commonInterfaces";

//About Us
const ServicesOffered: React.FC<ISectionCommon> = ({ className }) => {
  const { t } = useTranslation();
  const card: any = t("services_offered", {
    returnObjects: true,
  });
  return (
    <Section id="ServicesOffered" className={className}>
      <InfoWithList
        icon="services_offered"
        card={card}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
      />
    </Section>
  );
};

export default ServicesOffered;
