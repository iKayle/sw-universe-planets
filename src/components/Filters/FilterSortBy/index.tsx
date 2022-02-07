import { useContext } from "react";
import { COLUMN_OPTIONS } from "../../../constants/optionsNumericValues";
import { ORDER_BY } from "../../../constants/orderBy";
import PlanetsContext from "../../../context/PlanetsContext";
import { ButtonRadio } from "../../Buttons/ButtonRadio";
import { InputFilterSelect } from "../InputFilterSelect";

export const FilterSortBy = () => {
  const { filters, setFilters } = useContext(PlanetsContext);

  return (
    <div className="flex flex-col items-center">
      <InputFilterSelect
        label="Sort by"
        placeholder="Select column"
        options={COLUMN_OPTIONS}
        onChange={(e) =>
          setFilters({
            ...filters,
            order: {
              ...filters.order,
              column: e.target.value,
            },
          })
        }
      />
      <ButtonRadio
        options={ORDER_BY}
        selected={filters.order.sort}
        onChange={(e) =>
          setFilters({
            ...filters,
            order: {
              ...filters.order,
              sort: e.target.value,
            },
          })
        }
      />
    </div>
  );
};
