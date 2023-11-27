import { gql, useQuery } from "@apollo/client";

export const GET_SERVICES_OFFERED_ENTRY = gql`
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

export const useGetServicesOffered = () => {
  const { loading, error, data } = useQuery(GET_SERVICES_OFFERED_ENTRY);
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
