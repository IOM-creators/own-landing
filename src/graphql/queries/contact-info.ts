import { gql, useQuery } from "@apollo/client";

export const GET_CONTACT_INFO_ENTRY = (id: string) => gql`
  query iomLandingEntryQuery {
    contactInfo(id: "${id}") {
      title
      subtitle
      companyInfoCollection{
        items{
          ... on Link{
            title
            url
            icon{
              url
            }
            styleButton
            buttonType
          }
        }
      }
      socialInfoCollection{
        items{
          ... on Link{
            title
            url
            icon{
              url
            }
            styleButton
            buttonType
          }
        }
      }
    }
  }
`;

export const useGetContactInfo = (id: string = "") => {
  const { loading, error, data } = useQuery(GET_CONTACT_INFO_ENTRY(id));
  const section = data?.contactInfo;
  const companyInfo = data?.contactInfo?.companyInfoCollection?.items || [];
  const socialInfo = data?.contactInfo?.socialInfoCollection?.items || [];

  return {
    loading,
    error,
    section,
    companyInfo,
    socialInfo,
  };
};
