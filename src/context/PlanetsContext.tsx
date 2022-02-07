import { createContext } from "react";
interface PlanetsContextProps {
  data: any;
  loading: boolean;
  filters: {
    filterByName: {
      name: string;
    };
    filterByNumericValues: {
      column: string;
      comparison: string;
      value: string;
    }[];
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
    filterByNumericValues: [
      {
        column: "",
        comparison: "",
        value: "",
      },
    ],
  },
  setFilters: () => {},
});

export default PlanetsContext;
