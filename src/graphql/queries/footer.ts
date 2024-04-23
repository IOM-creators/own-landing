import { gql, useQuery } from "@apollo/client";

export const GET_FOOTER_ENTRY = gql`
  query iomLandingEntryQuery {
    footer(id: "57NT2Joj6gGKDBMYWbVf1C") {
      linksCollection {
        items {
          ... on Links {
            title
            url
          }
        }
      }
      logo {
        url
      }
      socialCollection {
        items {
          ... on SocialItem {
            title
            icon {
              url
            }
            link
          }
        }
      }
    }
  }
`;

export const useGetFooter = () => {
  const { loading, error, data } = useQuery(GET_FOOTER_ENTRY);
  const footer = data?.footer || {};
  const links = footer?.linksCollection?.items || [];

  const socials = data?.footer?.socialCollection?.items || [];

  return {
    loading,
    error,
    footer: {
      logo: footer.logo?.url || "",
      links,
      socials,
    },
  };
};
