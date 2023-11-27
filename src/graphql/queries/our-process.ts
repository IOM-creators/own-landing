import { gql, useQuery } from "@apollo/client";

export const GET_OUR_PROCESS_ENTRY = (id: string) => gql`
  query iomLandingEntryQuery {
    ourProcess(id: "${id}") {
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

export const useGetOurProcess = (id: string = "") => {
  const { loading, error, data } = useQuery(GET_OUR_PROCESS_ENTRY(id));
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
