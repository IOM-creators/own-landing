import Section from "@/components/section";
import Link from "next/link";
import { NextPage } from "next/types";
import { useProjects } from "@/graphql/queries/projects";
import { useEffect, useState } from "react";
import Icon from "@/components/icon";
import { useRouter } from "next/router";
import cn from "classnames";

const ArtilcleSlugPage: NextPage = () => {
  const router = useRouter();
  const { pages } = router.query;
  const initPage = Number(pages) ? Number(pages) : 1;
  const PAGE_SIZE = 1;
  const [currentPage, setCurrentPage] = useState<number>(initPage);
  const { content } = useProjects((currentPage - 1) * PAGE_SIZE);
  const totalPages = Math.ceil(content?.total / PAGE_SIZE);
  const pagesPagination = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  useEffect(() => {
    setCurrentPage(initPage);
  }, [pages]);

  const handlePage = (e: MouseEvent, page: number) => {
    e.preventDefault();
    setCurrentPage(page);
    router.push({
      query: { pages: page },
    });
  };
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
      <nav aria-label="Page navigation">
        <ul className="flex items-center justify-center -space-x-px h-10 text-base">
          <li className="p-2">
            <a
              href="#"
              className=" border  rounded-s-lg flex items-center justify-center px-4 h-10 leading-tight text-blue bg-white border border-blue  hover:bg-dark-blue hover:text-white"
              onClick={(e: any) =>
                handlePage(e, currentPage <= 1 ? 1 : currentPage - 1)
              }
            >
              <span className="sr-only">Previous</span>
              <Icon icon="arrow-prev" />
            </a>
          </li>
          {pagesPagination.map((p) => (
            <li key={p} className="p-2">
              <a
                href="#"
                className={cn(
                  {
                    "bg-dark-blue text-white": p === currentPage,
                    "text-blue bg-white": p !== currentPage,
                  },
                  "flex items-center justify-center px-4 h-10 leading-tight  border border-blue hover:bg-dark-blue hover:text-white"
                )}
                onClick={(e: any) => handlePage(e, p)}
              >
                {p}
              </a>
            </li>
          ))}
          <li className="p-2">
            <a
              href="#"
              className="flex items-center justify-center px-4 h-10 leading-tight text-blue bg-white border border-blue rounded-e-lg hover:bg-dark-blue hover:text-white"
              onClick={(e: any) =>
                handlePage(
                  e,
                  currentPage < content?.total
                    ? currentPage + 1
                    : content?.total
                )
              }
            >
              <span className="sr-only">Next</span>
              <Icon icon="arrow-next" />
            </a>
          </li>
        </ul>
      </nav>
    </Section>
  );
};

export default ArtilcleSlugPage;
