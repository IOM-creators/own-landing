import Section from "@/components/section";
import Link from "next/link";
import { NextPage } from "next/types";
import { useProjects, useProjectsTotal } from "@/graphql/queries/projects";
import { useState } from "react";
import Pagination from "@/components/pagination";

const ArtilcleSlugPage: NextPage = () => {
  const PAGE_SIZE = 1;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { total } = useProjectsTotal();
  const { content } = useProjects((currentPage - 1) * PAGE_SIZE);

  return (
    <Section className="section py-10 my-10 md:py-16 md:my-16 container mx-lg">
      <h1 className="text-2xl">Projects</h1>
      <nav>
        <ul>
          {content &&
            content.items &&
            content.items.map((item: any, index: number) => {
              return (
                <li key={item.slug}>
                  <Link href={`/projects/${item.slug}`}>
                    {index + 1}: {item.title}
                  </Link>
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
    </Section>
  );
};

export default ArtilcleSlugPage;
