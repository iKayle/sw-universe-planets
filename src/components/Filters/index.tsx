import { useContext, useState } from "react";
import PlanetsContext from "../../context/PlanetsContext";
import { InputFilter } from "./InputFilter";
import { InputFilterSelect } from "./InputFilterSelect";
import { ButtonRemove } from "../Buttons/ButtonRemove";
import {
  COLUMN_OPTIONS,
  COMPARISON_OPTIONS,
} from "../../constants/optionsNumericValues";
import { ButtonCompare } from "../Buttons/Button/ButtonCompare";

export const PlanetsFilters = () => {
  const { filters, setFilters } = useContext(PlanetsContext);
  const [column, setColumn] = useState("");
  const [comparison, setComparison] = useState("");
  const [numberValue, setNumberValue] = useState("");

  const selectColumn = COLUMN_OPTIONS.filter(
    (c) => !filters.filterByNumericValues.find((f) => f.column === c.value)
  );

  const filterCompare = () => {
    if (column && comparison && numberValue) {
      setFilters({
        ...filters,
        filterByNumericValues: [
          ...filters.filterByNumericValues,
          { column, comparison, value: numberValue },
        ],
      });
      setColumn("");
      setComparison("");
      setNumberValue("");
    }
  };

  return (
    <div className="flex flex-row mx-10 space-x-5">
      <InputFilter
        label="Search planets"
        placeholder="Search by name"
        onChange={(e) =>
          setFilters({ ...filters, filterByName: { name: e.target.value } })
        }
        value={filters.filterByName.name}
      />
      <div>
        <InputFilterSelect
          label=" Search by comparison"
          placeholder="Select column"
          options={selectColumn}
          onChange={(e) => setColumn(e.target.value)}
        />
        <InputFilterSelect
          placeholder="Select comparison"
          options={COMPARISON_OPTIONS}
          onChange={(e) => setComparison(e.target.value)}
        />
        <InputFilter
          type="number"
          placeholder="Enter number"
          onChange={(e) => setNumberValue(e.target.value)}
          value={numberValue}
        />
        <ButtonCompare
          label="Compare"
          onClick={() => filterCompare()}
          disabled={!column || !comparison || !numberValue}
        />
      </div>

      {filters.filterByNumericValues.map((f) => {
        return (
          <div
            className="flex flex-col items-center justify-center"
            key={f.column}
          >
            <ButtonRemove
              label={`${
                COLUMN_OPTIONS.find((c) => c.value === f.column)?.label
              } ${
                COMPARISON_OPTIONS.find((c) => c.value === f.comparison)
                  ?.displayName
              } ${f.value}`}
              onClick={() =>
                setFilters({
                  ...filters,
                  filterByNumericValues: filters.filterByNumericValues.filter(
                    (filter) => filter.column !== f.column
                  ),
                })
              }
            />
          </div>
        );
      })}
    </div>
  );
};
