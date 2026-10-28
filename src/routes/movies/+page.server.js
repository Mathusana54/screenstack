import db from "#lib/db.js";

export async function load() {
  let movies = await db.getMovies();
  console.log("Anzahl Filme:", movies.length);
  return {
    movies: movies
  };
}