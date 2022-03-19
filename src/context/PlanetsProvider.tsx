import { useEffect, useState } from "react";
import { getAllPlanets } from "../services";
import PlanetsContext from "./PlanetsContext";

interface PlanetsProviderProps {
  children: React.ReactNode;
}

const PlanetsProvider = ({ children }: PlanetsProviderProps) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState(1);

  const [filters, setFilters] = useState({
    filterByName: {
      name: "",
    },
    filterByNumericValues: [],
    order: {
      column: "",
      sort: "ASC",
    },
  });

  useEffect(() => {
    data?.length === 0 && setLoading(true);
    getAllPlanets(page)
      .then((planets) => {
        setData(planets.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error("Ops! Ocorreu um erro" + err);
      });
  }, [page]);

  return (
    <PlanetsContext.Provider
      value={{
        data,
        loading,
        filters,
        setFilters,
        page,
        setPage,
        setData,
      }}
    >
      {children}
    </PlanetsContext.Provider>
  );
};
export default PlanetsProvider;
