import React from "react";
import Section from "../../section";

import image from "../../../assets/images/about_us.png";
import InfoWithList from "../../info-with-list";
import { useTranslation } from "react-i18next";
import { ISectionCommon } from "../../../helpers/commonInterfaces";

const ServicesOffered: React.FC<ISectionCommon> = ({ className }) => {
  const { t } = useTranslation();
  const card: any = t("about_us", {
    returnObjects: true,
  });

  return (
    <Section id="AboutUs" sectionRef="AboutUs" className={className}>
      <InfoWithList
        icon="about_us"
        card={card}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
      />
    </Section>
  );
};

export default ServicesOffered;
