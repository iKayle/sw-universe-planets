import { useContext } from "react";
import PlanetsContext from "../../../context/PlanetsContext";
import { TitleNavBar } from "../../MainLayout/TitleNavBar";
import { Table } from "../../Table";
import { LoadingSpinner } from "../../LoadingSpinner";
import { PlanetsFilters } from "../../Filters";
import { FilterSortBy } from "../../Filters/FilterSortBy";

export const HomeScreen = () => {
  const { loading } = useContext(PlanetsContext);

  return (
    <>
      <TitleNavBar title="Planets Star Wars" />
      <div className="flex flex-col space-y-5">
        <div className="flex flex-row mx-10 space-x-5">
          <FilterSortBy />
          <PlanetsFilters />
        </div>

        {loading ? (
          <LoadingSpinner description="This may take a few seconds, please do not close this page." />
        ) : (
          <Table />
        )}
      </div>
    </>
  );
};
