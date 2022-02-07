import { useContext, useState } from "react";
import PlanetsContext from "../../../context/PlanetsContext";
import { TitleNavBar } from "../../MainLayout/TitleNavBar";
import { Table } from "../../Table";
import { LoadingSpinner } from "../../LoadingSpinner";
import { PlanetsFilters } from "../../Filters";

export const HomeScreen = () => {
  const { loading } = useContext(PlanetsContext);

  return (
    <div>
      <TitleNavBar title="Planets Star Wars" />
      <div className="flex flex-col space-y-5">
        <PlanetsFilters />
        {loading ? (
          <LoadingSpinner description="This may take a few seconds, please do not close this page." />
        ) : (
          <Table />
        )}
      </div>
    </div>
  );
};
