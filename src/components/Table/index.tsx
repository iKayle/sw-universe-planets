import { TableRow } from "./TableRow";

export const Table = () => {
  return (
    <div className="flex flex-col py-2 overflow-x-auto sm:px-6 lg:px-8 ">
      <div className="overflow-x-auto border-b rounded-lg border-slate-800">
        <table className="divide-y divide-slate-800 ">
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
              <th className="px-6 py-3 ">Films</th>
              <th className="px-6 py-3">Created</th>
              <th className="px-6 py-3">Edited</th>
              <th className="px-6 py-3">URL</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black bg-black/50 backdrop-blur-sm">
            <TableRow
              name={""}
              rotation_period={""}
              orbital_period={""}
              diameter={""}
              climate={""}
              gravity={""}
              terrain={""}
              surface_water={""}
              population={""}
              films={""}
              created={""}
              edited={""}
              url={""}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};
