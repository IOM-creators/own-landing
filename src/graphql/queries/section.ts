import { gql, useQuery } from "@apollo/client";

export const GET_SECTION_ENTRY = (id: string) => gql`
  query {
    section(id: "${id}") {
      title
      image {
        url
      }
      paddingTop
      paddingBottom
      grid
      content {
        json
      }
      component {
        sys {
          id
        }
      }
    }
  }
`;

export const useGetSection = (id: string = "") => {
  const { loading, error, data } = useQuery(GET_SECTION_ENTRY(id));
  const section = data?.section || {};

  return {
    loading,
    error,
    section,
  };
};
