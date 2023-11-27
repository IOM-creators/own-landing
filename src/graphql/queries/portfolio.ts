import { gql, useQuery } from "@apollo/client";

export const GET_PORTFOLIO_ENTRY = gql`
  query iomLandingEntryQuery {
    portfolio(id: "4Fb2vLj9Zi1quZAT35xbe") {
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

export const useGetPortfolio = () => {
  const { loading, error, data } = useQuery(GET_PORTFOLIO_ENTRY);
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
