import { gql, useQuery } from "@apollo/client";

export const GET_HERO_BANNER_ENTRY = gql`
  query iomLandingEntryQuery {
    heroBanner(id: "48B850UcPJZp9VLHaUv2oJ") {
      title
      titleRichText{
        json
      }
      button{
        ... on Link {
          title
          url
        }
      }
      video{
        url
      }
      callToActionLink{
        ... on Link {
          title
          url
        }
      }
    }
  }
`;

export const useGetHeroBanner = () => {
  const { loading, error, data } = useQuery(GET_HERO_BANNER_ENTRY);
  const heroBanner = data?.heroBanner || {};
  const rightCards = heroBanner.rightCardsCollection?.items || [];
  const bottomCards = heroBanner.bottomCardsCollection?.items || [];

  return {
    loading,
    error,
    heroBanner: {
      titleRichText:heroBanner?.titleRichText?.json,
      callToActionLink:heroBanner.callToActionLink,
      button:heroBanner.button,
      video:heroBanner.video,
    },
  };
};
