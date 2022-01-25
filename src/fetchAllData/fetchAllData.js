import getMovie from "../getMovie/getMovie";

const sumInp = document.querySelectorAll(".sum-inputs");
const sumBtn = document.querySelector(".sum-btn");
const combinedMinutes = document.querySelector(".combined-minutes");

const getInputValues = () => {
  sumBtn.addEventListener("click", () => {
    const arr = [];
    sumInp.forEach(async (i) => {
      const min = await getMovie(i.value, false);
      arr.push(min), 1000;
    });
    setTimeout(() => {
      const sum = arr.reduce((acc, curr) => acc + curr);
      combinedMinutes.textContent += sum;
    }, 1000);
  });
};

export default getInputValues;
