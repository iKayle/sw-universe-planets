import axios from "axios";

export async function getAllPlanets() {
  const response = await axios.get(
    "https://swapi-trybe.herokuapp.com/api/planets"
  );
  return response;
}
