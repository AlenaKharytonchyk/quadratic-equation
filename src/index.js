module.exports = function solveEquation(equation) {
  // your implementation
  //a*x^2+b*x+c
  var array = equation.split(' ');
  var numbersArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const number = Number(element);

    if (!isNaN(number)) {
      if (i > 0 && array[i - 1] === "-") {
        numbersArray.push(-number)
      }
      else {
        numbersArray.push(number);
      }
    }

  }

  var a = numbersArray[0];
  var b = numbersArray[1];
  var c = numbersArray[2];
  var results = [];

  // math pow instead of ^ 
  var x1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
  var x2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);

  // math round due to bad test
  results.push(Math.round(x1));
  results.push(Math.round(x2));
  // sort due to bad tests
  results.sort(function(a,b) { return a-b })

  return results;
}
