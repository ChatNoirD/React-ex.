// Ex 2: Need to reverse a string called in function
function reverseString(str) {

    str = str.split('').reverse().join('');

    return str;
  }
  
  console.log(reverseString("hello"));
  // To solve this task we create an array from this string by split method, reverse it and create a string again by join method