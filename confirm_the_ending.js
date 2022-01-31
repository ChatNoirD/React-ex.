// Ex 6: In this task we have to check if the string ends with letters in second argument of a function

function confirmEnding(str, target) {

  let strShort = str.slice(str.length - target.length);

  return strShort === target;

}

function confirmEnding(str, target) {

  return str.slice(str.length - target.length) === target;

}

function confirmEnding(str, target) {

  return str.slice(-target.length) === target;

}

confirmEnding("He has to give me a new name", "name");

// To solve the task we need to use slice method to "slice" the string to a length of its ending and then we check by "===" if it equals to the ending in arguments
// 2nd and 3rd functions are the same as first but shorter. 