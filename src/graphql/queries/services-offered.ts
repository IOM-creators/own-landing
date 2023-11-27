import { gql, useQuery } from "@apollo/client";

export const GET_SERVICES_OFFERED_ENTRY = (id: string) => gql`
  query iomLandingEntryQuery {
    servicesOffered(id: "${id}") {
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

export const useGetServicesOffered = (id: string = "") => {
  const { loading, error, data } = useQuery(GET_SERVICES_OFFERED_ENTRY(id));
  const section = data?.servicesOffered || {};
  const content = {
    revert: section.revert,
    title: section.title,
    list:
      section?.listCollection?.items?.map((item: any) => ({
        description: item.description.json,
        shadow: true,
        icon: item.icon.url,
      })) || [],
  };
  return {
    loading,
    error,
    section: {
      ...content,
    },
  };
};
