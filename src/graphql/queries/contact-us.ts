import { gql, useQuery } from "@apollo/client";

export const GET_CONTACT_US_ENTRY = gql`
  query iomLandingEntryQuery {
    contactUs(id: "6POxLTGZS7MVs4Uv2yPLgk") {
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

export const useGetContactUs = () => {
  const { loading, error, data } = useQuery(GET_CONTACT_US_ENTRY);
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
