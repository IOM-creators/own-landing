import React from "react";
import Section from "../../section";

import InfoWithList from "../../info-with-list";
import { ISectionCommon } from "../../../helpers/commonInterfaces";

import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

const GET_ABOUT_US_ENTRY = gql`
  query iomLandingEntryQuery {
    aboutUs(id: "1j1z5VDtcdWuGHwVD3URVb") {
      title
      image {
        url
      }
      listCollection {
        items {
          ... on ListItem {
            description {
              json
            }
          }
        }
      }
      revert
    }
  }
`;

const AboutUs: React.FC<ISectionCommon> = ({ className }) => {
  const { data } = useQuery(GET_ABOUT_US_ENTRY);
  const section = data?.aboutUs || {};
  const content = {
    revert: section.revert,
    title: section.title,
    list: section.listCollection?.items?.map((item: any) => ({
      description: item?.description?.json,
    })),
  };
  return (
    <Section id="AboutUs" sectionRef="AboutUs" className={className}>
      <InfoWithList
        icon="about_us"
        card={content}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
      />
    </Section>
  );
};

export default AboutUs;
