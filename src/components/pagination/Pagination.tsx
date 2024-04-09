import React, { useEffect } from "react";
import cn from "classnames";
import Icon from "../icon";
import { useRouter } from "next/router";

interface IPagination {
  currentPage: number;
  setCurrentPage: (value: number) => void;
  pagesTotal: number;
  perPage: number;
}
const Pagination: React.FC<IPagination> = ({
  currentPage,
  setCurrentPage,
  pagesTotal,
  perPage,
}) => {
  const router = useRouter();
  const { pages } = router.query;
  const initPage = Number(pages) ? Number(pages) : 1;
  const totalPages = Math.ceil(pagesTotal / perPage);
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
    <nav className="my-10" aria-label="Page navigation">
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
                currentPage < totalPages ? currentPage + 1 : totalPages
              )
            }
          >
            <span className="sr-only">Next</span>
            <Icon icon="arrow-next" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
