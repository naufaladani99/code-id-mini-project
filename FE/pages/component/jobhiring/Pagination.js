const Pagination = ({
  jopoPerPage,
  totalData,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalData / jopoPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex">
      <button
        onClick={() =>
          currentPage !== 1 ? setCurrentPage(currentPage - 1) : null
        }
        className="group relative flex w-full justify-center rounded-md border-2 border-gray-200 py-2 px-2 text-sm font-medium text-gray-800 hover:bg-gray-200 font-xs"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            className={`group relative flex w-full justify-center rounded-md border-2 border-gray-200 py-2 px-4 text-sm font-medium text-gray-800 hover:bg-gray-200 ${
              page === currentPage ? "bg-gray-200 text-white" : ""
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
      <button
        onClick={() =>
          currentPage <= pages.length - 1
            ? setCurrentPage(currentPage + 1)
            : null
        }
        // onClick={() => console.log(pages)}
        className="group relative flex w-full justify-center rounded-md border-2 border-gray-200 py-2 px-2 text-sm font-medium text-gray-800 hover:bg-gray-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
