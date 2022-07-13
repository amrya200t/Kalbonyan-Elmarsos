// Coding Challenge #1

const arrData1 = [17, 21, 23];
const arrData2 = [12, 5, -5, 0, 4];

const printForecast = arr => {
  let forecast = ``;
  arr.forEach((item, i) => {
    forecast += `... ${item}ºC in ${i + 1} days`;
  });
  return (forecast += `...`);
};
console.log(printForecast(arrData1));
console.log(printForecast(arrData2));
