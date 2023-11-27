import { gql, useQuery } from "@apollo/client";

export const GET_FOOTER_ENTRY = gql`
  query iomLandingEntryQuery {
    footer(id: "57NT2Joj6gGKDBMYWbVf1C") {
      navigation
      socialCollection {
        items {
          ... on SocialItem {
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
  const navigation = data?.footer?.navigation || [];
  const socials = data?.footer?.socialCollection?.items || [];

  return {
    loading,
    error,
    footer: {
      navigation,
      socials,
    },
  };
};
