// Ex 3: Need find a factorial of num

function factorialize(num) {

  (num != 1) ? num * factorial(num - 1) : 1;

  return num;
}

console.log(factorialize(5));