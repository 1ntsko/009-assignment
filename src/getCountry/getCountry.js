const getCountry = (country) => {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((res) => res.json())
    .then((data) => {
      //   const curr = data.Country;
      //   const mydata = data.map((i) => i);
      console.log(data[0].Object.keys(data)[0]);
    });

  //   return country.Country.split(" ").map((i) => i);
};
export default getCountry;
