import React, { useEffect, useMemo, useCallback } from "react";
import cn from "classnames";
import Icon from "../icon";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTypedSelector } from "@/store/hooks/useTypedSelector";
import { HeaderState } from "@/store/types/header";

interface IPagination {
  currentPage: number;
  setCurrentPage: (value: number) => void;
  pagesTotal: number;
  perPage: number;
  sectionRef: React.RefObject<HTMLDivElement>;
}
const Pagination: React.FC<IPagination> = ({
  currentPage,
  setCurrentPage,
  pagesTotal,
  perPage,
  sectionRef,
}) => {
  const { height }: HeaderState = useTypedSelector((state) => state.header);
  const router = useRouter();
  const totalPages = Math.ceil(pagesTotal / perPage);

  const handlePageChange = useCallback(
    (page: number) => {
      setCurrentPage(page);
      router.push(
        {
          query: { ...router.query, pages: page },
        },
        undefined,
        { shallow: true }
      );

      if (sectionRef?.current) {
        const scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          0;

        const headerHeight = height || 0;
        const sectionPosition =
          sectionRef.current.getBoundingClientRect().top +
          scrollTop +
          -headerHeight -
          20;
        window.scrollTo({ top: sectionPosition, behavior: "smooth" });
      }
    },
    [router, setCurrentPage]
  );

  const handlePrevious = () => handlePageChange(currentPage - 1);
  const handleNext = () => handlePageChange(currentPage + 1);

  return (
    <nav className="my-10" aria-label="Page navigation">
      <ul className="flex items-center justify-center -space-x-px h-10 text-base">
        <li className="p-2">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={cn(
              "flex items-center justify-center px-4 h-10 text-black bg-light-gray hover:bg-primary-green hover:text-white",
              {
                "bg-light-gray text-gray pointer-events-none":
                  currentPage === 1,
              }
            )}
          >
            <span className="sr-only">Previous</span>
            <Icon icon="arrow-prev" />
          </button>
        </li>
        {Array.from({ length: totalPages }, (_, index) => (
          <li key={index + 1} className="p-2">
            <button
              onClick={() => handlePageChange(index + 1)}
              className={cn(
                {
                  "bg-primary-green text-white": index + 1 === currentPage,
                  "text-black bg-light-gray": index + 1 !== currentPage,
                },
                "flex items-center justify-center px-4 h-10 bg-light-gray hover:bg-primary-orange hover:text-white"
              )}
              aria-current={index + 1 === currentPage ? "page" : undefined}
            >
              {index + 1}
            </button>
          </li>
        ))}
        <li className="p-2">
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={cn(
              "flex items-center justify-center px-4 h-10 text-black bg-light-gray hover:bg-primary-green hover:text-white",
              {
                "bg-light-gray text-gray pointer-events-none":
                  currentPage === totalPages,
              }
            )}
          >
            <span className="sr-only">Next</span>
            <Icon icon="arrow-next" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
