import { gql, useQuery } from "@apollo/client";
import { title } from "process";

export const GET_TECHNOLOGIES_BY_ID = (id: string) => gql`
  query ServiceCollection {
    technologies(id:"${id}"){
        title
        technologyCollection{
    		items{
          ... on Technology{
                title   
                icon{
                    url
                }
            }
        }
      }
    }
  }
`;

export const useGetTechnologies = (id: string = "") => {
  if (!id) {
    return null;
  }
  const { loading, error, data } = useQuery(GET_TECHNOLOGIES_BY_ID(id));
  const section = data?.technologies || {};

  return {
    loading,
    error,
    section: {
      title: section.title || "",
      technologies: section?.technologyCollection?.items || [],
    },
  };
};
