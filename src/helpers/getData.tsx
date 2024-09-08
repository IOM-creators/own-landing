import { queryMap } from "@/graphql";
import { GET_PAGE_COLLECTIONS } from "@/graphql/queries/page-collection";
import { GET_SECTION_ENTRY } from "@/graphql/queries/section";
import { client } from "@/pages/_app";
import { setCookie, getCookie } from "cookies-next";

export async function fetchPageContent(
  slug: string,
  req: any,
  res: any,
  fetchOnlyHeaderFooter = false,
  items?: any[]
) {
  setCookie("user-token", "example-token", {
    req,
    res,
    maxAge: 60 * 60 * 24 * 7,
  });
  const userToken = getCookie("user-token", { req, res }) || null;

  const queryFooter = queryMap["Footer"];
  const queryHeader = queryMap["Header"];

  const [footerData, headerData] = await Promise.all([
    client.query({ query: queryFooter("Footer") }),
    client.query({ query: queryHeader("Header") }),
  ]);

  if (fetchOnlyHeaderFooter) {
    return {
      header: headerData.data.header,
      footer: footerData.data.footer,
    };
  }

  const pageContentData: any =
    items ||
    (await (async () => {
      const { data: pageData } = await client.query({
        query: GET_PAGE_COLLECTIONS(),
        variables: { slug },
        fetchPolicy: "network-only",
      });

      return {
        title: pageData.pageCollection?.items[0]?.title || "",
        items: pageData.pageCollection?.items[0]?.pageContent?.items || [],
      };
    })());

  // Fetch sections and their associated components
  const sectionsWithComponents = await Promise.all(
    pageContentData.items.map(async (item: any) => {
      const { data: sectionData, loading } = await client.query({
        query: GET_SECTION_ENTRY(item.sys.id),
        variables: { id: item.sys.id },
        fetchPolicy: "network-only",
      });

      const section = sectionData.section;
      const components = section.componentsCollection.items;

      // Fetch data for each component in the section
      const componentsData = await Promise.all(
        components.map(async (component: any) => {
          const queryFunction = queryMap[component.__typename];

          if (!queryFunction) {
            throw new Error(
              `No query found for component type: ${component.__typename}`
            );
          }

          const { data: componentData } = await client.query({
            query: queryFunction(component.sys.id),
            variables: { id: component.sys.id },
            fetchPolicy: "network-only",
          });

          return componentData;
        })
      );

      return {
        loading,
        section: {
          ...section,
          components: componentsData,
        },
      };
    })
  );

  return {
    title: pageContentData.title,
    sections: sectionsWithComponents,
    header: headerData.data.header,
    footer: footerData.data.footer,
    userToken,
  };
}
