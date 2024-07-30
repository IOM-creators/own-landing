import { gql, useQuery } from "@apollo/client";

export const GET_FOOTER_ENTRY = gql`
  query iomLandingEntryQuery {
    footer(id: "3pfAktCL2Fc93kl1bUGzMM") {
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

export const useGetFooter = () => {
  const { loading, error, data } = useQuery(GET_FOOTER_ENTRY);
  const footer = data?.footer || {};
  const menu = footer?.menuCollection?.items || [];

  return {
    loading,
    error,
    footer: {
      logo: footer.logo?.url || "",
      menu,
    },
  };
};
