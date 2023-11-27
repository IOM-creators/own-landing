import { gql, useQuery } from "@apollo/client";

export const GET_CORE_TECHNOLOGIES_ENTRY = gql`
  query iomLandingEntryQuery {
    coreTechnologies(id: "61WPlPZ2tFmI3XDetCeTjY") {
      title
      listCollection {
        items {
          ... on ListItem {
            text
            icon {
              url
            }
          }
        }
      }
    }
  }
`;

export const useGetTechnologies = () => {
  const { loading, error, data } = useQuery(GET_CORE_TECHNOLOGIES_ENTRY);
  const section = data?.coreTechnologies || {};
  const content = {
    revert: section.revert,
    title: section.title,
    list:
      section?.listCollection?.items?.map((item: any) => ({
        text: item.text,
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
