import { gql, useQuery } from "@apollo/client";

export const GET_HERO_BANNER_ENTRY = gql`
  query iomLandingEntryQuery {
    heroBanner(id: "48B850UcPJZp9VLHaUv2oJ") {
      titleRichText {
        json
      }
      button {
        ... on Link {
          title
          url
          icon {
            url
          }
          styleButton
          buttonType
        }
      }
      video {
        url
      }
      rIghtBlockText
      callToActionLink {
        ... on Link {
          title
          url
          icon {
            url
          }
          styleButton
          buttonType
        }
      }
      upworkLink {
        ... on Link {
          title
          url
          icon {
            url
          }
          styleButton
          buttonType
        }
      }
      topRatedImage {
        url
        title
      }
      jobSuccessImage {
        url
        title
      }
    }
  }
`;

export const useGetHeroBanner = () => {
  const { loading, error, data } = useQuery(GET_HERO_BANNER_ENTRY, {
    fetchPolicy: 'cache-first' // Use cache-first policy
  });

  const heroBanner = data?.heroBanner || {};

  return {
    loading,
    error,
    heroBanner: {
      titleRichText: heroBanner?.titleRichText?.json,
      rIghtBlockText: heroBanner.rIghtBlockText,
      callToActionLink: heroBanner.callToActionLink,
      button: heroBanner.button,
      video: heroBanner.video,
      upworkLink: heroBanner.upworkLink,
      topRatedImage: heroBanner.topRatedImage,
      jobSuccessImage: heroBanner.jobSuccessImage,
    },
  };
};
