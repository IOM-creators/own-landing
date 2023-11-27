import { gql, useQuery } from "@apollo/client";

export const GET_PORTFOLIO_ENTRY = (id: string) => gql`
  query iomLandingEntryQuery {
    portfolio(id: "${id}") {
      title
      slidesCollection {
        items {
          ... on InfoCard {
            title
            description {
              json
            }
            image {
              url
            }
          }
        }
      }
    }
  }
`;

export const useGetPortfolio = (id: string = "") => {
  const { loading, error, data } = useQuery(GET_PORTFOLIO_ENTRY(id));
  const section = data?.portfolio || {};
  const content = {
    title: section.title,
    slides:
      section.slidesCollection?.items?.map((item: any) => ({
        title: item.title,
        description: item?.description?.json,
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
