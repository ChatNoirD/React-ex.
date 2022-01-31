// Ex 4: In this task we need to find the longest word in a string and count letters in it.
function findLongestWordLength(str) {

  return Math.max(...str.split(" ").map(word => word.length));

}
findLongestWordLength("The quick brown fox jumped over the lazy dog");

// To solve the task we have to make an array from the string using split, then make another array with map method
// which returns us number of letters in words and finally find the longest one with Math max method

function findLongestWordLength(str) {

  return str.split(' ').reduce(function(longest, word) {
      return Math.max(longest, word.length);
    }, 0);

}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// Another way to solve the task is using reduce method to the array made from the string with Math.max method again wich counts letters of words starting from 
// value we gave to reduce after {}