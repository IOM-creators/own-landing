import React from "react";
import Section from "../../section";
import TitleSection from "../../title-section";

import List from "../../list";
import { ISectionCommon } from "../../../helpers/commonInterfaces";
import Icon from "../../icon";
import { useGetOurProcess } from "../../../graphql";

const OurProcess: React.FC<ISectionCommon> = ({ className }) => {
  const { section } = useGetOurProcess();

  return (
    <Section id="OurProcess" className={className}>
      <TitleSection
        tag="h2"
        position="text-left"
        className="mb-10 md:mb-20 text-center"
        fontSize="md:text-5xl text-4xl"
      >
        {section.title}
      </TitleSection>
      <div className="img-wrapper mb-10 md:before:pt-[40%]">
        <Icon icon="our_process" />
      </div>
      <div className="">
        <List list={section.list} className="md:justify-center" />
      </div>
    </Section>
  );
};

export default OurProcess;
