import template from "../template/template";

function getMinutes(data) {
  const min = +data.split(" ")[0];
  return min;
}

const getMovie = async (movie, isTemplate = true) => {
  const res = await fetch(`http://www.omdbapi.com/?t=${movie}&apikey=3bc9dcc7`);
  const movie_1 = await res.json();
  if (isTemplate) {
    console.log("getMovie", movie_1);
    return template(movie_1);
  } else {
    return getMinutes(movie_1.Runtime);
  }
};

export default getMovie;
