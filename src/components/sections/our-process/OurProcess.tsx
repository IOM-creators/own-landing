import React from "react";
import Section from "../../section";
import TitleSection from "../../title-section";

import { useTranslation } from "react-i18next";
import List from "../../list";
import { ISectionCommon } from "../../../helpers/commonInterfaces";
import Icon from "../../icon";

const OurProcess: React.FC<ISectionCommon> = ({ className }) => {
  const { t } = useTranslation();
  const cardsContent = t("our_process.list", {
    returnObjects: true,
  }) as string[];
  const list: any = cardsContent.map((item: any) => {
    return { ...item };
  });
  return (
    <Section id="OurProcess" className={className}>
      <TitleSection
        tag="h2"
        position="text-left"
        className="mb-10 md:mb-20 text-center"
        fontSize="md:text-5xl text-4xl"
      >
        {t("our_process.title")}
      </TitleSection>
      <div className="img-wrapper md:before:pt-[40%]">
        <Icon icon="our_process" />
      </div>
      <div className="">
        <List list={list} className="md:justify-center" />
      </div>
    </Section>
  );
};

export default OurProcess;
