import { useEffect, useState } from "react";
import { useProjects, useProjectsTotal } from "@/graphql/queries/projects";
import Pagination from "@/components/pagination";
import Image from "@/components/image";
import { NextPage } from "next/types";
import { client } from "../_app";
import Page from "@/components/page";
import RichText from "@/components/rich-text";
import Link from "next/link";
import Custom404 from "../404";
import { CustomNextPageContext } from "../../types/page-props";
import { fetchPageContent } from "@/helpers/getData";

export const createApolloClient = () => client;

const SlugPage: NextPage = (props: any) => {
  // Ensure content is consistent between SSR and client-side rendering
  const [clientSections, setClientSections] = useState<any[]>([]);

  useEffect(() => {
    // Set sections only on the client side to prevent hydration mismatch
    setClientSections(props.sections || []);
  }, [props.sections]);

  // If no sections are found, show the 404 page
  if (!props?.sections?.length) {
    return <Custom404 />;
  }
  const PAGE_SIZE = 4;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { total } = useProjectsTotal();
  const { content } = useProjects((currentPage - 1) * PAGE_SIZE);
  const customStyles: React.CSSProperties = {
    "--pd-top": `0px`,
    "--pd-bottom": `50px`,
  } as React.CSSProperties;

  return (
    <Page sections={clientSections} sectionIndex={2}>
      <section className="section" style={customStyles}>
        <div className="section__wrapper container">
          <nav>
            <ul className="grid ms:grid-cols-1 items-start  lg:grid-cols-2 gap-6">
              {content &&
                content.items &&
                content.items.map((item: any) => {
                  return (
                    <li key={item.slug} className="relative">
                      {item?.image && (
                        <Image
                          src={item.image.url}
                          className="object-cover"
                          classWrapper="before:pt-[70%]"
                        />
                      )}
                      {item?.title && (
                        <div className="py-4 md:py-6">
                          {item.title && <h2 className="">{item.title}</h2>}
                          {item.technologies && (
                            <ul className="technologies flex items-center gap-4 mt-4">
                              {item.technologies.map(
                                (technology: string, index: number) => (
                                  <li
                                    key={index}
                                    className="border rounded-md p-2"
                                  >
                                    <span>{technology}</span>
                                  </li>
                                )
                              )}
                            </ul>
                          )}
                        </div>
                      )}
                      {item?.description && (
                        <div className="text-xl mt-2 dots-3-line">
                          <RichText richText={item.description} />
                        </div>
                      )}
                      <Link
                        href={`/projects/${item.slug}`}
                        className="text-xl top-0 left-0 absolute w-full h-full"
                      ></Link>
                    </li>
                  );
                })}
            </ul>
          </nav>
          {total > PAGE_SIZE && (
            <Pagination
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              pagesTotal={total}
              perPage={PAGE_SIZE}
            />
          )}
        </div>
      </section>
    </Page>
  );
};

// Server-side rendering for the page
export const getServerSideProps = async ({
  locale,
  params,
  query,
}: CustomNextPageContext) => {
  const slug = "projects" as string;

  try {
    // Fetch the page collections
    const { sections, header, footer } = await fetchPageContent(slug)
    return {
      props: {
        footer: footer,
        header: header,
        slug,
        sections: sections, // Pass sections with their components
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true,
    };
  }
};

export default SlugPage;
