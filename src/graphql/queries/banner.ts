import { gql, useQuery } from "@apollo/client";


export const GET_BANNER_BY_ID = (id: string) => gql`
  query ProjectCollection {
    banner(id: "${id}") {
        title
          currentProject{
          ...on Project{
             sys{
              id
            } 
          }
        }
      }
  }
`;


export const useBannerById = (id: string = "") => {
    const { loading, error, data } = useQuery(GET_BANNER_BY_ID(id));
    const banner = data?.banner || {};
    const content = {
        banner:banner
    };
  
    return {
      loading,
      error,
      content,
    };
  };
  
  