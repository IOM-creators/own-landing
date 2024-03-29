import { gql, useQuery } from "@apollo/client";

export const GET_HEADER_ENTRY = gql`
  query iomLandingEntryQuery {
    header(id: "4vncV02RkQ46gGN6i2W0mw") {
      logo {
        url
      }
      navigation
    }
  }
`;

export const useGetHeader = () => {
  const { loading, error, data } = useQuery(GET_HEADER_ENTRY);
  const header = data?.header || {};
  const navigation = header?.navigation || [];

  return {
    loading,
    error,
    header: {
      logo: header.logo?.url || "",
      navigation,
    },
  };
};
