// Ex 5: In this task we have to write a function which returns the largest number from arrays which are parts of one array

function largestOfFour(arr) {

  let numbers = [];

  for (let i = 0; i < arr.length; i++) {

    let largestNumber = arr[i][0];

    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    numbers[i] = largestNumber;
  }

  return numbers;

}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// To solve the task we have to use "for" cycle to iterate the outer array and then create variable for inner arrays in it and compare them to each other to find the largest one