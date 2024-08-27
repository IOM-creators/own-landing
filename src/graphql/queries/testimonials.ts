import { gql, useQuery } from "@apollo/client";

export const GET_TESTIMONIALS_BY_ID = (id: string) => gql`
  query ServiceCollection {
    testimonials(id:"${id}"){
        title
        testimonialCollection{
    		items{
          ... on ReviewItem{
              name
              description
              link{
                ...on Link {
                    title
                    url
                    icon{
                      url
                    }
                    styleButton
                    buttonType
                }
              }
              platform{
                url
              }
              paddingTop
              paddingBottom
            }
        }
      }
    }
  }
`;

export const useGetTestimonials = (id: string = "") => {
  if (!id) {
    return null;
  }
  const { loading, error, data } = useQuery(GET_TESTIMONIALS_BY_ID(id));
  const section = data?.testimonials || {};

  return {
    loading,
    error,
    section: {
      title: section.title || "",
      testimonials: section?.testimonialCollection?.items || [],
    },
  };
};
