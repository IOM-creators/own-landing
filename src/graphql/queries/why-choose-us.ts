import { gql, useQuery } from "@apollo/client";

export const GET_WHY_CHOOSE_US_ENTRY = (id: string) => gql`
  query iomLandingEntryQuery {
    whyChooseUs(id: "${id}") {
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

export const useGetWhyChooseUs = (id: string = "") => {
  const { loading, error, data } = useQuery(GET_WHY_CHOOSE_US_ENTRY(id));
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
