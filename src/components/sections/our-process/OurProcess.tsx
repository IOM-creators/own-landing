import React from "react";
import Section from "../../section";
import TitleSection from "../../title-section";

import List from "../../list";
import { ISectionCommon } from "../../../helpers/commonInterfaces";
import Icon from "../../icon";

import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

const GET_OUR_PROCESS_ENTRY = gql`
  query iomLandingEntryQuery {
    ourProcess(id: "1MpCQIpRmAMXgoWzBplCTl") {
      title
      listCollection {
        items {
          ... on ListItem {
            description {
              json
            }
            icon {
              url
            }
            shadow
          }
        }
      }
    }
  }
`;

const OurProcess: React.FC<ISectionCommon> = ({ className }) => {
  const { data } = useQuery(GET_OUR_PROCESS_ENTRY);
  const section = data?.ourProcess || {};
  const content = {
    title: section.title,
    list: section?.listCollection?.items?.map((item: any, index: number) => ({
      icon: item.icon.url,
      shadow: item.shadow,
      description: item?.description?.json,
    })),
  };

  return (
    <Section id="OurProcess" className={className}>
      <TitleSection
        tag="h2"
        position="text-left"
        className="mb-10 md:mb-20 text-center"
        fontSize="md:text-5xl text-4xl"
      >
        {content.title}
      </TitleSection>
      <div className="img-wrapper mb-10 md:before:pt-[40%]">
        <Icon icon="our_process" />
      </div>
      <div className="">
        <List list={content.list} className="md:justify-center" />
      </div>
    </Section>
  );
};

export default OurProcess;
