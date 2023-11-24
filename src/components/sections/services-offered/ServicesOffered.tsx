import React from "react";
import Section from "../../section";

import InfoWithList from "../../info-with-list";
import { ISectionCommon } from "../../../helpers/commonInterfaces";

import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

const GET_SERVICES_OFFERED_ENTRY = gql`
  query iomLandingEntryQuery {
    servicesOffered(id: "1z0EhGB8786tJ2JOaJ1JwV") {
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
            icon {
              url
            }
            shadow
          }
        }
      }
      revert
    }
  }
`;

const ServicesOffered: React.FC<ISectionCommon> = ({ className }) => {
  const { data } = useQuery(GET_SERVICES_OFFERED_ENTRY);
  const section = data?.servicesOffered || {};
  const content = {
    revert: section.revert,
    title: section.title,
    list: section?.listCollection?.items?.map((item: any) => ({
      description: item.description.json,
      shadow: true,
      icon: item.icon.url,
    })),
  };
  return (
    <Section id="ServicesOffered" className={className}>
      <InfoWithList
        icon="services_offered"
        card={content}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
      />
    </Section>
  );
};

export default ServicesOffered;
