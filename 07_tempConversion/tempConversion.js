const convertToCelsius = function(fahrenheit) {
  let floatCelsius = (fahrenheit -32) * (5/9)
  let result = Math.round(floatCelsius*10)/10
  return result
};

const convertToFahrenheit = function(celsius) {
  let floatFahrenheit = (celsius*(9/5)) + 32
  let result = Math.round(floatFahrenheit*10)/10
  return result
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
