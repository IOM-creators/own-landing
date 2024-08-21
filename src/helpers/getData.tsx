import { queryMap } from "@/graphql";
import { GET_PAGE_COLLECTIONS } from "@/graphql/queries/page-collection";
import { GET_SECTION_ENTRY } from "@/graphql/queries/section";
import { client } from "@/pages/_app";

export async function fetchPageContent(
    slug: string,
    fetchOnlyHeaderFooter = false,
    items?: any[]
) {
    // Fetch header and footer
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

    // Use provided items or fetch page collections if not fetching only header and footer
    const pageContentItems =
        items ||
        (await (async () => {
            const { data: pageData } = await client.query({
                query: GET_PAGE_COLLECTIONS(),
                variables: { slug },
            });
            return pageData.pageCollection.items[0].pageContent.items;
        })());

    // Fetch sections and their associated components
    const sectionsWithComponents = await Promise.all(
        pageContentItems.map(async (item: any) => {
            const { data: sectionData, loading } = await client.query({
                query: GET_SECTION_ENTRY(item.sys.id),
                variables: { id: item.sys.id },
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
        sections: sectionsWithComponents,
        header: headerData.data.header,
        footer: footerData.data.footer,
    };
}
