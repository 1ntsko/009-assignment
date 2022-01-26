const getCountry = (country) => {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((res) => res.json())
    .then(
      (data) =>
        `<img src="${data.flag}"><span>${
          Object.keys(data.currnecies)[0]
        }</span>`
    );

  // console.log(country.Country.split(" ").map((i) => i));
};
export default getCountry;
