import { gql, useQuery } from "@apollo/client";

export const GET_PROJECTS = () => gql`
  query ProjectCollection($limit: Int!, $skip: Int!) {
    projectCollection(limit: $limit, skip: $skip) {
      total
      items {
        ... on Project {
          title
          slug
          card {
            ... on InfoCard {
              title
              description {
                json
              }
              image {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_PROJECTS_BY_SLUG = (slug: string) => gql`
  query ProjectCollection {
    projectCollection(where: { slug: "${slug}"}, limit: 1 ) {
      total
      items{
        ...on Project{
          title
          slug
        }
        card {
            ... on InfoCard {
              title
              description {
                json
              }
              image {
                url
              }
              revert
            }
          }
      }
    }
  }
`;


export const GET_PROJECTS_BY_ID = (id: string) => gql`
  query ProjectCollection {
    project(id:"${id}" ) {
      title
			slug
     	card {
        ... on InfoCard {
          title
          description {
            json
          }
          image {
            url
          }
          revert
        }
      } 
    }
  }
`;

export const useProjects = (skip: number) => {
  const { loading, error, data } = useQuery(GET_PROJECTS(), {
    variables: { limit: 3, skip: skip },
  });
  const section = data?.projectCollection || {};
  const content = {
    total: section?.total || 0,
    items:
      section.items?.map((item: any) => ({
        ...item,
        card: {
          title: item.card?.title,
          image: item.card?.image?.url || "",
          description: item.card?.description?.json,
          btnText: "More info",
          btnLink: `/projects/${item.slug}`,
        },
      })) || [],
  };

  return {
    loading,
    error,
    content,
  };
};
export const useProjectsTotal = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS(), {
    variables: { limit: 1, skip: 1 },
  });
  const section = data?.projectCollection || {};
  const total = section.total || 0;

  return {
    loading,
    error,
    total,
  };
};

export const useProject = (slug: string = "") => {
  const { loading, error, data } = useQuery(GET_PROJECTS_BY_SLUG(slug));
  const section = data?.projectCollection || {};
  const content = {
    total: section?.total || 0,
    item:
      section.items?.map((item: any) => ({
        ...item,
        card: {
          title: item.card?.title,
          image: item.card?.image?.url || "",
          content: item.card?.content?.json,
          revert: item.card?.revert,
          description: item.card?.description?.json,
        },
      }))[0] || {},
  };

  return {
    loading,
    error,
    content,
  };
};

export const useProjectById = (id: string = "") => {
  if(!id){
    return null
  }
  const { loading, error, data } = useQuery(GET_PROJECTS_BY_ID(id));
  const project = data?.project || {};

  return {
    loading,
    error,
    project,
  };
};

