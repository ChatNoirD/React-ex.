// Ex 2: Need to reverse a string called in function

function reverseString(str) {

  str = str.split('').reverse().join('');

  return str;
}

function reverseString(str) {

  let arr = str.split('');
  let newArr = [];

  for (let i = 0; i <= arr.length; i++) {
    while (newArr.length <= arr.length) {
        let temp = arr.pop();
        newArr.push(temp);
    } break;
  }
  str = newArr.join('');

  return str;
}

// We can solve this task two ways: first is shorter - make an array from the string, use 'reverse' method for the array and make it a string again; second way is to create
// array from a string again, make new array and then with 'for' and 'while' cicles we must take items from first array and push it to the second one. Then make a string from the second array.