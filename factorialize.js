// Ex 3: Need find a factorial of num

function factorialize(num) {
  
  return (num !== 0) ? num = num * factorialize(num - 1) : 1;

}

factorialize(20);

// To solve this task we use a recursive function that calls itself till value o variable 'num' equals 1. Also we have to speciy conditions under which the value of zero returns 1.