import { gql, useQuery } from "@apollo/client";

export const GET_SERVICE_BY_ID = (id: string) => gql`
  query ServiceCollection {
    service(id:"${id}"){
      title
      description
      image{
        url
      }
    }
  }
`;

export const useGetServiceById = (id: string = "") => {
  if (!id) {
    return null;
  }
  const { loading, error, data } = useQuery(GET_SERVICE_BY_ID(id));
  const service = data?.service|| {};

  return {
    loading,
    error,
    service,
  };
};