// Ex 2: In this task we have to write a function that finds out an elent that exist only in one array from both included in arguments
function diffArray(arr1, arr2) {

    return arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item));

}
  
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// To solve the task we have to use a concat method to merge arrays. After that we use filter method with callback which returns an item
// that is not included array 1 OR array 2. Method "includes" checks that.