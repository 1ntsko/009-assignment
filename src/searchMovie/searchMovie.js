import getMovie from "../getMovie/getMovie";

const movieInput = document.querySelector(".show-movie-input");
const showMovieBtn = document.querySelector(".show-movie-btn");
const ul = document.querySelector("#cards");

const searchMovie = () => {
  let movie = "";
  showMovieBtn.addEventListener("click", () => {
    movie = movieInput.value;
    getMovie(movie);
    movieInput.value = "";
    ul.removeChild(ul.childNodes[1]);
  });
};

export default searchMovie;
