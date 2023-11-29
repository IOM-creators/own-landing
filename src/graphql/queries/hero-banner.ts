import { gql, useQuery } from "@apollo/client";

export const GET_HERO_BANNER_ENTRY = gql`
  query iomLandingEntryQuery {
    heroBanner(id: "iYltR9Bi0XFx49npRy6SB") {
      abbreviation
    }
  }
`;

export const useGetHeroBanner = () => {
  const { loading, error, data } = useQuery(GET_HERO_BANNER_ENTRY);
  const heroBanner = data?.heroBanner || {};

  return {
    loading,
    error,
    heroBanner: {
      abbreviation: heroBanner.abbreviation || [],
    },
  };
};
