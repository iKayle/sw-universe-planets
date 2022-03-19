import axios from 'axios';

export async function getAllPlanets(page = 1) {
  const response = await axios.get(`https://swapi-trybe.herokuapp.com/api/planets?page=${page}`);
  return response;
}
