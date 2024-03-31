import clsx from "clsx";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import { PaginationProps } from "./types";

export function Pagination({
  totalPages,
  selectedPage,
  handleSelectPage,
}: PaginationProps) {
  const getPageNumbers = (): (number | string)[] => {
    const pages: (number | string)[] = [1];

    if (totalPages <= 8) {
      for (let i = 2; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const leftEllipsis = selectedPage > 4;
      const rightEllipsis = selectedPage < totalPages - 3;

      if (leftEllipsis) {
        pages.push("...");
      }

      if (leftEllipsis && rightEllipsis) {
        for (let i = selectedPage - 2; i <= selectedPage + 2; i++) {
          pages.push(i);
        }
      } else if (leftEllipsis) {
        for (let i = totalPages - 6; i <= totalPages; i++) {
          pages.push(i);
        }
      } else if (rightEllipsis) {
        for (let i = 2; i <= 6; i++) {
          pages.push(i);
        }
      }

      if (rightEllipsis) {
        pages.push("...");
      }
    }

    if (!pages.includes(totalPages)) {
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex justify-center mt-2">
      <ul className="flex text-sm gap-1">
        <button
          onClick={() => selectedPage > 1 && handleSelectPage(selectedPage - 1)}
          className={clsx(
            "w-5 flex justify-center rounded-full items-center cursor-pointer",
            {
              "opacity-50 border-none cursor-default": selectedPage === 1,
            }
          )}
        >
          <CgChevronLeft className="text-lg text-primary" />
        </button>
        {getPageNumbers().map((pageNumber, index) => {
          return (
            <li
              onClick={() =>
                typeof pageNumber === "number" &&
                handleSelectPage(pageNumber as number)
              }
              key={index}
              className={clsx(
                "px-1.5 rounded font-semibold text-gray-700 flex justify-center items-center",
                {
                  "bg-primary text-white": pageNumber === selectedPage,
                },
                {
                  "cursor-pointer": pageNumber !== "...",
                  "cursor-default": pageNumber === "...",
                }
              )}
            >
              {pageNumber}
            </li>
          );
        })}
        <button
          onClick={() =>
            selectedPage < totalPages && handleSelectPage(selectedPage + 1)
          }
          className={clsx(
            "w-5 flex justify-center rounded-full items-center cursor-pointer",
            {
              "opacity-50 border-none cursor-default":
                selectedPage === totalPages,
            }
          )}
        >
          <CgChevronRight className="text-lg text-primary" />
        </button>
      </ul>
    </div>
  );
}

export default Pagination;
