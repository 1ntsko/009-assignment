import getMovie from "../getMovie/getMovie";

const sumInp = document.querySelectorAll(".sum-inputs");
const sumBtn = document.querySelector(".sum-btn");
const combinedMinutes = document.querySelector(".combined-minutes");

const getInputValues = () => {
  sumBtn.addEventListener("click", () => {
    const minutesArray = [];
    sumInp.forEach(async (i) => {
      const min = await getMovie(i.value, false);
      minutesArray.push(min);
    });
    setTimeout(() => {
      const sum = minutesArray.reduce((acc, curr) => acc + curr);
      combinedMinutes.textContent += sum;
    }, 1000);
  });
};

export default getInputValues;
