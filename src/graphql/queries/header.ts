import { gql, useQuery } from "@apollo/client";

export const GET_HEADER_ENTRY = gql`
  query iomLandingEntryQuery {
    header(id: "1VZKDQL6LQUZ3szuQl31Ze") {
      logo {
        url
      }
      menuCollection {
        items {
          ... on Link {
            title
            url
          }
        }
      }
    }
  }
`;

export const useGetHeader = () => {
  const { loading, error, data } = useQuery(GET_HEADER_ENTRY);
  const header = data?.header || {};
  const menu = header?.menuCollection?.items || [];

  return {
    loading,
    error,
    header: {
      logo: header.logo?.url || "",
      menu,
    },
  };
};
