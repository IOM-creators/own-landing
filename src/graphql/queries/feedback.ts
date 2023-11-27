import { gql, useQuery } from "@apollo/client";

export const GET_FEEDBACKS_ENTRY = gql`
  query iomLandingEntryQuery {
    feedbacks(id: "4g4wJhj33othVTCs289oIs") {
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

export const useGetFeedbacks = () => {
  const { loading, error, data } = useQuery(GET_FEEDBACKS_ENTRY);
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
