import { NextPage, NextPageContext } from "next/types";
import { GET_PAGE_COLLECTIONS } from "@/graphql/queries/page-collection";
import { client } from "./_app";
import Page from "@/components/page";
import Custom404 from "./404";
import { GET_SECTION_ENTRY } from "@/graphql/queries/section";
import { queryMap } from "@/graphql";

export const createApolloClient = () => client;

const SlugPage: NextPage = (props: any) => {
  console.log('page');

  if (!props?.items?.length) {
    return <Custom404 />;
  } else {
    return <Page page={props.items[0]}></Page>;
  }
};

export const getServerSideProps = async ({
  locale,
  params,
  query,
}: CustomNextPageContext) => {
  const slug = params.slug as string;
  const client = createApolloClient();

  try {
    // Fetch the page collections
    const { data: pageData } = await client.query({
      query: GET_PAGE_COLLECTIONS(),
      variables: { slug },
    });

    // Extract page content items
    const pageContentItems = pageData.pageCollection.items[0].pageContent.items;

    // Fetch sections for each page content item
    const sectionsResponses = await Promise.all(
      pageContentItems.map((item: any) =>
        client.query({
          query: GET_SECTION_ENTRY(item.sys.id),
          variables: { id: item.sys.id },
        })
      )
    );

    // Create an array to hold section data and associated components
    const sectionComponentsPromises = sectionsResponses.map(async ({ data }: { data: any }) => {
      const section = data.section;
      const components = section.componentsCollection.items;

      // Fetch data for each component in the section
      const componentsResponses = await Promise.all(
        components.map((component: any) => {
          const queryFunction = queryMap[component.__typename];

          if (!queryFunction) {
            throw new Error(`No query found for component type: ${component.__typename}`);
          }

          return client.query({
            query: queryFunction(component.sys.id),
            variables: { id: component.sys.id },
          });
        })
      );

      // Attach components data to the section data
      const componentsData = componentsResponses.map(({ data }: { data: any }) => data);

      return {
        section: {
          ...section,
          components: componentsData,
        }
      };
    });

    // Wait for all sections and components data to be fetched
    const sectionsWithComponents = await Promise.all(sectionComponentsPromises);
    console.log(sectionsWithComponents);

    return {
      props: {
        slug,
        sectionsWithComponents, // Pass sections with their components
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      notFound: true,
    };
  }
};
export default SlugPage;
