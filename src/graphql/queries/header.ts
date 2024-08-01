import { gql, useQuery } from "@apollo/client";

export const GET_HEADER_ENTRY = gql`
  query iomLandingEntryQuery {
    header(id: "1VZKDQL6LQUZ3szuQl31Ze") {
      logo {
        url
      }
      contactButton {
        ... on Link {
          title
          url
          icon {
            url
          }
        }
      }
      menuCollection {
        items {
          ... on Link {
            title
            url
          }
        }
      }
      background
    }
  }
`;

export const useGetHeader = () => {
  const { loading, error, data } = useQuery(GET_HEADER_ENTRY);
  const header = data?.header || {};
  const menu = header?.menuCollection?.items || [];
  const contactButton = header?.contactButton;

  return {
    loading,
    error,
    header: {
      logo: header.logo?.url || "",
      menu,
      background: header.background,
      contactButton,
    },
  };
};
