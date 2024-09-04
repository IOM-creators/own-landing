import { GET_PROJECTS_BY_SLUG } from "@/graphql/queries/projects";
import { client } from "../_app";
import { CustomNextPageContext } from "../../types/page-props";
import { NextPage } from "next";
import Page from "@/components/page";
import Image from "@/components/image";
import Icon from "@/components/icon";
import Button from "@/components/button";
import { useWindowWidth } from "@/helpers/reactHooks";
import { useEffect, useState } from "react";
import Custom404 from "../404";
import { fetchPageContent } from "@/helpers/getData";

export const createApolloClient = () => client;

const Projects: NextPage = (props: any) => {
  // State to manage sections on the client side
  const [clientItems, setClientItems] = useState<any[]>([]);

  // Use window width for responsive rendering
  const windowWidth: number = useWindowWidth() || 0;

  useEffect(() => {
    // Ensure client-side sections are consistent with server-side
    setClientItems(props.items || []);
  }, [props.items]);

  // If no items are found, return null or a 404 component
  if (!props?.items?.length) {
    return <Custom404 />;
  }

  const item = clientItems[0]; // Assuming you are displaying the first item

  const customStyles: React.CSSProperties = {
    "--pd-top": `100px`,
    "--pd-bottom": `50px`,
    "--bg-height": `50%`,
    "--bg-section": `#FAF7F4`,
  } as React.CSSProperties;

  return (
    <Page sections={props.sections} sectionIndex={0}>
      <section className="section" style={customStyles}>
        <div className="section__wrapper container">
          <div className="project__header flex flex-wrap justify-between items-start">
            <div className="mb-4">
              {item?.title && <h2 className="mb-4 text-black">{item.title}</h2>}
              {item?.technologies && (
                <ul className="technologies flex items-center gap-4 mt-2">
                  {item.technologies.map(
                    (technology: string, index: number) => (
                      <li key={index} className="bg-white p-2">
                        <span>{technology}</span>
                      </li>
                    )
                  )}
                </ul>
              )}
            </div>
            {item?.siteLink && (
              <Button
                link={item.siteLink}
                typeButton='Link'
                styleButton={item.styleButton}
                className="max-w-[270px] w-full"
              >
                Open Live Site
                <Icon
                  icon="arrow-next"
                  className="ml-2 transform transition-transform group-hover:-translate-x-[-5px]"
                />
              </Button>
            )}
          </div>
          {windowWidth && windowWidth >= 1024
            ? item?.heroImage && (
              <Image
                src={item.heroImage.url}
                className="object-cover lg:object-contain"
                classWrapper="my-10 before:pt-[100%] lg:before:pt-[34%]"
              />
            )
            : item?.mobileHeroImage && (
              <Image
                src={item.mobileHeroImage.url}
                className="object-cover lg:object-contain"
                classWrapper="my-10 before:pt-[100%] lg:before:pt-[34%]"
              />
            )}
        </div>
      </section>
    </Page>
  );
};

export default Projects;

export const getServerSideProps = async ({
  locale,
  params,
  query,
}: CustomNextPageContext) => {
  const slug = params.slug as string;
  const client = createApolloClient();

  try {
    const res = await client.query({
      query: GET_PROJECTS_BY_SLUG(slug),
    });

    const { header, footer, sections } = await fetchPageContent(
      slug,
      false,
      res.data.projectCollection.items[0].pageContent.items
    );
    // Check if items are available, otherwise return a 404 page
    if (!res.data.projectCollection.items.length) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        header: header,
        footer: footer,
        slug: slug,
        items: res.data.projectCollection.items,
        sections: sections,
      },
    };
  } catch (e) {
    console.error("Error fetching project:", e);
    return {
      notFound: true,
    };
  }
};
