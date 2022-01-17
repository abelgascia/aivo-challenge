import movies from "./movies.json";

const getMovies = async () => {
  return JSON.parse(JSON.stringify(movies));
};

export default getMovies;
