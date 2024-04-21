import Section from "@/components/section";
import { NextPage } from "next/types";
import { useProjects, useProjectsTotal } from "@/graphql/queries/projects";
import { useState } from "react";
import Pagination from "@/components/pagination";
import InfoCard from "@/components/info-card";

const Projects: NextPage = () => {
  const PAGE_SIZE = 3;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { total } = useProjectsTotal();
  const { content } = useProjects((currentPage - 1) * PAGE_SIZE);

  return (
    <Section className="section  my-10  container mx-lg">
      <h1 className="text-2xl mb-10">Projects</h1>
      <nav>
        <ul className="grid ms:grid-cols-1 items-start  lg:grid-cols-3 gap-6 md:gap-8 ">
          {content &&
            content.items &&
            content.items.map((item: any, index: number) => {
              return (
                <li key={item.slug}>
                  <InfoCard card={item.card} imgClasses="before:pt-[50%]" />
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

export default Projects;
