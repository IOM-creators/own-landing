import { gql, useQuery } from "@apollo/client";

export const GET_ABOUT_SECTION_ENTRY = gql`
  query iomLandingEntryQuery {
    aboutSection(id: "4CG62iXQ3HJqKExfOZnc2B") {
      title
      image{
        url
      }
      foundersCollection{
       items{
        title
        url
      }
      }
  		content{
        json
      }
      foundersText
			projectsInfo
    }
  }
`;

export const useGetAboutSection= () => {
  const { loading, error, data } = useQuery(GET_ABOUT_SECTION_ENTRY);
  const aboutSection = data?.aboutSection || {};

  return {
    loading,
    error,
    aboutSection: {
      title:aboutSection?.title,
      image:aboutSection?.image,
      foundersCollection:aboutSection?.foundersCollection,
      foundersText:aboutSection?.foundersText,
      content:aboutSection?.content,
      projectsInfo:aboutSection?.projectsInfo,
    },
  };
};
