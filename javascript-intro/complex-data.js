// ## Challenge: Find sets of data in the movie set

// ```js

// console.log(movies.filter((movie) => movie.released >= 2000));

// ```
class Movie {
  constructor(name, director, release, imdbRating, runtime) {
    this.name = name;
    this.director = director;
    this.release = release;
    this.imdbRating = imdbRating;
    this.runtime = runtime;
  }
}

const movies = [
  new Movie("Kill Bill", "Tarantino", 2003, 8.2, "1h51m"),
  new Movie("The incredibles", "Brad Bird", 2004, 8, "1h30m"),
  new Movie("The Princess Bride", "Rob Reiner", 1987, 8, "1h38m"),
];

// // Get all movies that were released after 2000
console.log(movies.filter((movie) => movie.release >= 2000));
// // Get all movies director begins with T
console.log(movies.filter((movie) => movie.director[0].toLowerCase() === "t"));

// // Get the first movie in the list where the name contains "the"
console.log(movies.find((movie) => movie.name.toLowerCase().includes("the")));

// // Get the total run time of all movies in seconds
function runtimeInSeconds(runtimeString) {
  const sliced = runtimeString.slice(0, runtimeString.length - 1);
  const [hourString, minString] = sliced.split("h");
  const hours = parseInt(hourString);
  const minutes = parseInt(minString);
  return hours * 60 * 60 + minutes * 60;
}
console.log(
  movies
    .map((movie) => runtimeInSeconds(movie.runtime))
    .reduce((acc, seconds) => acc + seconds, 0)
);

// // get the average imdb rating of all movies in the set
const sum = movies.reduce((acc, movie) => acc + movie.imdbRating, 0);
console.log(sum / movies.length);

// // Get the newest movie
console.log(
  movies.reduce((acc, movie) => {
    if (movie.release < acc.release) {
      acc = movie;
    }
    return acc;
  })
);

// // Get movies that have a greater run time that 90mins
console.log(
  movies.filter((movie) => {
    const totalMinutes = runtimeInSeconds(movie.runtime) / 60;
    return totalMinutes > 90;
  })
);
