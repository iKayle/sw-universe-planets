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
    order: {
      column: string;
      sort: string;
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
    filterByNumericValues: [
      {
        column: "",
        comparison: "",
        value: "",
      },
    ],
    order: {
      column: "",
      sort: "",
    },
  },
  setFilters: () => {},
});

export default PlanetsContext;
