import { gql, useQuery } from "@apollo/client";

export const GET_VIDEO_ENTRY = (id: string) => gql`
  query iomLandingEntryQuery {
    video(id: "${id}") {
      title
      video{
        url
      }
      videoPoster{
        url
      }
      height
      objectFit
      autoPlay
      loop
    }
  }
`;

export const useGetVideo = (id: string = "") => {
  const { loading, error, data } = useQuery(GET_VIDEO_ENTRY(id));
  const video = data?.video;

  return {
    loading,
    error,
    video,
  };
};
