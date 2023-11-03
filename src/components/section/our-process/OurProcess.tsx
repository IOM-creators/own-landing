import React from "react";
import Section from "..";
import TitleSection from "../../title-section";
import Image from "../../image";

import Team from "../../../assets/images/team.png";
import { useTranslation } from "react-i18next";
import List from "../../list";
import { ISectionCommon } from "../../../helpers/commonInterfaces";

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
      <Image
        src={Team}
        classWrapper="md:before:pt-[50%] mb-12 rounded-3xl overflow-hidden"
        className="object-cover"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-36">
        <TitleSection
          tag="h2"
          position="text-left"
          className="md:mb-0 mb-10"
          fontSize="lg:text-4xl text-4xl"
        >
          {t("our_process.title")}
        </TitleSection>
        <List
          list={list}
          rightIcon
          classesItem="justify-between relative before:block pb-5 before:absolute before:content-'' before:w-full before:top-full before:h-0.5 before:bg-silver"
          className="md:justify-self-end"
        />
      </div>
    </Section>
  );
};

export default OurProcess;
