import { useProjects, useProjectsTotal } from "@/graphql/queries/projects";
import { useState } from "react";
import Pagination from "@/components/pagination";
import Image from "@/components/image";
import { NextPage, NextPageContext } from "next/types";
import { GET_PAGE_COLLECTIONS } from "@/graphql/queries/page-collection";
import { client } from "../_app";
import Page from "@/components/page";
import RichText from "@/components/rich-text";
import Link from "next/link";

export const createApolloClient = () => client;

const SlugPage: NextPage = (props: any) => {
  const PAGE_SIZE = 4;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { total } = useProjectsTotal();
  const { content } = useProjects((currentPage - 1) * PAGE_SIZE);
  const customStyles: React.CSSProperties = {
    "--pd-top": `0px`,
    "--pd-bottom": `50px`,
  } as React.CSSProperties;

  return (
    <Page page={props.items[0]} sectionIndex={2}>
      <section className="section" style={customStyles}>
        <div className="section__wrapper container">
          <nav>
            <ul className="grid ms:grid-cols-1 items-start  lg:grid-cols-2 gap-4">
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
                        <h2 className="absolute lef-0 bottom-0 p-6 mix-blend-exclusion text-white">
                          {item.title}
                        </h2>
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

export interface CustomNextPageContext extends NextPageContext {
  params: {
    slug: string;
  };
  id: string;
}

export const getServerSideProps = async ({
  locale,
  params,
  query,
}: CustomNextPageContext) => {
  const slug = "projects" as string;
  const client = createApolloClient();
  try {
    const res = await client.query({
      query: GET_PAGE_COLLECTIONS(),
      variables: {
        slug: slug,
      },
    });
    return {
      props: {
        slug: slug,
        items: res.data.pageCollection.items,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

export default SlugPage;
