import { gql, useQuery } from "@apollo/client";

export const GET_CONTACT_US_ENTRY = (id: string) => gql`
  query iomLandingEntryQuery {
    contactUs(id: "${id}") {
      title
      form {
        ... on ContactForm {
          fieldsCollection {
            items {
              ... on FormItem {
                typeField
                placeholder
                required
                errorMessage
              }
            }
          }
          buttonText
          successMessage
        }
      }
    }
  }
`;

export const useGetContactUs = (id: string = "") => {
  const { loading, error, data } = useQuery(GET_CONTACT_US_ENTRY(id));
  const section = data?.contactUs || {};
  const formFields = section.form?.fieldsCollection?.items || [];

  return {
    loading,
    error,
    section: {
      title: section.title,
      formFields,
      successMessage: section.form?.successMessage,
      buttonText: section.form?.buttonText,
    },
  };
};
