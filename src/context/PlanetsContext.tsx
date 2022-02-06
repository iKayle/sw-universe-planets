import { createContext } from "react";

interface PlanetsContextProps {
  data: any;
  loading: boolean;
  filters: {
    filterByName: {
      name: string;
    };
  };
  setFilters: any;
}

const PlanetsContext = createContext<PlanetsContextProps>({
  data: [],
  loading: false,
  filters: {
    filterByName: {
      name: "",
    },
  },
  setFilters: () => {},
});

export default PlanetsContext;
