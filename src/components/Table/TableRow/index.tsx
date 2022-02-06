import { PlanetsType } from "../../../typings";

export const TableRow = ({
  name,
  rotation_period,
  orbital_period,
  diameter,
  climate,
  gravity,
  terrain,
  surface_water,
  population,
  films,
  created,
  edited,
  url,
}: PlanetsType) => {
  return (
    <tr className="text-sm font-semibold text-gray-200">
      <td className="p-2 ">{name}</td>
      <td className="p-2 ">{rotation_period}</td>
      <td className="p-2 ">{orbital_period}</td>
      <td className="p-2 ">{diameter}</td>
      <td className="p-2 ">{climate}</td>
      <td className="p-2 ">{gravity}</td>
      <td className="p-2 ">{terrain}</td>
      <td className="p-2 ">{surface_water}</td>
      <td className="p-2 ">{population}</td>
      <td className="p-2 ">{films}</td>
      <td className="p-2 ">{created}</td>
      <td className="p-2 ">{edited}</td>
      <td className="p-2 ">{url}</td>
    </tr>
  );
};
