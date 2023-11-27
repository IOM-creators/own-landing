import { gql, useQuery } from "@apollo/client";

export const GET_FEEDBACKS_ENTRY = (id: string) => gql`
  query iomLandingEntryQuery {
    feedbacks(id: "${id}") {
      title
      reviewsCollection {
        items {
          ... on ReviewItem {
            name
            stars
            response
            linkText
            linkUrl
          }
        }
      }
    }
  }
`;

export const useGetFeedbacks = (id: string = "") => {
  const { loading, error, data } = useQuery(GET_FEEDBACKS_ENTRY(id));
  const section = data?.feedbacks || {};

  return {
    loading,
    error,
    section: {
      title: section.title,
      feedbacks: section.reviewsCollection?.items || [],
    },
  };
};
