import { useContext } from "react";
import PlanetsContext from "../../context/PlanetsContext";
import { TableRow } from "./TableRow";
import { PlanetsType } from "../../typings";
import formatDate from "../../utils/formatDate";
import { COMPARISON } from "../../constants/optionsNumericValues";

export const Table = () => {
  const {
    data,
    filters: { filterByName, filterByNumericValues, order },
  } = useContext(PlanetsContext);

  const listDataByName = data?.results?.filter((d: { name: string }) =>
    d.name.toLowerCase().includes(filterByName.name.toLowerCase())
  );

  const listDataFiltered = listDataByName?.filter(
    (d: { [x: string]: string }) => {
      if (filterByNumericValues.length > 0) {
        return filterByNumericValues.every((f) => {
          if (f.comparison === COMPARISON.GREATER_THAN) {
            return Number(d[f.column]) > Number(f.value);
          } else if (f.comparison === COMPARISON.LESS_THAN) {
            return Number(d[f.column]) < Number(f.value);
          } else if (f.comparison === COMPARISON.EQUAL) {
            return Number(d[f.column]) === Number(f.value);
          }
        });
      }
      return true;
    }
  );

  const sortListFilters = listDataFiltered?.sort(
    (a: { [x: string]: any }, b: { [x: string]: any }) => {
      if (order.sort === "ASC") {
        return Number(a[order.column]) > Number(b[order.column]) ? 1 : -1;
      } else {
        return Number(a[order.column]) > Number(b[order.column]) ? -1 : 1;
      }
    }
  );

  return (
    <div className="flex flex-col py-2 overflow-x-auto sm:px-6 lg:px-8">
      <div className="overflow-x-auto border-b rounded-lg border-slate-800">
        <table className="w-full divide-y divide-slate-800">
          <thead className="text-white bg-slate-800/70">
            <tr className="text-xs font-semibold text-white uppercase">
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Rotation period</th>
              <th className="px-6 py-3">Orbital period</th>
              <th className="px-6 py-3">Diameter</th>
              <th className="px-6 py-3">Climate</th>
              <th className="px-6 py-3">Gravity</th>
              <th className="px-6 py-3">Terrain</th>
              <th className="px-6 py-3">Surface Water</th>
              <th className="px-6 py-3">Population</th>
              <th className="px-6 py-3">Films</th>
              <th className="px-6 py-3">Created</th>
              <th className="px-6 py-3">Edited</th>
              <th className="px-6 py-3">URL</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black bg-black/50 backdrop-blur-sm">
            {sortListFilters?.map((d: PlanetsType) => {
              return (
                <TableRow
                  key={d.name}
                  name={d.name}
                  rotation_period={d.rotation_period}
                  orbital_period={d.orbital_period}
                  diameter={d.diameter}
                  climate={d.climate}
                  gravity={d.gravity}
                  terrain={d.terrain}
                  surface_water={d.surface_water}
                  population={d.population}
                  films={d.films}
                  created={formatDate(d.created)}
                  edited={formatDate(d.edited)}
                  url={d.url}
                />
              );
            })}
          </tbody>
        </table>
        {listDataFiltered?.length <= 0 && (
          <div className="flex flex-col items-center py-2 text-2xl text-center text-white bg-none">
            <p>No results found</p>
          </div>
        )}
      </div>
    </div>
  );
};
