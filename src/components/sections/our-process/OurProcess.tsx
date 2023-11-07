import React from "react";
import Section from "../../section";
import TitleSection from "../../title-section";
import Image from "../../image";

import image from "../../../assets/images/our_process.png";
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
      <TitleSection
        tag="h2"
        position="text-left"
        className="mb-10 md:mb-20 text-center"
        fontSize="md:text-5xl text-4xl"
      >
        {t("our_process.title")}
      </TitleSection>
      <Image
        src={image}
        classWrapper="md:before:pt-[50%] mb-12 rounded-3xl overflow-hidden"
        className="object-contain"
      />
      <div className="">
        <List list={list} className="md:justify-center" />
      </div>
    </Section>
  );
};

export default OurProcess;
