import { gql, useQuery } from "@apollo/client";

export const GET_CONTACT_FORM_ENTRY = (id: string) => gql`
  query iomLandingEntryQuery {
    contactForm(id: "${id}") {
      title
      subtitle
  		buttonText
      successMessage{
        json
      }
      successImage{
        url
      }
      topImage{
        url
      }
      leftImage{
        url
      }
      fieldsCollection{
        items{
          ... on FormItem {
            typeField
            placeholder
            required
            errorMessage
          }
        }
      }
    }
  }
`;

export const useGetContactForm = (id: string = "") => {
  const { loading, error, data } = useQuery(GET_CONTACT_FORM_ENTRY(id));
  const section = data?.contactForm || {};

  return {
    loading,
    error,
    contactForm: section,
  };
};
