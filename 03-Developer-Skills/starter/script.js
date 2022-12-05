// // Remember, we're gonna use strict mode in all scripts now!
// 'use strict';

// const x = 23;

// const calAge = birthYear => 2037 - birthYear;

// TODO

const measureKelvin = () => {
  const measurement = {
    type: 'temperature',
    unit: 'celsius',
    value: 10,
  };
  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);
  console.table(measurement);
  // Problem is, prompt fun returns a string, so we just get concatenation
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);

//////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
const printForecast = arr => {
  let printStr = '... ';
  for (let i = 0; i < arr.length; i++) {
    let counter = i + 1;
    let degrees = arr[i];
    let degreesStr = `${degrees}ºC in ${counter} days ... `;
    printStr += degreesStr;
  }
  console.log(printStr);
};

printForecast([12, 5, -5, 0, 4]);
