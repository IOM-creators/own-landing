import { gql, useQuery } from "@apollo/client";

export const GET_ABOUT_US_ENTRY = (id: string) => gql`
  query iomLandingEntryQuery {
    aboutUs(id: "${id}") {
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

export const useGetAboutUs = (id: string = "") => {
  const { loading, error, data } = useQuery(GET_ABOUT_US_ENTRY(id));
  const section = data?.aboutUs || {};
  const content = {
    revert: section.revert,
    title: section.title,
    list: section.listCollection?.items?.map((item: any) => ({
      description: item?.description?.json,
    })),
  };

  return {
    loading,
    error,
    section: {
      content,
    },
  };
};
