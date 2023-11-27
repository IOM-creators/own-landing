import { gql, useQuery } from "@apollo/client";

export const GET_ABOUT_US_ENTRY = gql`
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

export const useGetAboutUs = () => {
  const { loading, error, data } = useQuery(GET_ABOUT_US_ENTRY);
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
