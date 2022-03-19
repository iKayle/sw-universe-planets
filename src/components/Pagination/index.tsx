import { useContext } from "react";
import PlanetsContext from "../../context/PlanetsContext";

interface PaginationProps {
  data: any;
}

export const Pagination = ({ data }: PaginationProps) => {
  const { setPage, page } = useContext(PlanetsContext);

  const toNext = () => {
    data?.next ? setPage(page + 1) : null;
  };
  const toBack = () => {
    data?.previous ? setPage(page - 1) : null;
  };

  return (
    <nav
      className="bottom-0 left-0 right-0 flex items-center justify-between py-3 sm:px-6 lg:px-8 bg-none"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-white">
          Showing{" "}
          <span className="font-medium">
            {data.results?.length * page - 10}
          </span>{" "}
          to <span className="font-medium">{data.results?.length * page}</span>{" "}
          of <span className="font-medium">{data?.count}</span> results
        </p>
      </div>
      <div className="flex justify-between flex-1 sm:justify-end">
        <button
          onClick={() => toBack()}
          disabled={!data?.previous}
          className="relative inline-flex items-center px-4 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md disabled:opacity-30 disabled:cursor-not-allowed hover:text-indigo-500 hover:scale-105"
        >
          Previous
        </button>
        <button
          onClick={() => toNext()}
          disabled={!data?.next}
          className="relative inline-flex items-center py-1 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md disabled:opacity-30 disabled:cursor-not-allowed px-7 hover:text-indigo-500 hover:scale-105"
        >
          Next
        </button>
      </div>
    </nav>
  );
};
