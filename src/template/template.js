// import getCountry from "../getCountry/getCountry";

const template = (movie) => {
  const today = new Date();
  const yearsAgo = today.getFullYear() - movie.Year;
  const ul = document.querySelector("#cards");

  const actors = movie.Actors.split(" ");
  const names = [];
  for (let i = 0; i < actors.length; i++) {
    if (i % 2 === 0) {
      names.push(actors[i]);
    }
  }

  //   getCountry(movie.Country.currencies);

  const html = `
      <li class="card" id="card_1">
        <div class="card__content">
          <div>
            <h2>${movie.Title}</h2>
            <span>
              <strong>Released:</strong>
              <i class="italic">Movie released ${yearsAgo} years ago, in ${
    movie.Released
  }</i>
            </span>
            <span><strong>Actors:</strong> <i class="italic">${names.map(
              (name) => name
            )}</i></span>
            <span><strong>Countries:</strong></span>
          </div>
            <figure>
              <img
              src="${movie.Poster}"
              alt="Image description"
              />
            </figure>
      </li>
    `;

  ul.insertAdjacentHTML("afterbegin", html);
};

export default template;
