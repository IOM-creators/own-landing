import { gql, useQuery } from "@apollo/client";

export const GET_PROJECTS = () => gql`
  query ProjectCollection($limit: Int!, $skip: Int!) {
    projectCollection(limit: $limit, skip: $skip) {
      total
      items {
        ... on Project {
          slug
          title
          image {
            url
          }
          heroImage {
            url
          }
          siteLink
          technologies
        }
        pageContent: pageContentCollection {
          items {
            sys {
              id
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
          slug
          title
          image{
            url
          }
          heroImage{
            url
          }
          siteLink
          technologies
          pageContent: pageContentCollection {
            items {
              sys {
                id
              }
            }
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
      image{
        url
      }
      heroImage{
            url
      }
      siteLink
      technologies
    }
  }
`;

export const useProjects = (skip: number) => {
  const { loading, error, data } = useQuery(GET_PROJECTS(), {
    variables: { limit: 4, skip: skip },
  });
  const section = data?.projectCollection || {};
  const content = {
    total: section?.total || 0,
    items:
      section.items?.map((item: any) => ({
        ...item,
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
    title: section.title,
    item:
      section.items?.map((item: any) => ({
        ...item,
      }))[0] || {},
  };

  return {
    loading,
    error,
    content,
  };
};

export const useProjectById = (id: string = "") => {
  if (!id) {
    return null;
  }
  const { loading, error, data } = useQuery(GET_PROJECTS_BY_ID(id));
  const project = data?.project || {};

  return {
    loading,
    error,
    project,
  };
};
