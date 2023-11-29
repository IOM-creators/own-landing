import { gql, useQuery } from "@apollo/client";

export const GET_CORE_TECHNOLOGIES_ENTRY = (id: string) => gql`
  query iomLandingEntryQuery {
    coreTechnologies(id: "${id}") {
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

export const useGetTechnologies = (id: string = "") => {
  const { loading, error, data } = useQuery(GET_CORE_TECHNOLOGIES_ENTRY(id));
  const section = data?.coreTechnologies || {};
  const content = {
    revert: section.revert,
    title: section.title,
    list:
      section?.listCollection?.items?.map((item: any) => ({
        text: item.text,
        icon: item.icon.url || "",
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
