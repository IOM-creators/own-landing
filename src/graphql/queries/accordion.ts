import { gql, useQuery } from "@apollo/client";

export const GET_ACORDION_ENTRY = (id: string) => gql`
  query iomLandingEntryQuery {
    accordion(id: "${id}") {
      title
      image{
        url
      }
      accordionItemsCollection{
        items{
          ...on AccordionItem {
            title
            description {
              json
            }
            opened
          }
        }
      }
    }
  }
`;

export const useGetAccordion = (id: string = "") => {
  const { loading, error, data } = useQuery(GET_ACORDION_ENTRY(id));
  const section = data?.accordion || {};

  return {
    loading,
    error,
    section: {
      title: section.title,
      image: section.image?.url || "",
      items: section?.accordionItemsCollection?.items || [],
    },
  };
};
