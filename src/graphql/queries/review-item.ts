import { gql, useQuery } from "@apollo/client";

export const GET_REVIEW_ITEM_ENTRY = (id: string) => gql`
  query iomLandingEntryQuery {
    reviewItem(id: "${id}") {
      name
      description
      link{
        ...on Link {
            title
            url
            icon{
              url
            }
            styleButton
            buttonType
        }
      }
      platform{
        url
      }
      paddingTop
      paddingBottom
    }
  }
`;

export const useGetReviewItem = (id: string = "") => {
  const { loading, error, data } = useQuery(GET_REVIEW_ITEM_ENTRY(id));
  const review = data?.reviewItem || {};

  return {
    loading,
    error,
    review,
  };
};
