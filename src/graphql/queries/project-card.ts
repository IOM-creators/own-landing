import { gql, useQuery } from "@apollo/client";

export const GET_PROJECT_CARD_BY_ID = (id: string) => gql`
  query ProjectCollection {
    projectCard(id:"${id}"){
        card{
            ...on Project{
                title
                slug
                technologies
                image{
                    url
                }
            }
        }
    }
  }
`;

export const useProjectById = (id: string = "") => {
  if (!id) {
    return null;
  }
  const { loading, error, data } = useQuery(GET_PROJECT_CARD_BY_ID(id));
  const project = data?.projectCard.card || {};

  return {
    loading,
    error,
    project,
  };
};
