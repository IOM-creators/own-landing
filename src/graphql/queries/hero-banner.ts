import { gql, useQuery } from "@apollo/client";

export const GET_HERO_BANNER_ENTRY = gql`
  query iomLandingEntryQuery {
    heroBanner(id: "iYltR9Bi0XFx49npRy6SB") {
      abbreviation
      rightCardsCollection {
        items {
          ... on ListItem {
            text
            description {
              json
            }
            icon {
              url
            }
          }
        }
      }
      bottomCardsCollection {
        items {
          ... on ListItem {
            text
            description {
              json
            }
            icon {
              url
            }
          }
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
      abbreviation: heroBanner.abbreviation || [],
      rightCards,
      bottomCards,
    },
  };
};
