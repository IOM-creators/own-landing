import { gql, useQuery } from "@apollo/client";

export const GET_SECTION_ENTRY = (id: string) => gql`
  query {
    section(id: "${id}") {
      title
      titleRichtext{
        json
      }
      button{
        ...on Link{
          title
          url
          icon{
            url
          }
        }
      }
      subtitle
      image {
        url
      }
      paddingTop
      paddingBottom
      maxWidth
      aligment
      grid
      gridGap
      background
      heightBackground
      colorText
      content {
        json
      }
      componentsCollection{
        items{
          sys{
            id
          }
        }
      }
      showOnlyComponents
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
