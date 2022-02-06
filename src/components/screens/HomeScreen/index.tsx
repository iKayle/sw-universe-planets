import { useContext } from "react";
import PlanetsContext from "../../../context/PlanetsContext";
import { Table } from "../../Table";
import { LoadingSpinner } from "../../LoadingSpinner";
import { InputFilterByName } from "../../Filters/FilterByName";

export const HomeScreen = () => {
  const { loading, filters, setFilters } = useContext(PlanetsContext);

  return (
    <div>
      <div className="sticky top-0 flex items-center justify-center px-4 py-3 text-sm font-semibold text-white bg-slate-700/70 backdrop-blur-sm ring-1 ring-black/10">
        <h1 className="text-2xl font-bold text-gray-200 md:text-3xl">
          Planets Star Wars
        </h1>
      </div>

      <div className="flex flex-col space-y-5">
        <div className="flex flex-row">
          <InputFilterByName
            label="Search by name"
            onChange={(e) =>
              setFilters({ ...filters, filterByName: { name: e.target.value } })
            }
            value={filters.filterByName.name}
          />
        </div>
        {loading ? (
          <LoadingSpinner description="This may take a few seconds, please do not close this page." />
        ) : (
          <Table />
        )}
      </div>
    </div>
  );
};
