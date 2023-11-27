import { gql, useQuery } from "@apollo/client";

export const GET_WHY_CHOOSE_US_ENTRY = gql`
  query iomLandingEntryQuery {
    whyChooseUs(id: "usGv4E1tnQn78QIYvfapQ") {
      title
      infoCardsCollection {
        items {
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
`;

const images = [
  {
    image: "why-choose-us-1",
  },
  {
    image: "why-choose-us-2",
  },
  {
    image: "why-choose-us-3",
  },
];

export const useGetWhyChooseUs = () => {
  const { loading, error, data } = useQuery(GET_WHY_CHOOSE_US_ENTRY);
  const section = data?.whyChooseUs || {};
  const content = {
    title: section.title,
    cards:
      section?.infoCardsCollection?.items?.map((item: any, index: number) => ({
        title: item.title,
        icon: images[index].image,
        description: item?.description?.json,
      })) || [],
  };
  return {
    loading,
    error,
    section: {
      ...content,
    },
  };
};
