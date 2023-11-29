import { gql, useQuery } from "@apollo/client";

export const GET_SECTIONS_ENTRY = gql`
  query iomLandingEntryQuery {
    sections(id: "4BfukHh8dpaCwEFoGWrFPX") {
      sectionCollection {
        items {
          sys {
            id
            publishedAt
          }
        }
      }
    }
  }
`;

export const useGetSections = () => {
  const { loading, error, data } = useQuery(GET_SECTIONS_ENTRY);
  const content = data?.sections || {};

  const sections =
    content.sectionCollection?.items?.map((item: any) => ({
      id: item.sys.id,
      name: item.__typename,
    })) || [];

  return {
    loading,
    error,
    sections,
  };
};
