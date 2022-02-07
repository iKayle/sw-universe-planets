import { useEffect, useState } from "react";
import { getAllPlanets } from "../services";
import PlanetsContext from "./PlanetsContext";

interface PlanetsProviderProps {
  children: React.ReactNode;
}

const PlanetsProvider = ({ children }: PlanetsProviderProps) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

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
    setLoading(true);
    getAllPlanets()
      .then((planets) => {
        setData(planets.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error("Ops! Ocorreu um erro" + err);
      });
  }, []);

  return (
    <PlanetsContext.Provider value={{ data, loading, filters, setFilters }}>
      {children}
    </PlanetsContext.Provider>
  );
};
export default PlanetsProvider;
