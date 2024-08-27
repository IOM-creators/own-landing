import React, { useEffect, useMemo, useCallback } from "react";
import cn from "classnames";
import Icon from "../icon";
import { useRouter } from "next/router";
import Link from "next/link";

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

  // Memoize the array of pages for pagination
  const pagesPagination = useMemo(
    () => Array.from({ length: totalPages }, (_, index) => index + 1),
    [totalPages]
  );

  useEffect(() => {
    setCurrentPage(initPage);
  }, [initPage, setCurrentPage]);

  return (
    <nav className="my-10" aria-label="Page navigation">
      <ul className="flex items-center justify-center -space-x-px h-10 text-base">
        <li className="p-2">
          <Link
            href={{ query: { pages: currentPage <= 1 ? 1 : currentPage - 1 } }}
            passHref
            className={cn(
              "flex items-center justify-center px-4 h-10 text-black bg-light-gray hover:bg-primary-green hover:text-white",
              {
                "bg-light-gray text-gray pointer-events-none":
                  currentPage === 1,
              }
            )}
            aria-disabled={currentPage === 1}
          >
            <span className="sr-only">Previous</span>
            <Icon icon="arrow-prev" />
          </Link>
        </li>
        {pagesPagination.map((p) => (
          <li key={p} className="p-2">
            <Link
              href={{ query: { pages: p } }}
              passHref
              className={cn(
                {
                  "bg-primary-green text-white": p === currentPage,
                  "text-black bg-light-gray": p !== currentPage,
                },
                "flex items-center justify-center px-4 h-10 bg-light-gray hover:bg-primary-orange hover:text-white"
              )}
              aria-current={p === currentPage ? "page" : undefined}
            >
              {p}
            </Link>
          </li>
        ))}
        <li className="p-2">
          <Link
            href={{
              query: {
                pages: currentPage < totalPages ? currentPage + 1 : totalPages,
              },
            }}
            passHref
            className={cn(
              "flex items-center justify-center px-4 h-10 text-black bg-light-gray hover:bg-primary-green hover:text-white",
              {
                "bg-light-gray text-gray pointer-events-none":
                  currentPage === totalPages,
              }
            )}
            aria-disabled={currentPage === totalPages}
          >
            <span className="sr-only">Next</span>
            <Icon icon="arrow-next" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
