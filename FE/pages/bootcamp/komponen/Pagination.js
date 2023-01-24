import _ from "lodash";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

export default function Pagination({
  items,
  pageSize,
  currentPage,
  onPageChange,
}) {
  const pageCount = items / pageSize;
  if (Math.ceil(pageCount) === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          onClick={() => onPageChange(currentPage === 1 ? 1 : currentPage - 1)}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </button>
        <button
          onClick={() =>
            onPageChange(
              pages.length === currentPage ? currentPage : currentPage + 1
            )
          }
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing{" "}
            <span className="font-medium">
              {currentPage > 1 ? `${currentPage + 7}` : currentPage}
            </span>{" "}
            to{" "}
            <span className="font-medium">
              {pageSize * currentPage > items ? items : pageSize * currentPage}
            </span>{" "}
            of <span className="font-medium">{items}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              onClick={() =>
                onPageChange(currentPage === 1 ? 1 : currentPage - 1)
              }
              className="cursor-pointer relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
            {pages.map((page) => {
              return currentPage === page ? (
                <button
                  key={page}
                  disabled
                  onClick={() => onPageChange(page)}
                  className={
                    page === currentPage
                      ? "disable relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
                      : "cursor-pointer relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                  }
                >
                  {page}
                </button>
              ) : (
                <button
                  key={page}
                  onClick={() => onPageChange(page)}
                  className={
                    page === currentPage
                      ? "disable relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
                      : "cursor-pointer relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                  }
                >
                  {page}
                </button>
              );
            })}
            <button
              onClick={() =>
                onPageChange(
                  pages.length === currentPage ? currentPage : currentPage + 1
                )
              }
              className="cursor-pointer relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
