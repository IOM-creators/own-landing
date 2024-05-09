import { useProjects, useProjectsTotal } from "@/graphql/queries/projects";
import { useState } from "react";
import Pagination from "@/components/pagination";
import InfoCard from "@/components/info-card";
import { NextPage, NextPageContext } from "next/types";
import { GET_PAGE_COLLECTIONS } from "@/graphql/queries/page-collection";
import { client } from "../_app";
import Page from "@/components/page/page";

export const createApolloClient = () => client;

const SlugPage: NextPage = (props: any) => {
  const PAGE_SIZE = 3;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { total } = useProjectsTotal();
  const { content } = useProjects((currentPage - 1) * PAGE_SIZE);
  console.log("content", content, total);

  return (
    <Page page={props.items[0]}>
      <section className="container">
        <h2 className="text-3xl my-6">Our Projects</h2>
        <nav>
          <ul className="grid ms:grid-cols-1 items-start  lg:grid-cols-3 gap-6 md:gap-8 ">
            {content &&
              content.items &&
              content.items.map((item: any) => {
                return (
                  <li key={item.slug}>
                    <InfoCard
                      card={item.card}
                      imgClasses="before:pt-[50%]"
                      descriptionClasses="dots-3-line"
                    />
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
