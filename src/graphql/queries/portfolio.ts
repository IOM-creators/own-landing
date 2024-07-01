import { gql, useQuery } from "@apollo/client";

export const GET_PORTFOLIO_ENTRY = (id: string) => gql`
  query iomLandingEntryQuery {
    portfolio(id: "${id}")  {
      title
      buttonName
      showButton
      showPagination
      projectsToShow
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
    buttonName: section.buttonName,
    showButton: section.showButton,
    showPagination: section.showPagination,
    projectsToShow: section.projectsToShow,
    slides:
      section.slidesCollection?.items?.map((item: any) => ({
        title: item.title,
        image: item.image?.url || "",
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
