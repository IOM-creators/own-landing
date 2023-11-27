import { gql, useQuery } from "@apollo/client";

export const GET_OUR_PROCESS_ENTRY = gql`
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

export const useGetOurProcess = () => {
  const { loading, error, data } = useQuery(GET_OUR_PROCESS_ENTRY);
  const section = data?.ourProcess || {};
  const content = {
    title: section.title,
    list: section?.listCollection?.items?.map((item: any, index: number) => ({
      icon: item.icon.url,
      shadow: item.shadow,
      description: item?.description?.json,
    })),
  };
  return {
    loading,
    error,
    section: {
      ...content,
    },
  };
};
